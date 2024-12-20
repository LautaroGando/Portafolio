import React from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { IMenuLinksProps } from "./types";
import { useSegment } from "@/hooks/useSegment";
import { links } from "@/utils/links";
import { ILink } from "@/interfaces/ILink";

export const MenuLinks: React.FC<IMenuLinksProps> = ({
  menu,
  handleCloseMenu,
}: IMenuLinksProps) => {
  const sectionIds = links.map((link: ILink) => link.link.replace("#", ""));
  const { hash } = useSegment(sectionIds);

  return (
    <>
      {menu ? (
        <motion.div
          transition={{ duration: 1, ease: "backInOut", type: "tween" }}
          animate={{
            scale: [0.1, 0.5, 1],
            x: [-300, 0],
            opacity: [0, 1],
            borderRadius: [100, 0],
          }}
          exit={{
            scale: 0.1,
            opacity: 0,
            x: -300,
            borderRadius: 100,
          }}
          className="w-full h-full fixed bg-primaryColor top-0 left-0 -z-10"
        >
          <div className="flex flex-col items-center absolute w-full h-full justify-start gap-10 py-[100px] overflow-auto text-xl font-bold">
            <FontAwesomeIcon className="text-secondaryColor" icon={faSun} />
            <div className="w-full h-[2px] bg-secondaryColor"></div>
            {links.map((link) => (
              <motion.a
                whileTap={{ scale: 0.8 }}
                onClick={handleCloseMenu}
                className={`${
                  hash === link.link
                    ? "text-extras"
                    : !hash && link.name === "Inicio"
                    ? "text-extras"
                    : "text-secondaryColor"
                }`}
                href={link.link}
                key={link.id}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default MenuLinks;
