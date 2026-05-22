import React from "react";
import proc1 from "../assets/proc1.svg";
import proc2 from "../assets/proc2.svg";
import proc3 from "../assets/proc3.svg";
import proc4 from "../assets/proc4.svg";
import proc5 from "../assets/proc5.svg";

function Servicos(){

const Serviços = [
    {
      id: 1,
      name: "⚜️ Rejuvenescimento íntimo integrativo sem injetáveis e não cirúrgico;",
      description: "Agende uma consulta com nossos médicos especializados.",
      img: proc1,
    },
    {
      id: 2,
      name: "⚜️ Rejuvenescimento Facial",
      description:
        "Resultados naturais e recuperação rápida.",
      img: proc2,
    },
    {
      id: 3,
      name: "Tratamento de Melasma",
      description:
        "tratamento eficaz para o tratamento do melasma.",
      img: proc3,
    },
    {
      id: 4,
      name: "Preenchimento labial",
      description: "Estamos prontos para atender emergências 24 horas por dia.",
      img: proc4,
    },
  ];

return(

    <section className="text-center p-3 scroll-mt-20 bg-gray-100 font-serif" id="services">
          <h2 className="font-bold text-3xl  text-gray-800 mt-10 mb-10 ">
            <p className="text-[#2C1B12]"> Nossos Serviços </p>
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            {Serviços.map((serviço) => (
              <li
                key={serviço.id}
                className="justify-center items-center flex flex-col p-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <img src={serviço.img} alt={serviço.name} className="" />
                <h3 className="mt-10 mb-10 text-lg font-bold text-[#2C1B12]">
                  {serviço.name}
                </h3>
                <p className="text-lg">{serviço.description}</p>
                <a
                  href="https://wa.me/5538999223255?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20tratamento."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-[#FAA000] hover:bg-[#C19A3F] text-[#5C423E] font-bold py-2 px-4 rounded-lg transition-colors mt-4 inline-block"
                >
                  Agendar Avaliação
                </a>
              </li>
            ))}
          </ul>
        </section>

)}

export default Servicos