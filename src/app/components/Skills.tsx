"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Next.js", icon: "/tech/nextdotjs.svg" },
    { name: "React", icon: "/tech/react.svg" },
    { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
    { name: "TypeScript", icon: "/tech/typescript.svg" },
    { name: "Node.js", icon: "/tech/nodedotjs.svg" },
    { name: "Nest.js", icon: "/tech/nestjs.svg" },
    { name: "laravel", icon: "/tech/laravel.svg" },
    { name: "JWT", icon: "/tech/icons8-jwt02.svg" },
    { name: "MongoDB", icon: "/tech/mongodb1.svg" },
    { name: "MySQL", icon: "/tech/mysql.svg" },
    { name: "Git", icon: "/tech/git.svg" },
    { name: "NPM", icon: "/tech/npm.svg" },
    { name: "WordPress", icon: "/tech/wordpress.svg" },
    { name: "Elementor", icon: "/tech/elementor.svg" },
    { name: "WooCommerce", icon: "/tech/woocommerce.svg" },
    { name: "Figma", icon: "/tech/figma.svg" },
    { name: "Postman", icon: "/tech/postman.svg" },
  ];

  return (
    <section id="skills" className="py-24 max-w-5xl mx-auto px-6">
      <motion.h2
        className="text-4xl font-semibold mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Habilidades
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center gap-3 p-6 rounded-xl 
                       bg-black/40 backdrop-blur-md border border-blue-500/10 
                       hover:border-blue-400/40 transition"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 opacity-70 filter invert brightness-150"
            />

            <span className="text-sm text-gray-200 font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
