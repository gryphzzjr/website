// HeroElypsis.jsx
export default function HeroElypsis() {
    return (
      <section
        className="relative min-h-screen flex items-center justify-center text-center bg-black overflow-hidden"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Conteúdo */}
        <div className="relative z-10 px-6 md:px-10 max-w-3xl">
          {/* Logo + Nome */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Elypsis Executor
            </h1>
          </div>

          {/* Subtítulo */}
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
            O executor definitivo para Roblox. Rápido, seguro e com tecnologia
            de injeção avançada.
            Domine seus scripts com estabilidade e poder absoluto.
          </p>

          {/* Botões principais */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/download"
              className="px-6 py-3 rounded-md text-white font-semibold text-sm bg-gradient-to-r from-blue-400 to-indigo-700 hover:brightness-110 transition"
            >
              Baixar Agora
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-md text-gray-300 border-2 border-blue-700 hover:bg-gray-800/60 hover:text-white transition text-sm font-semibold"
            >
              Ver Recursos
            </a>
          </div>

          {/* Slogan pequeno */}
          <p className="mt-8 text-sm text-gray-500 tracking-wide uppercase">
            Veloz. Invisível. Elypsis.
          </p>
        </div>

        {/* Efeito gradiente de luz */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 pointer-events-none"></div>
      </section>
    );
  }
