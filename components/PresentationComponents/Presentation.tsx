import React from "react";
import Photo from "./Photo/Photo";
import Title from "../GeneralComponents/Title/Title";
import Info from "./Info/Info";

export const Presentation: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-5 relative">
      <Photo />
      <Title level={1} title="Presentación" />
      <Info />
    </div>
  );
};

export default Presentation;
