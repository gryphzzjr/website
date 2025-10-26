import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white relative overflow-hidden">
      <Header />

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10 my-64">
        <h1 className="text-[120px] font-extrabold text-white/10 leading-none select-none">
          404
        </h1>
        <h2 className="text-3xl font-bold mt-12 mb-4">Página não encontrada</h2>
        <p className="text-gray-400 max-w-md mb-8">
          Parece que você foi longe demais no universo Elypsis.
          A página que você procura não existe (ou foi removida).
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Voltar à Home
        </Link>
      </main>

      {/* Bolhas de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 blur-[80px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${60 + Math.random() * 120}px`,
              height: `${60 + Math.random() * 120}px`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      <Footer />

      {/* Keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-25px) translateX(15px);
          }
        }
      `}</style>
    </div>
  );
}
