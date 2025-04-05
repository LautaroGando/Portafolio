import ButtonDownload from "@/components/ui/HeaderComponents/ButtonDownload/ButtonDownload";
import { useSectionStore } from "@/store/SectionStore/useSectionStore";
import clsx from "clsx";
import React from "react";

export const SectionDownloadCV: React.FC = () => {
  const { sectionCV } = useSectionStore();

  return (
    <div
      className={clsx(
        "transition-all duration-700 overflow-hidden",
        sectionCV
          ? "w-[160px] opacity-100"
          : "w-0 opacity-0 sm:w-[160px] sm:opacity-100"
      )}
    >
      <ButtonDownload />
    </div>
  );
};

export default SectionDownloadCV;
