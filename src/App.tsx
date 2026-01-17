import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react'; // 아이콘 추가
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';
import Concierge from './components/Concierge'; // 챗봇 추가

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false); // 챗봇 상태

  return (
    <div className="bg-black min-h-screen text-white relative">
      <Navbar onReserve={() => setIsBookingOpen(true)} />

      <Hero 
        language="ko" 
        introFinished={introFinished} 
        setIntroFinished={setIntroFinished} 
      />
      
      {introFinished && (
        <div className="animate-fade-in-up">
          <About />
          <Gallery />
          
          <footer className="py-12 text-center text-gray-600 text-xs tracking-widest border-t border-white/10">
            © 2026 GLASS ROOM. PRIVATE GARAGE SUITES.
          </footer>
        </div>
      )}

      {/* 챗봇 버튼 (항상 떠있음) */}
      {introFinished && !isConciergeOpen && (
        <button 
          onClick={() => setIsConciergeOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-amber-600 hover:bg-amber-500 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* 모달창들 */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Concierge 
        isOpen={isConciergeOpen} 
        onClose={() => setIsConciergeOpen(false)} 
        onReserve={() => {
          setIsConciergeOpen(false); // 챗봇 닫고
          setIsBookingOpen(true);    // 예약창 열기
        }}
      />
    </div>
  );
}

export default App;
