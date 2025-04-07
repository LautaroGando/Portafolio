import React from "react";
import { ISvgIconProps } from "./types";
import { useSkillStore } from "@/store/SkillStore/useSkillStore";
import { motion } from "motion/react";

export const SvgIcon: React.FC<ISvgIconProps> = ({
  initialColor,
  svgPath,
  skillName,
}: ISvgIconProps) => {
  const { detailSkill } = useSkillStore();

  const isSelected = detailSkill?.skill === skillName;
  const fillColor = isSelected
    ? detailSkill.color || initialColor
    : initialColor;

  return (
    <motion.svg
      width="90"
      height="90"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ fill: fillColor }}
      transition={{ duration: 0.5, ease: "backInOut" }}
    >
      <path id="Vector" d={svgPath} />
    </motion.svg>
  );
};

export default SvgIcon;
