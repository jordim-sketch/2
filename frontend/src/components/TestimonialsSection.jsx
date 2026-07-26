import React from 'react';
import { testimonials } from '../data/mockData';

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div data-reveal className="text-center mb-16">
          <p className="text-lg md:text-xl text-black/70 mb-4">¿Una motivación extra?</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
            VUESTRAS EXPERIENCIAS<br />
            SON NUESTRA MAYOR<br />
            <span className="text-[#2CA5A5]">MOTIVACIÓN</span>
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.items.map((item, index) => (
            <div
              key={index}
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
              className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                {/* WhatsApp style reaction emojis */}
                <div className="flex gap-1 text-sm">
                  <span className="bg-white px-2 py-1 rounded-full shadow-sm">👍</span>
                  <span className="bg-white px-2 py-1 rounded-full shadow-sm">❤️</span>
                  <span className="bg-white px-2 py-1 rounded-full shadow-sm">😊</span>
                </div>
              </div>
              <p className="text-black/80 text-sm md:text-base leading-relaxed mb-4 text-justify">
                "{item.text}"
              </p>
              <p className="text-black/50 text-sm font-medium">
                — {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
