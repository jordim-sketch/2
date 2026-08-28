import React from 'react';
import { pricingSection } from '../data/mockData';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section
      id="planes"
      data-testid="pricing-section"
      className="bg-black py-20 md:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div data-reveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#2CA5A5] font-bold tracking-[0.3em] mb-4 text-sm md:text-base">
            {pricingSection.label}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {pricingSection.title}
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            {pricingSection.subtitle}
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {pricingSection.plans.map((plan, index) => (
            <div
              key={plan.name}
              data-reveal
              data-testid={`pricing-plan-${index}`}
              style={{ transitionDelay: `${index * 90}ms` }}
              className={`relative flex flex-col p-8 md:p-10 border transition-colors ${
                plan.featured
                  ? 'border-[#2CA5A5] bg-[#2CA5A5]/5 lg:-mt-4 lg:mb-4'
                  : 'border-white/15 bg-[#0a0a0a] hover:border-white/40'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2CA5A5] text-black text-xs font-bold tracking-widest px-4 py-1 whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-2xl font-bold text-white tracking-wide mb-2">
                {plan.name}
              </h3>
              <p className="text-white/50 text-sm mb-6 min-h-[40px]">
                {plan.description}
              </p>

              <div className="flex items-end gap-1 mb-8">
                <span className="text-5xl md:text-6xl font-bold text-[#2CA5A5]">
                  {plan.price}
                </span>
                <span className="text-white/60 mb-2">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                    <Check className="w-5 h-5 text-[#2CA5A5] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                data-testid={`pricing-cta-${index}`}
                onClick={() =>
                  window.dispatchEvent(new CustomEvent('plan-selected', { detail: plan.name }))
                }
                className={`block text-center font-bold px-8 py-4 text-sm tracking-wider transition-colors ${
                  plan.featured
                    ? 'bg-[#2CA5A5] text-black hover:bg-[#248888]'
                    : 'border border-[#2CA5A5] text-[#2CA5A5] hover:bg-[#2CA5A5] hover:text-black'
                }`}
              >
                Reserva tu plaza
              </a>
            </div>
          ))}
        </div>

        <p data-reveal className="text-center text-white/40 text-sm mt-10">
          {pricingSection.footnote}
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
