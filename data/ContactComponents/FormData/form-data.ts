import { IFormData } from "./types";

export const formData: IFormData[] = [
  {
    id: "personal",
    initialValues: {
      fullname: "",
      email: "",
      reason: "",
      message: "",
    },
    title: "Contacto personal",
    formValues: [
      {
        name: "fullname",
        type: "text",
        placeholder: "Nombre completo:",
      },
      {
        name: "email",
        type: "text",
        placeholder: "Correo electrónico:",
      },
      {
        name: "reason",
        select: true,
        options: [
          {
            value: "job_opportunity",
            label: "Oportunidad laboral",
          },
          {
            value: "collaboration",
            label: "Colaboración",
          },
          {
            value: "queries",
            label: "Consultas",
          },
        ],
      },
      {
        name: "message",
        textarea: true,
        placeholder: "Mensaje:",
      },
    ],
  },
  {
    id: "team",
    initialValues: {
      fullname: "",
      email: "",
      reason: "",
      message: "",
    },
    title: "Contactar equipo",
    formValues: [
      {
        name: "fullname",
        type: "text",
        placeholder: "Nombre completo:",
      },
      {
        name: "email",
        type: "text",
        placeholder: "Correo electrónico:",
      },
      {
        name: "reason",
        select: true,
        options: [
          {
            value: "custom_platform",
            label: "Desarrollo de plataforma a medida",
          },
          {
            value: "admin_panel",
            label: "Creación de panel administrativo",
          },
          {
            value: "project_collaboration",
            label: "Colaboración en proyecto digital",
          },
          {
            value: "queries",
            label: "Consultas",
          },
        ],
      },
      {
        name: "message",
        textarea: true,
        placeholder: "Mensaje:",
      },
    ],
  },
];
