"use client";
import React from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const ButtonTop: React.FC = () => {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed flex justify-center items-center cursor-pointer w-10 h-10 rounded-full bg-extras bottom-2 right-2 text-textAndIcons text-lg"
      href="#top"
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </motion.a>
  );
};

export default ButtonTop;
