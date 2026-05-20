import {react , useState} from "react";
import curso1 from "../assets/sami.svg";


function Cursos() {
   
    const cursos = [
        {id: 1, nome: "Limpeza de Pele Profunda", descricao: " Nesse curso, você aprenderá técnicas avançadas de limpeza de pele.", img: curso1},
        {id: 2, nome: "Tratamento de Acne", descricao: " Nesse curso, você aprenderá técnicas avançadas de tratamento de acnes.", img: curso1},
        {id: 3, nome: "Microagulhamento", descricao: " Nesse curso, você aprenderá técnicas avançadas de microagulhamento.", img: curso1}
];

  return (
      <section className="text-center md:px-24 py-20 scroll-mt-20" id="services">
          <h2 className="font-bold text-3xl  text-gray-800 mt-10 mb-10 ">
            <p className="text-[#2C1B12]"> Cursos </p>
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {cursos.map((curso) => (
              <li
                key={curso.id}
                className="justify-center items-center flex flex-col p-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <img src={curso.img} alt={curso.nome} className="" />
                <h3 className="mt-10 mb-10 text-lg font-bold text-[#2C1B12]">
                  {curso.nome}
                </h3>
                <p className="text-lg">{curso.descricao}</p>
              </li>
            ))}
          </ul>
        </section>
  );
}  
export default Cursos                                        