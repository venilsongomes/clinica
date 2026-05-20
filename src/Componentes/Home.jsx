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

        <p className=" flex text-[#5C423E] font-bold fade-in md:text-5xl md:justify-center items-center text-4xl">
         <h1 className=" text-6xl bg-gradient-to-r from-amber-300 via-blue-500 to-rose-600 bg-clip-text text-transparent text-3xl md:text-7xl"> Samilla  </h1>  <span className="text-[#d69c9c] text-shadow-lg text-4xl md:text-7xl"> Maia</span>
        
        </p>
         <h2 className="text-[#a24e4e] text-2xl font-bold fade-in"> Estética Avançada</h2>
      
            <button className=" text-[#5C423E] text-shadow-2xs text-shadow-orange-300 font-bold py-2 px-4 mt-6 bg-[#FAA000] hover:bg-[#C19A3F] rounded-lg transition-colors hover:bg-[#C19A3F] transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-200  fade-in">
          Agendar Avaliação
        </button>
        
         </div>
         
         
      </div>
    </section>
  );
}

export default Home;
