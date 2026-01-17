import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// 타입을 파일 안에 직접 정의해서 오류 방지
export type Language = 'ko' | 'en' | 'jp';

interface HeroProps {
  language: Language;
  introFinished: boolean;
  setIntroFinished: (val: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ language, introFinished, setIntroFinished }) => {
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  const handleEnter = () => {
    setIsDoorOpen(true);
    setTimeout(() => {
      setIntroFinished(true);
    }, 1000);
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* 어두운 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* 인트로 대문 (가장 위에 표시 z-50) */}
      <div 
        className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black transition-transform duration-1000 ease-in-out ${isDoorOpen ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-[0.3em] text-white mb-12 animate-pulse">
          GLASS ROOM
        </h1>
        <button
          onClick={handleEnter}
          className="px-10 py-4 border border-white/50 hover:border-amber-500 hover:text-amber-500 text-white transition-all uppercase tracking-widest text-sm"
        >
          ENTER SANCTUARY
        </button>
      </div>

      {/* 메인 콘텐츠 (문 열리면 보임 z-10) */}
      <div className={`relative z-10 flex flex-col items-center justify-center text-center transition-opacity duration-1000 ${introFinished ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter">
          THE GLASS ROOM
        </h2>
        <p className="text-xl md:text-3xl text-amber-500 tracking-[0.2em] font-light mb-16">
          Drive in, Zone out.
        </p>
        
        {introFinished && (
          <ChevronDown 
            className="animate-bounce text-white/70 cursor-pointer" 
            size={48}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
