import Rodape from "./Rodape";
import Navegacao from "./Componentes/Navegacao";
import Procedimentos from "./Componentes/Procedimentos";
import Home from "./Componentes/Home";
import Sobre from "./Componentes/Sobre";
import Servicos from "./Componentes/Servicos";
import Cursos from "./Componentes/Cursos";

function App() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navegacao />
      <Home />
      <Sobre />
      <Cursos />
      <Servicos />
      <Procedimentos />
      <Rodape />
    </main>
  );
}

export default App;
