import { IProject } from "@/interfaces/IProject";

export const projects: IProject[] = [
    {
        id: 1,
        image: '/assets/images/rompiendo-barreras.png',
        title: 'Rompiendo Barreras',
        description: 'Una plataforma de cursos donde podrás aprender diferentes idiomas. La aplicación cuenta con distintos roles para los usuarios: un administrador, que podrá gestionar la aplicación desde su panel; los profesores, encargados de enseñar los cursos; y los estudiantes, quienes, dependiendo del plan contratado, tendrán acceso a una cantidad específica de cursos. Además, esta plataforma incluye un sistema de calificación de cursos, la posibilidad de que los usuarios utilicen soporte como tutor (implementado con IA), y mucho más. ¡Explora y rompe barreras presionando en la imagen!',
        technologies: ['Next.js', 'Tailwind CSS', 'Typescript', 'PostgreSQL', 'Nest.js', 'Express.js'],
        siteweb: 'https://rompiendo-barreras-pf.vercel.app/',
        github: 'https://github.com/Neoagustin/PT21A-Grupo5-PF-Frontend',
    },
    {
        id: 2,
        image: '/assets/images/techzen.png',
        title: 'TechZen',
        description: 'Aplicación de e-commerce para la venta de productos electrónicos, con carrito de compras, inicio de sesión y administración de usuarios. La aplicación tenía como objetivo ofrecer una experiencia de usuario fluida y completa, permitiendo a los clientes navegar por productos, agregar items al carrito, realizar compras y gestionar su perfil.',
        technologies: ['Next.js', 'Tailwind CSS', 'Typescript', 'PostgreSQL', 'Node.js', 'Express.js'],
        siteweb: 'https://techzen-three.vercel.app/',
        github: 'https://github.com/LautaroGando/TechZen',
    },
];