"use client";

import React, { createContext, useContext, useState } from "react";
import { IMenuSkillsContext } from "./types";
import { ISkill } from "@/interfaces/ISkill";
import { skills } from "@/utils/skills";

const MenuSkillsContext = createContext<IMenuSkillsContext | null>(null);

export const MenuSkillsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [menuSkills, setMenuSkills] = useState<boolean>(false);
  const [filterSkills, setFilterSkills] = useState<ISkill[]>([]);

  const handleToggleMenuSkills = () => setMenuSkills(!menuSkills);

  const handleCloseMenuSkills = () => setMenuSkills(false);

  const handleFilterSkills = (category: string) => {

    const filterSkills: ISkill[] = skills.filter((skill: ISkill) => category === 'all' ? skill : category === skill.category ? skill : null);

    setFilterSkills(filterSkills);

    handleCloseMenuSkills();

  };

  return (
    <MenuSkillsContext.Provider
      value={{ menuSkills, filterSkills, handleToggleMenuSkills, handleCloseMenuSkills, handleFilterSkills }}
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
