"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rrick8757@gmail.com",
    href: "mailto:rrick8757@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Ricardo Romero Huamán",
    href: "https://www.linkedin.com/in/ricardo-romero-huaman-648956287/",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Rick1998ricK",
    href: "https://github.com/Rick1998ricK",
    external: true,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Huancayo, Perú",
    href: "https://maps.google.com/?q=Huancayo,Peru",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12"
    >
      {/* --- FORMULARIO --- */}
      <div>
        <motion.h2
          className="text-4xl font-semibold mb-6 text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Contacto
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-8 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          ¿Tienes un proyecto en mente o quieres trabajar juntos? Escríbeme.
        </motion.p>

        <motion.form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const res = await fetch("https://formspree.io/f/mojzleoz", {
              method: "POST",
              body: formData,
              headers: { Accept: "application/json" },
            });
            if (res.ok) {
              alert("Mensaje enviado correctamente.");
              form.reset();
            } else {
              alert("Hubo un error al enviar. Intenta nuevamente.");
            }
          }}
          className="space-y-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div>
            <label className="text-gray-400 text-sm block mb-1.5">Nombre</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none text-gray-200 transition"
              placeholder="Juan Pérez"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm block mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none text-gray-200 transition"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm block mb-1.5">Asunto</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none text-gray-200 transition"
              placeholder="Proyecto / Consulta"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm block mb-1.5">Mensaje</label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-3 h-32 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none text-gray-200 transition resize-none"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Enviar Mensaje
          </button>
        </motion.form>
      </div>

      {/* --- PANEL DERECHO --- */}
      <motion.div
        className="flex flex-col gap-6"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        {/* Título */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Información de contacto</h3>
          <p className="text-gray-400 text-sm">
            Disponible para proyectos freelance, posiciones remotas y oportunidades en Perú.
          </p>
        </div>

        {/* Cards de contacto */}
        <div className="space-y-3">
          {contactInfo.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-blue-500/10 hover:border-blue-500/40 hover:bg-blue-500/5 transition group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/25 transition">
                <item.icon size={18} className="text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                <p className="text-gray-200 text-sm font-medium truncate">{item.value}</p>
              </div>
              {item.external && (
                <ExternalLink size={14} className="text-gray-600 group-hover:text-blue-400 transition flex-shrink-0" />
              )}
            </motion.a>
          ))}
        </div>

        {/* Disponibilidad 
        <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <p className="text-green-400 text-sm font-semibold">Disponible para nuevos proyectos</p>
          </div>
          <p className="text-gray-400 text-xs">Tiempo de respuesta habitual: menos de 24 horas.</p>
        </div>
        */}
      </motion.div>
    </section>
  );
}