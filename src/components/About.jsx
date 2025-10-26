// AboutElypsis.jsx
import React from "react";

export default function AboutElypsis() {
  return (
    <section className="relative overflow-hidden bg-black text-gray-200 py-24 px-6 md:px-12 flex flex-col items-center justify-center">
      {/* Bolhas de fundo com linhas */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
          {/* Linhas conectando */}
          <line x1="10%" y1="20%" x2="30%" y2="40%" />
          <line x1="30%" y1="40%" x2="50%" y2="15%" />
          <line x1="50%" y1="15%" x2="75%" y2="35%" />
          <line x1="75%" y1="35%" x2="90%" y2="10%" />
          <line x1="15%" y1="70%" x2="35%" y2="90%" />
          <line x1="35%" y1="90%" x2="60%" y2="65%" />
          <line x1="60%" y1="65%" x2="85%" y2="80%" />
        </g>

        <g fill="rgba(255,255,255,0.08)">
          {/* Bolhas */}
          <circle cx="10%" cy="20%" r="18" />
          <circle cx="30%" cy="40%" r="28" />
          <circle cx="50%" cy="15%" r="22" />
          <circle cx="75%" cy="35%" r="30" />
          <circle cx="90%" cy="10%" r="15" />
          <circle cx="15%" cy="70%" r="25" />
          <circle cx="35%" cy="90%" r="18" />
          <circle cx="60%" cy="65%" r="24" />
          <circle cx="85%" cy="80%" r="20" />
        </g>
      </svg>

      {/* Luzes suaves por trás */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/10 blur-[150px] rounded-full animate-pulse delay-500"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-white">
          Sobre o <span className="text-gray-400">Elypsis</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          O Elypsis nasceu da ideia de criar um executor de scripts que
          realmente unisse **estabilidade, velocidade e design moderno**.
          Enquanto outros se limitam, o Elypsis eleva a experiência de
          execução a outro nível — com uma interface fluida, leve e
          arquitetura otimizada para performance máxima.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition">
            <div className="w-10 h-10 mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Desempenho</h3>
            <p className="text-sm text-gray-400">
              Construído para eficiência. Scripts são executados com o mínimo
              de latência e máxima estabilidade.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition">
            <div className="w-10 h-10 mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xl">🧠</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Inteligência</h3>
            <p className="text-sm text-gray-400">
              O Elypsis aprende com seu uso, adaptando comportamentos e
              otimizando scripts automaticamente.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition">
            <div className="w-10 h-10 mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xl">🛡️</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Segurança</h3>
            <p className="text-sm text-gray-400">
              Sistema de proteção interno que garante execução segura e
              previne detecções externas.
            </p>
          </div>
        </div>
      </div>

      {/* Fundo decorativo extra: rede dinâmica */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 blur-[60px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 150}px`,
              height: `${100 + Math.random() * 150}px`,
              animation: `float ${8 + Math.random() * 5}s ease-in-out infinite alternate`,
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
            transform: translateY(-30px) translateX(20px);
          }
        }
      `}</style>
    </section>
  );
}
