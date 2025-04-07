import { textData } from "@/data/AboutUsComponents/TextData/text-data";
import React, { useEffect } from "react";
import { motion, useAnimationControls } from "motion/react";

export const Texts: React.FC = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    const startSequence = async () => {
      await controls.start((custom: "left" | "right") =>
        custom === "left"
          ? {
              x: "-100%",
              opacity: 0,
            }
          : {
              x: "100%",
              opacity: 0,
            }
      );

      controls.start(() => ({
        x: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: "backInOut" },
      }));
    };

    startSequence();
  }, [controls]);

  return (
    <div className="flex flex-col gap-10 w-[80vw] overflow-hidden">
      <motion.div
        custom="left"
        initial={{ x: "-100%", opacity: 0 }}
        animate={controls}
      >
        <motion.p className="text-secondary relative pl-3 max-w-[350px] after:content-[''] after:absolute after:w-[2px] after:h-full after:bg-secondary after:left-0 after:top-0 sm:text-xl sm:max-w-[450px] md:text-2xl md:max-w-[500px] xl:text-3xl xl:max-w-[800px]">
          {textData[0]}
        </motion.p>
      </motion.div>
      <motion.div
        custom="right"
        initial={{ x: "100%", opacity: 0 }}
        animate={controls}
        className="flex flex-col gap-3 items-end"
      >
        <h2 className="text-secondary font-semibold text-lg w-full max-w-[350px] sm:text-2xl sm:max-w-[450px] md:text-3xl md:max-w-[500px] xl:text-4xl xl:max-w-[800px]">
          Motivación y valores:
        </h2>
        <p className="text-secondary font-extralight max-w-[350px] sm:text-xl sm:max-w-[450px] md:text-2xl md:max-w-[500px] xl:text-3xl xl:max-w-[800px]">
          {textData[1]}
        </p>
      </motion.div>
    </div>
  );
};

export default Texts;
