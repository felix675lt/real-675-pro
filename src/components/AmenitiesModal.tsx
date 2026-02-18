import React, { useEffect, useState } from 'react';
import { X, Shield, Sparkles, UserCheck, Wifi, CheckCircle2, Info, ChevronRight, Wind } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface AmenitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReserve: () => void;
  language: Language;
  initialTab?: 'amenities' | 'gateway';
}

const AmenitiesModal: React.FC<AmenitiesModalProps> = ({ isOpen, onClose, onReserve, language, initialTab = 'amenities' }) => {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'amenities' | 'gateway'>(initialTab);

  const t = translations[language];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setVisible(true), 10);
      document.body.style.overflow = 'hidden';
      setActiveTab(initialTab);
    } else {
      setVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const handleSubmitGateway = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Service request submitted. Our specialists will contact you soon.");
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose}></div>

      <div className={`relative w-full max-w-5xl max-h-[90vh] bg-luxury-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 z-20 p-2 bg-black/40 hover:bg-white hover:text-black rounded-full text-white transition-colors">
          <X className="w-6 h-6" />
        </button>

        {/* Tab Header */}
        <div className="flex border-b border-white/10 bg-black/20">
          <button
            onClick={() => setActiveTab('amenities')}
            className={`flex-1 py-6 text-xs uppercase tracking-[0.2em] font-medium transition-all ${activeTab === 'amenities' ? 'text-luxury-gold bg-white/5 border-b-2 border-luxury-gold' : 'text-slate-500 hover:text-white'}`}
          >
            {t.nav.amenities}
          </button>
          <button
            onClick={() => setActiveTab('gateway')}
            className={`flex-1 py-6 text-xs uppercase tracking-[0.2em] font-medium transition-all ${activeTab === 'gateway' ? 'text-luxury-gold bg-white/5 border-b-2 border-luxury-gold' : 'text-slate-500 hover:text-white'}`}
          >
            {t.gateway.title}
          </button>
        </div>

        <div className="overflow-y-auto custom-scrollbar flex-1 p-8 md:p-12">

          {activeTab === 'amenities' ? (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Service Felt, Not Seen</h1>
                <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                  At The Glass Room, we believe true luxury is the absence of friction. Our amenities are designed to anticipate your needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group bg-white/5 p-8 rounded-lg border border-white/5 hover:border-luxury-gold/20 transition-all">
                  <UserCheck className="w-8 h-8 text-luxury-gold mb-6" />
                  <h3 className="text-2xl font-serif text-white mb-3">The Invisible Hand</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Zero-contact philosophy. Check-in is digital, garage access is biometric, and staff appear only when summoned.
                  </p>
                </div>

                <div className="group bg-white/5 p-8 rounded-lg border border-white/5 hover:border-luxury-gold/20 transition-all">
                  <Shield className="w-8 h-8 text-luxury-gold mb-6" />
                  <h3 className="text-2xl font-serif text-white mb-3">Fortress Privacy</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Sound-dampened walls and military-grade perimeter monitoring ensure your sanctuary remains private.
                  </p>
                </div>

                <div className="group bg-white/5 p-8 rounded-lg border border-white/5 hover:border-luxury-gold/20 transition-all">
                  <Sparkles className="w-8 h-8 text-luxury-gold mb-6" />
                  <h3 className="text-2xl font-serif text-white mb-3">Sensory Design</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Museum-grade lighting renders your car's paint true to life. Scented air and Bang & Olufsen audio.
                  </p>
                </div>

                <div className="group bg-white/5 p-8 rounded-lg border border-white/5 hover:border-luxury-gold/20 transition-all">
                  <Wifi className="w-8 h-8 text-luxury-gold mb-6" />
                  <h3 className="text-2xl font-serif text-white mb-3">AI Concierge</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    "Jarvis" is your digital butler. Instant response for room service, smart home controls, and detailing requests.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button onClick={onReserve} className="text-luxury-gold hover:text-white border-b border-luxury-gold hover:border-white transition-colors pb-1 uppercase tracking-widest text-xs">
                  Experience the Service
                </button>
              </div>

              {/* Curated Lifestyle Section */}
              <div className="mt-16 border-t border-white/5 pt-12 text-center md:text-left">
                <div className="mb-10 text-center">
                  <h4 className="text-luxury-gold text-xs font-bold tracking-[0.3em] uppercase mb-2">{t.curated.subtitle}</h4>
                  <h2 className="text-3xl font-serif text-white">{t.curated.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Lumiere Pro Link */}
                  <a
                    href="https://lumiere-pro.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-black hover:border-luxury-gold/30 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="p-8 relative z-10 flex flex-col h-full text-left">
                      <div className="flex justify-between items-start mb-4">
                        <Shield className="w-8 h-8 text-slate-300 group-hover:text-luxury-gold transition-colors" />
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 border border-white/10 px-2 py-1 rounded">Partner</span>
                      </div>
                      <h3 className="text-xl font-serif text-white mb-2">{t.curated.lumiere.title}</h3>
                      <p className="text-slate-400 text-sm mb-6 flex-1">{t.curated.lumiere.desc}</p>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-luxury-gold">
                        {t.curated.lumiere.linkText} <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>

                  {/* Velocity X Link */}
                  <a
                    href="https://velocity-x.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-black hover:border-luxury-gold/30 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="p-8 relative z-10 flex flex-col h-full text-left">
                      <div className="flex justify-between items-start mb-4">
                        <Wind className="w-8 h-8 text-slate-300 group-hover:text-blue-400 transition-colors" />
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 border border-white/10 px-2 py-1 rounded">Partner</span>
                      </div>
                      <h3 className="text-xl font-serif text-white mb-2">{t.curated.velocity.title}</h3>
                      <p className="text-slate-400 text-sm mb-6 flex-1">{t.curated.velocity.desc}</p>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400">
                        {t.curated.velocity.linkText} <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Gateway Info */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-serif text-white mb-4">Enter Korea <br /> Frictionless</h2>
                    <p className="text-slate-400 leading-relaxed font-light">
                      {t.gateway.subtitle}. {t.gateway.desc}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {t.gateway.list.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-slate-300 text-sm font-light">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg flex gap-3">
                    <Info className="w-5 h-5 text-blue-400 shrink-0" />
                    <p className="text-xs text-blue-100/70 leading-relaxed">
                      This service is exclusively for guests arriving with international vehicles via ferries. Studio 675 is the official provider for The Glass Room.
                    </p>
                  </div>
                </div>

                {/* Gateway Form */}
                <div className="bg-black/40 p-8 rounded-xl border border-white/10 shadow-xl">
                  <h4 className="text-sm uppercase tracking-widest text-luxury-gold mb-6">{t.gateway.formTitle}</h4>
                  <form onSubmit={handleSubmitGateway} className="space-y-4">
                    <input
                      type="text" required placeholder={t.gateway.fields.name}
                      className="w-full bg-[#1e1e1e] border border-white/10 rounded px-4 py-3 text-sm text-white focus:border-luxury-gold focus:outline-none transition-colors"
                    />
                    <input
                      type="email" required placeholder={t.gateway.fields.email}
                      className="w-full bg-[#1e1e1e] border border-white/10 rounded px-4 py-3 text-sm text-white focus:border-luxury-gold focus:outline-none transition-colors"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text" required placeholder={t.gateway.fields.vehicle}
                        className="w-full bg-[#1e1e1e] border border-white/10 rounded px-4 py-3 text-sm text-white focus:border-luxury-gold focus:outline-none transition-colors"
                      />
                      <input
                        type="text" required placeholder={t.gateway.fields.plate}
                        className="w-full bg-[#1e1e1e] border border-white/10 rounded px-4 py-3 text-sm text-white focus:border-luxury-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <input
                      type="text" required onFocus={(e) => e.target.type = 'date'} onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                      placeholder={t.gateway.fields.date}
                      className="w-full bg-[#1e1e1e] border border-white/10 rounded px-4 py-3 text-sm text-white focus:border-luxury-gold focus:outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#ff4b2b] hover:bg-white hover:text-black text-white font-bold py-4 rounded transition-all tracking-[0.2em] uppercase text-xs mt-2"
                    >
                      {t.gateway.button}
                    </button>
                  </form>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AmenitiesModal;
