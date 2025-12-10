export default function Navbar() {
  return (
    <header className="w-full fixed top-0 bg-black/40 backdrop-blur-md border-b border-blue-500/10 py-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">
          RickDev<span className="text-blue-500">.</span>
        </h1>

        <nav className="flex gap-6 text-sm">
          {["about","projects","experience","skills","education","contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover:text-blue-400 transition capitalize"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
