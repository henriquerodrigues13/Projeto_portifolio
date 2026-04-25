import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Preloader from "./components/ui/Preloader.jsx";
import Header from "./components/layout/Header.jsx";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      // Limpa o hash da URL para evitar que o navegador pule para seções
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [isLoaded]);

  return (
    <>
      <Preloader onReady={() => setIsLoaded(true)} />
      <div className={isLoaded ? "app-loaded" : "app-loading"}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

