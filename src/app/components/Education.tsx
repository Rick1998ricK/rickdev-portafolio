"use client";

import { motion } from "framer-motion";
import { title } from "process";

export default function Education() {
  const education = [
    {
      title:"Ingeniería de Sistemas e Informática - Universidad Continental",
      period: "2025 - actualidad",
      description:
        "Estudios universitarios en curso mediante convalidación de la carrera técnica de Ingeniería de Software. Enfoque en sistemas de información. desarrollo de software, arquitectura de soluciones y tecnolodías modernas.",
    },
    {
      title: "Ingeniería de Software – SENATI",
      period: "2021 – 2024",
      description:
        "Titulado en Formación profesional en desarrollo de software, arquitectura de aplicaciones, bases de datos, análisis de sistemas, metodologías ágiles, UI/UX y buenas prácticas de ingeniería.",
    },
    {
      title: "Curso de Diseño UI/UX - IDAT",
      period: "2025",
      description:
        "Diseño de interfaces modernas, experiencia de usuario, heurísticas de usabilidad y prototipado profesional en Figma.",
    },
    {
      title: "Programa de Especialización en Metodologías Ágiles - Colegio de Ingenieros del Perú",
      period: "2025",
      description:
        "120 horas de capacitación sobre Scrum, Kanban y gestión ágil de proyectos dictado por Netcram Consultores y el Colegio de Ingenieros del Perú.",
    },
  ];

  return (
    <section id="education" className="py-24 max-w-5xl mx-auto px-6">
      <motion.h2
        className="text-4xl font-semibold mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Educación
      </motion.h2>

      <div className="space-y-10">
        {education.map((item, i) => (
          <motion.div
            key={i}
            className="p-6 border rounded-xl shadow-sm bg-black/40 backdrop-blur-md border-b border-blue-500/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-blue-400">{item.period}</p>
            <p className="text-gray-300 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
