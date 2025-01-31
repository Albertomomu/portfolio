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
        image: "images/projects/bookwiseproject.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.NEXT],
      },
      {
        title: "JARVIS",
        description: "Agencia de marketing digital",
        link: "https://jarvis-bice.vercel.app/",
        github: "https://github.com/Albertomomu/jarvis",
        image: "images/projects/jarvis.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.NEXT],
      },
      {
        title: "ALA INTERPRETING",
        description: "Servicios de interpretación.",
        link: "https://alainterpreting.com/",
        github: "#",
        image: "images/projects/alainterpreting.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.WORDPRESS],
      },
      {
        title: "CLON NETFLIX",
        description: "Un clon de la web de Netflix hecho con React.",
        link: "#",
        github: "https://github.com/Albertomomu/Netflix-clone",
        image: "images/projects/netflix-clone.jpg",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
      },
      {
        title: "INFORMACIÓN NFT APP",
        description: "Web hecha con React para publicitar aplicación sobre NFT creada con React Native.",
        link: "https://nft-web-chi.vercel.app/",
        github: "https://github.com/Albertomomu/nft-showcase",
        image: "images/projects/nft-showcase.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
      },
      {
        title: "APLICACIÓN FITNESS",
        description: "Aplicación realizada con Flutter para llevar un control de ejercicios y dietas.",
        link: "",
        github: "https://github.com/Albertomomu/fitness",
        image: "images/projects/fitness.jpg",
        tags: [TAGS.FLUTTER],
      },
      {
        title: "TRES EN RAYA",
        description: "Un juego clásico de Tic Tac Toe implementado usando React.",
        link: "https://tic-tac-toe-lake-gamma.vercel.app/",
        github: "https://github.com/Albertomomu/tic-tac-toe",
        image: "images/projects/tiktaktoe.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
      },
      {
        title: "BUSCADOR DER PELÍCULAS",
        description: "Un buscador de películas básico",
        link: "https://movies-app-orcin-eight.vercel.app/",
        github: "https://github.com/Albertomomu/movies-app",
        image: "images/projects/film-searcher.jpg",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
      }
    ],
    'project.github': 'Ver repositorio de Github',
    'project.learnMore': 'Saber más',
    'project.website': 'Visitar página web',
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
        description: "Saas Infrastucture for Reservation Management.",
        link: "#",
        github: "#",
        image: "images/projects/bookwiseproject.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.NEXT],
      },
      {
        title: "JARVIS",
        description: "Digital marketing agency",
        link: "https://jarvis-bice.vercel.app/",
        github: "https://github.com/Albertomomu/jarvis",
        image: "images/projects/jarvis.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.NEXT],
      },
      {
        title: "ALA INTERPRETING",
        description: "Interpreting services.",
        link: "https://alainterpreting.com/",
        github: "#",
        image: "images/projects/alainterpreting.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.WORDPRESS],
      },
      {
        title: "NETFLIX CLONE",
        description: "A Netflix Clone made with React.",
        link: "#",
        github: "https://github.com/Albertomomu/Netflix-clone",
        image: "images/projects/netflix-clone.jpg",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
      },
      {
        title: "NFT SHOWCASE",
        description: "Web made with React to promote an application about NFT created with React Native.",
        link: "https://nft-web-chi.vercel.app/",
        github: "https://github.com/Albertomomu/nft-showcase",
        image: "images/projects/nft-showcase.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
      },
      {
        title: "FITNESS APPLICATION",
        description: "Application created with Flutter to track exercises and diets.",
        link: "",
        github: "https://github.com/Albertomomu/fitness",
        image: "images/projects/fitness.jpg",
        tags: [TAGS.FLUTTER],
      },
      {
        title: "TIC TAC TOE",
        description: "A classic game of Tic Tac Toe implemented using React.",
        link: "https://tic-tac-toe-lake-gamma.vercel.app/",
        github: "https://github.com/Albertomomu/tic-tac-toe",
        image: "images/projects/tiktaktoe.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
      },
      {
        title: "FILM SEARCHER",
        description: "A basic film searcher done with React and omdb api",
        link: "https://movies-app-orcin-eight.vercel.app/",
        github: "https://github.com/Albertomomu/movies-app",
        image: "images/projects/film-searcher.jpg",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
      }
    ],
    'project.github': 'View project repository',
    'project.learnMore': 'Learn more',
    'project.website': 'Visit project website',
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