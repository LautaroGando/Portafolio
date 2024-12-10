"use client";
import React, { createContext, useContext, useState } from "react";
import { IMenuContextProps } from "./types";

const MenuContext = createContext<IMenuContextProps | null>(null);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [menu, setMenu] = useState<boolean>(false);

  const handleToggleMenu = () => setMenu(!menu);

  const handleCloseMenu = () => setMenu(false);

  return (
    <MenuContext.Provider value={{ menu, handleToggleMenu, handleCloseMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);

  if (context === null)
    throw new Error(
      "El contexto debe ser utilizado dentro de un MenuProvider."
    );

  return context;
};
