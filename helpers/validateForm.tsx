import { IFormPersonal, IFormTeam } from "@/interfaces/IForm";
import { regex } from "@/utils/regex";

export const validateFormPersonal = (input: IFormPersonal) => {
  const errors: Partial<IFormPersonal> = {};

  !regex.fullname.test(input.fullname)
    ? (errors.fullname = "El nombre debe tener entre 3 y 30 letras.")
    : "";

  !regex.email.test(input.email)
    ? (errors.email = "El correo electrónico no es válido.")
    : "";

  !input.reason ? (errors.reason = "Elija una razón.") : "";

  !regex.message.test(input.message)
    ? (errors.message = "El mensaje debe tener entre 6 y 200 caracteres.")
    : "";

  return errors;
};

export const validateFormTeam = (input: IFormTeam) => {
  const errors: Partial<IFormTeam> = {};

  !regex.fullname.test(input.fullname)
    ? (errors.fullname =
        "El nombre debe contener al menos 2 palabras.")
    : "";

  !regex.email.test(input.email)
    ? (errors.email = "El correo electrónico no es válido.")
    : "";

  !input.reason ? (errors.reason = "Elija una razón.") : "";

  !regex.message.test(input.message)
    ? (errors.message = "El mensaje debe tener entre 6 y 200 caracteres.")
    : "";

  return errors;
};
