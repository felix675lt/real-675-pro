import React from 'react';
import { ShieldCheck, Music, Wifi, Coffee } from 'lucide-react';
import { Amenity, Language } from '../types';
import { translations } from '../translations';

interface FeaturesProps {
  language: Language;
}

const Features: React.FC<FeaturesProps> = ({ language }) => {
  const t = translations[language].features;

  const amenities: Amenity[] = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-luxury-gold" />,
      title: t.items[0].title,
      description: t.items[0].desc
    },
    {
      icon: <Music className="w-8 h-8 text-luxury-gold" />,
      title: t.items[1].title,
      description: t.items[1].desc
    },
    {
      icon: <Wifi className="w-8 h-8 text-luxury-gold" />,
      title: t.items[2].title,
      description: t.items[2].desc
    },
    {
      icon: <Coffee className="w-8 h-8 text-luxury-gold" />,
      title: t.items[3].title,
      description: t.items[3].desc
    }
  ];

  return (
    <section id="concept" className="py-24 bg-luxury-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-luxury-gold uppercase tracking-widest text-sm mb-2">{t.concept}</h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                {t.title}
              </h2>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              {t.desc}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {amenities.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3 group">
                  <div className="group-hover:scale-110 transition-transform duration-300 origin-left">
                    {item.icon}
                  </div>
                  <h4 className="font-serif text-xl text-white">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract Visual / Image */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 group">
             {/* Use a sleek placeholder representing a car in a dark garage */}
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop" 
              alt="Supercar in garage" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-900 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel rounded-xl">
              <p className="font-serif italic text-white text-lg">{t.quote}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;