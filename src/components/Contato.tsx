import { profile } from "../data/profile";
export default function Contato() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-8">
          Vamos <span className="text-brand-primary">Conversar?</span>
        </h2>

        <p className="text-xl text-gray-600 mb-12">
          Estou disponível para novos projetos e colaborações. Entre em contato!
        </p>

        <div className="bg-linear-to-r from-brand-primary to-cyan-500 p-8 rounded-2xl mb-8">
          <p className="text-white text-xl font-medium">{profile.email}</p>
        </div>

        <div className="flex justify-center gap-8">
          <a
            href="mailto:nathantl50@gmail.com"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Email
          </a>
          <a
            href={`https://${profile.github}`}
            className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`https://${profile.linkedin}`}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
