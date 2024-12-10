import React from "react";

export const Info: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-textAndIcons font-bold text-2xl text-center">
        Hola, soy Lautaro
        <br />
        Fullstack Web Developer
      </h1>
      <h2 className="text-textAndIcons text-xl text-center">
        Transformo ideas en soluciones
        <br /> digitales.
      </h2>
      <p className="text-textAndIcons text-center font-light">
        Soy un desarrollador fullstack apasionado por crear experiencias
        digitales excepcionales, combinando diseño y funcionalidad con las
        mejores tecnologías.
      </p>
    </div>
  );
};

export default Info;
