import { nameData } from "@/data/SkillsComponents/NameData/name-data";
import { useSkillStore } from "@/store/SkillStore/useSkillStore";
import type { TSkill } from "@/types/TSkills";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";
import { AnimatePresence, motion } from "motion/react";

export const NameSection: React.FC = () => {
  const { skill, changeSkill } = useSkillStore();

  const currentIndex = nameData.findIndex(
    (section) => skill.skill === section.skill
  );

  const prev = nameData[currentIndex - 1];
  const next = nameData[currentIndex + 1];

  return (
    <div className="flex items-center w-[80vw] justify-between overflow-hidden lg:max-w-[700px]">
      <button
        onClick={() => {
          if (currentIndex <= 0) return null;
          changeSkill({ id: prev.id, skill: prev.skill } as TSkill);
        }}
        type="button"
        className="cursor-pointer transition-all duration-300 active:scale-80"
      >
        <FontAwesomeIcon
          className={clsx(
            "text-[25px]",
            currentIndex <= 0 ? "text-secondary/50" : "text-secondary"
          )}
          icon={faArrowLeft}
          width={25}
        />
      </button>
      <AnimatePresence mode="wait">
        <motion.h2
          key={skill.skill}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-secondary sm:text-xl md:text-2xl"
        >
          {skill.skill}
        </motion.h2>
      </AnimatePresence>
      <button
        onClick={() => {
          if (currentIndex >= nameData.length - 1) return null;
          changeSkill({ id: next.id, skill: next.skill } as TSkill);
        }}
        type="button"
        className="cursor-pointer transition-all duration-300 active:scale-80"
      >
        <FontAwesomeIcon
          className={clsx(
            "text-[25px]",
            currentIndex >= nameData.length - 1
              ? "text-secondary/50"
              : "text-secondary"
          )}
          icon={faArrowRight}
          width={25}
        />
      </button>
    </div>
  );
};

export default NameSection;
