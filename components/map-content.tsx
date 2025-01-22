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
    <motion.div
      initial={{ x: -120, opacity: 0 }}
      animate={{ x: -20, opacity: 1 }}
      exit={{ x: -120, opacity: 0 }}
      transition={{
        duration: 0.3,
        type: 'keyframes',
      }}
      className='bg-black/50 absolute inset-0 backdrop-blur flex items-center justify-center rounded-r-2xl p-4'
    >
      <Image
        unoptimized
        src='/office-map.svg'
        alt='office map'
        width={560}
        height={560}
        className='w-[90%] translate-x-2'
      />

      {/* <div className='relative w-[560px] aspect-[888/650]'>
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
      </div> */}

      <button
        onClick={() => setState(null)}
        className='bg-white/15 absolute top-3 right-3 p-2 rounded-lg'
      >
        <Image unoptimized src='/X.svg' alt='X icon' width={20} height={20} />
      </button>
    </motion.div>
  );
};
