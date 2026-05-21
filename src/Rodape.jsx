import React  from "react";


function Rodape() {
  return (
     <section
          className="  bg-black text-gray-300 font-sans flex flex-col items-center justify-center gap-10 scroll-mt-20  text-[#FBF9F6] bg-[#1C120C] h-auto w-full  "
          id="contact" 
        > 
        <div className="flex gap-10 md:gap-40 flex-col md:flex-row items-center justify-center  md:mt-14 p-12">   


          <div className="flex flex-col items-center text-xl gap-2 ">
            <h1 className="ext-[#D4AF37] text-sm tracking-[0.2em] uppercase font-semibold flex items-center gap-2"> Endereço </h1> 
            <h2 className="text-white text-sm font-light max-w-xs "> Rua Exemplo,  123 - Montes Claros </h2>
          </div>
          <div className="flex flex-col items-center text-xl gap-2">
            
            <h1 className="ext-[#D4AF37] text-sm tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
                  Atendimento
            </h1>
            <h2 className="text-white text-sm font-light max-w-xs"> Segunda a Sexta, 8h às 18h</h2>
          </div>

          <div className="flex flex-col items-center text-xl gap-2">
            <p className="ext-[#D4AF37] text-sm tracking-[0.2em] uppercase font-semibold flex items-center gap-2"> Redes Sociais </p>
            <div className="flex gap-4">
            
              <div>
                
                <a href="https://www.instagram.com/studiosamillamaia/" target="_blank" class="text-white hover:text-[#D4AF37] text-2xl transition-transform duration-300 hover:scale-125"><i class="fab fa-instagram"></i></a>
              </div>
              <div>
               
                <a href="https://www.facebook.com/samilla.maia.3/" target="_blank" class="text-white hover:text-[#D4AF37] text-2xl transition-transform duration-300 hover:scale-125">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
              <div>
               
                <a href="https://wa.me/5538999223255" target="_blank" class="text-white hover:text-[#D4AF37] text-2xl transition-transform duration-200 hover:scale-125">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
          </div>
           
          <footer className="border-t border-gray-700 text-[14px] text-[#FBF9F6] w-full p-4 flex items-center justify-center"> &copy; 2026 Samilla Maia. Todos os direitos reservados.</footer>
         </section>
  );
}
export default Rodape