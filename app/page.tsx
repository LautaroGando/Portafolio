"use client";
import Presentation from "@/components/PresentationComponents/Presentation";
import { useViewStore } from "@/store/ViewStore/useViewStore";
import React from "react";
import { AnimatePresence, motion } from "motion/react";

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
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Home;
