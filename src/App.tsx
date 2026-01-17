import React, { useState } from 'react';
import Hero, { Language } from './components/Hero';

function App() {
  // 상태 관리 (언어, 인트로 종료 여부)
  const [language, setLanguage] = useState<Language>('ko');
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* 히어로 섹션 (대문 & 메인) */}
      <Hero 
        language={language} 
        introFinished={introFinished} 
        setIntroFinished={setIntroFinished} 
      />
      
      {/* 인트로가 끝나면 아래에 내용이 더 나올 공간 */}
      {introFinished && (
        <div className="h-screen flex items-center justify-center bg-neutral-900">
          <p className="text-gray-500">More content coming soon...</p>
        </div>
      )}
    </div>
  );
}

export default App;
