import React from "react";
import { IButtonSelectContactProps } from "./types";
import { Hoverable } from "@/components/GeneralComponents/Hoverable/Hoverable";
import clsx from "clsx";
import { useContactStore } from "@/store/ContactStore/useContactStore";

export const ButtonSelectContact: React.FC<IButtonSelectContactProps> = ({
  label,
  id,
}: IButtonSelectContactProps) => {
  const { handleForm } = useContactStore();

  return (
    <Hoverable>
      {(isHovered) => (
        <button
          onClick={() => handleForm(id)}
          type="button"
          className={clsx(
            "w-[250px] h-[40px] bg-secondary font-extra text-primary relative after:content-[''] after:absolute after:w-0 after:h-full after:transition-all after:duration-300 after:left-0 after:top-0 after:bg-primary after:text-secondary after:border after:border-secondary after:z-10",
            isHovered && "after:w-full animate-pulse"
          )}
        >
          <span
            className={clsx(
              "relative z-20 w-full h-full flex items-center justify-center transition-all duration-300",
              isHovered && "text-secondary"
            )}
          >
            {label}
          </span>
        </button>
      )}
    </Hoverable>
  );
};

export default ButtonSelectContact;
