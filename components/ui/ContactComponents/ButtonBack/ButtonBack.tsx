import { useContactStore } from "@/store/ContactStore/useContactStore";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ButtonBack: React.FC = () => {
  const { handleBack } = useContactStore();

  return (
    <button
      onClick={handleBack}
      type="button"
      className="font-extra text-secondary flex items-center gap-3 ml-3 self-start relative transition-all duration-300 group active:scale-90"
    >
      <FontAwesomeIcon
        className="w-[15px] text-[15px] absolute left-0 transition-all duration-300 group-active:-left-3"
        icon={faArrowLeft}
        width={15}
      />
      <span className="pl-6">Volver</span>
    </button>
  );
};

export default ButtonBack;
