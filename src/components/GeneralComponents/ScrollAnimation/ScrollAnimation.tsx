"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { IScrollAnimationProps } from "./types";

export const ScrollAnimation: React.FC<IScrollAnimationProps> = ({
  id,
  children,
}: IScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isCurrent = sectionRef.current;
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          history.replaceState(null, "", `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5,
    });

    if (isCurrent) {
      observer.observe(isCurrent);
    }

    return () => {
      if (isCurrent) {
        observer.unobserve(isCurrent);
      }
    };
  }, [id]);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
