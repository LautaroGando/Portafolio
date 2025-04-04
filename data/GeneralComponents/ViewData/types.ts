import type { TView } from "@/types/TView";

export interface IViewData {
  id: TView["view"];
  label: string;
  level: TView["level"];
}
