"use client";
import { Hoverable } from "@/components/GeneralComponents/Hoverable/Hoverable";
import { useLightStore } from "@/store/LightStore/useLightStore";
import { faArrowTurnUp, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

export const Lamp: React.FC = () => {
  const controls = useAnimation();
  const { handleOnLight } = useLightStore();

  useEffect(() => {
    const startSequence = async () => {
      await controls.start({
        y: [-100, 0],
        transition: { duration: 1, ease: "linear" },
      });

      await controls.start({
        rotate: [0, 25, -20, 10, -5, 0],
        transition: { duration: 3, ease: "easeOut" },
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
    <>
      <motion.div
        animate={controls}
        initial={{ rotate: 0, y: -100 }}
        className="absolute top-0 left-3/4 -translate-x-1/2 z-50 flex flex-col items-center origin-top"
      >
        <div className="w-[2px] h-[100px] bg-secondary" />
        <Hoverable>
          {(isHovered) => (
            <button
              type="button"
              onClick={handleOnLight}
              className={clsx(
                "rotate-180 text-secondary cursor-pointer transition-all duration-300",
                isHovered
                  ? "drop-shadow-[0_0_20px_white]"
                  : "drop-shadow-[0_0_10px_white]"
              )}
            >
              <FontAwesomeIcon
                className="text-[30px] w-[30px] h-[30px]"
                icon={faLightbulb}
                width={30}
              />
            </button>
          )}
        </Hoverable>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="flex text-secondary gap-3 absolute top-40 left-3/4 -translate-x-15/16 sm:-translate-x-22/23"
      >
        <p className="font-letter text-sm w-max sm:text-xl">
          Encendé la experiencia!
        </p>
        <FontAwesomeIcon
          className="text-[15px] sm:text-[20px]"
          icon={faArrowTurnUp}
          width={20}
        />
      </motion.div>
    </>
  );
};

export default Lamp;
