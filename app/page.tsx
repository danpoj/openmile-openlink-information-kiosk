'use client';

import { AlarmContent } from '@/components/alarm-content';
import { Arrow } from '@/components/arrow';
import { Buttons } from '@/components/buttons';
import { MapContent } from '@/components/map-content';
import { Openlink } from '@/components/openlink';
import { Openmile } from '@/components/openmile';
import { AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Page() {
  const [state, setState] = useState<'map' | 'alarm' | null>(null);
  const [currentLogo, setCurrentLogo] = useState<'openmile' | 'openlink'>(
    'openmile'
  );

  useEffect(() => {
    const subscription = setInterval(() => {
      setCurrentLogo((cur) => (cur === 'openlink' ? 'openmile' : 'openlink'));
    }, 6000);

    return () => clearInterval(subscription);
  }, []);

  return (
    <main className='h-full mx-auto flex flex-col items-center justify-center relative bg-[#f8f8f8]'>
      <div className='h-full bg-[#2659F7] relative flex flex-col items-center justify-center w-full max-w-[52rem] overflow-hidden'>
        <header className='self-center absolute top-0 z-10 flex flex-col gap-3'>
          <Buttons state={state} setState={setState} />
          <AnimatePresence>
            {state === 'alarm' && (
              <AlarmContent setState={setState} key={state} />
            )}
          </AnimatePresence>
        </header>

        <AnimatePresence>
          {currentLogo === 'openmile' && <Openmile key='openmile' />}
          {currentLogo === 'openlink' && <Openlink key='openlink' />}
        </AnimatePresence>

        <AnimatePresence>
          <Arrow key={currentLogo} />
        </AnimatePresence>

        <AnimatePresence>
          {state === 'map' && <MapContent setState={setState} key={state} />}
        </AnimatePresence>
      </div>
    </main>
  );
}
