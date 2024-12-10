import { useMenu } from "@/context/MenuContext/MenuContext";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import MenuLinks from "./MenuLinks/MenuLinks";

export const Menu: React.FC = () => {
  const { menu, handleToggleMenu, handleCloseMenu } = useMenu();

  return (
    <motion.div className="flex items-center gap-2">
      <input
        className="peer hidden"
        type="checkbox"
        name="checkMenu"
        id="checkMenu"
        defaultChecked={menu}
      />
      <label
        onClick={handleToggleMenu}
        className={`flex cursor-pointer w-8 h-8 justify-center items-center relative transition-all duration-300 after:content-[''] after:absolute after:w-8 after:h-[3px] after:rounded-sm after:bg-textAndIcons after:transition-all after:duration-300 after:translate-y-2 before:content-[''] before:absolute before:w-8 before:h-[3px] before:rounded-sm before:bg-textAndIcons before:transition-all before:duration-300  before:-translate-y-2 ${
          menu &&
          "after:-rotate-[45deg] after:-translate-y-0 before:rotate-[45deg] before:translate-y-0"
        }`}
        htmlFor="checkMenu"
      >
        <div
          className={`w-8 h-[3px] rounded-sm bg-textAndIcons transition-all duration-300 ${
            menu && "opacity-0"
          }`}
        ></div>
      </label>
      <Link onClick={handleCloseMenu} className="text-textAndIcons" href={`#top`}>
        Lautaro Gando
      </Link>
      <AnimatePresence>
        {menu && <MenuLinks menu={menu} handleCloseMenu={handleCloseMenu} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Menu;
