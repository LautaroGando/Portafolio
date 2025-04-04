import type { TView } from "@/types/TView";

export interface IViewStoreProps {
  view: TView;
  changeView: (view: TView) => void;
}
