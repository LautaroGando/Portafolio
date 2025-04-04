import { Hoverable } from "@/components/GeneralComponents/Hoverable/Hoverable";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export const ButtonDownload: React.FC = () => {
  return (
    <Hoverable>
      {(isHovered) => (
        <Link
          href={"/archives/cv.pdf"}
          download={"Mi CV"}
          target="_blank"
          className={clsx(
            "w-[160px] h-[40px] border-2 flex items-center justify-center gap-2 px-3 py-2 font-extra text-sm rounded-[5px] cursor-pointer transition-all duration-700",
            isHovered
              ? "bg-primary text-secondary rotate-x-360"
              : "bg-secondary text-primary"
          )}
        >
          <FontAwesomeIcon icon={faCloudArrowDown} width={25} height={20} />
          Descargar CV
        </Link>
      )}
    </Hoverable>
  );
};

export default ButtonDownload;
