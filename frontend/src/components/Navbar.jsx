import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/mockData';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - NEW */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="https://customer-assets.emergentagent.com/job_69d6182e-0901-40a7-b5dc-716b1c23fbc7/artifacts/nn7tel8o_logoSQR-negatiu-1.png"
              alt="The Squared Room Logo"
              className="h-10 md:h-12"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#2CA5A5] text-sm tracking-wide transition-colors"
            >
              {siteConfig.instagram}
            </a>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center gap-4">
            <button className="text-white/80 hover:text-[#2CA5A5] transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 text-white/80 hover:text-[#2CA5A5] text-sm tracking-wide transition-colors"
            >
              {siteConfig.instagram}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
