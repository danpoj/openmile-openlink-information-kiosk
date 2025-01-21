'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';

export const MapContent = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<'map' | 'alarm' | null>>;
}) => {
  return (
    <div className='bg-black/50 absolute inset-0 backdrop-blur flex items-center justify-center'>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className='relative w-[560px] aspect-[888/650]'
      >
        <Image
          unoptimized
          src='/office-map.svg'
          alt='office map'
          width={560}
          height={560}
          className='absolute w-full h-full'
        />
        <Image
          unoptimized
          src='/current-location.svg'
          alt='current location'
          width={72}
          height={72}
          className='absolute top-[133px] left-[135px]'
        />
        <Image
          unoptimized
          src='/entrance-location.svg'
          alt='entrance location'
          width={45}
          height={45}
          className='absolute top-[122px] left-[407px]'
        />
      </motion.div>

      <button
        onClick={() => setState(null)}
        className='bg-white/15 absolute top-3 right-3 p-2 rounded-lg'
      >
        <Image unoptimized src='/X.svg' alt='X icon' width={20} height={20} />
      </button>
    </div>
  );
};
