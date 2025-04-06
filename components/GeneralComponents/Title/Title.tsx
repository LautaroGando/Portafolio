"use client";
import React from "react";
import { ITitleProps } from "./types";
import { motion } from "motion/react";
import clsx from "clsx";

export const Title: React.FC<ITitleProps> = ({
  level,
  title,
  left,
}: ITitleProps) => {
  return (
    <motion.div
      initial={{ y: "100%", scale: 0.6, opacity: 0 }}
      animate={{ y: "0%", scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={clsx("flex gap-3", left && "w-full")}
    >
      <h4 className="text-xs text-secondary font-extra">Nvl. {level}</h4>
      <h1 className="text-5xl text-secondary font-title sm:text-6xl lg:text-8xl">
        {title}
      </h1>
    </motion.div>
  );
};

export default Title;
