import React from 'react';
import { heroData, siteConfig } from '../data/mockData';
import { Music } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image - Dark lines pattern */}
      <div className="absolute inset-0">
        <img
          src="https://customer-assets.emergentagent.com/job_69d6182e-0901-40a7-b5dc-716b1c23fbc7/artifacts/6d2yw2ud_IMG_2510-2.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        {/* Logo The Squared Room - NEW */}
        <img
          src="https://customer-assets.emergentagent.com/job_69d6182e-0901-40a7-b5dc-716b1c23fbc7/artifacts/nn7tel8o_logoSQR-negatiu-1.png"
          alt="The Squared Room Logo"
          className="w-48 md:w-64 lg:w-80 mb-8"
        />
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider mb-6">
          {heroData.name}
        </h1>
        
        {/* Be Your Own Hero tagline - DARKER CYAN */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2CA5A5] tracking-widest mb-8">
          BE YOUR OWN HERO
        </p>
        
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white/60 hover:text-[#2CA5A5] text-sm tracking-wider transition-colors"
        >
          {siteConfig.instagram}
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 py-3 px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-white/70 text-xs tracking-wider hover:text-[#2CA5A5] transition-colors flex items-center gap-2"
        >
          <Music className="w-4 h-4" /> {siteConfig.spotifyPlaylist}
        </a>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#2CA5A5] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <button className="text-white/70 hover:text-white transition-colors text-lg">×</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
