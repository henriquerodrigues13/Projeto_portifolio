import Footer from "../components/layout/Footer.jsx";
import Contato from "../sections/Contato.jsx";
import Habilidades from "../sections/Habilidades.jsx";
import Hero from "../sections/Hero.jsx";
import Projetos from "../sections/Projetos.jsx";
import Sobre from "../sections/Sobre.jsx";

export default function Home() {
  return (
    <div className="relative z-10">
      <Hero />
      <Sobre />
      <Projetos />
      <Habilidades />
      <Contato />
      <Footer />
    </div>
  );
}

