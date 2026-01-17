import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Sparkles, Headset, User, Bell, Lock } from 'lucide-react';
import { sendMessageToGemini, initChat } from '../services/geminiService';
import { ChatMessage } from '../types';

interface ConciergeProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Concierge: React.FC<ConciergeProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLiveMode, setIsLiveMode] = useState(false);
  const [isAdminView, setIsAdminView] = useState(false); // Simulates the staff view
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat on load (or first open)
  useEffect(() => {
    initChat();
    // Initial greeting
    setMessages([{ role: 'model', text: "Greetings. I am Jarvis, your personal concierge at The Paddock. How may I assist you with your stay or vehicle needs today?" }]);
    
    // Request notification permission on mount
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const triggerNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("GLASS ROOM CONCIERGE", {
        body: "A guest has requested live support.",
        icon: "/favicon.ico" // assuming favicon exists, otherwise browser default
      });
      // Play a subtle sound
      const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/24/audio_ff1f22e96a.mp3?filename=notification-sound-7062.mp3");
      audio.volume = 0.5;
      audio.play().catch(e => console.log("Audio play prevented", e));
    }
  };

  const requestLiveAgent = () => {
    setIsLiveMode(true);
    setMessages(prev => [...prev, { role: 'system', text: "Connecting you to a live specialist..." }]);
    
    // Simulate notifying the admin
    triggerNotification();

    // Simulate connection delay
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'agent', text: "This is the Front Desk. I see you need assistance. How can I help you directly?" }]);
    }, 1500);
  };

  const handleSend = async () => {
    if (!input.trim() || (isLoading && !isLiveMode && !isAdminView)) return;

    const userMsg = input;
    setInput('');

    // If in Admin View, we are sending AS the agent
    if (isAdminView) {
      setMessages(prev => [...prev, { role: 'agent', text: userMsg }]);
      return;
    }

    // Normal User Logic
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);

    // If Live Mode is active, we don't call AI. We wait for Admin to reply (simulated via AdminView or just waiting)
    if (isLiveMode) {
      // In a real app, this would send via WebSocket to the admin dashboard
      return; 
    }

    // AI Logic
    setIsLoading(true);
    const response = await sendMessageToGemini(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className={`glass-panel w-[90vw] md:w-96 h-[500px] rounded-2xl flex flex-col mb-4 overflow-hidden shadow-2xl animate-fade-in-up border ${isAdminView ? 'border-red-500/50' : 'border-luxury-gold/20'}`}>
          
          {/* Header */}
          <div className={`p-4 border-b border-white/10 flex justify-between items-center transition-colors ${isAdminView ? 'bg-red-900/80' : 'bg-luxury-800/80'}`}>
            <div className="flex items-center gap-2">
              {isAdminView ? (
                <div className="flex items-center gap-2 text-white">
                    <User className="w-4 h-4" />
                    <span className="font-serif font-semibold tracking-wide">STAFF MODE</span>
                </div>
              ) : isLiveMode ? (
                <div className="flex items-center gap-2 text-green-400">
                    <Headset className="w-4 h-4" />
                    <span className="font-serif font-semibold tracking-wide">LIVE SUPPORT</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-luxury-gold" />
                    <span className="font-serif text-white font-semibold tracking-wide">CONCIERGE AI</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-2">
                {!isLiveMode && !isAdminView && (
                    <button 
                        onClick={requestLiveAgent}
                        className="text-xs bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded transition-colors flex items-center gap-1"
                        title="Request Real Person"
                    >
                        <Headset className="w-3 h-3" />
                        <span className="hidden sm:inline">Human</span>
                    </button>
                )}
                
                {/* Secret Admin Toggle for Demo Purposes */}
                <button 
                    onClick={() => setIsAdminView(!isAdminView)} 
                    className={`text-white/20 hover:text-white/80 ${isAdminView ? 'text-red-400' : ''}`}
                    title="Toggle Staff View (Demo)"
                >
                    <Lock className="w-3 h-3" />
                </button>

                <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white ml-1">
                    <X className="w-5 h-5" />
                </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => {
                // Determine styling based on role
                let bubbleClass = "";
                let alignClass = "";
                let label = "";

                if (msg.role === 'user') {
                    alignClass = "justify-end";
                    bubbleClass = "bg-luxury-gold text-black rounded-tr-none";
                } else if (msg.role === 'model') {
                    alignClass = "justify-start";
                    bubbleClass = "bg-white/10 text-slate-200 rounded-tl-none border border-white/5";
                    label = "Jarvis";
                } else if (msg.role === 'agent') {
                    alignClass = "justify-start";
                    bubbleClass = "bg-luxury-900 border border-luxury-gold/50 text-luxury-gold rounded-tl-none shadow-[0_0_10px_rgba(212,175,55,0.1)]";
                    label = "Staff";
                } else if (msg.role === 'system') {
                    return (
                        <div key={idx} className="flex justify-center my-4">
                            <span className="text-xs text-slate-500 uppercase tracking-widest">{msg.text}</span>
                        </div>
                    );
                }

                return (
                    <div key={idx} className={`flex flex-col ${alignClass}`}>
                        {label && <span className="text-[10px] text-slate-500 mb-1 ml-1">{label}</span>}
                        <div className={`max-w-[85%] p-3 text-sm rounded-2xl ${bubbleClass}`}>
                            {msg.text}
                        </div>
                    </div>
                );
            })}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-luxury-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-luxury-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={`p-4 border-t border-white/10 ${isAdminView ? 'bg-red-900/20' : 'bg-luxury-900/50'}`}>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={isAdminView ? "Reply as Staff..." : "Ask about suites, amenities..."}
                className={`flex-1 bg-black/30 border rounded-full px-4 py-2 text-sm text-white focus:outline-none transition-colors ${isAdminView ? 'border-red-500/30 focus:border-red-500' : 'border-white/10 focus:border-luxury-gold/50'}`}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading && !isLiveMode && !isAdminView}
                className={`p-2 rounded-full hover:bg-white transition-colors disabled:opacity-50 ${isAdminView ? 'bg-red-500 text-white' : 'bg-luxury-gold text-black'}`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-luxury-gold rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border border-black"></span>
        <MessageSquare className="w-6 h-6 text-black group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};

export default Concierge;