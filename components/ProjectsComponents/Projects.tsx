import React from "react";
import Title from "../GeneralComponents/Title/Title";
import ProjectMap from "./ProjectMap/ProjectMap";

export const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <Title level={4} title="Proyectos" />
      <ProjectMap />
    </div>
  );
};

export default Projects;
