import React from "react";
import NameSection from "./NameSection/NameSection";
import { motion } from "motion/react";
import { skillData } from "@/data/SkillsComponents/SkillData/skill-data";
import { ISkill } from "@/interfaces/ISkill";
import { useSkillStore } from "@/store/SkillStore/useSkillStore";
import clsx from "clsx";
import DetailSkill from "./DetailSkill/DetailSkill";
import SvgIcon from "@/components/ui/GeneralComponents/SvgIcon/SvgIcon";

export const SectionSkill: React.FC = () => {
  const { skill, viewDetailSkill } = useSkillStore();

  const filterSkills = skillData.filter((sk: ISkill) => skill.skill === sk.id);

  return (
    <div className="flex flex-col items-center gap-10">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "backInOut" }}
      >
        <NameSection />
      </motion.div>
      <div
        className={clsx(
          "grid grid-cols-1 place-items-center place-content-start gap-5 w-full max-w-[450px] min-h-[437px] max-h-[437px] py-3 md:max-w-[700px] lg:min-h-[300px] lg:max-h-[300px]",
          skill.id === 2 ? "overflow-auto scrollInvisible" : "overflow-hidden",
          filterSkills.length > 1 && "sm:grid-cols-2",
          filterSkills.length > 3 && "md:grid-cols-4"
        )}
      >
        {filterSkills.map((sk: ISkill, i: number) => (
          <motion.button
            key={sk.skill}
            onClick={() => viewDetailSkill(sk.skill)}
            initial={{ y: "100%", opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: i / 4, type: "spring" }}
            className="cursor-pointer"
          >
            <SvgIcon
              size="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px]"
              initialColor="#FAFAFA"
              svgPath={sk.img}
              skillName={sk.skill}
            />
          </motion.button>
        ))}
      </div>
      <DetailSkill />
    </div>
  );
};

export default SectionSkill;
