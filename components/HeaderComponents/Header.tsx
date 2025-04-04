import React from "react";
import Section from "./Section/Section";

export const Header: React.FC = () => {
  return (
    <header className="h-[80px] flex items-center justify-between">
      <Section />
    </header>
  );
};

export default Header;
