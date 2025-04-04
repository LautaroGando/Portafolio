import { create } from "zustand";
import { IViewStoreProps } from "./types";
import { TView } from "@/types/TView";

export const useViewStore = create<IViewStoreProps>((set) => ({
  view: {
    level: 1,
    view: "presentation",
  },
  changeView: (newView: TView) =>
    set((state) => {
      if (state.view.view === newView.view) return {};
      return { view: newView };
    }),
}));
