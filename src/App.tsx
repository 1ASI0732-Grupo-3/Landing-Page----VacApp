import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Features } from './components/Features';
import { Prices } from './components/Prices';
import { MobileApp } from "./components/MobileApp";
import { Footer } from "./components/Footer";
import { TermsModal } from "./components/TermsModal";

function App() {
  const [showTerms, setShowTerms] = useState(true);

  const handleAccept = () => {
    setShowTerms(false); // Solo lo oculta temporalmente
  };

  useEffect(() => {
    document.body.style.overflow = showTerms ? "hidden" : "auto";
  }, [showTerms]);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <Prices />
      <MobileApp />
      <Footer />

      {showTerms && <TermsModal onAccept={handleAccept} />}
    </>
  );
}

export default App;
