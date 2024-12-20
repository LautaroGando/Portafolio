import { ILinkSkills } from "@/interfaces/ILinkSkills";
import { linksSkills } from "@/utils/linksSkills";
import React from "react";
import { motion } from "motion/react";
import { useMenuSkills } from "@/context/MenuSkillsContext/MenuSkillsContext";

export const MenuLinksSkills: React.FC = () => {
  const { handleFilterSkills, activeCategory } = useMenuSkills();

  return (
    <div className="flex flex-col gap-2 items-start lg:flex-row">
      <h3 className="text-textAndIcons text-xl font-light p-5 w-full text-center border-b-[1px] border-extras hidden sm:block lg:hidden">
        Habilidades
      </h3>
      {linksSkills.map((linkSkill: ILinkSkills) => (
        <motion.button
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.3, ease: "linear" }}
          exit={{ opacity: 0 }}
          whileTap={{ scale: 0.95 }}
          className={`w-44 text-left ${
            activeCategory === linkSkill.category
              ? "text-extras"
              : "text-textAndIcons"
          } lg:text-center`}
          key={linkSkill.id}
          onClick={() => handleFilterSkills(linkSkill.category)}
        >
          {linkSkill.name}
        </motion.button>
      ))}
    </div>
  );
};

export default MenuLinksSkills;
