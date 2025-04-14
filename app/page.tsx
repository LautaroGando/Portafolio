"use client";
import Presentation from "@/components/PresentationComponents/Presentation";
import { useViewStore } from "@/store/ViewStore/useViewStore";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import AboutUs from "@/components/AboutUsComponents/AboutUs";
import Skills from "@/components/SkillsComponents/Skills";
import Projects from "@/components/ProjectsComponents/Projects";
import Contact from "@/components/ContactComponents/Contact";

const Home: React.FC = () => {
  const { view } = useViewStore();

  return (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="wait">
        {view.view === "presentation" ? (
          <motion.div
            key={view.view}
            exit={{ x: -500, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Presentation />
          </motion.div>
        ) : view.view === "about-us" ? (
          <motion.div
            key={view.view}
            exit={{ x: -500, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <AboutUs />
          </motion.div>
        ) : view.view === "skills" ? (
          <motion.div
            key={view.view}
            exit={{ x: -500, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Skills />
          </motion.div>
        ) : view.view === "projects" ? (
          <motion.div
            key={view.view}
            exit={{ x: -500, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Projects />
          </motion.div>
        ) : (
          view.view === "contact" && (
            <motion.div
              key={view.view}
              exit={{ x: -500, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
