"use client";

import React, { createContext, useContext, useState } from "react";
import { IMenuSkillsContext } from "./types";

const MenuSkillsContext = createContext<IMenuSkillsContext | null>(null);

export const MenuSkillsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [menuSkills, setMenuSkills] = useState<boolean>(false);

  const handleToggleMenuSkills = () => setMenuSkills(!menuSkills);

  const handleCloseMenuSkills = () => setMenuSkills(false);

  return (
    <MenuSkillsContext.Provider
      value={{ menuSkills, handleToggleMenuSkills, handleCloseMenuSkills }}
    >
      {children}
    </MenuSkillsContext.Provider>
  );
};

export const useMenuSkills = () => {
  const context = useContext(MenuSkillsContext);

  if (context === null)
    throw new Error(
      "El contexto debe ser utilizado dentro de un MenuProvider."
    );

  return context;
};
