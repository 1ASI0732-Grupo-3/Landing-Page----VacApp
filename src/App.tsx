import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Prices } from './components/Prices';
import { MobileApp } from "./components/MobileApp";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { TermsModal } from "./components/TermsModal";

// Componente para redirigir a tu app web
function RedirectToApp({ path }: { path: string }) {
  useEffect(() => {
    // Cambia esta URL por la URL de tu app web
    const appWebUrl = "https://tu-app-web.com"; // 🚨 CAMBIA ESTA URL
    window.location.href = `${appWebUrl}${path}`;
  }, [path]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray to-pale-lime flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-green mx-auto"></div>
        <p className="mt-4 text-forest-green font-mulish">Redirigiendo a VacApp...</p>
      </div>
    </div>
  );
}
// Componente para la página principal
function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <Testimonials />
      <Prices />
      <MobileApp />
      <CallToAction />
    </>
  );
}

function App() {
  const [showTerms, setShowTerms] = useState(true);

  const handleAccept = () => {
    setShowTerms(false); // Solo lo oculta temporalmente
  };

  useEffect(() => {
    document.body.style.overflow = showTerms ? "hidden" : "auto";
  }, [showTerms]);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-white to-light-gray">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
              {showTerms && <TermsModal onAccept={handleAccept} />}
            </>
          } />
          <Route path="/login" element={
            <RedirectToApp path="/login" />
          } />
          <Route path="/register" element={
            <RedirectToApp path="/register" />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
