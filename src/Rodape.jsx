function Rodape() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#1C120C] text-[#FBF9F6] font-sans flex flex-col items-center justify-center gap-10 scroll-mt-20 h-auto w-full"
    >
      <div className="flex flex-col items-center justify-center gap-10 md:gap-40 md:flex-row md:mt-14 p-12">
        <div className="flex flex-col items-center text-xl gap-2">
          <h2 id="contact-heading" className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase font-semibold">
            Contato e localização
          </h2>
          <address className="not-italic text-white text-sm font-light max-w-xs">
            <span className="inline-flex items-center gap-2">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              Rua Tapajós de Melo, 567<br />Montes Claros - MG
            </span>
          </address>
        </div>

        <div className="flex flex-col items-center text-xl gap-2">
          <h3 className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase font-semibold">
            Atendimento
          </h3>
          <p className="text-white text-sm font-light max-w-xs">
            <span className="inline-flex items-center gap-2">
              <i className="fas fa-clock" aria-hidden="true"></i>
              Segunda a Sexta, 8h às 18h
            </span>
          </p>
          <p className="text-white text-sm font-light max-w-xs">
            <a href="tel:+5538999223255" className="underline hover:text-[#D4AF37]">
              (+55) 38 99922-3255
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center text-xl gap-2">
          <h3 className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase font-semibold">
            Redes sociais
          </h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/studiosamillamaia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-[#D4AF37] text-xl transition-transform duration-300 hover:scale-125"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.facebook.com/samilla.maia.3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-[#D4AF37] text-xl transition-transform duration-300 hover:scale-125"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="https://wa.me/5538999223255"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white hover:text-[#D4AF37] text-xl transition-transform duration-300 hover:scale-125"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-700 text-[14px] w-full p-5 md:flex md:justify-between md:items-center">
        <p>© 2026 Samilla Maia. Todos os direitos reservados.</p>
        <p className="text-blue-400">Desenvolvido por Venilson Rocha</p>
      </footer>
    </section>
  );
}
export default Rodape