"use client";
import React, { useEffect, useState } from "react";
import Menu from "./Menu/Menu";
import DownloadCvButton from "./DownloadCvButton/DownloadCvButton";
import { motion } from "motion/react";

export const Header: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`w-full h-[80px] fixed top-0 z-50 flex justify-between items-center px-3 ${
        hasScrolled ? "bg-backgroundPrimary" : "bg-transparent"
      }`}
    >
      <Menu />
      <DownloadCvButton />
    </motion.header>
  );
};

export default Header;
