import React from "react";
import logo from "../assets/logo.svg";
import drop from "../assets/drop.svg";


function Navegacao() {
  return (

     <nav className="fixed z-10 top-0 w-full h-24 md:bg-black border-b border-gray-300 text-white flex justify-between opacity-90">


                <div className="flex items-center gap-2 hidden md:flex">
                  <img src={logo} alt="Logo" className="h-40 w-auto" />
                </div>
    
                <div className="flex flex-col  p-4 gap-8  items-center text-xl inline-block relative md:flex-row ">
                  
                  <button className="w-[30px] h-[30px]"> <img src={drop} alt="" /></button>
                <ul className="hidden"> 
                  <li className="">
                    <a className="display-block" href="#home">Home</a>
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

                <ul className="flex p-4 gap-8 md:items-center items-left text-xl hidden ">
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
            </nav>
  );
}
export default Navegacao