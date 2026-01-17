import React, { useState } from 'react';
import { Language } from '../types';
import { t } from '../translations';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  language: Language;
  introFinished: boolean;
  setIntroFinished: (val: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ language, introFinished, setIntroFinished }) => {
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  const handleEnter = () => {
    // 소리 재생 없이 바로 문이 열리는 애니메이션 시작
    setIsDoorOpen(true);
    
    setTimeout(() => {
      setIntroFinished(true);
    }, 1500);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* 오류가 나는 비디오 대신 고화질 배경 이미지 사용 */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${isDoorOpen ? 'opacity-40' : 'opacity-80'}`}
        style={{ 
          backgroundImage: 'url("
