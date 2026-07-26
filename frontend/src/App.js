import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoachSection from "./components/CoachSection";
import MarqueeSection from "./components/MarqueeSection";
import HybridSportSection from "./components/HybridSportSection";
import PhilosophySection from "./components/PhilosophySection";
import OnlineCoachingSection from "./components/OnlineCoachingSection";
import CTASection from "./components/CTASection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <div className="App bg-black min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CoachSection />
        <MarqueeSection />
        <HybridSportSection />
        <PhilosophySection />
        <OnlineCoachingSection />
        <CTASection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
