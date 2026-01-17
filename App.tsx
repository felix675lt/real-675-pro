import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import ReservationModal from './components/ReservationModal';
import ConceptStory from './components/ConceptStory';
// import Concierge from './components/Concierge'; // 챗봇 잠시 끄기
import { Language } from './types';
import { MessageCircle } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const [isChatOpen, setIsChatOpen] = useState(false);
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

      {/* 메인 콘텐츠는 인트로 후 표시 */}
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

      {/* 모달 및 오버레이 */}
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
        language={language} 
      />
      
      <ConceptStory 
        isOpen={isConceptOpen} 
        onClose={() => setIsConceptOpen(false)} 
        language={language}
      />

      {/* 챗봇(Concierge) 기능은 잠시 숨김 처리 */}
      {/* <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {isChatOpen && (
           <Concierge 
             isOpen={isChatOpen} 
             onClose={() => setIsChatOpen(false)} 
             language={language}
             onReserve={handleReserve}
           />
        )}
        {!isChatOpen && introFinished && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-105"
          >
            <MessageCircle size={28} />
          </button>
        )}
      </div> 
      */}
    </div>
  );
}

export default App;
