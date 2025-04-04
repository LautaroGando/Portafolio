import { ReactNode } from "react";

export interface IHoverableProps {
  children: (hovered: boolean) => ReactNode;
}
