// Corrigido: Removido os ícones não usados e adicionado o Mail
import { ArrowRight, Code2, Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center justify-center bg-linear-to-br from-gray-50 to-brand-primary/5"
    >
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold  mb-6 leading-tight">
          Olá, eu sou{" "}
          {/* Atualizado para a nova sintaxe de gradiente de texto do v4 */}
          <span className="bg-linear-to-r from-brand-primary to-cyan-700 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
          {profile.bio}
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {profile.projects.map((proj, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <Code2 size={16} className="text-brand-primary" />
              <span className="text-gray-700">{proj.tech.join(", ")}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-primary text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:brightness-95 cursor-pointer focus:ring-4 focus:ring-brand-primary/20"
          >
            <Mail size={18} />
            Entre em Contato
          </a>

          <a
            href="#projetos"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg border-2 border-gray-200 hover:border-brand-primary transition-colors focus:ring-4 focus:ring-brand-primary/20"
          >
            <ArrowRight size={18} />
            Ver Portfólio
          </a>
        </div>
      </div>
    </section>
  );
}
