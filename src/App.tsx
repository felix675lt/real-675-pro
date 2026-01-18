import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import ReservationModal from './components/ReservationModal';
import { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-luxury-900 min-h-screen text-white selection:bg-luxury-gold selection:text-black">
      <Navbar 
        language={language} 
        setLanguage={setLanguage}
        onReserve={() => setIsReservationOpen(true)}
        onOpenConcept={() => scrollToSection('concept')}
        onOpenSuites={() => scrollToSection('suites')}
        onOpenAmenities={() => scrollToSection('concept')}
      />
      
      <Hero language={language} />
      <Features language={language} />
      <Gallery language={language} onReserve={() => setIsReservationOpen(true)} />
      
      <footer className="py-12 border-t border-white/10 text-center text-slate-500 text-xs tracking-widest uppercase">
        <p>&copy; 2026 THE GLASS ROOM. All Rights Reserved.</p>
      </footer>

      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
        language={language}
      />
    </div>
  );
}

export default App;
