import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";

export const sendFormSuccessPopUp = () => {
  Swal.fire({
    html: ReactDOMServer.renderToString(
      <div className="w-full bg-secondary text-primary font-extra text-xl flex items-center justify-center">
        <h2>Mensaje enviado con éxito.</h2>
      </div>
    ),
    width: 350,
    icon: "success",
    iconColor: "#000",
    heightAuto: true,
    timer: 2000,
    showConfirmButton: false,
    didOpen: (popup) => {
      popup.style.position = "fixed";
      popup.style.top = "50px";
    },
  });
};

export const sendFormErrorPopUp = () => {
  Swal.fire({
    html: ReactDOMServer.renderToString(
      <div className="w-full bg-secondary text-primary font-extra text-xl flex items-center justify-center">
        <h2>Error al enviar el mensaje.</h2>
      </div>
    ),
    width: 350,
    icon: "error",
    iconColor: "#000",
    heightAuto: true,
    timer: 2000,
    showConfirmButton: false,
    didOpen: (popup) => {
      popup.style.position = "fixed";
      popup.style.top = "50px";
    },
  });
};
