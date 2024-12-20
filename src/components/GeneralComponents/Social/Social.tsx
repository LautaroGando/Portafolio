"use client";

import { useSize } from "@/hooks/useSize";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

export const Social: React.FC = () => {
  const { size } = useSize();

  return (
    <>
      {size && size >= 1280 && (
        <motion.div
          animate={{ scale: [0.1, 1] }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="flex flex-col items-center text-textAndIcons text-3xl gap-2 fixed bottom-0 left-3"
        >
          <Link href='mailto:lautarogandodev@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link href='https://github.com/LautaroGando' target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} />
          </Link>
          <Link href='https://www.linkedin.com/in/lautaro-gando/' target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <div className="w-[2px] h-[200px] bg-extras"></div>
        </motion.div>
      )}
    </>
  );
};
