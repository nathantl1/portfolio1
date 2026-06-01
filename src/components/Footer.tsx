import { profile } from '../data/profile';
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 mb-2">
          © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
        </p>
        <p className="text-gray-500 text-sm">
          Construído com React 18, Vite 5 e Tailwind CSS 4
        </p>
      </div>
    </footer>
  );
}