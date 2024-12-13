import React from "react";
import MenuSkills from "../MenuSkills/MenuSkills";
import { ISkill } from "@/interfaces/ISkill";
import Image from "next/image";
import { useMenuSkills } from "@/context/MenuSkillsContext/MenuSkillsContext";
import { skills } from "@/utils/skills";
import { motion } from "motion/react";

export const TechnologySkills: React.FC = () => {
  const { filterSkills } = useMenuSkills();

  return (
    <div className="w-full h-[500px] bg-backgroundSecondary border-2 border-backgroundSecondary rounded-tl-md rounded-bl-md flex relative">
      <MenuSkills />
      <div className="w-full h-full flex flex-col items-center gap-5 py-5 overflow-y-auto scrollY">
        {filterSkills.length === 0
          ? skills.map((skill: ISkill) => (
              <div
                className="w-[180px] py-5 bg-backgroundPrimary text-primaryColor flex flex-col items-center justify-center gap-3 rounded-lg font-bold text-lg"
                key={skill.id}
              >
                <Image
                  className="text-black"
                  src={skill.logo}
                  alt="Logo de la tecnologia"
                  width={95}
                  height={95}
                />
                <h4>{skill.name}</h4>
              </div>
            ))
          : filterSkills.map((skill: ISkill) => (
              <motion.div
                animate={{
                  scale: [0.1, 1.05, 1],
                  rotateY: [0, 360],
                }}
                transition={{ duration: 2, ease: "backInOut" }}
                className="w-[180px] py-5 bg-backgroundPrimary text-primaryColor flex flex-col items-center justify-center gap-3 rounded-lg font-bold text-lg"
                key={skill.id}
              >
                <Image
                  className="text-black"
                  src={skill.logo}
                  alt="Logo de la tecnologia"
                  width={95}
                  height={95}
                />
                <h4>{skill.name}</h4>
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default TechnologySkills;
