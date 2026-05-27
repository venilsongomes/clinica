import { useState } from 'react';
import logo from '../assets/logo.svg';

function Navegacao() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav aria-label="Menu principal" className="fixed font-serif shadow-md z-10 top-0 w-full h-15 md:h-24 bg-[#1A1A1A] border-b border-gray-600 text-white flex justify-between items-center p-6 px-5 md:px-8">
      <div className="flex items-center gap-2">
        <a href="#home" className="inline-flex items-center">
          <img src={logo} alt="Logo Samilla Maia" className="h-50 w-auto hidden md:inline-block" />
        </a>
      </div>

      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="flex items-center gap-2 md:hidden z-20"
      >
        <i className="fas fa-bars" aria-hidden="true"></i>
        <span className="sr-only">Abrir menu</span>
      </button>

      <ul className="hidden md:flex p-4 gap-8 items-center italic text-xl">
        <li><a href="#home" className="hover:text-[#D4AF37]">Home</a></li>
        <li><a href="#about" className="hover:text-[#D4AF37]">Sobre</a></li>
        <li><a href="#cursos" className="hover:text-[#D4AF37]">Cursos</a></li>
        <li><a href="#services" className="hover:text-[#D4AF37]">Tratamentos</a></li>
        <li><a href="#results" className="hover:text-[#D4AF37]">Resultados</a></li>
        <li><a href="#contact" className="hover:text-[#D4AF37]">Contatos</a></li>
      </ul>

      <ul
        id="mobile-menu"
        className={`fixed right-0 top-15 w-full bg-[#1A1A1A] border-b flex flex-col gap-3 p-3 italic text-xl transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <li><a href="#home" className="hover:text-[#D4AF37]" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" className="hover:text-[#D4AF37]" onClick={toggleMenu}>Sobre</a></li>
        <li><a href="#cursos" className="hover:text-[#D4AF37]" onClick={toggleMenu}>Cursos</a></li>
        <li><a href="#services" className="hover:text-[#D4AF37]" onClick={toggleMenu}>Tratamentos</a></li>
        <li><a href="#results" className="hover:text-[#D4AF37]" onClick={toggleMenu}>Resultados</a></li>
        <li><a href="#contact" className="hover:text-[#D4AF37]" onClick={toggleMenu}>Contatos</a></li>
      </ul>
    </nav>
  );
}

export default Navegacao;