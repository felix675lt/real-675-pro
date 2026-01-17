import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import ReservationModal from './components/ReservationModal';
import ConceptStory from './components/ConceptStory';
import { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isConceptOpen, setIsConceptOpen] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);

  const handleReserve = () => setIsReservationOpen(true);

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-amber-500 selection:text-black">
      <Navbar 
        language={language} 
        setLanguage={setLanguage}
        onOpenConcept={() => setIsConceptOpen(true)}
        onReserve={handleReserve}
      />
      
      <Hero 
        language={language} 
        introFinished={introFinished} 
        setIntroFinished={setIntroFinished}
      />

      {introFinished && (
        <>
          <main className="relative z-10">
            <Gallery language={language} onReserve={handleReserve} />
          </main>

          <footer className="py-12 bg-black text-center text-neutral-500">
            <p className="mb-4 text-sm tracking-widest">THE GLASS ROOM SEOUL</p>
            <a 
              href="https://www.instagram.com/studio675_glass.room" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-amber-500 transition-colors"
            >
              INSTAGRAM @studio675_glass.room
            </a>
          </footer>
        </>
      )}

      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
        language={language} 
      />
      
      <ConceptStory 
        isOpen={isConceptOpen} 
        onClose={() => setIsConceptOpen(false)} 
        language={
