import React, { useState } from 'react';
import { blogSection, blogArticles } from '../data/mockData';
import { BookOpen, Plus, Minus } from 'lucide-react';

const BlogSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="blog"
      data-testid="blog-section"
      className="bg-black py-20 md:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div data-reveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#2CA5A5] font-bold tracking-[0.3em] mb-4 text-sm md:text-base">
            {blogSection.label}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {blogSection.title}
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            {blogSection.subtitle}
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogArticles.map((article, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                data-reveal
                data-testid={`blog-article-${index}`}
                style={{ transitionDelay: `${(index % 3) * 80}ms` }}
                className="bg-[#0a0a0a] border border-white/10 p-7 flex flex-col hover:border-[#2CA5A5]/60 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-[#2CA5A5]" />
                  <span className="text-[#2CA5A5] text-xs font-bold tracking-widest uppercase">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                  {article.title}
                </h3>

                <p
                  className={`text-white/60 text-sm leading-relaxed text-justify transition-all ${
                    isOpen ? '' : 'line-clamp-3'
                  }`}
                >
                  {article.summary}
                </p>

                <button
                  onClick={() => toggle(index)}
                  data-testid={`blog-toggle-${index}`}
                  className="mt-5 inline-flex items-center gap-2 text-[#2CA5A5] text-sm font-bold tracking-wide hover:gap-3 transition-all self-start"
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  {isOpen ? 'Leer menos' : 'Leer más'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
