"use client";
import { useState } from "react";
import { IHoverableProps } from "./types";

export const Hoverable = ({ children }: IHoverableProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {children(isHovered)}
    </div>
  );
};
