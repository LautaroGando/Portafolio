import { Hoverable } from "@/components/GeneralComponents/Hoverable/Hoverable";
import { socialData } from "@/data/HeaderComponents/SectionData/section-data";
import { ISectionData } from "@/data/HeaderComponents/SectionData/types";
import { useSectionStore } from "@/store/SectionStore/useSectionStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export const SectionSocialNetwork: React.FC = () => {
  const { sectionSocial } = useSectionStore();

  return (
    <div
      className={clsx(
        "items-center gap-1 flex transition-all h-[80px] duration-700 overflow-hidden xl:flex-col-reverse xl:fixed xl:bottom-3 xl:left-3 xl:h-full xl:gap-5",
        sectionSocial
          ? "w-[190px] opacity-100"
          : "w-0 opacity-0 sm:w-[270px] sm:opacity-100 lg:w-[390px] xl:w-[100px]"
      )}
    >
      <div className="w-[80px] h-[5px] bg-extra sm:w-[150px] lg:w-[250px] xl:w-[5px] xl:h-[200px]"></div>
      {socialData.map((item: Omit<ISectionData, "id">, i: number) => (
        <Hoverable key={i}>
          {(isHovered) => (
            <Link
              href={item.href}
              target="_blank"
              className="flex flex-col items-center relative"
            >
              <FontAwesomeIcon
                className="text-secondary text-[30px] sm:text-[40px]"
                icon={item.icon}
                width={40}
                height={40}
              />
              <h4
                className={clsx(
                  "font-extra text-xs text-secondary absolute -bottom-5 transition-all duration-300",
                  isHovered ? "opacity-100" : "opacity-0"
                )}
              >
                {item.label}
              </h4>
            </Link>
          )}
        </Hoverable>
      ))}
    </div>
  );
};

export default SectionSocialNetwork;
