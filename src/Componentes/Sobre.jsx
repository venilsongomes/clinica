import {react, useState} from "react";
import sobre from "../assets/sobre1.svg";
import sobre2 from "../assets/sobre3.svg";


function  Sobre(){
    return( 
    <section className="bg-[#FDFBF7] text-zinc-800 py-20 px-6 md:px-12 lg:px-24" id="about">

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">


          <div className="md:col-span-5 flex justify-center">
          <div className="relative group max-w-sm md:max-w-full">
            {/* Detalhe elegante de borda atrás da foto */}
            <div className=" absolute bottom-4 -right-4 w-full h-full border border-[#D4AF37] rounded-lg pointer-events-none transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            
            <img 
              src={sobre2} 
              alt="Dra. Samilla Maia" 
              className="rounded-lg shadow-xl object-cover w-full h-[450px] md:h-[500px] relative z-1"
            />
          </div>
        </div>

           <div className="md:col-span-7 flex flex-col gap-6 text-left">
          
        
          <div>
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold block mb-2">
              Conheça a Especialista
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 tracking-wide">
              Quem Somos
            </h2>
          </div>

          <div className="flex flex-col gap-5 text-zinc-600 font-sans text-base md:text-lg leading-relaxed font-light">
            <p>
              Prazer, sou <span className="font-medium text-zinc-900">Samilla Maia</span>. Minha jornada na estética avançada nasceu de um propósito muito claro: transformar a autoestima por meio de uma prática integrativa, segura e baseada em evidências científicas.
            </p>
            
            <p>
              Ao longo da minha trajetória, escolhi me especializar em duas das disfunções dermatológicas que mais impactam a confiança de uma mulher: o <strong className="font-medium text-zinc-900">Melasma</strong> e as <strong className="font-medium text-zinc-900">Estrias</strong>.
            </p>

            <p>
              Para o tratamento de Melasma, trabalho com o gerenciamento inteligente da pigmentação, devolvendo a uniformidade e a luminosidade à pele sem efeito rebote. Já na área de Estrias, utilizo abordagens regenerativas de ponta que estimulam o colágeno profundo, suavizando texturas e devolvendo a uniformidade ao corpo.
            </p>
          </div>

        </div>
          </div>
        </section>
) }
export default Sobre