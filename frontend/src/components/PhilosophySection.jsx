import React from 'react';
import { coachPhilosophy } from '../data/mockData';

const PhilosophySection = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Quote */}
          <div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl text-black italic leading-relaxed mb-6">
              "{coachPhilosophy.quote}"
            </blockquote>
            <p className="text-lg md:text-xl text-black/70 font-bold">
              {coachPhilosophy.subtext}
            </p>
          </div>

          {/* Right - Image */}
          <div>
            <img
              src={coachPhilosophy.image}
              alt="Coach philosophy"
              className="w-full h-[400px] md:h-[500px] object-cover filter sepia"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
