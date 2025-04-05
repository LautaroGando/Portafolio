"use client";
import { useEffect, useState } from "react";

export const useSize = () => {
  const [size, setSize] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const handleSize = () => {
      setSize(window.innerWidth);
      setIsReady(true);
    };
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, [size]);

  return { size, isReady };
};
