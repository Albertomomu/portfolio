import Css from "../components/icons/Css.astro";
import Html from "../components/icons/Html.astro";
import React from "../components/icons/React.astro";
import Flutter from "../components/icons/Flutter.astro";
import Wordpress from "../components/icons/Wordpress.astro";
import Next from "../components/icons/Next.astro";

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
  FLUTTER: {
    name: "Flutter",
    class: "bg-black text-white",
    icon: Flutter,
  },
  WORDPRESS: {  
    name: "Wordpress",
    class: "bg-black text-white",
    icon: Wordpress,
  },
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: Next,
  },
  REACT_NATIVE: {
    name: "React Native",
    class: "bg-black text-white",
    icon: React,
  },
};

export const defaultLang = 'es';

export const text: any = {
  es: {
    'nav.about': 'Sobre mi',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'EXPERIENCE': [
      {
        date: "Abril 2024 - Actualidad",
        title: "Quickgold - Programador",
        description: "Desarrollo y mantengo ERP para gestión interna con PHP, jQuery, HTML y CSS (framework propio basado en Symfony), páginas web con Next.js y aplicaciones móviles con React Native. También administro VPS y servidores Node, y gestiono bases de datos relacionales usando SQL.",
        link: "https://quickgold.es",
      },
      {
        date: "Junio 2022 - Abril 2024",
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
        title: "BOOKWISE",
        description: "Infraestructura SaaS para la gestión de reservas.",
        link: "#",
        github: "#",
        design: "https://www.figma.com/design/fZ6WdOeu7qrzh2uhcBBmTU/BookWise?node-id=0-1&t=XLBLMGr8aGeZp5e6-1",
        image: "images/projects/bookwiseproject.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.NEXT],
      },
      {
        title: "JARVIS",
        description: "Agencia de marketing digital.",
        link: "https://jarvis-bice.vercel.app/",
        github: "https://github.com/Albertomomu/jarvis",
        design: "#",
        image: "images/projects/jarvis.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.NEXT],
      },
      {
        title: "KARTING LEAGUE APP",
        description: "Aplicación para la gestión del proyecto de la Karting League.",
        link: "https://kartingleague.es",
        github: "https://github.com/Albertomomu/karting-league-app",
        design: "#",
        image: "images/projects/kartingleagueapp.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT_NATIVE],
      },
      {
        title: "KARTING LEAGUE",
        description: "Liga amateur de karting de alquiler.",
        link: "https://kartingleague.es",
        github: "#",
        design: "#",
        image: "images/projects/kartingleague.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.WORDPRESS],
      },
      {
        title: "BLACK SHEEP CLOTHING",
        description: "Tienda de ropa urbana que apuesta por el estilo auténtico y sin etiquetas.",
        link: "https://blacksheepclothing.es",
        github: "https://github.com/Albertomomu/blacksheep-client",
        design: "#",
        image: "images/projects/blacksheepclothing.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
      },
      {
        title: "ALA INTERPRETING",
        description: "Agencia de interpretación y traducción.",
        link: "https://alainterpreting.com/",
        github: "#",
        design: "#",
        image: "images/projects/alainterpreting.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.WORDPRESS],
      },
      {
        title: "MCCONFECCIÓN",
        description: "Página corporativa para tienda de confección.",
        link: "https://mcconfeccion7.es/",
        github: "#",
        design: "#",
        image: "images/projects/mcconfeccion.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.WORDPRESS],
      },
    ],
    'project.github': 'Ver repositorio de Github',
    'project.inProgress': 'En construcción',
    'project.learnMore': 'Saber más',
    'project.website': 'Visitar página web',
    'project.design': 'Ver diseño',
    'contact.contact': 'Contacta conmigo',
    'contact.touch': 'Ponte en contacto conmigo',
    'contact.text': 'Si estás interesado en discutir posibles colaboraciones, oportunidades laborales o tienes alguna consulta, no dudes en ponerte en contacto conmigo utilizando la información de contacto proporcionada.',
    'contact.see': 'Ver perfil',
    'contact.name': 'Tu nombre',
    'contact.email': 'Tu correo',
    'contact.phone': 'Tu teléfono',
    'contact.message': 'Tu mensaje',
    'contact.send': 'Enviar mensaje',
    'footer.rights': 'Todos los derechos reservados'
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'EXPERIENCE': [
      {
        date: "April 2024 - Now",
        title: "Quickgold - Programmer",
        description: "I develop and maintain ERP for internal management using PHP, jQuery, HTML, and CSS (custom framework based on Symfony), websites with Next.js, and mobile applications with React Native. I also manage VPS and Node servers, and handle relational databases using SQL.",
        link: "https://quickgold.es",
      },
      {
        date: "June 2022 - April 2024",
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
        title: "BOOKWISE",
        description: "SaaS infrastructure for booking management.",
        link: "#",
        github: "#",
        design: "https://www.figma.com/design/fZ6WdOeu7qrzh2uhcBBmTU/BookWise?node-id=0-1&t=XLBLMGr8aGeZp5e6-1",
        image: "images/projects/bookwiseproject.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.NEXT],
      },
      {
        title: "JARVIS",
        description: "Digital marketing agency.",
        link: "https://jarvis-bice.vercel.app/",
        github: "https://github.com/Albertomomu/jarvis",
        design: "#",
        image: "images/projects/jarvis.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.NEXT],
      },
      {
        title: "KARTING LEAGUE APP",
        description: "App for managing Karting League project.",
        link: "https://kartingleague.es",
        github: "https://github.com/Albertomomu/karting-league-app",
        design: "#",
        image: "images/projects/kartingleagueapp.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT_NATIVE],
      },
      {
        title: "KARTING LEAGUE",
        description: "Amateur rental karting league.",
        link: "https://kartingleague.es",
        github: "#",
        design: "#",
        image: "images/projects/kartingleague.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.WORDPRESS],
      },
      {
        title: "BLACK SHEEP CLOTHING",
        description: "Urban clothing store embracing authentic, label-free style.",
        link: "https://blacksheepclothing.es",
        github: "https://github.com/Albertomomu/blacksheep-client",
        design: "#",
        image: "images/projects/blacksheepclothing.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
      },
      {
        title: "ALA INTERPRETING",
        description: "Interpretation and translation agency.",
        link: "https://alainterpreting.com/",
        github: "#",
        design: "#",
        image: "images/projects/alainterpreting.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.WORDPRESS],
      },
      {
        title: "MCCONFECCIÓN",
        description: "Corporate website for a custom tailoring shop.",
        link: "https://mcconfeccion7.es/",
        github: "#",
        design: "#",
        image: "images/projects/mcconfeccion.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.WORDPRESS],
      },
    ],
    'project.github': 'View project repository',
    'project.inProgress': 'In progress',
    'project.learnMore': 'Learn more',
    'project.website': 'Visit project website',
    'project.design': 'View project design',
    'contact.contact': 'Contact me',
    'contact.touch': 'Get in touch with me',
    'contact.text': 'If you are interested in discussing potential collaborations, job opportunities, or have any inquiries, feel free to reach out to me using the provided contact information.',
    'contact.see': 'See profile',
    'contact.name': 'Your name',
    'contact.email': 'Your email',
    'contact.phone': 'Your phone',
    'contact.message': 'Your message',
    'contact.send': "Send message",
    'footer.rights': "All rights reserved."
  },
} as const;