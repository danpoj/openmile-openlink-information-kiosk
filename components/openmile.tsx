'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export const Openmile = () => {
  return (
    <motion.div
      className='absolute w-[66%] max-w-[48rem]'
      key='openmile'
      initial={{ transform: 'translateX(2600px)' }}
      animate={{ transform: 'translateX(0px)' }}
      transition={{
        type: 'keyframes',
        duration: 2,
      }}
      exit={{ transform: 'translateX(-2600px)' }}
    >
      <Image
        unoptimized
        src='/openmile.svg'
        alt='openmile icon'
        width={400}
        height={80}
        className='w-full'
      />
    </motion.div>
  );
};
