import { Navbar } from "./components/Navbar"

import { Hero } from "./components/Hero"

import { AboutUs } from "./components/AboutUs"

import { Features } from './components/Features'
import { Prices } from './components/Prices';
import { MobileApp } from "./components/MobileApp";

import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <Prices />
      <MobileApp />
      <Footer />
    </>
  )
}

export default App
