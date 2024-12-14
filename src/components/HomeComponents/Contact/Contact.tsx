import Section from "@/components/GeneralComponents/Section/Section";
import React from "react";
import FormContact from "./FormContact/FormContact";
import Footer from "@/components/FooterComponents/Footer/Footer";

export const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-[calc(100dvh-80px)] pt-5 px-2 justify-between flex flex-col pb-5 relative overflow-hidden gap-5">
      <div className="flex flex-col gap-5">
        <Section text="Contactame" />
        <FormContact />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
