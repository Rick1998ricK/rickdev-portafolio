"use client";
import { motion } from "framer-motion";

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
          className="text-gray-300 mb-6 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          ¿Quieres trabajar conmigo? Escríbeme aquí:
        </motion.p>

        <motion.form
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);

            const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                subject: formData.get("subject"),
                message: formData.get("message"),
            };


            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });

            if (res.ok) {
              alert("Mensaje enviado correctamente 🎉");
              form.reset();
            } else {
              alert("Hubo un error al enviar 😢");
            }
          }}
          className="space-y-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {/* Nombre */}
          <div>
            <label className="text-gray-300 block mb-1">Tu Nombre</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none text-gray-200"
              placeholder="Juan Pérez"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 block mb-1">Tu Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none text-gray-200"
              placeholder="correo@ejemplo.com"
            />
          </div>

          {/* Asunto */}
          <div>
            <label className="text-gray-300 block mb-1">Asunto</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none text-gray-200"
              placeholder="Consulta o Proyecto"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label className="text-gray-300 block mb-1">Mensaje</label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-3 h-32 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none text-gray-200"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition font-semibold"
          >
            Enviar Mensaje
          </button>
        </motion.form>
      </div>

      {/* --- PANEL DE INFORMACIÓN A LA DERECHA --- */}
      <motion.div
        className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl space-y-6"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>

        <div className="space-y-4 text-gray-300">
          <p>
            📧 <strong>Email:</strong> rickrhdev@gmail.com
          </p>
          <p>
            💼 <strong>LinkedIn:</strong> /rickdev
          </p>
          <p>
            🧑‍💻 <strong>GitHub:</strong> /rick-rh
          </p>
          <p>
            📍 <strong>Ubicación:</strong> Huancayo, Perú
          </p>
        </div>
      </motion.div>
    </section>
  );
}
