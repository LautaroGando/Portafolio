import React from "react";
import { ISvgIconProps } from "./types";
import { useSkillStore } from "@/store/SkillStore/useSkillStore";
import { motion } from "motion/react";

export const SvgIcon: React.FC<ISvgIconProps> = ({
  initialColor,
  svgPath,
  skillName,
  size,
}: ISvgIconProps) => {
  const { detailSkill } = useSkillStore();

  const isSelected = detailSkill?.skill === skillName;
  const fillColor = isSelected
    ? detailSkill.color || initialColor
    : initialColor;

  return (
    <motion.svg
      viewBox="0 0 50 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      animate={{ fill: fillColor }}
      transition={{ duration: 0.5, ease: "backInOut" }}
      className={`w-[${size[0]}px] h-[${size[0]}px] sm:w-[${size[1]}px] sm:h-[${size[1]}px]`}
    >
      <path d={svgPath} />
    </motion.svg>
  );
};

export default SvgIcon;
