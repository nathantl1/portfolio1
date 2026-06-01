import { Mail, MapPin, Calendar } from "lucide-react";
import { profile } from "../data/profile";
// IMPORTAR A IMAGEM AQUI (Exemplo: caminho relativo para public)
import nathanPhoto from "@/assets/images/nathan-profile.jpg";

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Sobre <span className="text-blue-600">Mim</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* SEÇÃO DA FOTO */}
          <div className="flex flex-col items-center justify-center">
            <div className=" w-full max-w-300 aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-gray-100">
              {/* TAG <img> REAL */}
              <img
                src={nathanPhoto}
                alt={profile.name}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />

              {/* Opcional: Borda ou efeito de overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-white/50 to-transparent"></div>
            </div>
          </div>

          {/* SEÇÃO DE TEXTO */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {profile.bio}
              <br />
              <br />
              <strong>Experiência:</strong> 3+ anos desenvolvendo aplicações web
              com React, TypeScript e Node.js.
              <br />
              <strong>Stack:</strong> React, Vite, Tailwind, Next.js,
              TypeScript, PostgreSQL
              <br />
              <strong>Atuais:</strong> Em constante evolução com as novas
              tecnologias do mercado.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <span className="flex items-center gap-2">
                <Mail size={18} />
                {profile.email}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={18} />
                Três Lagoas, MS
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                Disponível para projetos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
