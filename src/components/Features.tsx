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
              <h3 className="text-luxury-gold uppercase tracking-widest text-sm mb-2 font-semibold">{t.concept}</h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight drop-shadow-md">
                {t.title}
              </h2>
            </div>
            <p className="text-slate-100 text-lg leading-relaxed font-light drop-shadow-sm">
              {t.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {amenities.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3 group">
                  <div className="group-hover:scale-110 transition-transform duration-300 origin-left">
                    {item.icon}
                  </div>
                  <h4 className="font-serif text-xl text-white">{item.title}</h4>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract Visual / Image */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/5 group shadow-2xl">
            {/* High-end luxury car interior or garage shot */}
            <img
              src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1200&auto=format&fit=crop"
              alt="Premium Garage"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[2s] ease-out filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-900 via-luxury-900/40 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)]" />

            <div className="absolute bottom-10 left-10 right-10 p-8 glass-panel rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
              <div className="h-[1px] w-12 bg-luxury-gold/50 mb-4"></div>
              <p className="font-serif italic text-white/90 text-xl font-light leading-relaxed">
                "{t.quote}"
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
