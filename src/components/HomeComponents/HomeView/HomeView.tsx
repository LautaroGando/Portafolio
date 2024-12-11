"use client";
import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import { motion } from "motion/react";
import ButtonCategory from "@/components/GeneralComponents/ButtonCategory/ButtonCategory";
import MoreAboutUs from "../MoreAboutUs/MoreAboutUs";

export const HomeView: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`w-full min-h-[calc(100dvh-100px)]`}
    >
      <div className="px-1 pb-5 min-h-[calc(100dvh-100px)] flex flex-col justify-between gap-10">
        <AboutUs />
        <ButtonCategory category="MÁS SOBRE MÍ" />
      </div>
      <MoreAboutUs />
    </motion.div>
  );
};

export default HomeView;
