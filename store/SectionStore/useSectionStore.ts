import { create } from "zustand";
import { ISectionStoreProps } from "./types";
import type { TSection } from "@/types/TSection";

export const useSectionStore = create<ISectionStoreProps>((set) => ({
  sectionSocial: false,
  sectionCV: false,
  handleToggleSection: (section: TSection) =>
    set((state) =>
      section === "social"
        ? { sectionSocial: !state.sectionSocial, sectionCV: false }
        : { sectionCV: !state.sectionCV, sectionSocial: false }
    ),
  handleCloseSection: () =>
    set(() => ({ sectionSocial: false, sectionCV: false })),
}));
