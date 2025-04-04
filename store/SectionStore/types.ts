import type{ TSection } from "@/types/TSection";

export interface ISectionStoreProps {
  sectionSocial: boolean;
  sectionCV: boolean;
  handleToggleSection: (section: TSection) => void;
  handleCloseSection: () => void;
}
