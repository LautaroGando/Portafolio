import { projectsData } from "@/data/ProjectsComponents/ProjectsData/projects-data";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "motion/react";
import { useProjectStore } from "@/store/ProjectStore/useProjectStore";

export const Pagination: React.FC = () => {
  const { idProject, handlePrev, handleNext } = useProjectStore();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="text-secondary flex items-center gap-3 justify-end sm:justify-center"
    >
      <button
        className="cursor-pointer flex justify-center items-center border border-transparent rounded-full w-[25px] h-[25px] transition-all duration-300 active:border-secondary disabled:text-secondary/50 sm:w-[30px] sm:h-[30px]"
        onClick={handlePrev}
        type="button"
        disabled={idProject === 1}
      >
        <FontAwesomeIcon
          className="text-[12px] w-[12px] sm:text-[15px] sm:w-[15px]"
          icon={faChevronLeft}
          width={12}
        />
      </button>
      <span className="font-extra sm:text-lg">
        {idProject} - {projectsData.length}
      </span>
      <button
        className="cursor-pointer flex justify-center items-center border border-transparent rounded-full w-[25px] h-[25px] transition-all duration-300 active:border-secondary disabled:text-secondary/50 sm:w-[30px] sm:h-[30px]"
        onClick={handleNext}
        type="button"
        disabled={idProject === projectsData.length}
      >
        <FontAwesomeIcon
          className="text-[12px] w-[12px] sm:text-[15px] sm:w-[15px]"
          icon={faChevronRight}
          width={15}
        />
      </button>
    </motion.div>
  );
};

export default Pagination;
