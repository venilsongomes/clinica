import { react, useState } from "react";
import img4 from "../assets/perfil.svg";

function Home() {
    const [count, setCount] = useState(0);
  return (

    <section id="home" className=" min-h-[100vh] scroll-mt-20 mt-24 ">
      <div className="w-full h-[100vh] relative">
        <div
          className="w-100% h-[100%] no-repeat fade-in"
          style={{
            backgroundImage: `url(${img4})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "90% center",
            backgroundSize: "60%",
            backgroundPositionY: "",
          }}
        />
        <div className="absolute bottom-[43%] right-[60%]" >  

        <p className=" flex  text-[#2C1B12] font-bold fade-in md:text-5xl">
         <h1 className="text-3xl text-shadow-lg/20 md:text-7xl"> Samilla  </h1>  <span className="text-gray-400 text-shadow-lg text-4xl md:text-7xl"> Maia</span>
        
        </p>
         <h2 className="text-[#2C1B12] text-2xl font-bold fade-in"> Estetica Avançada</h2>
      
            <button className=" text-[#2C1B12] text-shadow-2xs text-shadow-sky-300 font-bold py-2 px-4 mt-6 bg-[#D4AF37] hover:bg-[#C19A3F] transition-colors fade-in">
          Agendar Avaliação
        </button>
        
         </div>
         
         
      </div>
    </section>
  );
}

export default Home;
