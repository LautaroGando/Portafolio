"use client";
import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import { motion } from "motion/react";
import ButtonCategory from "@/components/GeneralComponents/ButtonCategory/ButtonCategory";
import MoreAboutUs from "../MoreAboutUs/MoreAboutUs";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import ScrollAnimation from "@/components/GeneralComponents/ScrollAnimation/ScrollAnimation";
import Contact from "../Contact/Contact";

export const HomeView: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`max-w-[400px] min-h-[calc(100dvh-100px)]`}
      >
        <ScrollAnimation id="">
          <div className="px-1 pb-5 min-h-[calc(100dvh-100px)] flex flex-col justify-between gap-10">
            <AboutUs />
            <ButtonCategory
              category="MÁS SOBRE MÍ"
              link="#about-us"
              linkRef="about-us"
            />
          </div>
        </ScrollAnimation>
      </motion.div>
      <div className="custom-bg-gradient w-[100vw] flex justify-center">
        <div className="max-w-[400px]">
          <ScrollAnimation id="about-us">
            <MoreAboutUs />
          </ScrollAnimation>
          <ScrollAnimation id="skills">
            <Skills />
          </ScrollAnimation>
          <ScrollAnimation id="projects">
            <Projects />
          </ScrollAnimation>
          <ScrollAnimation id="contact">
            <Contact />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
