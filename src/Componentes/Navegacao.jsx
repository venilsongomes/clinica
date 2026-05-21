import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import drop from '../assets/drop.svg';

function Navegacao() {
  // Estado para controlar se o menu mobile está aberto
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed font-serif shadow-md z-10 top-0 w-full h-15 md:h-20 bg-[#1C120C] md:bg-[#1A1A1A]  mb:border-gray-300 text-white flex justify-between items-center  px-2 md:px-8">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-50 w-auto hidden md:inline-block" />
      </div>

      {/* Botão Hambúrguer / Drop (Aparece apenas no Mobile) */}
      <button onClick={toggleMenu} className="flex items-center gap-2 md:hidden z-20">
        <img src={drop} alt="Drop" className="h-10 w-10 inline-block" />
      </button>

      {/* Menu Desktop (Sempre visível em telas grandes) */}
      <ul className="hidden md:flex p-4 gap-8 items-center italic text-xl">
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="hover:text-gray-400">Sobre</a></li>
        <li><a href="#services" className="hover:text-gray-400">Tratamentos</a></li>
        <li><a href="#cursos" className="hover:text-gray-400">Cursos</a></li>
        <li><a href="#results" className="hover:text-gray-400">Resultados</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contatos</a></li>
      </ul>

      {/* Menu Mobile (Aparece apenas quando isOpen for true) */}
      <ul className={`
        fixed left-0 top-20 w-full bg-black border-b border-gray-300 flex flex-col gap-6 italic text-xl transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
      `}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>Sobre</a></li>
        <li><a href="#services" onClick={toggleMenu}>Tratamentos</a></li>
        <li><a href="#cursos" onClick={toggleMenu}>Cursos</a></li>
        <li><a href="#results" onClick={toggleMenu}>Resultados</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contatos</a></li>
      </ul>

    </nav>
  );
}

export default Navegacao;