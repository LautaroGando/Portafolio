import { projectsData } from "@/data/ProjectsComponents/ProjectsData/projects-data";
import { IProjectsData } from "@/data/ProjectsComponents/ProjectsData/types";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pagination from "./Pagination/Pagination";
import { useProjectStore } from "@/store/ProjectStore/useProjectStore";
import { motion } from "motion/react";
import { Hoverable } from "@/components/GeneralComponents/Hoverable/Hoverable";
import clsx from "clsx";

export const ProjectMap: React.FC = () => {
  const { idProject } = useProjectStore();

  const filterProject = projectsData.filter(
    (project: IProjectsData) => project.id === idProject
  );

  return (
    <div className="w-[295px] h-[550px] flex flex-col gap-5 justify-between sm:w-[400px] sm:h-[600px] lg:w-[950px] lg:h-[450px]">
      {filterProject.map((project: IProjectsData) => (
        <div
          key={project.id}
          className="text-secondary flex flex-col gap-3 lg:flex-row"
        >
          <div className="flex flex-col gap-3 lg:w-1/2 lg:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-between items-center"
            >
              <h2 className="text-xl relative pl-3 after:content-[''] after:absolute after:left-0 after:top-0 after:w-[2px] after:h-full after:bg-secondary">
                {project.title}
              </h2>
              <Link href={project.urlGithub} target="_blank">
                <FontAwesomeIcon
                  className="text-[30px] w-[30px] transition-all duration-300 active:scale-90 sm:text-[35px] sm:w-[35px]"
                  icon={faGithubSquare}
                  width={35}
                />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full h-[140px] relative cursor-pointer sm:h-[200px] lg:h-[280px]"
            >
              <Image
                className="w-full h-full"
                src={project.img}
                alt={`Visualización de ${project.title}`}
                priority
                width={500}
                height={500}
              />
              <Hoverable>
                {(isHovered) => (
                  <a
                    href={project.href}
                    target="_blank"
                    className={clsx(
                      "w-full h-full absolute top-0 left-0 bg-black/80 flex flex-col gap-3 items-center justify-center transition-all duration-300",
                      isHovered ? "opacity-0" : "opacity-100"
                    )}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      className="flex flex-col items-center gap-3"
                    >
                      <div className="relative w-[43px] h-[43px] rounded-xl">
                        <motion.div
                          animate={{ y: [-5, 0, -5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-full h-full absolute top-0 left-0"
                        >
                          <FontAwesomeIcon
                            className="w-[43px] text-[43px]"
                            icon={faHandPointer}
                            width={43}
                          />
                        </motion.div>
                      </div>
                      <p className="font-extra text-xs sm:text-sm">
                        Hacé click para visitar la web!
                      </p>
                    </motion.div>
                  </a>
                )}
              </Hoverable>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xs sm:text-sm lg:w-1/2 lg:text-base"
          >
            {project.description}
          </motion.p>
        </div>
      ))}
      <Pagination />
    </div>
  );
};

export default ProjectMap;
