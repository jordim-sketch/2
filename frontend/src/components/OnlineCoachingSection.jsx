import React, { useState } from 'react';
import { onlineCoaching, faqItems, siteConfig } from '../data/mockData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const OnlineCoachingSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Image */}
          <div>
            <img
              src={onlineCoaching.image}
              alt="Online coaching"
              className="w-full h-[400px] md:h-[600px] object-cover grayscale"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              {onlineCoaching.title}
            </h3>
            <p className="text-xl md:text-2xl text-[#4DD9D9] font-medium mb-6">
              {onlineCoaching.subtitle}
            </p>
            <p className="text-white/70 leading-relaxed mb-10">
              {onlineCoaching.description}
            </p>

            {/* FAQ Accordion */}
            <div className="mb-10">
              <p className="text-white font-bold mb-6">Preguntas frecuentes</p>
              <div className="space-y-0">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-t border-white/10">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-4 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
                    >
                      <span className="text-white/90 text-sm md:text-base pr-4">
                        {item.question}
                      </span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-white/70 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white/70 flex-shrink-0" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index ? 'max-h-96 pb-4' : 'max-h-0'
                      }`}
                    >
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#4DD9D9] text-black font-bold px-8 py-4 text-sm tracking-wider hover:bg-[#3BC9C9] transition-colors"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineCoachingSection;
