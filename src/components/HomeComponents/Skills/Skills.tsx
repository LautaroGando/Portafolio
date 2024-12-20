import Section from "@/components/GeneralComponents/Section/Section";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import TechnologySkills from "./TechnologySkills/TechnologySkills";
import ButtonCategory from "@/components/GeneralComponents/ButtonCategory/ButtonCategory";

export const Skills: React.FC = () => {
  return (
    <div className="w-full min-h-[calc(100dvh-80px)] pt-5 px-2 flex flex-col pb-5 relative overflow-hidden gap-5">
      <Section icon={faCode} text="Mis habilidades" />

      <TechnologySkills />
      <ButtonCategory
        category="PROYECTOS"
        link="#projects"
        linkRef="projects"
      />
    </div>
  );
};

export default Skills;
