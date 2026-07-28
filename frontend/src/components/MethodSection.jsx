import React from 'react';
import { methodSection, breathingSection } from '../data/mockData';
import { Sun, Moon, Snowflake, Wind, Clock, Dumbbell, Flame } from 'lucide-react';

const iconMap = { sun: Sun, moon: Moon, snowflake: Snowflake, wind: Wind, clock: Clock, dumbbell: Dumbbell };

const MethodSection = () => {
  return (
    <section
      id="metodo"
      data-testid="method-section"
      className="bg-black"
    >
      {/* Image band with manifesto */}
      <div className="relative overflow-hidden">
        <img
          src={methodSection.image}
          alt="El Método Mettle"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

        <div className="relative max-w-4xl mx-auto px-6 md:px-16 py-24 md:py-32 text-center">
          <p data-reveal className="text-[#2CA5A5] font-bold tracking-[0.4em] mb-5 text-sm md:text-base">
            {methodSection.label}
          </p>
          <h2 data-reveal className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10">
            {methodSection.title}
          </h2>
          <div data-reveal className="space-y-5 max-w-3xl mx-auto">
            {methodSection.manifesto.map((p, i) => (
              <p key={i} className="text-lg md:text-xl text-white/80 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <p data-reveal className="mt-10 text-2xl md:text-3xl font-bold text-[#2CA5A5] tracking-wide">
            {methodSection.highlight}
          </p>
        </div>
      </div>

      {/* Pillars */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pb-20 md:pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {methodSection.pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon] || Sun;
            return (
              <div
                key={pillar.title}
                data-reveal
                data-testid={`method-pillar-${index}`}
                style={{ transitionDelay: `${index * 70}ms` }}
                className="bg-black p-8 md:p-10 hover:bg-[#0a0a0a] transition-colors"
              >
                <Icon className="w-8 h-8 text-[#2CA5A5] mb-5" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-justify">
                  {pillar.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Breathing block */}
        <div className="mt-20 md:mt-28">
          <div data-reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#2CA5A5] font-bold tracking-[0.3em] mb-4 text-sm md:text-base">
              {breathingSection.label}
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {breathingSection.title}
            </h3>
            <p className="text-white/60 text-base md:text-lg">
              {breathingSection.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {breathingSection.protocols.map((proto, index) => (
              <div
                key={index}
                data-reveal
                data-testid={`breathing-protocol-${index}`}
                style={{ transitionDelay: `${index * 80}ms` }}
                className="border border-white/10 p-8 hover:border-[#2CA5A5] transition-colors"
              >
                <Wind className="w-6 h-6 text-[#2CA5A5] mb-4" />
                <p className="text-white font-bold text-lg mb-2">{proto.name}</p>
                <p className="text-[#2CA5A5] font-medium tracking-wide mb-3">{proto.pattern}</p>
                <p className="text-white/50 text-sm leading-relaxed">{proto.benefit}</p>
              </div>
            ))}
          </div>

          {/* Wim Hof highlight */}
          <div
            data-reveal
            data-testid="wim-hof-card"
            className="relative border-2 border-[#2CA5A5] bg-[#2CA5A5]/5 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6"
          >
            <div className="flex-shrink-0">
              <Flame className="w-12 h-12 text-[#2CA5A5]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <h4 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  {breathingSection.wimHof.name}
                </h4>
                <span className="bg-[#2CA5A5] text-black text-xs font-bold tracking-widest px-3 py-1">
                  {breathingSection.wimHof.tag}
                </span>
              </div>
              <p className="text-white/70 leading-relaxed text-justify">
                {breathingSection.wimHof.description}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div data-reveal className="text-center mt-14">
            <a
              href="#contacto"
              data-testid="method-cta-button"
              className="inline-block bg-[#2CA5A5] text-black font-bold px-10 py-4 text-sm tracking-wider hover:bg-[#248888] transition-colors"
            >
              Quiero aprender el Método
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
