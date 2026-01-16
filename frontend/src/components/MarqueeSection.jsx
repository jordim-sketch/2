import React from 'react';
import { marqueeText } from '../data/mockData';

const MarqueeSection = () => {
  // Repeat text multiple times for seamless loop
  const repeatedText = Array(10).fill(marqueeText).join('');

  return (
    <section className="bg-black py-8 overflow-hidden">
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/10 tracking-wider mx-4">
            {repeatedText}
          </span>
        </div>
        <div className="animate-marquee2 whitespace-nowrap flex absolute top-0">
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/10 tracking-wider mx-4">
            {repeatedText}
          </span>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
