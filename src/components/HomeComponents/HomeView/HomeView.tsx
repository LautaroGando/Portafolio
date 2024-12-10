"use client";
import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import { motion } from "motion/react";
import ButtonCategory from "@/components/GeneralComponents/ButtonCategory/ButtonCategory";

export const HomeView: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`w-full h-[calc(100vh-100px)]`}
    >
      <div className="px-1 pb-5 h-full flex flex-col justify-between">
        <AboutUs />
        <ButtonCategory category="MÁS SOBRE MÍ" />
      </div>
    </motion.div>
  );
};

export default HomeView;
