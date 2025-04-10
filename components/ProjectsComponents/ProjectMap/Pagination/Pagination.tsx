import { projectsData } from "@/data/ProjectsComponents/ProjectsData/projects-data";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "motion/react";
import { useProjectStore } from "@/store/ProjectStore/useProjectStore";
import CountUp from "react-countup";

export const Pagination: React.FC = () => {
  const { idProject, handlePrev, handleNext } = useProjectStore();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="text-secondary flex items-center gap-3 justify-end z-50 sm:justify-center"
    >
      <button
        className="btn-pagination"
        onClick={handlePrev}
        type="button"
        disabled={idProject === 1}
      >
        <FontAwesomeIcon
          className="icon-pagination"
          icon={faChevronLeft}
          width={12}
        />
      </button>
      <span className="font-extra text-xl sm:text-2xl">
        {idProject} -{" "}
        <CountUp end={projectsData.length} duration={1} delay={1} />
      </span>
      <button
        className="btn-pagination"
        onClick={handleNext}
        type="button"
        disabled={idProject === projectsData.length}
      >
        <FontAwesomeIcon
          className="icon-pagination"
          icon={faChevronRight}
          width={15}
        />
      </button>
    </motion.div>
  );
};

export default Pagination;
