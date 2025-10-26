// CTASection.jsx
import React from "react";

export default function CTASection() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 px-6 overflow-hidden">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Lado esquerdo: retângulo dark com conteúdo */}
        <div className="flex-1 bg-[#111] rounded-3xl p-12 shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-md border border-white/10">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Experimente o Elypsis Hoje
          </h2>
          <p className="text-gray-400 mb-6">
            Obtenha acesso completo aos recursos avançados, segurança máxima e velocidade inigualável. Inscreva-se agora e leve seus scripts para o próximo nível.
          </p>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>• Execução ultra-rápida</li>
            <li>• Interface futurista</li>
            <li>• Suporte prioritário</li>
          </ul>
        </div>

        {/* Lado direito: form em painel branco */}
        <div className="flex-1 bg-white rounded-3xl p-10 shadow-[0_0_50px_rgba(0,0,0,0.1)]">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Inscreva-se Agora</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nome Completo"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#0a0a0a] text-white font-semibold rounded-lg hover:bg-gray-900 transition"
            >
              Começar Agora
            </button>
          </form>
        </div>
      </div>

      {/* Decoração: bolhas flutuantes sutis */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 blur-[60px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${60 + Math.random() * 100}px`,
              height: `${60 + Math.random() * 100}px`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          100% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
}
