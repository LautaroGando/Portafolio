"use client";
import { infoData } from "@/data/PresentationComponents/InfoData/info-data";
import React from "react";
import { motion } from "motion/react";

export const Info: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 max-w-[650px]">
      <motion.h2
        initial={{ y: "200%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-secondary text-2xl font-bold sm:text-4xl"
      >
        {infoData.title}
      </motion.h2>
      <div className="flex flex-col gap-3">
        <motion.h3
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-secondary text-xl sm:text-2xl"
        >
          {infoData.subtitle}
        </motion.h3>
        <motion.p
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-secondary font-light md:text-xl"
        >
          {infoData.description}
        </motion.p>
      </div>
    </div>
  );
};

export default Info;
