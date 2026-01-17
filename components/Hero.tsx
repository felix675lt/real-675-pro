import React, { useState, useRef } from 'react';
import { ChevronDown, Lock, Unlock } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const t = translations[language].hero;

  const handleEnter = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(e => console.log("Audio play failed", e));
    }
  };

  const handleScrollDown = () => {
    const conceptSection = document.getElementById('concept');
    if (conceptSection) {
      conceptSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-luxury-900">
      {/* Background Video - Forest Road Drive (Revealed when doors open) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000"
        >
          <source src="https://videos.pexels.com/video-files/5453716/5453716-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay for text readability once inside */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-900/60 via-transparent to-luxury-900"></div>
      </div>

      {/* Audio - Engine Sound */}
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_73d4389063.mp3?filename=luxury-car-interior-driving-20675.mp3" type="audio/mpeg" />
      </audio>

      {/* The Garage Doors (Overlay) */}
      <div className="absolute inset-0 z-40 flex flex-col pointer-events-none">
        {/* Top Panel */}
        <div 
          className={`flex-1 w-full bg-[#0a0f1c] border-b border-white/5 relative transition-transform duration-[1500ms] ease-in-out z-50 flex items-end justify-center pb-8 ${
            isOpen ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
          {/* Texture/Pattern for the door */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-black"></div>
        </div>

        {/* Bottom Panel */}
        <div 
          className={`flex-1 w-full bg-[#0a0f1c] border-t border-white/5 relative transition-transform duration-[1500ms] ease-in-out z-50 flex items-start justify-center pt-8 ${
            isOpen ? 'translate-y-full' : 'translate-y-0'
          }`}
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-black"></div>
        </div>
      </div>

      {/* Enter Button (Visible only when closed) */}
      <div className={`absolute inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <button 
          onClick={handleEnter}
          className="group flex flex-col items-center gap-4 transition-all duration-500 hover:scale-105"
        >
          <div className="relative p-6 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm group-hover:border-luxury-gold/50 transition-colors">
            <Lock className="w-8 h-8 text-white/70 group-hover:text-luxury-gold transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full border border-white/5 animate-[ping_3s_ease-in-out_infinite] opacity-50"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-luxury-gold text-xs tracking-[0.5em] uppercase opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              {t.access}
            </span>
            <span className="text-3xl font-serif text-white tracking-[0.2em] font-light group-hover:text-white transition-colors">
              {t.enter}
            </span>
          </div>
        </button>
      </div>

      {/* Main Content (Revealed after opening) */}
      <div className={`absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 mt-12 transition-all duration-1000 delay-1000 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-luxury-gold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 animate-fade-in-up">
            {t.subtitle}
          </h2>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-4 drop-shadow-2xl opacity-95 tracking-tighter">
            {t.title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] w-8 md:w-12 bg-luxury-gold/50"></div>
            <p className="text-lg md:text-2xl font-light tracking-[0.3em] md:tracking-[0.5em] text-slate-200 uppercase whitespace-nowrap">
              {t.slogan}
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-luxury-gold/50"></div>
          </div>

          <p className="max-w-lg mx-auto text-slate-300 text-sm md:text-base font-light leading-relaxed mb-10 drop-shadow-md bg-black/20 backdrop-blur-md p-6 rounded-xl border border-white/5 whitespace-pre-line">
            {t.desc}
          </p>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={handleScrollDown}
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-1000 delay-[1500ms] cursor-pointer ${isOpen ? 'opacity-100 animate-bounce' : 'opacity-0'}`}
      >
        <ChevronDown className="w-8 h-8 text-white/50 hover:text-white transition-colors" />
      </div>
    </section>
  );
};

export default Hero;