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

        {/* Cases grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformationsSection.cases.map((item, index) => (
            <div
              key={index}
              data-reveal
              data-testid={`transformation-case-${index}`}
              style={{ transitionDelay: `${index * 90}ms` }}
              className="bg-black overflow-hidden group flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[320px] object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-[#2CA5A5] text-black text-xs font-bold tracking-wider px-3 py-1">
                  {item.duration}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <p className="text-white font-bold text-xl tracking-wide">
                  {item.name}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.goal}
                </p>
                <ul className="mt-auto space-y-2">
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
