import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col gap-10 items-center">
      <div className="text-textAndIcons text-3xl flex justify-between w-full sm:justify-evenly sm:text-4xl">
        <Link href="https://www.linkedin.com/in/lautaro-gando/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link href="https://github.com/LautaroGando" target="_blank">
          <FontAwesomeIcon icon={faSquareGithub} />
        </Link>
        <Link href="mailto:lautarogandodev@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </div>
      <h2 className="text-extras font-bold">DESARROLLADO POR LAUTARO GANDO</h2>
    </footer>
  );
};

export default Footer;
