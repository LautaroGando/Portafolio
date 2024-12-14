import { IProject } from "@/interfaces/IProject";
import { projects } from "@/utils/projects";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProjectsList: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      {projects.map((project: IProject) => (
        <div
          className="text-textAndIcons flex flex-col items-center w-full"
          key={project.id}
        >
          <div className="w-full h-full relative cursor-pointer group">
            <div className="absolute w-full h-full bg-[#000000CF] top-0 left-0 opacity-0 group-hover:opacity-100 transition-all"></div>
            <div className="absolute w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all">
              <FontAwesomeIcon
                icon={faEye}
                className="text-white text-4xl"
              />
            </div>
            <Link href={project.siteweb} target="_blank">
              <Image
                className="w-full h-[200px] object-cover"
                src={project.image}
                alt="Miniatura"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="bg-backgroundSecondary p-3 w-full flex flex-col gap-3 rounded-bl-md rounded-br-md">
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p className="text-sm font-light">{project.description}</p>
              <div className="flex text-secondaryColor gap-1 flex-wrap text-sm">
                {project.technologies.map((technologie, i) => (
                  <h3 key={technologie}>
                    {technologie}{" "}
                    {project.technologies.length - 1 === i ? null : "-"}
                  </h3>
                ))}
              </div>
            </div>
            <div className="self-end flex gap-3 text-3xl">
              <Link href={project.siteweb} target="_blank">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
              <Link href={project.github} target="_blank">
                <FontAwesomeIcon icon={faSquareGithub} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
