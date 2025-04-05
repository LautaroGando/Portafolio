"use client";
import { useViewStore } from "@/store/ViewStore/useViewStore";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { viewData } from "@/data/GeneralComponents/ViewData/view-data";
import { IViewData } from "@/data/GeneralComponents/ViewData/types";
import type { TView } from "@/types/TView";

export const View: React.FC = () => {
  const { view, changeView } = useViewStore();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 self-start mt-20 py-3 h-[270px] overflow-hidden sm:flex-row sm:h-[150px] sm:w-full sm:justify-center lg:h-full lg:mt-0"
    >
      {viewData.map((section: IViewData, i: number) => (
        <motion.button
          initial={{ y: "200%", opacity: 0, scale: 0 }}
          animate={isInView && { y: "0%", opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i / 5 }}
          onMouseEnter={() => setIsHovered(i)}
          onMouseLeave={() => setIsHovered(null)}
          onTouchStart={() => setIsHovered(i)}
          onTouchEnd={() => setIsHovered(null)}
          key={section.label}
          onClick={() =>
            changeView({ view: section.id, level: section.level } as TView)
          }
          className="flex flex-col items-center gap-2 text-xs font-extra text-secondary cursor-pointer sm:text-sm"
        >
          <div
            className={clsx(
              "rounded-full border-[5px] transition-all duration-200",
              view.view === section.id
                ? "bg-primary w-[20px] h-[20px] border-secondary sm:w-[25px] sm:h-[25px]"
                : "bg-secondary w-[10px] h-[10px] sm:w-[15px] sm:h-[15px]",
              view.view !== section.id &&
                isHovered === i &&
                "animate-spin border-t-primary scale-[1.5]"
            )}
          ></div>
          {section.label}
        </motion.button>
      ))}
      ;
    </div>
  );
};

export default View;
