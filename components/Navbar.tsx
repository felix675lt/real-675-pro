import React, { useState, useEffect } from 'react';
import { Menu, X, Key, Globe, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface NavbarProps {
  onReserve: () => void;
  onOpenConcept: () => void;
  onOpenSuites: () => void;
  onOpenAmenities: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onReserve, 
  onOpenConcept, 
  onOpenSuites, 
  onOpenAmenities, 
  language, 
  setLanguage 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[language].nav;

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'ja', label: '日本語' },
    { code: 'zh', label: '中文' },
    { code: 'es', label: 'Español' },
    { code: 'ru', label: 'Русский' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-luxury-900/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Key className="w-6 h-6 text-luxury-gold" />
          <span className="font-serif text-2xl font-bold tracking-widest text-white">GLASS ROOM</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={onOpenConcept} 
            className="text-sm uppercase tracking-widest hover:text-luxury-gold transition-colors"
          >
            {t.concept}
          </button>
          <button 
            onClick={onOpenSuites}
            className="text-sm uppercase tracking-widest hover:text-luxury-gold transition-colors"
          >
            {t.suites}
          </button>
          <button 
            onClick={onOpenAmenities}
            className="text-sm uppercase tracking-widest hover:text-luxury-gold transition-colors"
          >
            {t.amenities}
          </button>
          <button 
            onClick={onReserve}
            className="border border-luxury-gold text-luxury-gold px-6 py-2 uppercase text-xs tracking-widest hover:bg-luxury-gold hover:text-black transition-all duration-300"
          >
            {t.reserve}
          </button>
          
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase text-xs tracking-widest">{language}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            
            {langMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 bg-luxury-900 border border-white/10 rounded-lg shadow-xl overflow-hidden animate-fade-in">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 text-xs uppercase tracking-widest hover:bg-white/10 transition-colors ${
                      language === lang.code ? 'text-luxury-gold' : 'text-slate-300'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Language Toggle (Simple Cycle) */}
            <button 
              onClick={() => {
                const currentIndex = languages.findIndex(l => l.code === language);
                const nextIndex = (currentIndex + 1) % languages.length;
                setLanguage(languages[nextIndex].code);
              }}
              className="text-white flex items-center gap-1"
            >
                <Globe className="w-5 h-5" />
                <span className="text-xs uppercase">{language}</span>
            </button>

            <button 
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
            {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-luxury-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden glass-panel">
          <button 
            className="text-lg font-serif text-left" 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConcept();
            }}
          >
            {t.concept}
          </button>
          <button 
            className="text-lg font-serif text-left"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSuites();
            }}
          >
            {t.suites}
          </button>
          <button 
            className="text-lg font-serif text-left"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAmenities();
            }}
          >
            {t.amenities}
          </button>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onReserve();
            }}
            className="bg-luxury-gold text-black py-3 uppercase tracking-widest mt-4"
          >
            {t.reserve}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;