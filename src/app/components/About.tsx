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
        Soy un desarrollador Full Stack y profesional de TI titulado en{" "}
        <strong className="text-blue-400">SENATI</strong> (Ingeniería de
        Software con I.A., 2024), actualmente cursando Ingeniería de Sistemas
        en la{" "}
        <strong className="text-blue-400">Universidad Continental</strong>.
        Cuento con más de 3 años de experiencia desarrollando sistemas reales
        para empresas, instituciones y clientes independientes. Especializado
        en{" "}
        <strong className="text-blue-400">
          Next.js, NestJS, React y TypeScript
        </strong>
        , combino desarrollo de software con gestión logística e informática en
        entornos empresariales reales. Apasionado por construir soluciones
        escalables, eficientes y orientadas al usuario.
      </motion.p>

      {/* ---- STATS ---- */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {[
          { value: "3+", label: "Años de experiencia" },
          { value: "10+", label: "Proyectos entregados" },
          { value: "500+", label: "Usuarios en producción" },
          { value: "5+", label: "Clientes atendidos" },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-black/40 border border-blue-500/20 backdrop-blur-md"
          >
            <p className="text-3xl font-extrabold text-blue-400">{stat.value}</p>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* ---- BOTONES ---- */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 border border-purple-400 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/20 transition shadow-md"
        >
          Ver mi trabajo
        </a>

        <a
          href="/CV Ricardo Romero Huamán.pdf"
          download
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition shadow-md"
        >
          Descargar CV
        </a>

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