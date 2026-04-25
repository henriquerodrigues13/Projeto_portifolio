import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Preloader from "./components/ui/Preloader.jsx";
import Header from "./components/layout/Header.jsx";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

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

