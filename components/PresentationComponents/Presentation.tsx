import React from "react";
import Photo from "./Photo/Photo";
import Title from "../GeneralComponents/Title/Title";
import Info from "./Info/Info";

export const Presentation: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-5 relative lg:flex-row lg:items-center lg:py-20 lg:gap-10">
      <Photo />
      <div className="flex flex-col items-center gap-5">
        <Title level={1} title="Presentación" left />
        <Info />
      </div>
    </div>
  );
};

export default Presentation;
