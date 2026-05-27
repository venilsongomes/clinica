import sobre from "../assets/sobre1.svg";

function Home() {
  return (
    <section id="home" className="relative flex items-center justify-center scroll-mt-20 mt-15 mb:mt-20">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute font-serif inset-0 z-1 flex flex-col items-center justify-center text-center px-4">
        <div className="flex items-center text-[#5C423E] font-bold fade-in md:text-5xl gap-4 text-4xl">
          <h1 className="text-4xl font-serif bg-gradient-to-r from-gray-300 via-gray-500 to-white bg-clip-text text-transparent md:text-7xl">
            Samilla
          </h1>
          <span className="bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-white text-transparent md:text-7xl">
            Maia
          </span>
        </div>
        <h2 className="text-[#D4AF37] min-h-[3rem] text-xl md:text-4xl font-bold fade-in mt-4">
          Estética Avançada
        </h2>

        <a
          href="https://wa.me/5538999223255?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20tratamento."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-8 py-3 bg-[#bda15b] hover:bg-[#a88d48] text-black font-sans text-sm tracking-widest uppercase font-semibold rounded-sm transition-all duration-300 shadow-lg hover:scale-105 fade-in"
        >
          Agendar Avaliação
        </a>
      </div>
      <img
        src={sobre}
        alt="Interior de clínica de estética"
        className="w-full h-[80vh] md:h-full object-cover filter brightness-60 contrast-110 fade-in"
      />
    </section>
  );
}

export default Home;
