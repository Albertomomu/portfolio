import Css from "../components/icons/Css.astro";
import Html from "../components/icons/Html.astro";
import React from "../components/icons/React.astro";

export const languages = {
  en: 'English',
  fr: 'Français',
};

const TAGS = {
  HTML: {
    name: "HTML",
    class: "bg-black text-white",
    icon: Html,
  },
  CSS: {
    name: "CSS",
    class: "bg-black text-white",
    icon: Css,
  },
  REACT: {
    name: "React",
    class: "bg-black text-white",
    icon: React,
  },
};

export const defaultLang = 'es';

export const text = {
  es: {
    'nav.about': 'Sobre mi',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'EXPERIENCE': [
      {
        date: "Junio 2022 - Actualidad",
        title: "CocoGlobalMedia - Programador",
        description:
          "Programador experimentado especializado en desarrollo web con WordPress, gestión de alojamiento (dominios, copias de seguridad, correo electrónico) y creación de aplicaciones multiplataforma utilizando Ionic y Angular. Desde sitios web elegantes hasta soluciones de alojamiento robustas y aplicaciones móviles, aporto un conjunto completo de habilidades para satisfacer diversas necesidades digitales.",
        link: "https://cocoglobalmedia.com",
      },
      {
        date: "Septiembre 2021 - Abril 2022",
        title: "DAM",
        description:
          "Graduado del Técnico Superior en Desarrollo de Aplicaciones Multiplataforma, equipado con habilidades para desarrollar, implementar y mantener software seguro y fácil de usar multiplataforma.",
        link: "",
      },
      {
        date: "Septiembre 2019 - Abril 2021",
        title: "DAW",
        description:
          "Completó el Desarrollo de Aplicaciones Web, dominando habilidades en Sistemas, Bases de Datos y Programación. Experto en el diseño e implementación de aplicaciones web. Especializado en razonamiento lógico y resolución de problemas adaptable.",
        link: "",
      },
    ],
    'PROJECTS': [
      {
        title: "TIC TAC TOE",
        description: "Un juego clásico de Tic Tac Toe implementado usando React.",
        link: "https://tic-tac-toe-lake-gamma.vercel.app/",
        github: "https://github.com/Albertomomu/tic-tac-toe",
        image: "images/projects/tiktaktoe.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
      },
    ],
    'contact.contact': 'Contacta conmigo',
    'contact.touch': 'Ponte en contacto conmigo',
    'contact.text': 'Si estás interesado en discutir posibles colaboraciones, oportunidades laborales o tienes alguna consulta, no dudes en ponerte en contacto conmigo utilizando la información de contacto proporcionada.',
    'contact.see': 'Ver perfil',
    'contact.name': 'Tu nombre',
    'contact.email': 'Tu correo',
    'contact.phone': 'Tu teléfono',
    'contact.message': 'Tu mensaje',
    'contact.send': 'Enviar mensaje'
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'EXPERIENCE': [
      {
        date: "June 2022 - Now",
        title: "CocoGlobalMedia - Programmer",
        description:
          "Experienced programmer specializing in WordPress web development, hosting management (domains, backups, email), and crafting cross-platform apps using Ionic and Angular. From elegant websites to robust hosting solutions and mobile applications, I bring a comprehensive skill set to meet diverse digital needs.",
        link: "https://cocoglobalmedia.com",
      },
      {
        date: "September 2021 - April 2022",
        title: "DAM",
        description:
          "Graduated from the Higher Technician in Multiplatform Application Development, equipped with skills to develop, implement, and maintain secure and user-friendly cross-platform software.",
        link: "",
      },
      {
        date: "September 2019 - April 2021",
        title: "DAW",
        description:
          "Completed Web App Development, mastering skills in Systems, Databases, and Programming. Proficient in designing and implementing web applications. Specialized in logical reasoning and adaptable problem-solving.",
        link: "",
      },
    ],
    'PROJECTS': [
      {
        title: "TIC TAC TOE",
        description: "A classic game of Tic Tac Toe implemented using React.",
        link: "https://tic-tac-toe-lake-gamma.vercel.app/",
        github: "https://github.com/Albertomomu/tic-tac-toe",
        image: "images/projects/tiktaktoe.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
      },
    ],
    'contact.contact': 'Contact me',
    'contact.touch': 'Get in touch with me',
    'contact.text': 'If you are interested in discussing potential collaborations, job opportunities, or have any inquiries, feel free to reach out to me using the provided contact information.',
    'contact.see': 'See profile',
    'contact.name': 'Your name',
    'contact.email': 'Your email',
    'contact.phone': 'Your phone',
    'contact.message': 'Your message',
    'contact.send': "Send message"
  },
} as const;