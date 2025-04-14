import ButtonSelectContact from "@/components/ui/ContactComponents/ButtonSelectContact/ButtonSelectContact";
import Image from "next/image";
import React from "react";
import arrowContact from "@/public/assets/icons/arrow-contact.svg";
import { contactData } from "@/data/ContactComponents/ContactData/contact-data";
import { IContactData } from "@/data/ContactComponents/ContactData/types";
import { motion } from "motion/react";

export const SelectContact: React.FC = () => {
  return (
    <div className="text-secondary flex flex-col items-center gap-10 overflow-hidden mt-20 lg:flex-row">
      {contactData.map((contact: IContactData) => (
        <div key={contact.id}>
          {contact.id === "personal" ? (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className="flex flex-col items-center"
            >
              <ButtonSelectContact id={contact.id} label={contact.label} />
              <div className="flex flex-col items-center">
                <Image
                  className="w-[150px] h-auto"
                  src={arrowContact}
                  alt="Flecha curva"
                  width={197}
                  height={77}
                />
                <p className="text-sm border-l border-b border-secondary px-1 max-w-[350px] sm:text-base sm:max-w-[420px] md:text-xl md:max-w-[530px]">
                  {contact.description}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className="flex flex-col items-center"
            >
              <p className="text-sm border-r border-t border-secondary px-1 max-w-[350px] sm:text-base sm:max-w-[420px] md:text-xl md:max-w-[530px]">
                {contact.description}
              </p>
              <div className="flex flex-col items-center">
                <Image
                  className="w-[150px] h-auto rotate-180"
                  src={arrowContact}
                  alt="Flecha curva"
                  width={197}
                  height={77}
                />
                <ButtonSelectContact id={contact.id} label={contact.label} />
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SelectContact;
