"use client";

import { useEffect, useState } from "react";

export const useSegment = () => {
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    setHash(window.location.hash);

    const handleHashChange = () => setHash(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return { hash };
};
