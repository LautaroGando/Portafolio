"use client";
import Lamp from "@/components/ui/GeneralComponents/Lamp/Lamp";
import { useLightStore } from "@/store/LightStore/useLightStore";
import clsx from "clsx";
import React from "react";

export const Light: React.FC = () => {
  const { light } = useLightStore();

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 bg-black/95 w-full h-[100dvh] backdrop-grayscale-100 transition-all duration-700",
        light ? "opacity-0 -z-100" : "opacity-100 z-100"
      )}
    >
      <Lamp />
    </div>
  );
};

export default Light;
