// BannerSection.jsx
import React from "react";

export default function BannerSection() {
  return (
    <section className="relative bg-[#0a0a0a] text-gray-100 overflow-hidden">
      {/* Banner Topo */}
      <div className="relative flex flex-col items-center justify-center py-32 text-center z-10">
        {/* Efeito de luz suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent blur-3xl"></div>

        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase bg-gradient-to-b from-gray-100 to-gray-400 bg-clip-text text-transparent">
          O Futuro do Exploiting
        </h2>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl">
          Um executor criado para transcender limites. Rápido, Invisível e
          projetado para o Domínio bsoluto.
        </p>

        {/* Decoração: linhas dinâmicas */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-white/10 to-transparent h-px"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${40 + Math.random() * 200}px`,
                animation: `moveLine ${6 + Math.random() * 8}s linear infinite`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Painel inferior “muito foda” */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 pb-24">
        {[
          {
            title: "Injeção Instantânea",
            desc: "Execuções otimizadas em microssegundos. O motor de injeção mais rápido já criado para Roblox.",
            icon: "💉",
          },
          {
            title: "Renderização Nativa",
            desc: "Interface integrada com o sistema. Visual limpo, sem interferência externa.",
            icon: "🧬",
          },
          {
            title: "Camuflagem Total",
            desc: "Mecanismo stealth que elimina qualquer rastro. Elypsis age nas sombras.",
            icon: "🕶️",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group relative p-8 border border-white/10 rounded-2xl bg-gradient-to-b from-white/5 to-black/20 hover:from-white/10 hover:to-black/30 transition overflow-hidden"
          >
            {/* Brilho suave de fundo */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute w-[120%] h-[120%] -left-10 -top-10 bg-white/5 blur-[100px] animate-pulse"></div>
            </div>

            {/* Ícone */}
            <div className="text-3xl mb-4">{item.icon}</div>

            {/* Título */}
            <h3 className="text-xl font-semibold mb-2 text-white">
              {item.title}
            </h3>

            {/* Descrição */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* Linha animada decorativa */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/0 via-white/40 to-white/0 animate-scan"></div>
          </div>
        ))}
      </div>

      {/* Script de animação */}
      <style jsx>{`
        @keyframes moveLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>

      {/* Luz decorativa inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-white/5 blur-[120px] rounded-full"></div>
    </section>
  );
}
