import { useState } from "react";
import imagem from "./assets/image.png";
import img from "./assets/images.jpeg";
import img2 from "./assets/foto1.webp";
import img3 from "./assets/foto3.webp";
import img4 from "./assets/perfil.svg";
import sobre from "./assets/sobre.svg";


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

  return (
    <>
      <main className="bg-[#FBF9F6] min-h-screen">
        <nav className="fixed absolute z-10 top-0 w-full h-20 bg-[#2C1B12] text-white flex items-center justify-center opacity-70">
          <ul className="flex p-4 gap-20 justify-center">
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
              <a href="#contact">Contatos</a>
            </li>
          </ul>
        </nav>

        <section id="home" className=" scroll-mt-20 mt-20 md:mt-30">
          <div className="w-full h-[100vh] relative">
            <img src={img4} alt="Imagem de Clínica de Saúde"className="w-[100%] h-[100%]  fade-in" />

            <p className="absolute bottom-[50%] left-8 text-4xl md:text-5xl text-[#2C1B12 font-bold fade-in text-red">
              Samilla  <span className="text-[#D0C7CB]"> Maia</span>
            </p>
              
              <button className="absolute bottom-[43%] left-8 bg-[#D4AF37] text-[#2C1B12] font-bold py-2 px-4 hover:bg-[#C19A3F] transition-colors">
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

        <section className=" flex flex-col items-center justify-center gap-10 scroll-mt-20 p-4" id="contact" >  
          <div className="flex gap-5 mt-10"> 
          <div> <a href="https://www.instagram.com/studiosamillamaia/"> <i className="fab fa-instagram hover:text-[#D4AF37]"></i></a> </div>
          <div> <a href="https://www.instagram.com/studiosamillamaia/"> <i className="fab fa-facebook hover:text-[#D4AF37]"></i></a>  </div>
          <div> <a href="https://www.instagram.com/studiosamillamaia/"> <i className="fab fa-twitter hover:text-[#D4AF37]"></i></a>   </div>
          </div>  </section>

        <footer className="bg-[#2C1B12] w-full h-full flex flex-col items-center justify-center gap-10 text-white scroll-mt-20" id="contact">
         

          <div className="text-center p-4 mt-10">
            <p>
              &copy; 2026 Studio Samilla Maia. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default LandingPage;
