'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export const Arrow = () => {
  return (
    <motion.div
      className='absolute bottom-0 -left-[30%] right-0'
      initial={{ transform: 'translateX(-1200px)' }}
      animate={{ transform: 'translateX(0px)' }}
      transition={{
        type: 'tween',
        duration: 1.8,
        ease: 'easeInOut',
      }}
      exit={{ transform: 'translateX(1200px)' }}
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
