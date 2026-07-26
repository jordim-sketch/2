import React from 'react';
import { nutritionSection } from '../data/mockData';
import { Check, Flame, Dumbbell, Repeat, LineChart } from 'lucide-react';

const pillarIcons = [Flame, Dumbbell, Repeat, LineChart];

const NutritionSection = () => {
  return (
    <section
      id="nutricion"
      data-testid="nutrition-section"
      className="bg-black py-20 md:py-32 border-t border-white/10"
    >
      {/* Image band */}
      <div className="relative h-[45vh] md:h-[55vh] overflow-hidden mb-16 md:mb-24">
        <img
          src={nutritionSection.image}
          alt="Nutrición deportiva"
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div
          data-reveal
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
        >
          <p className="text-[#2CA5A5] font-bold tracking-[0.3em] mb-4 text-sm md:text-base">
            {nutritionSection.label}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
            {nutritionSection.title}
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Intro */}
        <p
          data-reveal
          className="text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mb-16 text-justify"
        >
          {nutritionSection.intro}
        </p>

        {/* Two-image band: gym physique + running */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div data-reveal className="relative overflow-hidden group">
            <img
              src={nutritionSection.gymImage}
              alt="Físico definido de gimnasio"
              className="w-full h-[380px] md:h-[520px] object-cover grayscale group-hover:scale-105 transition-transform duration-700"
            />
            <span className="absolute bottom-4 left-4 text-white font-bold tracking-widest text-sm bg-black/50 px-3 py-1">
              FUERZA · ESTÉTICA
            </span>
          </div>
          <div
            data-reveal
            style={{ transitionDelay: '120ms' }}
            className="relative overflow-hidden group"
          >
            <img
              src={nutritionSection.runImage}
              alt="Atleta corriendo"
              className="w-full h-[380px] md:h-[520px] object-cover grayscale group-hover:scale-105 transition-transform duration-700"
            />
            <span className="absolute bottom-4 left-4 text-white font-bold tracking-widest text-sm bg-black/50 px-3 py-1">
              RESISTENCIA · RENDIMIENTO
            </span>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 mb-20">
          {nutritionSection.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index % pillarIcons.length];
            return (
              <div
                key={pillar.title}
                data-reveal
                data-testid={`nutrition-pillar-${index}`}
                style={{ transitionDelay: `${index * 90}ms` }}
                className="bg-black p-8 md:p-10 group hover:bg-[#0a0a0a] transition-colors"
              >
                <Icon className="w-8 h-8 text-[#2CA5A5] mb-5" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-justify">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Benefits + Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div data-reveal>
            <p className="text-white font-bold mb-6 tracking-wide">
              Lo que consigues
            </p>
            <ul className="space-y-4">
              {nutritionSection.benefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-white/80 text-base md:text-lg"
                >
                  <Check className="w-5 h-5 text-[#2CA5A5] flex-shrink-0 mt-1" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal className="lg:border-l-4 lg:border-[#2CA5A5] lg:pl-10">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl text-[#2CA5A5] italic leading-relaxed mb-8">
              "{nutritionSection.quote}"
            </blockquote>
            <a
              href="#contacto"
              data-testid="nutrition-cta-button"
              className="inline-block bg-[#2CA5A5] text-black font-bold px-8 py-4 text-sm tracking-wider hover:bg-[#248888] transition-colors"
            >
              {nutritionSection.ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
