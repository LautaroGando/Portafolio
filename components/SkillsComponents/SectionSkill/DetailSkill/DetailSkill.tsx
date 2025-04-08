import { useSkillStore } from "@/store/SkillStore/useSkillStore";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import CountUp from "react-countup";

export const DetailSkill: React.FC = () => {
  const { detailSkill } = useSkillStore();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={detailSkill?.skill}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.5, ease: "backInOut" }}
      >
        {!detailSkill ? (
          <div>
            <p className="text-secondary relative pl-3 h-[132px] text-sm flex items-center after:content-[''] after:absolute after:w-[2px] after:h-[40px] after:bg-secondary after:top-1/2 after:left-0 after:-translate-y-1/2 sm:text-base sm:h-[140px] lg:text-xl">
              Apretá sobre un lenguaje para saber más acerca de mi experiencia.
            </p>
          </div>
        ) : (
          <div className="text-secondary flex flex-col gap-5 items-center">
            <h3 className="font-semibold text-lg">{detailSkill.skill}</h3>
            <div className="flex flex-col items-center gap-3 min-w-[220px] max-w-[220px]">
              <h4 className="text-lg flex items-center w-full gap-3 justify-between">
                Manejo:{" "}
                <span className="text-3xl font-extra sm:text-4xl">
                  <CountUp
                    end={detailSkill.management}
                    duration={3}
                    delay={0.5}
                    suffix="%"
                  />
                </span>
              </h4>
              <h4 className="text-lg flex items-center w-full gap-3 justify-between">
                Experiencia:{" "}
                <span className="text-3xl font-extra sm:text-4xl">
                  <CountUp
                    end={detailSkill.experience}
                    duration={3}
                    delay={0.5}
                  />{" "}
                  <span className="text-sm">años</span>
                </span>
              </h4>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default DetailSkill;
