// PricingSectionWithBanner.jsx
import React from "react";

export default function PricingSectionWithBanner() {
  const plans = [
    {
      name: "Gratuito",
      price: "R$0",
      features: [
        "Execução básica de scripts",
        "5 Mensagens gratuítas diárias com a WiEn",
        "Suporte via Discord",
      ],
      highlight: false,
    },
    {
      name: "Premium",
      price: "R$23/mês",
      features: [
        "Execução de scripts sem restrição",
        "Mensagens ilimitadas com a WiEn",
        "Atualizações automáticas",
        "Suporte prioritário no Discord",
      ],
      highlight: true,
    },
    {
      name: "Ultra",
      price: "R$56/mês",
      features: [
        "Todos os recursos Premium",
        "Scripts premium",
        "Segurança máxima",
        "Sistema de Preveenção de banimentos.",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="relative bg-[#0a0a0a] text-gray-200 py-24 px-6">
      {/* Fundo sutil */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b0b0b] via-black to-[#111]"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          Planos de Assinatura
        </h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Escolha o plano Elypsis que melhor se adapta às suas necessidades e tenha acesso a recursos poderosos, estabilidade e segurança avançada.
        </p>

        {/* Cards de preços */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all hover:scale-[1.03] ${
                plan.highlight ? "bg-gradient-to-b from-white/10 to-black/30 border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]" : "bg-white/5"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
              <p className="text-3xl font-extrabold mb-6 text-white">{plan.price}</p>
              <ul className="mb-8 text-gray-400 text-sm space-y-2">
                {plan.features.map((feature, j) => (
                  <li key={j}>• {feature}</li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-md text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-white/20 hover:bg-white/30 text-white"
                    : "bg-white/5 hover:bg-white/10 text-gray-200"
                }`}
              >
                Escolher Plano
              </button>
            </div>
          ))}
        </div>

        {/* Banner de incentivo */}
        <div className="relative bg-gradient-to-r from-white/10 to-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:shadow-[0_0_70px_rgba(255,255,255,0.08)] transition-all">
          <div className="text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-bold text-white mb-2">Quer mais opções?</h3>
            <p className="text-gray-400 max-w-xl">
              Explore nossos recursos avançados, upgrades exclusivos e customizações adicionais para aproveitar ao máximo o Elypsis.
            </p>
          </div>
          <a
            href="#more-options"
            className="px-8 py-3 rounded-md bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition"
          >
            Ver Outras Opções
          </a>
        </div>
      </div>
    </section>
  );
}
