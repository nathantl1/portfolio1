import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

interface HeaderProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function Header({ isOpen, toggleMenu }: HeaderProps) {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold bg-linear-to-r from-brand-primary to-cyan-500 bg-clip-text text-transparent">
          {profile.name}
        </a>

        <div className="hidden md:flex space-x-8">
          {['#home', '#sobre', '#projetos', '#contato'].map((href) => (
            <a 
              key={href} 
              href={href}
              className="text-gray-600 hover:text-brand-primary transition-colors font-medium"
            >
              {href.replace('#', '').toUpperCase()}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* SVG Inline do GitHub */}
          <a href={profile.github} aria-label="GitHub" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700 hover:text-brand-primary flex items-center justify-center">
            <svg className="w-20px h-20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          {/* SVG Inline do LinkedIn */}
          <a href={profile.linkedin} aria-label="LinkedIn" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700 hover:text-brand-primary flex items-center justify-center">
            <svg className="w-20px h-20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full cursor-pointer"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
