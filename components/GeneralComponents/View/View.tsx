"use client";
import { useViewStore } from "@/store/ViewStore/useViewStore";
import clsx from "clsx";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { viewData } from "@/data/GeneralComponents/ViewData/view-data";
import { IViewData } from "@/data/GeneralComponents/ViewData/types";
import type { TView } from "@/types/TView";

export const View: React.FC = () => {
  const { view, changeView } = useViewStore();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 self-start mt-20 py-3 h-[270px] overflow-hidden"
    >
      {viewData.map((section: IViewData, i: number) => (
        <motion.button
          initial={{ y: "200%", opacity: 0, scale: 0 }}
          animate={isInView && { y: "0%", opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i / 5 }}
          key={section.label}
          onClick={() =>
            changeView({ view: section.id, level: section.level } as TView)
          }
          className="flex flex-col items-center gap-2 text-xs font-extra group text-secondary cursor-pointer"
        >
          <div
            className={clsx(
              "rounded-full border-[5px] transition-all duration-200",
              view.view === section.id
                ? "bg-primary w-[20px] h-[20px] border-secondary"
                : "bg-secondary w-[10px] h-[10px]",
              view.view !== section.id &&
                "group-hover:animate-spin group-hover:border-t-primary group-hover:scale-[1.5]"
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
