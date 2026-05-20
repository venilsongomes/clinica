import { useState } from "react";
import imagem from "./assets/image.png";
import img from "./assets/images.jpeg";
import img2 from "./assets/foto1.webp";
import img3 from "./assets/foto3.webp";
import img4 from "./assets/perfil.svg";
import sobre from "./assets/sobre.svg";
import logo from "./assets/logo.svg";
import proc1 from "./assets/proc1.svg";
import proc2 from "./assets/proc2.svg";
import proc3 from "./assets/proc3.svg";
import proc4 from "./assets/proc4.svg";
import proc5 from "./assets/proc5.svg";


function LandingPage() {
  const Serviços = [
    {
      id: 1,
      name: "⚜️ Rejuvenescimento íntimo integrativo sem injetáveis e não cirúrgico;",
      description: "Agende uma consulta com nossos médicos especializados.",
      img: img2,
    },
    {
      id: 2,
      name: "⚜️ Rejuvenescimento Facial",
      description:
        "Realize exames laboratoriais com resultados rápidos e precisos.",
      img: img3,
    },
    {
      id: 3,
      name: "Vacinação",
      description:
        "Proteja-se com nossas vacinas disponíveis para todas as idades.",
      img: imagem,
    },
    {
      id: 4,
      name: "Atendimento de Emergência",
      description: "Estamos prontos para atender emergências 24 horas por dia.",
      img: img,
    },
  ];

  const resultados = [
    {
      id: 1,
      title: "Rejuvenescimento Facial",
      description: "Clientes relatam pele mais firme e aparência renovada após o tratamento.",
      img: proc1,
    },
    {
      id: 2,
      title: "Rejuvenescimento Íntimo",
      description: "Melhora da autoestima com resultados naturais e recuperação rápida.",
      img: proc2,
    },
    {
      id: 3,
      title: "Saúde Preventiva",
      description: "Resultados de exames completos entregues com agilidade e precisão.",
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
      description: "Proteja-se com nossas vacinas disponíveis para todas as idades.",
      img: proc5,
    }
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? resultados.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === resultados.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <main className="bg-[#FBF9F6] min-h-screen">

        <nav className="fixed z-10 top-0 w-full h-24 bg-black text-white opacity-90">
          <div className=" h-full flex justify-between px-9">

            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-18 w-auto" />
            </div>

            <ul className="flex p-4 gap-8 items-center">
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
                <a href="#results">Resultados</a>
              </li>
              <li>
                <a href="#contact">Contatos</a>
              </li>
            </ul>
          </div>
        </nav>

        <section id="home" className=" scroll-mt-20 mt-20 md:mt-30">
          <div className="w-full h-[100vh] relative">
            <img src={img4} alt="Imagem de Clínica de Saúde" className="w-full h-[100%] object-right fade-in" />

            <p className="absolute bottom-[50%] left-8 text-4xl md:text-5xl text-[#2C1B12] font-bold fade-in">
              Samilla  <span className="text-[#D0C7CB]"> Maia</span>
            </p>
              
              <button className="absolute bottom-[43%] left-8 bg-[#D4AF37] text-[#2C1B12] font-bold py-2 px-4 hover:bg-[#C19A3F] transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-200">
                Agendar Consulta
              </button>


          </div>
        </section>

        <section className="text-center  scroll-mt-20 bg-[#E4D6D6]" id="about">
          <p className="text-xl font-bold p-10">Quem somos</p>

          <div className="flex flex-col md:flex-row gap-8 p-6 ">
            
            <div className="w-full">
              <p className="text-justify  fade-in">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt molestiae officia 
                magni! Aliquid quasi voluptatibus, dignissimos fugiat saepe asperiores officia aperiam! 
                Impedit, mollitia autem! Numquam non culpa architecto repudiandae hic?
                
              </p>
            </div>
             <img src={sobre} alt="Imagem de Clínica de Saúde"className="w-[70%] h-[500px] fade-in" />
            
          </div>
        </section>

        <section className="text-center p-3 scroll-mt-20" id="services">
        

          <h2 className="font-bold text-xl text-gray-800 mt-10 mb-10 ">
            <p> Nossos Serviços  </p>
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            {Serviços.map((serviço) => (
              <li
                key={serviço.id}
                className="justify-center items-center flex flex-col p-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <img src={serviço.img} alt={serviço.name} className="" />
                <h3 className="mt-10 mb-10 text-lg font-bold text-green-800">
                  {serviço.name}
                </h3>
                <p className="text-lg">{serviço.description}</p>
              </li>
            ))}
          </ul>
        </section>


        <section className="text-center p-3 scroll-mt-20 bg-[#F9F5F2]" id="results">
          <div className="max-w-6xl mx-auto py-10 px-4">
            <h2 className="font-bold text-2xl text-gray-800 mb-6">Resultados</h2>

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
                      <p className="text-lg text-gray-700">{item.description}</p>
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

        <section className=" flex flex items-center justify-center gap-10 scroll-mt-20 p-4" id="contact" >  

        <div><h1 className="text-[#2C1B12] font-bold"> Endereço  </h1>Rua Exemplo, 123 - São Paulo/SP</div>
        <div class="flex flex-col gap-5"> <h1 className="text-[#2C1B12] font-bold">Horário de Funcionamento </h1>Atendimento Segunda a Sexta, 8h às 18h</div>


          <div className="flex flex-col gap-5 mt-10"> 

            <p className="text-[#2C1B12] font-bold"> Redes Sociais  </p>
            <div className="flex gap-4">  <div> <a href="https://www.instagram.com/studiosamillamaia/"> <i className="fab fa-instagram hover:text-[#D4AF37]"></i></a> </div>
          <div> <a href="https://www.instagram.com/studiosamillamaia/"> <i className="fab fa-facebook hover:text-[#D4AF37]"></i></a>  </div>
          <div> <a href="https://www.instagram.com/studiosamillamaia/"> <i className="fab fa-twitter hover:text-[#D4AF37]"></i></a>   </div>
          </div>  </div>
          </section>

        <footer className="bg-[#2C1B12] w-full h-full flex flex-col items-center justify-center gap-10 text-white scroll-mt-20" id="contact">
         

          <div className="text-center p-4">
            <p>
              &copy; 2026 Samilla Maia. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default LandingPage;
