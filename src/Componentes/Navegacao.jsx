import React from "react";
import logo from "../assets/logo.svg";


function Navegacao() {
  return (

     <nav className="fixed z-10 top-0 w-full h-24 bg-black text-white opacity-90">
              <div className=" h-full flex justify-between px-9">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="Logo" className="h-40 w-auto" />
                </div>
    
                <ul className="flex p-4 gap-8 items-center text-xl ">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">Sobre</a>
                  </li>
                  <li>
                    <a href="#services">Tratamentos</a>
                  </li>
                  <li>
                    <a href="#cursos">Cursos</a>
                  </li>
                  <li>
                    <a href="#results">Resultados</a>
                  </li>
                  <li>
                    <a href="#contact">Contatos</a>
                  </li>
                </ul>
              </div>
            </nav>
  );
}
export default Navegacao