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
        "items-center gap-1 flex transition-all h-full duration-700 overflow-hidden",
        sectionSocial ? "w-[190px] opacity-100" : "w-0 opacity-0"
      )}
    >
      <div className="w-[80px] h-[5px] bg-extra"></div>
      {socialData.map((item: Omit<ISectionData, "id">, i: number) => (
        <Link
          key={i}
          href={item.href}
          target="_blank"
          className="flex flex-col items-center relative group"
        >
          <FontAwesomeIcon
            className="text-secondary text-[30px]"
            icon={item.icon}
            width={30}
            height={30}
          />
          <h4 className="font-extra text-xs text-secondary absolute -bottom-5 opacity-0 transition-all duration-300 group-hover:opacity-100">{item.label}</h4>
        </Link>
      ))}
    </div>
  );
};

export default SectionSocialNetwork;
