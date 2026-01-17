import React from 'react';

// 에러를 일으키는 AI 코드를 모두 제거한 껍데기 컴포넌트입니다.
interface ConciergeProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
  onReserve: () => void;
}

const Concierge: React.FC<ConciergeProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed bottom-4 right-4 bg-neutral-900 p-6 border border-amber-500 rounded-lg z-50">
      <p className="text-white mb-4">현재 AI 시스템 점검 중입니다.</p>
      <button onClick={onClose} className="text-amber-500 text-sm underline">닫기</button>
    </div>
  );
};

export default Concierge;
