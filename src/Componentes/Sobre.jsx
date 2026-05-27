import sobre from "../assets/sobre1.svg";
import sobre2 from "../assets/sobre3.svg";

function Sobre() {
  return (
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
              Conheça a esteta e Especialista
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 tracking-wide">
              Quem Somos
            </h2>
          </div>

          <div className="flex flex-col gap-6 text-zinc-600 font-sans text-base md:text-lg leading-relaxed font-light">
  
          <p>
            Prazer, sou <span className="font-medium text-zinc-900">Samilla Maia</span>. Minha jornada na estética avançada nasceu de um 
            propósito muito claro: transformar a autoestima por meio de uma prática integrativa, segura e baseada em evidências científicas.
          </p>
  
            <p>
              Ao longo da minha trajetória, escolhi me especializar em duas das disfunções dermatológicas que mais impactam a 
              confiança de uma mulher: o <strong className="font-semibold text-zinc-900">rejuvenescimento íntimo</strong> e as <strong className="font-semibold text-zinc-900">Estrias</strong>.
            </p>

  <p>
    Para o tratamento de Rejuvenescimento Íntimo, trabalho de forma totalmente <span className="font-medium text-zinc-900">sem injetáveis</span>, 
    com atuação baseada em uma visão integrativa do cuidado feminino.
    Minha missão vai além da estética tradicional: acredito que cada atendimento deve unir ciência, 
    acolhimento e individualidade, promovendo resultados naturais e respeitando as necessidades únicas de cada mulher.
  </p>

  {/* Seção de Outros Tratamentos Repaginada */}
  <div className="mt-2">
    <p className="font-medium text-zinc-900 mb-3">
      Além disso, atuo com outros tratamentos estéticos avançados:
    </p>
    
    {/* Lista organizada em grid: 1 coluna no mobile, 2 colunas em telas maiores */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm md:text-base border-l-2 border-[#D4AF37] pl-4">
      <li className="flex items-center gap-2">
        <span className="text-[#D4AF37]">•</span> Estética Íntima Integrativa
      </li>
      <li className="flex items-center gap-2">
        <span className="text-[#D4AF37]">•</span> Rejuvenescimento Facial
      </li>
      <li className="flex items-center gap-2">
        <span className="text-[#D4AF37]">•</span> Tratamentos para Flacidez
      </li>
      <li className="flex items-center gap-2">
        <span className="text-[#D4AF37]">•</span> Microagulhamento
      </li>
      <li className="flex items-center gap-2">
        <span className="text-[#D4AF37]">•</span> Terapias Enzimáticas
      </li>
      <li className="flex items-center gap-2 sm:col-span-2">
        <span className="text-[#D4AF37]">•</span> Protocolos personalizados para saúde e beleza da pele
      </li>
    </ul>
  </div>

  {/* Frase de Efeito destacada */}
  <p className="italic text-[#D4AF37] text-center md:text-left font-serif text-lg md:text-xl border-t border-zinc-200 pt-4 mt-2">
    “A estética não é sobre mudar quem você é, mas revelar com leveza aquilo que já existe em você.”
  </p>
  
</div>
        </div>
        </div>
        </section>
) }
export default Sobre