import React from "react";
import Title from "../GeneralComponents/Title/Title";
import { AnimatePresence, motion } from "motion/react";
import { useContactStore } from "@/store/ContactStore/useContactStore";
import SelectContact from "./SelectContact/SelectContact";
import FormContact from "./FormContact/FormContact";

export const Contact: React.FC = () => {
  const { form } = useContactStore();

  return (
    <div className="flex flex-col items-center gap-10 min-h-[680px] overflow-hidden">
      <Title level={5} title="Contacto" />
      <AnimatePresence mode="wait">
        {!form ? (
          <motion.div
            key={form}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <SelectContact />
          </motion.div>
        ) : (
          <motion.div
            key={form}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
          >
            <FormContact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
