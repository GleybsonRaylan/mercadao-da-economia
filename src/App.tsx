import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Ofertas from "./pages/Ofertas";
import Footer from "./components/Footer"; // Importando o Footer
import "./App.css";

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Footer /> {/* Footer na página inicial */}
              </>
            }
          />
          <Route path="/ofertas" element={<Ofertas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
