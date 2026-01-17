import React, { useState } from 'react';
import Hero, { Language } from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';

function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const [introFinished, setIntroFinished] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* 1. 메뉴바 (예약 버튼 누르면 창 열림) */}
      <Navbar onReserve={() => setIsBookingOpen(true)} />

      {/* 2. 메인 대문 */}
      <Hero 
        language={language} 
        introFinished={introFinished} 
        setIntroFinished={setIntroFinished} 
      />
      
      {/* 3. 인트로 후 나타나는 콘텐츠 */}
      {introFinished && (
        <div className="animate-fade-in-up">
          <About />
          <Gallery />
          
          <footer className="py-12 text-center text-gray-600 text-xs tracking-widest border-t border-white/10">
            © 2026 GLASS ROOM. PRIVATE GARAGE SUITES.
          </footer>
        </div>
      )}

      {/* 4. 예약 모달창 (평소엔 숨겨짐) */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
}

export default App;
