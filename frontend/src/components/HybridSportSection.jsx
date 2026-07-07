import React from 'react';
import { hybridSportSection } from '../data/mockData';

const HybridSportSection = () => {
  return (
    <section className="bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-wide">
              {hybridSportSection.title}
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              El <span className="font-bold text-white">método Mettle Program</span> fusiona la{' '}
              <span className="font-bold text-white">fuerza explosiva</span> del CrossTraining, la{' '}
              <span className="font-bold text-white">resistencia</span> del cardio funcional y la{' '}
              <span className="font-bold text-white">estética</span> del Bodybuilding. El resultado: un cuerpo{' '}
              <span className="font-bold text-white">atlético, resistente y con una presencia física imponente.</span>
            </p>
            <blockquote className="text-xl md:text-2xl text-[#2CA5A5] italic leading-relaxed mb-8">
              "{hybridSportSection.quote}"
            </blockquote>
            <p className="text-white/70 leading-relaxed">
              No se trata solo de estar en forma. Se trata de <span className="font-bold text-white">ser completo</span>. 
              De rendir cuando el cuerpo duele y la mente quiere parar. De ser capaz de <span className="font-bold text-white">TODO.</span>
            </p>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-1 gap-6">
            <img
              src={hybridSportSection.images[0]}
              alt="Athlete training"
              className="w-full h-[300px] md:h-[400px] object-cover grayscale"
            />
            <img
              src={hybridSportSection.images[1]}
              alt="Athlete workout"
              className="w-full h-[300px] md:h-[400px] object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridSportSection;
