import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onReserve: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onReserve }) => {
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 감지해서 디자인 바꾸기
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 py-4 flex justify-between items-center ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      {/* 로고 */}
      <div className="text-white font-bold tracking-[0.2em] text-lg">
        GLASS ROOM
      </div>

      {/* 우측 메뉴 */}
      <div className="flex items-center gap-8">
        <button className="text-white/70 hover:text-white text-xs tracking-widest uppercase hidden md:block transition-colors">
          Story
        </button>
        <button className="text-white/70 hover:text-white text-xs tracking-widest uppercase hidden md:block transition-colors">
          Gallery
        </button>
        <button 
          onClick={onReserve}
          className="border border-white/30 px-6 py-2 text-xs text-white tracking-widest uppercase hover:bg-white hover:text-black transition-all"
        >
          Reserve
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
