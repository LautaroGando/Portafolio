import { IFormPersonal, IFormTeam } from "@/interfaces/IForm";
import { TContact } from "@/types/TContact";
import emailjs from "@emailjs/browser";
import { sendFormErrorPopUp, sendFormSuccessPopUp } from "./popUp";

export const handleSubmitFormContact = (
  values: IFormPersonal | IFormTeam,
  formType: TContact,
  resetForm: () => void
) => {
  const templateId =
    formType === "personal" ? "template_personal" : "template_team";

  const templateParams = {
    name: values.fullname,
    email: values.email,
    message: values.message,
    title: values.reason,
    time: new Date().toLocaleString("es-AR", {
      dateStyle: "short",
      timeStyle: "short",
    }),
  };

  emailjs
    .send("service_zbo6j4o", templateId, templateParams, "lothqwnMtx2Q8yFmd")
    .then(() => {
      resetForm();
      sendFormSuccessPopUp();
    })
    .catch(() => sendFormErrorPopUp());
};
