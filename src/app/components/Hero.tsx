export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center gap-6 mt-20">

      {/* Logo */}
      <img
        src="/favicon.ico"
        alt="Rick Dev Logo"
        className="w-60 h-60 rounded-full object-cover"
      />

      <h2 className="text-5xl font-extrabold">
        Hola, soy <span className="text-blue-400">Ricardo Romero</span>
      </h2>

      <p className="text-gray-300 max-w-xl text-lg">
        Desarrollador Full Stack especializado en{" "}
        <span className="text-blue-400 font-semibold">
          Next.js, NestJS y React
        </span>
        . Construyo sistemas reales de inicio a producción — desde aplicaciones
        web y móviles hasta plataformas empresariales a medida.
      </p>

      {/* ---- BADGES ---- */}
      <div className="flex flex-wrap gap-2 justify-center mt-2">
        {[
          "Full Stack Developer",
          "React · Next.js · NestJS",
          "Titulado SENATI 2024",
          "Huancayo, Perú",
        ].map((tag, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/25"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}