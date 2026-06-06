"use client";

import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, Github, ExternalLink, Download, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectDetailPage({ slug } : { slug: string}) {
  const router = useRouter();
  const project = projects.find((p) => p.slug === slug);
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold">Proyecto no encontrado</p>
          <button onClick={() => router.back()} className="text-blue-400 underline">
            Volver
          </button>
        </div>
      </div>
    );
  }

  const prevImage = () => setCurrentImage((i) => (i === 0 ? project.images.length - 1 : i - 1));
  const nextImage = () => setCurrentImage((i) => (i === project.images.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 max-w-5xl mx-auto">

      {/* Volver */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-10"
      >
        <ArrowLeft size={16} /> Volver a proyectos
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-10"
      >
        {/* Título + meta */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
            {project.title}
          </h1>
          {/* Cliente y año si existen */}
          {(project.client || project.year) && (
            <div className="flex flex-wrap gap-3 mb-4">
              {project.client && (
                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/25">
                  {project.client}
                </span>
              )}
              {project.year && (
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                  {project.year}
                </span>
              )}
            </div>
          )}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Galería de imágenes */}
        {project.images.length > 0 && (
          <div className="space-y-3">
            {/* Imagen principal */}
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 bg-[#0a0a0f] flex items-center justify-center"
              style={{ minHeight: "320px" }}
            >
              <img
                src={project.images[currentImage]}
                alt={`Captura ${currentImage + 1}`}
                className="max-w-full max-h-[520px] w-auto h-auto object-contain rounded-xl"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition"
                  >
                    <ChevronRight size={18} />
                  </button>

                  {/* Contador */}
                  <div className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-black/60 text-gray-300">
                    {currentImage + 1} / {project.images.length}
                  </div>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`w-2 h-2 rounded-full transition ${
                          i === currentImage ? "bg-blue-400 w-4" : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {project.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition ${
                      i === currentImage
                        ? "border-blue-500 opacity-100"
                        : "border-white/10 opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`thumb ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tecnologías */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-300">Tecnologías utilizadas</h2>
          <div className="flex flex-wrap gap-4">
            {project.tech.map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt="tech"
                className="w-8 h-8 opacity-70 hover:opacity-100 transition filter invert brightness-150"
              />
            ))}
          </div>
        </div>

        {/* Features si existen */}
        {project.features && project.features.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-300">Funcionalidades destacadas</h2>
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Botones */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-500/30 hover:bg-blue-500 hover:text-white transition text-sm font-semibold"
            >
              <Github size={16} /> Ver Front-End
            </a>
          )}
          {project.githubBack && (
            <a
              href={project.githubBack}
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-500/30 hover:bg-blue-500 hover:text-white transition text-sm font-semibold"
            >
              <Github size={16} /> Ver Back-End
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-purple-500/30 hover:bg-purple-500 hover:text-white transition text-sm font-semibold text-purple-400"
            >
              <ExternalLink size={16} /> Ver demo
            </a>
          )}
          {project.apk && (
            <a
              href={project.apk}
              download
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-green-500/30 hover:bg-green-500 hover:text-white transition text-sm font-semibold text-green-400"
            >
              <Download size={16} /> Descargar APK
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}