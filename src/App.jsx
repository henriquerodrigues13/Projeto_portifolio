import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Preloader from "./components/ui/Preloader.jsx";

export default function App() {
  return (
    <>
      <Preloader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

