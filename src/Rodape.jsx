import React  from "react";


function Rodape() {
  return (
     <section
          className=" flex flex-col items-center justify-center gap-10 scroll-mt-20  text-[#FBF9F6] h-auto w-full  "
          id="contact" 
        > 
        <div className="flex gap-40 flex-col md:flex-row items-center justify-center mt-14 text-[#2C1B12] p-12">   


          <div className="flex flex-col items-center text-[#2C1B12]">
            <h1 className="text-[#2C1B12] font-bold"> Endereço </h1> <h2> Rua Exemplo,
            123 - Montes Claros - </h2>
          </div>
          <div className="flex flex-col items-center text-[#2C1B12]">
            
            <h1 className="    text-[#2C1B12] font-bold">
              Horário de Funcionamento
            </h1>
            Atendimento Segunda a Sexta, 8h às 18h
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[#2C1B12] text-xl font-bold"> Redes Sociais </p>
            <div className="flex gap-4">
            
              <div>
                
                <a href="https://www.instagram.com/studiosamillamaia/" target="_blank" class="text-red-300 hover:text-white text-3xl transition-transform duration-300 hover:scale-125"><i class="fab fa-instagram"></i></a>
              </div>
              <div>
               
                <a href="https://www.facebook.com/samilla.maia.3/" target="_blank" class="text-blue-300 hover:text-white text-3xl transition-transform duration-300 hover:scale-125">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
              <div>
               
                <a href="https://www.instagram.com/studiosamillamaia/" target="_blank" class="text-blue-300 hover:text-white text-3xl transition-transform duration-300 hover:scale-125">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          </div>
           
          <footer className="bg-[#2C1B12] text-[#FBF9F6] w-full h-16 flex items-center justify-center"> &copy; 2026 Samilla Maia. Todos os direitos reservados.</footer>
         </section>
  );
}
export default Rodape