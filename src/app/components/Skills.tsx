"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Next.js",
    "React",
    "TailwindCSS",
    "Node.js",
    "TypeScript",
    "Git",
    "MongoDB",
    "Firebase",
  ];

  return (
    <section id="skills" className="py-24 max-w-5xl mx-auto px-6" >
      <motion.h2
        className="text-4xl font-semibold mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Habilidades
      </motion.h2>

      <motion.ul
        className="flex flex-wrap gap-4"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.13 },
          },
        }}
      >
        {skills.map((skill) => (
          <motion.li
            key={skill}
            className="px-4 py-2 border rounded-lg shadow-sm  bg-black/40 backdrop-blur-md border-b border-blue-500/10"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
