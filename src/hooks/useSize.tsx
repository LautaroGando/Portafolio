"use client";

import { useEffect, useState } from "react";

export const useSize = () => {
  const [size, setSize] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { size };
};
