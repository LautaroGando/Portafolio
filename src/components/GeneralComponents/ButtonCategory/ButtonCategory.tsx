"use client";
import React from "react";
import { IButtonCategoryProps } from "./types";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useSize } from "@/hooks/useSize";

export const ButtonCategory: React.FC<IButtonCategoryProps> = ({
  category,
  link,
  linkRef,
}: IButtonCategoryProps) => {
  const { size } = useSize();

  return (
    <>
      <div className="w-full h-[100px] flex justify-center">
        <motion.a
          className="flex flex-col text-textAndIcons items-center font-light text-xl z-10 cursor-pointer absolute bottom-5 lg:border-t-[1px] lg:border-textAndIcons lg:w-full lg
          pt-5"
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
            {size && size < 1024 && <FontAwesomeIcon icon={faChevronDown} />}
          </motion.span>
        </motion.a>
      </div>
    </>
  );
};

export default ButtonCategory;
