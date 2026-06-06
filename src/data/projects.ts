export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  images: string[];
  github?: string;
  githubBack?: string;
  demo?: string;
  apk?: string;
  tech: string[];
  client?: string;
  year?: string;
  role?: string;
  features?: string[];
}

export const projects: Project[] = [
  // ── SISTEMAS A MEDIDA ────────────────────────────────────────────────────

  {
    slug: "seedlink",
    title: "SeedLink — Sistema de Gestión de Importación de Semillas",
    shortDescription:
      "Plataforma web empresarial a medida para centralizar la gestión completa de importación de semillas agrícolas desde el extranjero hacia Perú.",
    description:
      "SeedLink es una plataforma web desarrollada para Andean Business Consulting E.I.R.L. que reemplaza un flujo basado en hojas de cálculo y correo electrónico. Gestiona el ciclo completo de cada importación — desde el registro del AWB y trámites ante SENASA, hasta la inspección aduanera y entrega al productor. Portal diferenciado por rol (administrador / cliente externo), módulo de documentos en nube, generación automática de PDFs, alertas por fecha de vencimiento y barra de progreso en 5 etapas.",
    image: "/projects/seedlink/seed-01.png",
    images: [
      "/projects/seedlink/seed-01.png",
      "/projects/seedlink/seed-02.png",
      "/projects/seedlink/seed-03.png",
      "/projects/seedlink/seed-04.png",
      "/projects/seedlink/seed-05.png",
    ],
    github: "https://github.com/Rick1998ricK/seedlink",
    githubBack: "",
    demo: "",
    apk: "",
    tech: [
      "/tech/react.svg",
      "/tech/typescript.svg",
      "/tech/nextdotjs.svg",
      "/tech/nodedotjs.svg",
      "/tech/postgresql.svg",
      "/tech/tailwindcss.svg",
      "/tech/icons8-jwt02.svg",
    ],
    client: "Andean Business Consulting E.I.R.L.",
    year: "2026",
    role: "Desarrollo fullstack completo — diseño de BD, arquitectura, backend, frontend, integración con servicios externos e identidad visual.",
    features: [
      "Gestión de expedientes con más de 50 campos del flujo real del negocio",
      "Doble trámite SENASA — permiso de importación e inspección física",
      "Portal diferenciado por rol: administrador y cliente externo",
      "Módulo de documentos en nube — PDFs, certificados fitosanitarios, declaraciones aduaneras",
      "Generación automática de PDF consolidado por expediente",
      "Sistema de alertas por fecha de entrega — vencido, próximo a vencer o entregado",
      "Barra de progreso visual del estado del envío en 5 etapas",
      "Diseño responsive adaptado al manual de marca del cliente",
    ],
  },

  {
    slug: "sistema-asistencia",
    title: "Sistema Web de Gestión de Asistencia — Voluntades Huancayo",
    shortDescription:
      "Plataforma web + app móvil para gestión de asistencia de más de 500 voluntarios con autenticación JWT, control de roles y reportes en tiempo real.",
    description:
      "Sistema web administrativo con panel en Next.js y backend en NestJS con autenticación JWT y control de roles (super_admin, admin, registrador, voluntario). Incluye app móvil con Expo/React Native para registro de asistencia por QR y DNI, justificaciones con archivos adjuntos, dashboard con estadísticas en tiempo real y reportes exportables. Cubre a más de 500 voluntarios activos.",
    image: "/volun02.jpeg",
    images: ["/volun01.jpeg", "/volun02.jpeg", "/volun06.jpeg"],
    github: "https://github.com/Rick1998ricK/voluntades-frontend",
    githubBack: "https://github.com/Rick1998ricK/voluntades-backend",
    // demo: "https://voluntadesasis.vercel.app",
    apk: "/downloads/voluntades.apk",
    tech: [
      "/tech/nestjs.svg",
      "/tech/typescript.svg",
      "/tech/nextdotjs.svg",
      "/tech/react.svg",
      "/tech/typeorm.svg",
      "/tech/expo.svg",
      "/tech/icons8-jwt02.svg",
      "/tech/postman.svg",
    ],
    client: "Voluntades Huancayo",
    year: "2025 – 2026",
    role: "Desarrollo fullstack completo",
    features: [
      "Panel administrativo en Next.js con control de roles y autenticación JWT",
      "App móvil con Expo/React Native para registro por QR y DNI",
      "Justificaciones con archivos adjuntos",
      "Dashboard con estadísticas en tiempo real",
      "Reportes exportables de asistencia",
      "Deploy: Frontend en Vercel, Backend en Render, BD en SiteGround",
    ],
  },

  {
    slug: "inventario-lubricantes",
    title: "Sistema de Inventario — Kanazawa S.A.C.",
    shortDescription:
      "Plataforma de gestión de stock multi-sede con control en tiempo real y reportes automatizados para almacén de lubricantes importados.",
    description:
      "Sistema de inventario desarrollado a medida para Kanazawa S.A.C., empresa importadora y distribuidora de lubricantes ROWE alemanes. Reemplaza el control manual en Excel con una plataforma centralizada que gestiona stock, entradas y salidas de mercadería para sedes en Lima y Huancayo.",
    image: "",
    images: [],
    github: "https://github.com/Rick1998ricK",
    tech: [
      "/tech/nextdotjs.svg",
      "/tech/typescript.svg",
      "/tech/nodedotjs.svg",
      "/tech/postman.svg",
    ],
    client: "Kanazawa S.A.C.",
    year: "2025 – 2026",
    role: "Desarrollo fullstack completo",
    features: [
      "Control de stock en tiempo real para múltiples sedes",
      "Registro de entradas y salidas de mercadería",
      "Reportes automatizados de inventario",
      "Gestión de productos con categorías y precios por canal de distribución",
    ],
  },

  {
    slug: "sistema-matriculas-pagos-notas",
    title: "Sistema de Matrículas, Pagos y Notas — CEBA",
    shortDescription:
      "Plataforma institucional con panel administrable para gestión de alumnos, matrículas, pagos y notas con reportes descargables.",
    description:
      "Sistema web institucional que digitalizó la gestión académica del CEBA Javier Prado Ugarteche. Incluye registro de alumnos, matrículas, control de pagos con alertas de vencimiento, administración de notas por materia y generación de reportes descargables. Panel administrable con control de roles.",
    image: "",
    images: [],
    github: "https://github.com/Rick1998ricK",
    tech: [
      "/tech/laravel.svg",
      "/tech/php.svg",
      "/tech/mysql.svg",
    ],
    client: "CEBA Javier Prado Ugarteche",
    year: "2023 – 2024",
    role: "Desarrollo fullstack completo",
    features: [
      "Registro de alumnos con formulario de inscripción",
      "Gestión de pagos con alertas de vencimiento",
      "Administración de notas por materia y período",
      "Reportes descargables de matrículas, notas y pagos",
      "Panel administrable con control de roles",
    ],
  },

  // ── PROYECTOS WORDPRESS / SKYWEB ─────────────────────────────────────────

  {
    slug: "amperius-tienda",
    title: "Tienda Online — Constructora Amperius SAC",
    shortDescription:
      "Tienda online con WooCommerce, catálogo de productos y pasarela de pagos para empresa constructora en Huancayo.",
    description:
      "Sitio web corporativo con tienda online desarrollado en WordPress para Constructora Amperius SAC. Incluye catálogo de productos, carrito de compras con WooCommerce, pasarela de pagos y diseño responsive adaptado a la identidad visual de la empresa.",
    image: "/projects/amperius/amp-01.png",
    images: [
      "/projects/amperius/amp-01.png",
      "/projects/amperius/amp-02.png",
      "/projects/amperius/amp-03.png",
      "/projects/amperius/amp-04.png",
      "/projects/amperius/amp-05.png",
    ],
    demo: "https://amperius.net",
    tech: [
      "/tech/wordpress.svg",
      "/tech/elementor.svg",
      "/tech/woocommerce.svg",
    ],
    client: "Constructora Amperius SAC",
    year: "2024",
    role: "Desarrollo web completo — WordPress, WooCommerce, diseño y deploy",
    features: [
      "Tienda online con WooCommerce",
      "Catálogo de productos con categorías y filtros",
      "Pasarela de pagos integrada",
      "Diseño responsive con identidad visual corporativa",
      "Optimización SEO on-page",
      "Configuración de hosting, dominio y SSL",
    ],
  },

  {
    slug: "ceba-web",
    title: "Web Institucional — CEBA Javier Prado Ugarteche",
    shortDescription:
      "Sitio web institucional para centro educativo con información académica, noticias y acceso a estudiantes.",
    description:
      "Página web institucional desarrollada en WordPress para el CEBA Javier Prado Ugarteche. Diseño limpio y profesional con secciones de información académica, noticias, galería y formulario de contacto. Optimizada para SEO y adaptada a todos los dispositivos.",
    image: "/projects/ceba/ceba-01.png",
    images: [
      "/projects/ceba/ceba-01.png",
      "/projects/ceba/ceba-02.png",
      "/projects/ceba/ceba-03.png",
      "/projects/ceba/ceba-04.png",
    ],
    demo: "https://cebajavierprado.edu.pe",
    tech: [
      "/tech/wordpress.svg",
      "/tech/elementor.svg",
    ],
    client: "CEBA Javier Prado Ugarteche",
    year: "2024",
    role: "Desarrollo web completo — WordPress, diseño y deploy",
    features: [
      "Diseño institucional limpio y profesional",
      "Secciones de información académica y noticias",
      "Galería de imágenes",
      "Formulario de contacto",
      "Diseño responsive y optimización SEO",
    ],
  },

  {
    slug: "voluntades-web",
    title: "Web Informativa — Voluntades Huancayo",
    shortDescription:
      "Sitio web informativo para ONG con sección de proyectos, voluntariado y formulario de contacto.",
    description:
      "Página web informativa desarrollada en WordPress para Voluntades Huancayo. Diseño moderno con secciones de misión, proyectos activos, equipo y formulario de contacto para postulaciones de voluntarios.",
    image: "/projects/voluntades/volun-01.png",
    images: [
      "/projects/voluntades/volun-01.png",
      "/projects/voluntades/volun-02.png",
      "/projects/voluntades/volun-03.png",
      "/projects/voluntades/volun-04.png",
    ],
    demo: "https://voluntadeshuancayo.org.pe",
    tech: [
      "/tech/wordpress.svg",
      "/tech/elementor.svg",
    ],
    client: "Voluntades Huancayo",
    year: "2024",
    role: "Desarrollo web completo — WordPress, diseño y deploy",
    features: [
      "Diseño moderno y responsive",
      "/tech/Sección de misión y proyectos activos",
      "Presentación del equipo",
      "Formulario de postulación para voluntarios",
      "Galería de actividades y optimización SEO",
    ],
  },
];