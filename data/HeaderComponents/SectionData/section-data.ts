import {
  faArrowLeft,
  faArrowRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { ISectionData } from "./types";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const sectionData: Omit<ISectionData, "href">[] = [
  {
    id: "social",
    icon: faArrowRight,
    label: "Mirá mis redes!",
  },
  {
    id: "cv",
    icon: faArrowLeft,
    label: "Descarga mi CV!",
  },
];

export const socialData: Omit<ISectionData, "id">[] = [
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/lautaro-gando/",
    label: "Linkedin",
  },
  {
    icon: faGithubSquare,
    href: "https://github.com/LautaroGando",
    label: "GitHub",
  },
  {
    icon: faEnvelope,
    href: "mailto:lautarogandodev@gmail.com",
    label: "Correo",
  },
];
