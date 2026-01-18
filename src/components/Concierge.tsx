import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface ConciergeProps {
  isOpen: boolean;
  onClose: () => void;
  onReserve: () => void;
}

const Concierge: React.FC<ConciergeProps> = ({ isOpen, onClose, onReserve }) => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Welcome to GLASS ROOM. 무엇을 도와드릴까요?" }
  ]);
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    
    // 임시 응답 (나중에 진짜 AI로 교체 가능)
    setTimeout(() => {
      let reply = "죄송합니다. 현재 AI 시스템 점검 중입니다.";
      if (input.includes("예약")) {
        reply = "예약을 원하시면 하단의 'RESERVE' 버튼을 눌러주세요. 바로 안내해 드리겠습니다.";
        onReserve(); // 예약창 열기 기능 연결
      }
      setMessages(prev => [...prev, { role: 'ai', text: reply }]);
    }, 800);
    
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 md:w-96 bg-black/90 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col h-[500px] animate-fade-in-up">
      {/* 헤더 */}
      <div className="p-4 border-b border-white/10 flex justify-between items-center bg-neutral-900/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-light tracking-widest">CONCIERGE AI</span>
        </div>
        <button onClick={onClose} className="text-white/50 hover:text-white">
          <X size={18} />
        </button>
      </div>

      {/* 채팅 내용 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 text-sm leading-relaxed ${
              msg.role === 'user' ? 'bg-amber-600 text-white' : 'bg-neutral-800 text-gray-300'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* 입력창 */}
      <div className="p-4 border-t border-white/10 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder-white/30"
          placeholder="메시지를 입력하세요..."
        />
        <button onClick={handleSend} className="text-amber-500 hover:text-amber-400">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default Concierge;
