"use client";
import React from "react";
import Menu from "./Menu/Menu";
import DownloadCvButton from "./DownloadCvButton/DownloadCvButton";
import { motion } from "motion/react";

export const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ scale: 0, opacity: 0 }}
      transition={{duration: 0.5}}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full h-[80px] fixed top-0 z-50 flex justify-between items-center px-3"
    >
      <Menu />
      <DownloadCvButton />
    </motion.header>
  );
};

export default Header;
