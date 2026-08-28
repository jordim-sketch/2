import React, { useState, useEffect } from 'react';
import { siteConfig, contactSection, pricingSection } from '../data/mockData';
import { Send } from 'lucide-react';

const planOptions = pricingSection.plans.map((p) => `Plan ${p.name} (${p.price}${p.period})`);
const objectiveOptions = [...planOptions, ...contactSection.objectives];

const ContactSection = () => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    objetivo: contactSection.objectives[0],
    mensaje: ''
  });

  useEffect(() => {
    const handlePlan = (e) => {
      const plan = e.detail;
      const match = planOptions.find((opt) => opt.startsWith(`Plan ${plan}`));
      if (match) {
        setForm((prev) => ({ ...prev, objetivo: match }));
      }
    };
    window.addEventListener('plan-selected', handlePlan);
    return () => window.removeEventListener('plan-selected', handlePlan);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text =
      `Hola The Squared Room! 👋\n\n` +
      `*Nombre:* ${form.nombre}\n` +
      `*Email:* ${form.email}\n` +
      `*Objetivo / Plan:* ${form.objetivo}\n` +
      `*Mensaje:* ${form.mensaje}`;
    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contacto"
      data-testid="contact-section"
      className="bg-black py-20 md:py-32 border-t border-white/10"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-16">
        <div data-reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {contactSection.title}
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            {contactSection.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          data-reveal
          data-testid="contact-form"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/70 text-sm mb-2 tracking-wide">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                data-testid="contact-name-input"
                placeholder="Tu nombre"
                className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 focus:outline-none focus:border-[#2CA5A5] transition-colors"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2 tracking-wide">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                data-testid="contact-email-input"
                placeholder="tu@email.com"
                className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 focus:outline-none focus:border-[#2CA5A5] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-white/70 text-sm mb-2 tracking-wide">
              Objetivo / Plan de interés
            </label>
            <select
              name="objetivo"
              value={form.objetivo}
              onChange={handleChange}
              data-testid="contact-objective-select"
              className="w-full bg-white/5 border border-white/15 text-white px-4 py-3 focus:outline-none focus:border-[#2CA5A5] transition-colors appearance-none cursor-pointer"
            >
              {objectiveOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-black text-white">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-white/70 text-sm mb-2 tracking-wide">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              rows={4}
              required
              value={form.mensaje}
              onChange={handleChange}
              data-testid="contact-message-input"
              placeholder="Cuéntanos tu punto de partida y qué quieres conseguir..."
              className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 focus:outline-none focus:border-[#2CA5A5] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            data-testid="contact-submit-button"
            className="w-full flex items-center justify-center gap-2 bg-[#2CA5A5] text-black font-bold px-10 py-4 text-sm tracking-wider hover:bg-[#248888] transition-colors"
          >
            <Send className="w-4 h-4" />
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
