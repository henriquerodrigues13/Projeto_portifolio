import Footer from "../components/layout/Footer.jsx";
import Contato from "../sections/Contato.jsx";
import Habilidades from "../sections/Habilidades.jsx";
import Hero from "../sections/Hero.jsx";
import Projetos from "../sections/Projetos.jsx";
import Jornada from "../sections/Jornada.jsx";
import Sobre from "../sections/Sobre.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Home() {
  useReveal();

  return (
    <div className="relative z-10">
      <Hero />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Jornada />
      <Contato />
      <Footer />
    </div>
  );
}

