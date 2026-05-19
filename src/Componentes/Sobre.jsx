import {react, useState} from "react";
import sobre from "../assets/sobre.svg";


function  Sobre(){
    return( 
    <section className="text-center  scroll-mt-20 bg-[#E4D6D6]" id="about">
          <p className="text-3xl font-bold p-10 text-[#2C1B12]">Quem somos</p>

          <div className="flex flex-col md:flex-row gap-8 p-6 ">
            <div className="w-full">
              <p className="text-justify  fade-in">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt molestiae officia magni! Aliquid quasi voluptatibus,
                dignissimos fugiat saepe asperiores officia aperiam! Impedit,
                mollitia autem! Numquam non culpa architecto repudiandae hic?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt molestiae officia magni! Aliquid quasi voluptatibus,
                dignissimos fugiat saepe asperiores officia aperiam! Impedit,
                mollitia autem! Numquam non culpa architecto repudiandae hic?
              </p>
            </div>
            <img
              src={sobre}
              alt="Imagem de Clínica de Saúde"
              className="object-cover w-[70%] h-[600px] fade-in"
            />
          </div>
        </section>)
}
export default Sobre