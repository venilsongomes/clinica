import {react , useState} from "react";
import curso1 from "../assets/sami.svg";


function Cursos() {
   
    const cursos = [
        {id: 1, nome: "Limpeza de Pele Profunda", descricao: " Nesse curso, você aprenderá técnicas avançadas de limpeza de pele.", img: curso1},
        {id: 2, nome: "Tratamento de Acne", descricao: " Nesse curso, você aprenderá técnicas avançadas de tratamento de acnes.", img: curso1},
        {id: 3, nome: "Microagulhamento", descricao: " Nesse curso, você aprenderá técnicas avançadas de microagulhamento.", img: curso1}
];

  return (
      <section className="text-center  md:p-24 p-5 scroll-mt-20" id="cursos">
          <h2 className="  ">
            <p className="font-serif text-3xl md:text-4xl text-zinc-900 tracking-wideext-[#2C1B12] mb-10"> Conheça nossos Cursos </p>
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
                <button className="bg-[#FAA000] hover:bg-[#C19A3F] text-[#5C423E] font-bold py-2 px-2 rounded-lg transition-colors mt-4">
                  <a
                  href="https://wa.me/?phone=5538999223255&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20cursos."
                  target="_blank"
                  rel="noreferrer noopener"
                  className=" justify-center bg-[#FAA000] hover:bg-[#C19A3F] text-[#5C423E] font-bold p-1 rounded-lg transition-colors inline-block"
                >
                  Conheça nossos cursos
                </a>  
                </button>
              </li>
              
            ))}

            
          </ul>
        </section>
  );
}  
export default Cursos                                        