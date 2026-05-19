import { react, useState } from "react";
import img4 from "../assets/perfil.svg";

function Home() {
    const [count, setCount] = useState(0);
  return (

    <section id="home" className=" scroll-mt-20 mt-24">
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

        <p className=" flex  text-[#2C1B12] mb-5 text-7xl font-bold fade-in">
         <h1> Samilla  </h1>  <span className="text-[#E4D6D6]"> Maia</span>
        </p>

        <button className=" text-2xl p-3 border border-[#2C1B12] bg-[#D4AF37] text-[#2C1B12] font-bold hover:bg-[#C19A3F] transition-colors">
          Agendar Avaliação
        </button>
         </div>
      </div>
    </section>
  );
}

export default Home;
