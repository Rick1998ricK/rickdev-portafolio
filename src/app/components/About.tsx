"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 max-w-6xl mx-auto px-6 text-center"
    >
      <motion.h2
        className="text-4xl font-semibold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sobre mí
      </motion.h2>

      <motion.p
        className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Soy un desarrollador web apasionado por construir experiencias modernas,
        eficientes y visualmente atractivas. Especializado en{" "}
        <strong className="text-blue-400">Next.js, React y TailwindCSS</strong>,
        combino diseño limpio con rendimiento y buenas prácticas.
        Enfocado en crear soluciones escalables, usables y orientadas al usuario.
      </motion.p>

      {/* ---- BOTONES ---- */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Ver mi trabajo */}
        <a
          href="#projects"
          className="px-6 py-3 border border-purple-400 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/20 transition shadow-md "
        >
          Ver mi trabajo
        </a>

        {/* Descargar CV */}
        <a
          href="/Ricardo Romero Huamán.pdf"
          download
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition shadow-md"
        >
          Descargar CV
        </a>

        {/* Contáctame */}
        <a
          href="#contact"
          className="px-6 py-3 border border-purple-400 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/20 transition shadow-md"
        >
          Contáctame
        </a>
      </motion.div>
    </section>
  );
}
