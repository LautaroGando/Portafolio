import React from "react";
import { ISectionProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Section: React.FC<ISectionProps> = ({
  icon,
  text,
}: ISectionProps) => {
  return (
    <div className="text-textAndIcons text-xl font-bold flex gap-2 z-10 items-center">
      {icon && <FontAwesomeIcon icon={icon} />}
      <h2>{text}</h2>
    </div>
  );
};

export default Section;
