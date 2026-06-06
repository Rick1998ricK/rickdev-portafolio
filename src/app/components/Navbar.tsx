"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["about","projects","experience","skills","education","contact"];

  return (
    <header className="w-full fixed top-0 bg-black/40 backdrop-blur-md border-b border-blue-500/10 py-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          RickDev<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover:text-blue-400 transition capitalize"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-md"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 text-sm">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-blue-400 transition capitalize"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
