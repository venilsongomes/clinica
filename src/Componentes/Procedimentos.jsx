import React from "react";
import { useState } from "react"; 
import proc1 from "../assets/proc1.svg";
import proc2 from "../assets/proc2.svg";
import proc3 from "../assets/proc3.svg";
import proc4 from "../assets/proc4.svg";
import proc5 from "../assets/proc5.svg";

function Procedimentos() {
const resultados = [
    {
      id: 1,
      title: "Rejuvenescimento Facial",
      description:
        "Clientes relatam pele mais firme e aparência renovada após o tratamento.",
      img: proc1,
    },
    {
      id: 2,
      title: "Rejuvenescimento Íntimo",
      description:
        "Melhora da autoestima com resultados naturais e recuperação rápida.",
      img: proc2,
    },
    {
      id: 3,
      title: "Saúde Preventiva",
      description:
        "Resultados de exames completos entregues com agilidade e precisão.",
      img: proc3,
    },
    {
      id: 4,
      title: "Atendimento de Emergência",
      description: "Estamos prontos para atender emergências 24 horas por dia.",
      img: proc4,
    },
    {
      id: 5,
      title: "Vacinação",
      description:
        "Proteja-se com nossas vacinas disponíveis para todas as idades.",
      img: proc5,
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? resultados.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === resultados.length - 1 ? 0 : prev + 1));
  };


  return(
    <section
          className="text-center p-3 scroll-mt-20 bg-[#F9F5F2] italic"
          id="results"
        >
          <div className="max-w-6xl mx-auto py-10 px-4">
            <h2 className="font-bold text-3xl  text-gray-800 mb-6">
              Resultados
            </h2>

            <div className="relative overflow-hidden rounded-3xl shadow-lg bg-white">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {resultados.map((item) => (
                  <article
                    key={item.id}
                    className="min-w-full flex flex-col md:flex-row items-center gap-6 p-8"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full md:w-1/2 h-72 object-cover rounded-3xl"
                    />
                    <div className="w-full md:w-1/2 text-left">
                      <h3 className="text-2xl font-bold text-[#2C1B12] mb-4">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-[#2C1B12] text-white w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#3d2a1c]"
                aria-label="Slide anterior"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-[#2C1B12] text-white w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#3d2a1c]"
                aria-label="Próximo slide"
              >
                ›
              </button>
            </div>
            <div className="mt-4 flex justify-center gap-3">
              {resultados.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-3 w-3 rounded-full ${
                    activeSlide === index ? "bg-[#2C1B12]" : "bg-gray-300"
                  }`}
                  aria-label={`Ir para resultado ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
  );
}
export default Procedimentos;