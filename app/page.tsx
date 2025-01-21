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
    <main className='h-full bg-[#2659F7] mx-auto flex flex-col items-center justify-center relative'>
      <header className='self-center absolute top-0 z-10 flex flex-col gap-3'>
        <Buttons state={state} setState={setState} />
        {state === 'alarm' && <AlarmContent setState={setState} />}
      </header>

      <AnimatePresence>
        {currentLogo === 'openmile' && <Openmile />}
        {currentLogo === 'openlink' && <Openlink />}
      </AnimatePresence>

      <AnimatePresence>
        <Arrow key={currentLogo} />
      </AnimatePresence>

      {state === 'map' && <MapContent setState={setState} />}
    </main>
  );
}
