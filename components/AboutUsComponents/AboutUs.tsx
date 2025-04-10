import React from "react";
import Title from "../GeneralComponents/Title/Title";
import Texts from "./Texts/Texts";

export const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <Title level={2} title="Sobre mí" />
      <Texts />
    </div>
  );
};

export default AboutUs;
