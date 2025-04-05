"use client";
import { useLightStore } from "@/store/LightStore/useLightStore";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

export const Lamp: React.FC = () => {
  const controls = useAnimation();
  const { handleOnLight } = useLightStore();

  useEffect(() => {
    const startSequence = async () => {
      await controls.start({
        rotate: [0, 25, -20, 10, -5, 0],
        transition: { duration: 2, ease: "easeOut" },
      });

      controls.start({
        rotate: [0, 2, -2, 0],
        transition: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      });
    };

    startSequence();
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      initial={{ rotate: 0 }}
      className="absolute top-0 left-3/4 -translate-x-1/2 z-50 flex flex-col items-center origin-top"
    >
      <div className="w-[2px] h-[100px] bg-secondary" />
      <button
        type="button"
        onClick={handleOnLight}
        className="rotate-180 text-secondary cursor-pointer drop-shadow-[0_0_10px_white]"
      >
        <FontAwesomeIcon
          className="text-[30px]"
          icon={faLightbulb}
          width={30}
        />
      </button>
    </motion.div>
  );
};

export default Lamp;
