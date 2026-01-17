import React, { useState } from 'react';
import Hero, { Language } from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* 1. 메인 대문 */}
      <Hero 
        language={language} 
        introFinished={introFinished} 
        setIntroFinished={setIntroFinished} 
      />
      
      {/* 2. 대문이 열리면 아래 내용들이 보임 */}
      {introFinished && (
        <div className="animate-fade-in-up">
          <About />
          <Gallery />
          
          {/* 하단 푸터 */}
          <footer className="py-12 text-center text-gray-600 text-xs tracking-widest border-t border-white/10">
            © 2026 GLASS ROOM. PRIVATE GARAGE SUITES.
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
