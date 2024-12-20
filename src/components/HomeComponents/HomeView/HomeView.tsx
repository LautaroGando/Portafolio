"use client";
import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import { motion } from "motion/react";
import ButtonCategory from "@/components/GeneralComponents/ButtonCategory/ButtonCategory";
import MoreAboutUs from "../MoreAboutUs/MoreAboutUs";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

export const HomeView: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`max-w-[400px] min-h-[calc(100dvh-100px)] sm:max-w-[640px] lg:min-w-[1000px] xl:min-w-[1180px]`}
      >
        <div className="px-1 pb-5 min-h-[calc(100dvh-100px)] flex flex-col justify-between scroll-animation relative lg:justify-center">
          <AboutUs />
          <ButtonCategory
            category="MÁS SOBRE MÍ"
            link="#about-us"
            linkRef="about-us"
          />
        </div>
      </motion.div>
      <div className="custom-bg-contain absolute w-full top-full">
        <div className="w-full flex justify-center">
          <div className="max-w-[400px] sm:max-w-[640px] lg:max-w-[1000px] xl:max-w-[1180px]">
            <div className="scroll-animation">
              <MoreAboutUs />
            </div>
            <div className="scroll-animation">
              <Skills />
            </div>
            <div className="scroll-animation">
              <Projects />
            </div>
            <div className="scroll-animation">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
