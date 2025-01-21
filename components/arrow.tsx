'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export const Arrow = () => {
  return (
    <motion.div
      className='absolute bottom-0'
      initial={{ transform: 'translateX(-2600px)' }}
      animate={{ transform: 'translateX(0px)' }}
      transition={{
        type: 'keyframes',
        duration: 2,
      }}
      exit={{ transform: 'translateX(2600px)' }}
    >
      <Image
        unoptimized
        src='/arrow.svg'
        alt='arrow icon'
        width={400}
        height={80}
        className='w-full'
      />
    </motion.div>
  );
};
