import { links } from "@/utils/links";
import React from "react";
import { motion } from "motion/react";
import { useSegment } from "@/hooks/useSegment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { ILink } from "@/interfaces/ILink";

export const NavLinks: React.FC = () => {
  const sectionIds = links.map((link: ILink) => link.link.replace("#", ""));
  const { hash } = useSegment(sectionIds);

  return (
    <div className="flex gap-3 items-center">
      {links.map((link) => (
        <motion.a
          whileTap={{ scale: 0.8 }}
          className={`text-lg ${
            hash === link.link
              ? "text-extras font-bold"
              : !hash && link.name === "Inicio"
              ? "text-extras font-bold"
              : "text-textAndIcons font-light"
          }`}
          href={link.link} 
          key={link.id}
        >
          {link.name}
        </motion.a>
      ))}
      <FontAwesomeIcon className="text-textAndIcons" icon={faSun} />
    </div>
  );
};

export default NavLinks;
