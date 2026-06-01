import { ExternalLink } from "lucide-react";
import { profile } from "../data/profile";

export default function Projetos() {
  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Projetos <span className="text-blue-600">Recém-Lançados</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {profile.projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {proj.title}
              </h3>
              <p className="text-gray-600 mb-4">
                Desenvolvido com as melhores práticas de código limpo e
                arquitetura escalável.
              </p>
              <div className="flex gap-2 mb-6">
                {proj.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {/* Link do Código com Ícone do GitHub em SVG */}
                <a
                  href="#"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <svg
                    className="w-18px h-18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Código
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium"
                >
                  <ExternalLink size={18} /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
