"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experience = [
    {
      role: "Encargado de Logística e Informática",
      company: "Kanazawa S.A.C.",
      period: "Sep 2025 — Actualidad",
      description:
        "Control de inventario, recepción y despacho de mercadería hacia todas las zonas de distribución. Desarrollo de sistema de inventario personalizado con Supabase y Node.js. Análisis de costos de importación CIF Callao: prorrateo de flete, cálculo de DUA y conversión USD para distribución Lima y Huancayo.",
    },
    {
      role: "Gerente de Sistemas e Informática",
      company: "Voluntades Huancayo",
      period: "Ago 2025 — Actualidad",
      badge: "Voluntario",
      description:
        "Desarrollo del sistema web de asistencia para más de 500 voluntarios con panel administrativo en Next.js y backend en NestJS con autenticación JWT y control de roles. App móvil con Expo/React Native para registro por QR y DNI. Deploy en Vercel, Render y SiteGround.",
    },
    {
      role: "Desarrollador Web",
      company: "SkyWeb — Proyecto propio",
      period: "2024 — Actualidad",
      description:
        "Agencia web propia especializada en WordPress para PYMEs y negocios locales. Desarrollo de tiendas online con WooCommerce, sitios corporativos e institucionales con Elementor, optimización SEO y configuración de hosting, dominio y SSL.",
    },
    {
      role: "Desarrollador Web & Soporte TI",
      company: "CEBA Javier Prado Ugarteche",
      period: "Oct 2023 — Oct 2024",
      description:
        "Desarrollo del sistema de matrículas, pagos y notas con Laravel y MySQL, digitalizando la gestión institucional. Mantenimiento de la web institucional, administración de Microsoft 365 y soporte TI a equipos y redes.",
    },
    {
      role: "Desarrollador Web",
      company: "La Base Coworking",
      period: "Jul 2023 — Dic 2023",
      badge: "Prácticas",
      description:
        "Desarrollo de páginas corporativas y sitio web para cliente del sector legal. Prototipo de startup de servicios jurídicos. Diseño UI/UX y optimización visual.",
    },
    {
      role: "Soporte TI",
      company: "UGEL Huancayo",
      period: "Jul 2022 — Dic 2022",
      badge: "Prácticas",
      description:
        "Soporte técnico y mantenimiento de computadoras e impresoras del edificio institucional. Desarrollo de sistema de inventario en Excel y seguimiento de asistencia del personal.",
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

            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-2xl font-bold">{item.role}</h3>
              {item.badge && (
                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {item.badge}
                </span>
              )}
            </div>
            <p className="text-blue-400 font-medium">{item.company}</p>
            <p className="text-gray-400 text-sm">{item.period}</p>
            <p className="text-gray-300 mt-3">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}