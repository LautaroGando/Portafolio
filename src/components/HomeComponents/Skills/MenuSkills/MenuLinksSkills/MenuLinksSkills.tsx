import { ILinkSkills } from "@/interfaces/ILinkSkills";
import { linksSkills } from "@/utils/linksSkills";
import React from "react";
import { motion } from "motion/react";
import { useMenuSkills } from "@/context/MenuSkillsContext/MenuSkillsContext";

export const MenuLinksSkills: React.FC = () => {
  const { handleFilterSkills } = useMenuSkills();

  return (
    <div className="flex flex-col gap-2 items-start">
      {linksSkills.map((linkSkill: ILinkSkills) => (
        <motion.button
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.3, ease: "linear" }}
          exit={{ opacity: 0 }}
          whileTap={{ scale: 0.95 }}
          className="text-textAndIcons w-44 text-left"
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
