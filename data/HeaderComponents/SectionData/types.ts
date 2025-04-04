import { TSection } from "@/types/TSection";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ISectionData {
  id: TSection;
  icon: IconDefinition;
  label: string;
  href: string;
}
