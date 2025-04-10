import { create } from "zustand";
import { IProjectStoreProps } from "./types";

export const useProjectStore = create<IProjectStoreProps>((set) => ({
  idProject: 1,
  handlePrev: () => set((state) => ({ idProject: state.idProject - 1 })),
  handleNext: () => set((state) => ({ idProject: state.idProject + 1 })),
}));
