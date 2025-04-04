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
          "fixed top-0 left-0 w-full h-[100dvh] bg-primary/90 opacity-0 transition-all duration-300 -z-10",
          isHovered && "opacity-100 z-40"
        )}
      ></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView && { opacity: 1, scale: 1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-2 group absolute bottom-3 right-3 z-50 hover:fixed hover:bottom-6 hover:right-6"
      >
        \
        <div className="fixed bottom-0 left-0 w-full h-0 bg-secondary z-10 transition-all duration-300 [clip-path:ellipse(100%_90%_at_50%_100%)] group-hover:h-[400px]"></div>
        {prev && (
          <button
            onClick={() =>
              changeView({ view: prev.id, level: prev.level } as TView)
            }
            className="font-extra text-secondary flex items-center gap-2 transition-all duration-300 cursor-pointer z-50 active:scale-80 group-hover:text-primary"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Nvl. {prev.level}
          </button>
        )}
        {prev && next && (
          <div className="w-[10px] h-[2px] bg-secondary z-50 group-hover:bg-primary"></div>
        )}
        {next && (
          <button
            onClick={() =>
              changeView({ view: next.id, level: next.level } as TView)
            }
            className="font-extra text-secondary flex items-center gap-2 transition-all duration-300 z-50 cursor-pointer active:scale-80 group-hover:text-primary"
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
