'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export const Openmile = () => {
  return (
    <motion.div
      className='absolute w-[66%] max-w-[38rem] -mt-52'
      initial={{ transform: 'translateX(1200px)' }}
      animate={{ transform: 'translateX(0px)' }}
      transition={{
        type: 'tween',
        duration: 1.8,
        ease: 'easeInOut',
      }}
      exit={{ transform: 'translateX(-1200px)' }}
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
