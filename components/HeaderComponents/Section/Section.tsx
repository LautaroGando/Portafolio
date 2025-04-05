"use client";
import React, { useEffect } from "react";
import { sectionData } from "@/data/HeaderComponents/SectionData/section-data";
import { ISectionData } from "@/data/HeaderComponents/SectionData/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionDownloadCV from "../SectionDownloadCV/SectionDownloadCV";
import SectionSocialNetwork from "../SectionSocialNetwork/SectionSocialNetwork";
import { useSectionStore } from "@/store/SectionStore/useSectionStore";
import clsx from "clsx";
import { motion } from "motion/react";
import { useSize } from "@/hooks/useSize";

export const Section: React.FC = () => {
  const { sectionCV, sectionSocial, handleToggleSection, handleCloseSection } =
    useSectionStore();
  const { size, isReady } = useSize();

  useEffect(() => {
    if (size > 639) handleCloseSection();
  }, [size]);

  if (!isReady) return null;

  return (
    <div className="flex justify-between w-full h-full items-center overflow-hidden relative">
      {sectionData.map((section: Omit<ISectionData, "href">, i: number) => {
        const iconElement = (
          <div className="flex items-center gap-3">
            {section.id === "social" && <SectionSocialNetwork />}
            <div className="sm:hidden">
              <FontAwesomeIcon
                className={clsx(
                  "text-secondary transition-all duration-300",
                  sectionCV && "rotate-180",
                  sectionSocial && "-rotate-180"
                )}
                icon={section.icon}
                width={15}
                height={17}
              />
            </div>
            {section.id === "cv" && <SectionDownloadCV />}
          </div>
        );

        const labelElement = (
          <h3 className="font-extra text-sm text-secondary min-w-[110px] sm:hidden">
            {section.label}
          </h3>
        );

        return (
          <div key={i}>
            {i % 2 !== 0 ? (
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={
                  sectionSocial
                    ? { x: "100%", opacity: 0, zIndex: 0 }
                    : { x: "0%", opacity: 1, zIndex: 50 }
                }
                transition={{ duration: 0.3, delay: 0.4 }}
                onClick={() => size < 640 && handleToggleSection("cv")}
                className={clsx(
                  "items-center gap-3 flex cursor-pointer transition-all duration-700 absolute top-0 right-0 h-full",
                  sectionSocial
                    ? "opacity-0 translate-x-[100%]"
                    : "opacity-100 z-50"
                )}
              >
                {labelElement}
                {iconElement}
              </motion.div>
            ) : (
              <motion.div
                initial={
                  size < 1280
                    ? { x: "-100%", opacity: 0 }
                    : { y: "0%", opacity: 0 }
                }
                animate={
                  size < 1280
                    ? { x: "0%", opacity: 1 }
                    : { y: "0%", opacity: 1 }
                }
                transition={{ duration: 0.3 }}
                onClick={() => size < 640 && handleToggleSection("social")}
                className={clsx(
                  "items-center gap-3 flex cursor-pointer transition-all duration-700 absolute top-0 left-0 h-full",
                  sectionCV
                    ? "opacity-0 -translate-x-[100%]"
                    : "opacity-100 z-50"
                )}
              >
                {iconElement}
                {labelElement}
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Section;
