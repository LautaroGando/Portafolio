"use client";

import { useMenuSkills } from "@/context/MenuSkillsContext/MenuSkillsContext";
import React from "react";
import MenuLinksSkills from "./MenuLinksSkills/MenuLinksSkills";
import { AnimatePresence } from "motion/react";

export const MenuSkills: React.FC = () => {
  const { menuSkills, handleToggleMenuSkills } = useMenuSkills();

  return (
    <div
      className={`h-full z-10 bg-backgroundPrimary flex flex-col gap-5 transition-all duration-500 pl-[9px] pt-[3px] overflow-hidden absolute ${
        !menuSkills ? "w-[50px]" : "w-48"
      }`}
    >
      <button
        onClick={handleToggleMenuSkills}
        className={`w-8 h-8 relative transition-all duration-1000 flex justify-center items-center z-10 
                after:content-[''] after:rounded-md after:duration-500 after:bg-extras after:absolute after:w-8 after:h-[2px]
                after:transition-all after:origin-center before:content-[''] before:absolute 
                before:w-8 before:bg-extras before:rounded-md before:duration-500 before:h-[2px] before:transition-all before:origin-center 
                ${
                  menuSkills
                    ? "after:-rotate-45 after:translate-y-0 before:rotate-45 before:translate-y-0"
                    : "after:translate-y-2 before:-translate-y-2"
                }`}
      >
        <div
          className={`w-8 h-[2px] bg-extras rounded-md transition-all duration-300 
                ${menuSkills ? "origin-center opacity-0 bg-transparent" : ""}`}
        ></div>
      </button>
      <AnimatePresence>{menuSkills && <MenuLinksSkills />}</AnimatePresence>
    </div>
  );
};

export default MenuSkills;
