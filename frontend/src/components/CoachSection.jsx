import React, { useState } from 'react';
import { aboutSection, accordionItems, helpItems } from '../data/mockData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CoachSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div>
            <p className="text-[#4DD9D9] font-bold tracking-wider mb-2">
              {aboutSection.coachTitle}
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-black mb-6">
              {aboutSection.coachName},
            </h3>
            <p className="text-xl md:text-2xl lg:text-3xl text-black leading-relaxed mb-12">
              Me dedico a crear{' '}
              <span className="font-bold">programaciones y asesorías personalizadas</span>{' '}
              para deportistas que buscan rendir más en pruebas como{' '}
              <span className="font-bold">HYROX, DEKA o competiciones de Crosstraining</span>
            </p>

            {/* Accordion */}
            <div className="space-y-0">
              <p className="text-black font-bold mb-6">Más cosas sobre mí</p>
              {accordionItems.map((item, index) => (
                <div key={item.id} className="border-t border-black/10">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full py-5 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
                  >
                    <span className="text-lg font-medium text-black">{item.title}</span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-5 h-5 text-black" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-black" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-black/70 leading-relaxed">{item.content}</p>
                    
                    {/* Help items for coach accordion */}
                    {item.id === 'coach' && (
                      <div className="mt-6">
                        <p className="font-bold text-black mb-3">Puedo ayudarte si</p>
                        <ul className="space-y-2">
                          {helpItems.map((help, idx) => (
                            <li key={idx} className="text-black/70 flex items-start gap-2">
                              <span className="text-[#4DD9D9] font-bold">|</span>
                              {help}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-6 text-black/70 italic">
                          Cada plan, cada sesión, cada detalle está pensado para que avances.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={aboutSection.coachImage}
              alt="Coach"
              className="w-full h-[500px] md:h-[700px] object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
