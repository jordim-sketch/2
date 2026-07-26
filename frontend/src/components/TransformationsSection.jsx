import React from 'react';
import { transformationsSection } from '../data/mockData';
import { TrendingUp } from 'lucide-react';

const TransformationsSection = () => {
  return (
    <section
      id="transformaciones"
      data-testid="transformations-section"
      className="bg-white py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div data-reveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#2CA5A5] font-bold tracking-[0.3em] mb-4 text-sm md:text-base">
            {transformationsSection.label}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            {transformationsSection.title}
          </h2>
          <p className="text-black/60 text-base md:text-lg">
            {transformationsSection.subtitle}
          </p>
        </div>

        {/* Cases grid: 2 cases per row on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {transformationsSection.cases.map((item, index) => (
            <div
              key={index}
              data-reveal
              data-testid={`transformation-case-${index}`}
              style={{ transitionDelay: `${index * 90}ms` }}
              className="bg-black overflow-hidden flex flex-col"
            >
              {/* Before / After images */}
              <div className="grid grid-cols-2 gap-px bg-white/10">
                <div className="relative overflow-hidden group bg-black">
                  <img
                    src={item.beforeImage}
                    alt={`${item.name} antes`}
                    className="w-full h-[360px] md:h-[420px] object-cover object-top grayscale group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold tracking-widest px-3 py-1">
                    ANTES
                  </span>
                </div>
                <div className="relative overflow-hidden group bg-black">
                  <img
                    src={item.afterImage}
                    alt={`${item.name} después`}
                    className="w-full h-[360px] md:h-[420px] object-cover object-top grayscale group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-[#2CA5A5] text-black text-xs font-bold tracking-widest px-3 py-1">
                    DESPUÉS
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-white font-bold text-2xl tracking-wide">
                    {item.name}
                  </p>
                  <span className="text-[#2CA5A5] text-sm font-bold tracking-wider border border-[#2CA5A5] px-3 py-1">
                    {item.duration}
                  </span>
                </div>
                <p className="text-white/70 text-base leading-relaxed">
                  {item.goal}
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-2">
                  {item.metrics.map((metric, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-[#2CA5A5] text-sm font-medium"
                    >
                      <TrendingUp className="w-4 h-4 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
