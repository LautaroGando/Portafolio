import { create } from "zustand";
import { ILightStoreProps } from "./types";

export const useLightStore = create<ILightStoreProps>((set) => ({
  light: false,
  handleOnLight: () => set(() => ({ light: true })),
}));
