import React from 'react';
import { Shield, Volume2, Smartphone, Wine } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FeaturesProps {
  language: Language;
}

const Features: React.FC<FeaturesProps> = ({ language }) => {
  const t = translations[language].features;

  const icons = [Shield, Volume2, Smartphone, Wine];

  return (
    <section id="concept" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 text-center md:text-left">
           <h3 className="text-luxury-gold uppercase tracking-widest text-sm mb-4 animate-fade-in">{t.concept}</h3>
           <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight max-w-4xl">
             {t.title}
           </h2>
           <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl">
             {t.desc}
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {t.items.map((item: any, idx: number) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="group p-6 border border-white/5 rounded-xl hover:bg-white/5 transition-all duration-500 hover:border-luxury-gold/30">
                <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:bg-luxury-gold group-hover:text-black transition-colors duration-500">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif mb-4 group-hover:text-luxury-gold transition-colors">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-white/80">
            {t.quote}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Features;
