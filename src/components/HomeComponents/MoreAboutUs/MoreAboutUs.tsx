import ButtonCategory from "@/components/GeneralComponents/ButtonCategory/ButtonCategory";
import Section from "@/components/GeneralComponents/Section/Section";
import { faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const MoreAboutUs: React.FC = () => {
  return (
    <div className="w-full min-h-[calc(100dvh-80px)] custom-bg-gradient pt-5 px-2 flex flex-col justify-between pb-5 relative overflow-hidden gap-5">
      <div className="custom-bg-more-about-us flex items-center justify-center">
        <FontAwesomeIcon
          className="text-backgroundSecondary text-[400px]"
          icon={faInfo}
        />
      </div>
      <div className="flex flex-col gap-10">
        <Section icon={faInfoCircle} text="Sobre mí" />
        <p className="text-textAndIcons font-light z-10">
          &quot;Soy Lautaro Gando, un desarrollador fullstack de 23 años,
          residente en Liniers, Ciudad Autónoma de Buenos Aires, Argentina. Me
          apasiona crear soluciones tecnológicas que combinen funcionalidad y
          diseño.&quot;
        </p>
        <h3 className="text-textAndIcons text-lg font-bold z-10">
          Motivación y valores:
        </h3>
        <p className="text-textAndIcons font-light z-10">
          &quot;Desde chico, siempre me fascinó cómo la tecnología puede
          transformar la manera en la que vivimos y trabajamos. Esto me llevó a
          especializarme en el desarrollo web, donde puedo aplicar mi
          creatividad y habilidades técnicas para resolver problemas
          reales.&quot;
        </p>
      </div>
      <ButtonCategory category="HABILIDADES" link="#skills" linkRef="skills" />
    </div>
  );
};

export default MoreAboutUs;
