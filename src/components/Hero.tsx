import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    }, 1500); // 문이 열리는 시간과 싱크를 맞춤
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
      {/* 1. 배경을 더 어둡고 고급스럽게 눌러주는 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-0"></div>

      {/* 2. 인트로 대문 (framer-motion으로 부드럽게 위로 올라감) */}
      <AnimatePresence>
        {!introFinished && (
          <motion.div 
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black"
            initial={{ y: 0 }}
            animate={isDoorOpen ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // 고급스러운 가속도 커브
          >
            {/* 로고 애니메이션 */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-8xl font-bold tracking-[0.2em] text-white mb-12 text-center"
            >
              GLASS ROOM
            </motion.h1>

            {/* 입장 버튼 */}
            <motion.button
              onClick={handleEnter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(245, 158, 11, 1)", color: "rgba(245, 158, 11, 1)" }}
              className="px-12 py-4 border border-white/30 text-white/80 transition-all uppercase tracking-[0.3em] text-xs font-light"
            >
              Enter Sanctuary
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. 메인 콘텐츠 (문이 열린 뒤 나타나는 화면) */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={introFinished ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter mix-blend-overlay">
          THE <span className="text-amber-500">GLASS</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/80 tracking-[0.5em] font-light mb-16 uppercase">
          Private Garage Suites
        </p>
        
        {introFinished && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          >
            <ChevronDown 
              className="text-white/50 cursor-pointer hover:text-white transition-colors" 
              size={32}
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Hero;
