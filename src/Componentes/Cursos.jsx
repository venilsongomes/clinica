import curso1 from "../assets/Estrias1.svg";
import curso2 from "../assets/limpeza_de_pele.svg";
import curso3 from "../assets/microagulhamento.svg";
import curso4 from "../assets/intimo.svg";

function Cursos() {
  const cursos = [
    { id: 1, nome: "LIMPEZA DE PELE PROFUNDA", descricao: "Nesse curso, você aprenderá técnicas avançadas de limpeza de pele.", img: curso2},
    { id: 2, nome: "CURSO DE REJUVENESCIMENTO ÍNTIMO E CLAREAMENTO", descricao: "Nesse curso, você aprenderá técnicas avançadas de rejuvenescimento íntimo e clareamento.", img: curso4 },
    { id: 3, nome: "MICROAGULHAMENTO FACIAL", descricao: "Nesse curso, você aprenderá técnicas avançadas de microagulhamento.", img: curso3 },
    { id: 4, nome: "ESTRIAS", descricao: "Nesse curso, você aprenderá técnicas avançadas para o tratamento de estrias.", img: curso1 },
  ];

  return (

      <section className="text-center md:p-24 p-5 scroll-mt-20" id="cursos">
        <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 tracking-wide mb-10">
          Conheça nossos cursos
        </h2>

          <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {cursos.map((curso) => (
              <li
                key={curso.id}
                className="justify-center items-center flex flex-col p-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <img src={curso.img} alt={curso.nome} className="" />
                <h3 className="mt-10 mb-10 text-lg font-bold text-[#2C1B12]">
                  {curso.nome}
                </h3>
                <p className="text-lg mb-4">{curso.descricao}</p>
                <a
                  href="https://wa.me/5538999223255?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20cursos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 border border-zinc-800 text-zinc-800 hover:bg-zinc-900 hover:text-white font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 rounded-none"
                >
                  Garantir Minha Vaga
                </a>
              </li>
              
            ))}

          </ul>
        </section>
  );
}  
export default Cursos                                        