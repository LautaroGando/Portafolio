import React from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

export const DownloadCvButton: React.FC = () => {
  return (
    <motion.a className="text-textAndIcons text-sm flex gap-2 items-center bg-extras p-2 h-10" href="/archives/cv.docx" download={'Mi Curriculum'}>
      <FontAwesomeIcon icon={faCloudArrowDown} />
      Descargar CV
    </motion.a>
  );
};

export default DownloadCvButton;
