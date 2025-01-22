'use client';

import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';

export const Buttons = ({
  state,
  setState,
}: {
  state: 'map' | 'alarm' | null;
  setState: Dispatch<SetStateAction<'map' | 'alarm' | null>>;
}) => {
  return (
    <div className='flex gap-0.5'>
      <button
        onClick={() => {
          if (state === 'map') setState(null);
          else setState('map');
        }}
        className={`flex items-center gap-2 px-4 py-3 ${
          state === 'map' ? 'bg-white/40' : 'bg-white/15'
        }`}
      >
        <Image
          unoptimized
          src='/magnifying-glass.svg'
          alt='magnifying glass icon'
          width={20}
          height={20}
        />
        <span className='text-white text-lg'>사무실 안내도</span>
      </button>

      <button
        onClick={() => {
          if (state === 'alarm') setState(null);
          else setState('alarm');
        }}
        className={`flex items-center gap-2 bg-white/15 px-4 py-3 ${
          state === 'alarm' ? 'bg-white/40' : 'bg-white/15'
        }`}
      >
        <Image
          unoptimized
          src='/hand-pointing.svg'
          alt='hand pointing icon'
          width={20}
          height={20}
        />
        <span className='text-white text-lg'>도착 알리기</span>
      </button>
    </div>
  );
};
