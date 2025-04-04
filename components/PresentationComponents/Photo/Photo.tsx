"use client";
import Image from "next/image";
import React from "react";
import photo from "@/public/assets/images/photo.svg";
import { motion } from "motion/react";

export const Photo: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[200px] h-[200px] bg-tertiary rounded-full"
    >
      <Image
        src={photo}
        alt="Foto de perfil"
        width={250}
        height={250}
        priority
      />
    </motion.div>
  );
};

export default Photo;
