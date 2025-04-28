"use client";

import { motion } from "motion/react";

const Page = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-[url('/story-1.jpg')] bg-cover bg-center">
        <motion.section className="flex flex-col text-5xl text-center text-white leading-snug">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            브라질 이파네마 농장의 언덕에는
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            지난 10년간 같은 자리에 줄곧
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            카페베네 팻말이 꽂혀있었습니다
          </motion.span>
        </motion.section>
      </div>
    </>
  );
};

export default Page;
