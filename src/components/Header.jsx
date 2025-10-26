// HeaderElypsis.jsx
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A] border-b border-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1">
            <img src="/logo.png" className="w-15" />
            <span className="text-2xl font-bold text-white tracking-tight mb-1">
              Elypsis
            </span>
          </a>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {["Início", "Recursos", "Docs", "Baixar"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-400 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Botão download */}
          <a
            href="/download"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-blue-400 to-indigo-700 text-white text-sm font-semibold hover:brightness-110 transition"
          >
            Baixar Elypsis
          </a>

          {/* Menu mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#1a1a1a]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#1a1a1a]">
          <nav className="flex flex-col gap-2 p-4">
            {["Início", "Recursos", "Docs", "Baixar"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-400 hover:text-white py-2 transition"
              >
                {item}
              </a>
            ))}
            <a
              href="/download"
              className="mt-2 block text-center px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold hover:brightness-110"
            >
              Baixar Elypsis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
