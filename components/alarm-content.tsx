'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';

export const AlarmContent = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<'map' | 'alarm' | null>>;
}) => {
  return (
    <motion.div
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='flex items-center justify-center flex-col w-full gap-2'
    >
      <p className='flex flex-col items-center justify-center font-semibold bg-white opacity-90 rounded-lg py-4 shadow-xl w-full'>
        <span>알림 기능이 준비 중입니다.</span>
        <span>만나실 분에게 연락 주시기 바랍니다.</span>
      </p>
      <button
        onClick={() => setState(null)}
        className='bg-white/15 p-2 rounded-lg self-end'
      >
        <Image unoptimized src='/X.svg' alt='X icon' width={20} height={20} />
      </button>
    </motion.div>
  );
};
