"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experience = [
    {
      role: "Gerente de Sistemas",
      company: "Voluntades Huancayo",
      period: "2023 — Actualidad",
      description:
        "Lidero el área de tecnología desarrollando soluciones digitales para la organización. Creación de la web institucional en WordPress y desarrollo del sistema de asistencia con Flutter, Firebase y panel administrativo basado en Next.js.",
    },
    {
      role: "Freelancer Web",
      company: "Proyectos Independientes",
      period: "2021 — Actualidad",
      description:
        "Desarrollo de páginas web, sistemas personalizados y tiendas online. Branding, optimización SEO y consultoría tecnológica.",
    },
    {
      role: "Desarrollador Web & Soporte TI",
      company: "CEBA Javier Prado Ugarteche",
      period: "2023 — 2024",
      description:
        "Desarrollo del sistema de matrículas (Laravel + MySQL), mantenimiento de la web institucional y administración de Microsoft 365. Soporte TI a equipos y redes.",
    },
    {
      role: "Desarrollo Web",
      company: "La Base Coworking",
      period: "2023",
      description:
        "Desarrollo de páginas corporativas, diseño UI/UX y optimización visual. Implementación de sitios modernos y responsivos para clientes.",
    },
    {
      role: "Tecnologias de la Información",
      company: "UGEL Huancayo",
      period: "2022",
      description:
        "Soporte técnico, mantenimiento de equipos y automatizaciones internas. Gestión de inventarios y soporte a diversas áreas.",
    },
  ];

  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6">
      <motion.h2
        className="text-4xl font-semibold mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experiencia
      </motion.h2>

      <div className="border-l border-gray-300 pl-8 space-y-14 relative">
        {experience.map((item, i) => (
          <motion.div
            key={i}
            className="relative p-6 rounded-xl border shadow-sm bg-black/40 backdrop-blur-md border-b border-blue-500/10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <span className="absolute -left-4 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></span>

            <h3 className="text-2xl font-bold">{item.role}</h3>
            <p className="text-blue-400 font-medium">{item.company}</p>
            <p className="text-gray-400 text-sm">{item.period}</p>
            <p className="text-gray-300 mt-3">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
