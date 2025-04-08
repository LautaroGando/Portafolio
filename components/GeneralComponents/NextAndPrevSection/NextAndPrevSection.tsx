"use client";
import { IViewData } from "@/data/GeneralComponents/ViewData/types";
import { viewData } from "@/data/GeneralComponents/ViewData/view-data";
import { useViewStore } from "@/store/ViewStore/useViewStore";
import type { TView } from "@/types/TView";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { motion, useInView } from "motion/react";
import React, { useRef, useState } from "react";

export const NextAndPrevSection: React.FC = () => {
  const { view, changeView } = useViewStore();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const currentIndex = viewData.findIndex(
    (section: IViewData) => section.id === view.view
  );
  const prev = viewData[currentIndex - 1];
  const next = viewData[currentIndex + 1];

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 left-0 w-full h-[100vh] bg-primary/90 opacity-0 transition-all duration-300 -z-10",
          isHovered && "opacity-100 z-40"
        )}
      ></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView && { opacity: 1, scale: 1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        transition={{ duration: 0.3 }}
        className={clsx(
          "flex items-center gap-2 absolute bottom-3 right-3 z-50 sm:w-full sm:justify-center lg:w-max lg:justify-end",
          isHovered &&
            "fixed bottom-6 right-6 sm:right-3 lg:right-6 lg:bottom-[24px]"
        )}
      >
        \
        <div
          className={clsx(
            "fixed bottom-0 left-0 w-full h-0 bg-secondary transition-all duration-300 [clip-path:ellipse(100%_90%_at_50%_100%)] lg:[clip-path:ellipse(20%_21%_at_100%_100%)]",
            isHovered && "h-[200px] lg:h-full"
          )}
        ></div>
        {prev && (
          <button
            onClick={() => {
              changeView({ view: prev.id, level: prev.level } as TView);
              setIsHovered(false);
            }}
            className={clsx(
              "font-extra flex items-center gap-2 transition-all duration-300 cursor-pointer z-50 active:scale-80",
              isHovered ? "text-primary" : "text-secondary"
            )}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Nvl. {prev.level}
          </button>
        )}
        {prev && next && (
          <div
            className={clsx(
              "w-[10px] h-[2px] z-50",
              isHovered ? "bg-primary" : "bg-secondary"
            )}
          ></div>
        )}
        {next && (
          <button
            onClick={() => {
              changeView({ view: next.id, level: next.level } as TView);
              setIsHovered(false);
            }}
            className={clsx(
              "font-extra flex items-center gap-2 transition-all duration-300 z-50 cursor-pointer active:scale-80",
              isHovered ? "text-primary" : "text-secondary"
            )}
          >
            Nvl. {next.level}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        )}
      </motion.div>
    </>
  );
};

export default NextAndPrevSection;
