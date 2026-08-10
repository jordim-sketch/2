import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoachSection from "./components/CoachSection";
import MethodSection from "./components/MethodSection";
import MarqueeSection from "./components/MarqueeSection";
import HybridSportSection from "./components/HybridSportSection";
import PhilosophySection from "./components/PhilosophySection";
import OnlineCoachingSection from "./components/OnlineCoachingSection";
import NutritionSection from "./components/NutritionSection";
import CTASection from "./components/CTASection";
import TestimonialsSection from "./components/TestimonialsSection";
import ResultsSection from "./components/ResultsSection";
import TransformationsSection from "./components/TransformationsSection";
import BlogSection from "./components/BlogSection";
import PricingSection from "./components/PricingSection";
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
        <MethodSection />
        <CoachSection />
        <MarqueeSection />
        <HybridSportSection />
        <PhilosophySection />
        <OnlineCoachingSection />
        <NutritionSection />
        <CTASection />
        <ResultsSection />
        <TransformationsSection />
        <TestimonialsSection />
        <BlogSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
