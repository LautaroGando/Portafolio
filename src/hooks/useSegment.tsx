"use client";

import { useEffect, useState } from "react";

export const useSegment = (sectionIds: string[]) => {
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setHash(`#${visibleSection.target.id}`);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    const sections = sectionIds.map((id) => document.getElementById(id));

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionIds]);

  return { hash };
};
