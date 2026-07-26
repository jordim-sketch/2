import React, { useState, useEffect, useRef } from 'react';
import { resultsSection } from '../data/mockData';

const CountUp = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const ResultsSection = () => {
  return (
    <section
      id="resultados"
      data-testid="results-section"
      className="bg-black py-20 md:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div data-reveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#2CA5A5] font-bold tracking-[0.3em] mb-4 text-sm md:text-base">
            {resultsSection.label}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {resultsSection.title}
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            {resultsSection.subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mb-20">
          {resultsSection.stats.map((stat, index) => (
            <div
              key={stat.label}
              data-reveal
              data-testid={`results-stat-${index}`}
              style={{ transitionDelay: `${index * 90}ms` }}
              className="text-center border-t-2 border-[#2CA5A5] pt-6"
            >
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2CA5A5] mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/60 text-sm md:text-base tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resultsSection.highlights.map((item, index) => (
            <div
              key={index}
              data-reveal
              data-testid={`results-highlight-${index}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              className="relative overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[420px] object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#2CA5A5] font-bold tracking-widest text-sm mb-1">
                  {item.name}
                </p>
                <p className="text-white text-lg md:text-xl font-medium leading-snug">
                  {item.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
