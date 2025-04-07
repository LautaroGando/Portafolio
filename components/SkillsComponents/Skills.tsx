import React from "react";
import Title from "../GeneralComponents/Title/Title";
import SectionSkill from "./SectionSkill/SectionSkill";

export const Skills: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Title level={3} title="Habilidades" />
      <SectionSkill />
    </div>
  );
};

export default Skills;
