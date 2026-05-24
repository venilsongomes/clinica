import img4 from "../assets/perfil.svg";
import sobre from "../assets/sobre1.svg";


function Home() {
  return (

    <section id="home" className="relative flex items-center justify-center scroll-mt-20 mt-15  mb:mt-20">
     
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute font-serif inset-0 z-1 flex flex-col items-center justify-center text-center px-4">
        <div className="flex items-center text-[#5C423E] font-bold fade-in md:text-5xl gap-4 text-4xl">
          <h1 className="text-4xl font-serif bg-gradient-to-r from-gray-300 via-gray-500 to-white bg-clip-text text-transparent md:text-7xl">Samilla</h1>
          <span className="bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-white text-transparent md:text-7xl">Maia</span>
        </div>
        <h2 className="text-[#D4AF37] min-h-[3rem] text-xl   md:text-4xl font-bold fade-in mt-4">Estética Avançada</h2>
        

        <button className="bg-orange-800  inline-block  text-[#ffff] text-xl text-shadow-orange-300 transparent py-4 px-8 mt-6 border border-[#FAA000] hover:bg-orange-600 rounded-lg transition-colors transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-200 fade-in"> <a
          href="https://wa.me/5538999223255?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20tratamento."
          target="_blank"
          rel="noreferrer noopener"
          className=""
        >
          Agendar Avaliação
        </a> </button>
      </div>
      <img src={sobre} alt="Imagem de Clínica de Saúde" className="w-full h-[80vh] md:h-full object-cover filter brightness-60 contrast-110 fade-in" />
    </section>
  );
}

export default Home;
