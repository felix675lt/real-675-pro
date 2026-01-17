import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Concierge from './components/Concierge';
import ConceptStory from './components/ConceptStory';
import SuitesModal from './components/SuitesModal';
import AmenitiesModal from './components/AmenitiesModal';
import ReservationModal from './components/ReservationModal';
import { Language } from './types';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isConceptOpen, setIsConceptOpen] = useState(false);
  const [isSuitesOpen, setIsSuitesOpen] = useState(false);
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  const openChat = () => setIsChatOpen(true);
  const openConcept = () => setIsConceptOpen(true);
  const openSuites = () => setIsSuitesOpen(true);
  const openAmenities = () => setIsAmenitiesOpen(true);
  const openReservation = () => setIsReservationOpen(true);

  return (
    <div className="min-h-screen bg-luxury-900 text-slate-200">
      <Navbar 
        onReserve={openReservation} 
        onOpenConcept={openConcept}
        onOpenSuites={openSuites}
        onOpenAmenities={openAmenities}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <Hero language={language} />
        <Features language={language} />
        <Gallery onReserve={openReservation} language={language} />
        
        {/* Footer Section */}
        <footer className="bg-black py-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-serif text-2xl font-bold text-white tracking-widest mb-6">GLASS ROOM</h2>
            <div className="flex justify-center gap-8 mb-8 text-sm text-slate-500">
              <a href="https://www.instagram.com/studio675_glass.room?igsh=MWIyYTExZXJ4aWp1Zw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-luxury-gold transition-colors" onClick={(e) => e.preventDefault()}>Twitter</a>
              <button onClick={openChat} className="hover:text-luxury-gold transition-colors">Contact</button>
            </div>
            <p className="text-xs text-slate-600 uppercase tracking-widest">
              © {new Date().getFullYear()} Glass Room. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
      
      {/* Modals */}
      <ConceptStory isOpen={isConceptOpen} onClose={() => setIsConceptOpen(false)} />
      <SuitesModal isOpen={isSuitesOpen} onClose={() => setIsSuitesOpen(false)} onReserve={openReservation} />
      <AmenitiesModal isOpen={isAmenitiesOpen} onClose={() => setIsAmenitiesOpen(false)} onReserve={openReservation} />
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} language={language} />
      
      <Concierge isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
};

export default App;