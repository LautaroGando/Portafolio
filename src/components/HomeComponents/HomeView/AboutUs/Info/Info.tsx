import React from "react";

export const Info: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 lg:w-[650px]">
      <h1 className="text-textAndIcons font-bold text-2xl text-center sm:text-3xl lg:text-left lg:text-4xl">
        Hola, soy Lautaro,
        <br />
        Fullstack Web Developer
      </h1>
      <h2 className="text-textAndIcons text-xl text-center sm:text-2xl lg:text-left lg:text-3xl">
        Transformo ideas en soluciones
        <br /> digitales.
      </h2>
      <p className="text-textAndIcons text-center font-light sm:text-lg lg:text-left lg:text-xl">
        Soy un desarrollador fullstack apasionado por crear experiencias
        digitales excepcionales, combinando diseño y funcionalidad con las
        mejores tecnologías.
      </p>
    </div>
  );
};

export default Info;
