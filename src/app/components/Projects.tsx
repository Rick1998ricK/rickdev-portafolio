"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Sistema de asistencia",
      description: "Dashboard completo con roles, módulos, estadísticas y panel administrativo.",
    },
    {
      title: "Voluntades Huancayo Web",
      description: "Sitio web institucional, gestión de formularios y sistema de noticias.",
    },
    {
      title: "Portafolio profesional",
      description: "Diseño minimalista moderno con Next.js + animaciones.",
    },
  ];

  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6">
      <motion.h2
        className="text-4xl font-semibold mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Proyectos
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition  bg-black/40 backdrop-blur-md border-b border-blue-500/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
