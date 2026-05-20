import React  from "react";


function Rodape() {
  return (
     <section
          className=" flex flex-col items-center justify-center gap-10 scroll-mt-20  text-[#FBF9F6] bg-stone-300 h-auto w-full  "
          id="contact" 
        > 
        <div className="flex gap-10 md:gap-40 flex-col md:flex-row items-center justify-center  md:mt-14 text-[#2C1B12] p-12">   


          <div className="flex flex-col items-center text-xl text-[#2C1B12]">
            <h1 className="text-[#2C1B12] text-2xl font-bold"> Endereço </h1> 
            <h2 className="text-[17px]"> Rua Exemplo,  123 - Montes Claros </h2>
          </div>
          <div className="flex flex-col items-center  text-[#2C1B12]">
            
            <h1 className="  text-2xl  text-[#2C1B12] font-bold">
                  Atendimento
            </h1>
            <h2 className="text-[17px]"> Segunda a Sexta, 8h às 18h</h2>
          </div>

          <div className="flex flex-col items-center ">
            <p className="text-[#2C1B12] text-2xl font-bold"> Redes Sociais </p>
            <div className="flex gap-4">
            
              <div>
                
                <a href="https://www.instagram.com/studiosamillamaia/" target="_blank" class="text-red-500 hover:text-red-400 text-2xl transition-transform duration-300 hover:scale-125"><i class="fab fa-instagram"></i></a>
              </div>
              <div>
               
                <a href="https://www.facebook.com/samilla.maia.3/" target="_blank" class="text-blue-500 hover:text-blue-400 text-2xl transition-transform duration-300 hover:scale-125">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
              <div>
               
                <a href="https://wa.me/5538999223255" target="_blank" class="text-green-400 hover:text-green-500 text-2xl transition-transform duration-200 hover:scale-125">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
          </div>
           
          <footer className="bg-[#2C1B12] text-[14px] text-[#FBF9F6] w-full p-4 flex items-center justify-center"> &copy; 2026 Samilla Maia. Todos os direitos reservados.</footer>
         </section>
  );
}
export default Rodape