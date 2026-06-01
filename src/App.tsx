import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import React from 'react';

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;