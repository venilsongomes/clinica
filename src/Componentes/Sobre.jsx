import {react, useState} from "react";
import sobre from "../assets/sobre1.svg";


function  Sobre(){
    return( 
    <section className="text-center  scroll-mt-20 bg-[#E4D6D6] py-24 px-6 md:px-12" id="about">
          <p className="text-3xl font-bold p-10 text-[#2C1B12]">Quem somos</p>

         

          <div className="flex flex-col md:flex-row gap-8 p-6 ">


          <img
              src={sobre}
              alt="Imagem de Clínica de Saúde"
              className="object-cover w-[70%] fade-in"
            />

            <div className="w-full">
              <p className="text-justify  fade-in">
                Prazer, sou Samilla Maia.
                Minha jornada na estética avançada nasceu de um propósito muito claro: 
                transformar a autoestima por meio de uma prática integrativa, segura e baseada em evidências científicas. 
                Ao longo da minha trajetória, escolhi me especializar em duas das disfunções dermatológicas que mais impactam 
                a confiança de uma mulher: o Melasma e as Estrias. <br/><br/>
                Para o tratamento de Melasma, trabalho com o gerenciamento inteligente da pigmentação, 
                devolvendo a uniformidade e a luminosidade à pele sem efeito rebote. Já na área de Estrias, 
                utilizo abordagens regenerativas de ponta que estimulam o colágeno profundo, suavizando texturas e
                 devolvendo a uniformidade ao corpo.
              </p>
            </div>
          </div>
        </section>)
}
export default Sobre