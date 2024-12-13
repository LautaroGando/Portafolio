"use client";
import React from "react";
import { IButtonCategoryProps } from "./types";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const ButtonCategory: React.FC<IButtonCategoryProps> = ({
  category,
  link,
  linkRef,
}: IButtonCategoryProps) => {
  return (
    <motion.a
      className="flex flex-col w-[300px] mx-auto text-textAndIcons items-center font-light text-xl z-10 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={link}
      id={linkRef}
    >
      {category}
      <motion.span
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </motion.span>
    </motion.a>
  );
};

export default ButtonCategory;
