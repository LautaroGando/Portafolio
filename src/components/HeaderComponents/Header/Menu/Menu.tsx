import { useMenu } from "@/context/MenuContext/MenuContext";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import MenuLinks from "./MenuLinks/MenuLinks";

export const Menu: React.FC = () => {
  const { menu, handleToggleMenu, handleCloseMenu } = useMenu();

  return (
    <motion.div className="flex items-center gap-2">
      <button
        onClick={handleToggleMenu}
        className={`w-8 h-8 relative transition-all duration-1000 flex justify-center items-center z-10 
                after:content-[''] after:rounded-md after:duration-500 after:bg-textAndIcons after:absolute after:w-8 after:h-[2px]
                after:transition-all after:origin-center before:content-[''] before:absolute 
                before:w-8 before:bg-textAndIcons before:rounded-md before:duration-500 before:h-[2px] before:transition-all before:origin-center 
                ${
                  menu
                    ? "after:-rotate-45 after:translate-y-0 before:rotate-45 before:translate-y-0"
                    : "after:translate-y-2 before:-translate-y-2"
                }`}
      >
        <div
          className={`w-8 h-[2px] bg-textAndIcons rounded-md transition-all duration-300 
                ${
                  menu
                    ? "origin-center -translate-x-[100px] bg-transparent"
                    : ""
                }`}
        ></div>
      </button>
      <Link
        onClick={handleCloseMenu}
        className="text-textAndIcons"
        href={`#top`}
      >
        Lautaro Gando
      </Link>
      <AnimatePresence>
        {menu && <MenuLinks menu={menu} handleCloseMenu={handleCloseMenu} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Menu;
