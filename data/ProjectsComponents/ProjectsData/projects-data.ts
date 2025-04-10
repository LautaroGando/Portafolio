import { IProjectsData } from "./types";

export const projectsData: IProjectsData[] = [
  {
    id: 1,
    title: "GF Instalaciones",
    urlGithub: "https://github.com/LautaroGando/GF-Instalaciones",
    href: "https://www.gfrecursosgraficos.com.ar/",
    img: "/assets/images/projects/gf-instalaciones.png",
    description:
      "Aplicación web desarrollada para una empresa del rubro gráfico especializada en el montaje de estructuras para eventos, ferias y locales comerciales. El sistema permite gestionar de forma integral todo el flujo de trabajo: desde la creación de órdenes de instalación, asignación de instaladores y coordinadores, hasta el seguimiento del estado de cada proyecto en tiempo real. Cuenta con una arquitectura basada en roles (administrador, coordinador, instalador), y ofrece funcionalidades como filtros dinámicos, paneles de control, validaciones, notificaciones y formularios avanzados. El objetivo principal del proyecto fue digitalizar procesos que antes se hacían manualmente, mejorando la organización, la trazabilidad y la eficiencia operativa.",
  },
  {
    id: 2,
    title: "GLU Logística",
    urlGithub: "https://github.com/LautaroGando/La-Vuelta-Logistica",
    href: "https://lavueltalogistica.vercel.app/",
    img: "/assets/images/projects/glu-logistica.png",
    description:
      "Sitio web informativo con plataforma de gestión para una empresa de logística y distribución de paquetes. La aplicación cuenta con un panel administrativo donde se pueden controlar los usuarios registrados y gestionar el flujo de los envíos: desde el ingreso de paquetes en depósito, su salida a destino y su posterior entrega. Cada usuario cuenta con un panel privado donde puede consultar el estado actualizado de sus pedidos, permitiendo un seguimiento claro a lo largo del proceso logístico. El sistema está pensado para facilitar la organización interna y ofrecer a los clientes una experiencia transparente y accesible.",
  },
];
