import Section from "@/components/GeneralComponents/Section/Section";
import React from "react";

export const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-[calc(100dvh-80px)] pt-5 px-2 flex flex-col justify-between pb-5 relative overflow-hidden gap-5">
      <Section text="Contactame" />
    </div>
  );
};

export default Contact;
