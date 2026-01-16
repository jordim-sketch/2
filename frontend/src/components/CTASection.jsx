import React from 'react';
import { ctaSection, siteConfig } from '../data/mockData';

const CTASection = () => {
  return (
    <section className="bg-black py-20 md:py-32 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-12">
          {ctaSection.title}
        </h2>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#2CA5A5] text-black font-bold px-10 py-4 text-sm tracking-wider hover:bg-[#248888] transition-colors"
        >
          {ctaSection.buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTASection;
