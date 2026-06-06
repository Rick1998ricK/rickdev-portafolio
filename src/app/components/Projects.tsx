"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <motion.h2
        className="text-4xl font-semibold mb-14 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Proyectos
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-black/40 backdrop-blur-md border border-blue-500/10 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition flex flex-col"
          >
            {/* Imagen — solo si existe */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-white/5 flex items-center justify-center text-gray-600 text-sm">
                Sin imagen
              </div>
            )}

            {/* Contenido */}
            <div className="p-6 flex flex-col gap-4 flex-1">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.shortDescription}</p>
              </div>

              {/* Iconos de tecnologías */}
              <div className="flex flex-wrap gap-3 mt-2">
                {project.tech.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt="tech"
                    className="w-7 h-7 opacity-70 hover:opacity-100 transition filter invert brightness-150"
                  />
                ))}
              </div>

              {/* Botones */}
              <div className="flex items-center gap-2 mt-auto pt-2 flex-wrap">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex-1 text-center px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white transition text-xs font-semibold"
                >
                  Ver proyecto →
                </Link>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-2 rounded-lg border border-blue-500/30 hover:bg-blue-500 hover:text-white transition"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="p-2 rounded-lg border border-purple-500/30 hover:bg-purple-500 hover:text-white transition text-purple-400"
                    aria-label="Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}