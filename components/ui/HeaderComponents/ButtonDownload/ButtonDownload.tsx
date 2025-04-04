import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const ButtonDownload: React.FC = () => {
  return (
    <Link
      href={"/archives/cv.pdf"}
      download={"Mi CV"}
      target="_blank"
      className="w-[160px] h-[40px] bg-secondary border-2 text-primary flex items-center justify-center gap-2 px-3 py-2 font-extra text-sm rounded-[5px] cursor-pointer transition-all duration-700 hover:bg-primary hover:text-secondary hover:rotate-x-360"
    >
      <FontAwesomeIcon icon={faCloudArrowDown} width={25} height={20} />
      Descargar CV
    </Link>
  );
};

export default ButtonDownload;
