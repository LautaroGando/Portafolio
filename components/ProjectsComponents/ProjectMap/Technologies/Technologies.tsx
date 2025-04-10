import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useProjectStore } from "@/store/ProjectStore/useProjectStore";
import { projectsData } from "@/data/ProjectsComponents/ProjectsData/projects-data";
import {
  IProjectsData,
  IProjectTechnologyData,
} from "@/data/ProjectsComponents/ProjectsData/types";
import SvgIcon from "@/components/ui/GeneralComponents/SvgIcon/SvgIcon";
import { Hoverable } from "@/components/GeneralComponents/Hoverable/Hoverable";
import clsx from "clsx";

export const Technologies: React.FC = () => {
  const { idProject } = useProjectStore();

  const text = "Tecnologías aplicadas:".split("");

  const filterTechnologies = projectsData.map((project: IProjectsData) =>
    project.technologies.filter(
      (technology: IProjectTechnologyData) => technology.id === idProject
    )
  );

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
      <motion.h4
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-secondary font-extra tracking-[3px] text-sm"
      >
        {text.map((letter: string, i: number) => (
          <motion.span
            key={i}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: i / 6 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h4>
      <AnimatePresence mode="wait">
        <motion.div
          key={idProject}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex gap-7 flex-wrap"
        >
          {filterTechnologies.map((technology: IProjectTechnologyData[]) =>
            technology.map((tech: IProjectTechnologyData, i: number) => (
              <Hoverable key={i}>
                {(isHovered) => (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + i / 6 }}
                    className="text-secondary cursor-pointer relative"
                  >
                    <SvgIcon
                      initialColor="#FAFAFA"
                      size="w-[30px] h-[30px]"
                      skillName={tech.technology}
                      svgPath={tech.icon}
                    />
                    <h6
                      className={clsx(
                        "font-extra text-xs transition-all duration-500 absolute top-8",
                        isHovered ? "opacity-100" : "opacity-0"
                      )}
                    >
                      {tech.technology}
                    </h6>
                  </motion.div>
                )}
              </Hoverable>
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Technologies;
