// Footer.jsx
import React from "react";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-16 px-6 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Logo e descrição */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Elypsis</h2>
          <p className="text-gray-400 text-sm">
            Executor futurista para Roblox, rápido, seguro e elegante.
            Todos os recursos que você precisa, em uma interface futurista.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-white font-semibold mb-4">Produto</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#pricing" className="hover:text-white transition">Preços</a></li>
            <li><a href="#download" className="hover:text-white transition">Download</a></li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h3 className="text-white font-semibold mb-4">Empresa</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">Sobre</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contato</a></li>
            <li><a href="#careers" className="hover:text-white transition">Carreiras</a></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-white font-semibold mb-4">Siga-nos</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://discord.com" target="_blank" className="hover:text-white transition"><FaDiscord /></a>
            <a href="https://twitter.com" target="_blank" className="hover:text-white transition"><FaTwitter /></a>
            <a href="https://github.com" target="_blank" className="hover:text-white transition"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Linha separadora */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Elypsis. Todos os direitos reservados.
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          100% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </footer>
  );
}
