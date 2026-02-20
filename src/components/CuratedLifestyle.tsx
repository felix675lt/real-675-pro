import React from 'react';
import { Shield, Wind, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface CuratedLifestyleProps {
    language: Language;
}

const CuratedLifestyle: React.FC<CuratedLifestyleProps> = ({ language }) => {
    const t = translations[language];

    return (
        <section className="py-24 relative overflow-hidden bg-luxury-900">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <h4 className="text-luxury-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
                        {t.curated.subtitle || "Beyond The Glass"}
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-serif text-white animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
                        {t.curated.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    {/* Lumiere Pro Link */}
                    <a
                        href="https://lumiere-pro.pages.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black hover:border-luxury-gold/50 transition-all duration-700 shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] flex flex-col h-full"
                    >
                        <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="p-10 relative z-10 flex flex-col h-full text-left">
                            <div className="flex justify-between items-start mb-6">
                                <Shield className="w-10 h-10 text-slate-300 group-hover:text-luxury-gold transition-colors duration-500" />
                                <span className="text-[10px] uppercase tracking-widest text-luxury-gold border border-luxury-gold/30 bg-luxury-gold/5 px-3 py-1.5 rounded">Partner</span>
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-luxury-gold transition-colors duration-500">
                                {t.curated.lumiere.title}
                            </h3>
                            <p className="text-slate-300 text-base mb-8 flex-1 leading-relaxed font-light">
                                {t.curated.lumiere.desc}
                            </p>
                            <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-luxury-gold font-medium">
                                {t.curated.lumiere.linkText} <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                            </div>
                        </div>
                    </a>

                    {/* Velocity X Link */}
                    <a
                        href="https://velocity-x.pages.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black hover:border-blue-500/50 transition-all duration-700 shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col h-full"
                    >
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="p-10 relative z-10 flex flex-col h-full text-left">
                            <div className="flex justify-between items-start mb-6">
                                <Wind className="w-10 h-10 text-slate-300 group-hover:text-blue-400 transition-colors duration-500" />
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 border border-white/10 px-3 py-1.5 rounded group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">Partner</span>
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-blue-400 transition-colors duration-500">
                                {t.curated.velocity.title}
                            </h3>
                            <p className="text-slate-300 text-base mb-8 flex-1 leading-relaxed font-light">
                                {t.curated.velocity.desc}
                            </p>
                            <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-blue-400 font-medium">
                                {t.curated.velocity.linkText} <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CuratedLifestyle;
