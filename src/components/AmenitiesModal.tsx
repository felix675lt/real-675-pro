import React, { useEffect, useState } from 'react';
import { X, Shield, Sparkles, UserCheck, Wifi } from 'lucide-react';

interface AmenitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReserve: () => void;
}

const AmenitiesModal: React.FC<AmenitiesModalProps> = ({ isOpen, onClose, onReserve }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setVisible(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className={`relative w-full max-w-5xl max-h-[90vh] bg-luxury-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        <button onClick={onClose} className="absolute top-6 right-6 z-20 p-2 bg-black/40 hover:bg-white hover:text-black rounded-full text-white transition-colors">
            <X className="w-6 h-6" />
        </button>

        <div className="overflow-y-auto custom-scrollbar p-8 md:p-16">
          <div className="text-center mb-16">
            <h2 className="text-luxury-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in">Curated Care</h2>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 animate-fade-in-up">Service Felt, Not Seen</h1>
            <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              At The Glass Room, we believe true luxury is the absence of friction. Our amenities are designed to anticipate your needs before you articulate them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Item 1 */}
            <div className="group bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-colors animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-luxury-gold/40 transition-colors">
                <UserCheck className="w-6 h-6 text-luxury-gold" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-3">The Invisible Hand</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                We operate on a "zero-contact" philosophy by default. Check-in is digital. Garage access is biometric. Staff are present but invisible, appearing only when summoned via the in-room tablet.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 uppercase tracking-wide">
                <li>• No Front Desk Queue</li>
                <li>• Private Garage Entry</li>
                <li>• Discreet Room Service</li>
              </ul>
            </div>

            {/* Item 2 */}
            <div className="group bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-colors animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-luxury-gold/40 transition-colors">
                <Shield className="w-6 h-6 text-luxury-gold" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-3">Fortress Privacy</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Your vehicle is your asset. Our facility is monitored by military-grade security systems, but your suite remains a private void. No cameras inside. Sound-dampened walls ensure your conversations stay yours.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 uppercase tracking-wide">
                <li>• 24/7 Perimeter Security</li>
                <li>• Soundproof Architecture</li>
                <li>• Encrypted Wi-Fi</li>
              </ul>
            </div>

            {/* Item 3 */}
            <div className="group bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-colors animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-luxury-gold/40 transition-colors">
                <Sparkles className="w-6 h-6 text-luxury-gold" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-3">Sensory Design</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Every touchpoint is engineered. The air is lightly scented with leather and sandalwood. The lighting is museum-grade (98 CRI) to render your car's paint true to life. The linens are 1000-thread count Egyptian cotton.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 uppercase tracking-wide">
                <li>• Aromatherapy HVAC</li>
                <li>• Bang & Olufsen Audio</li>
                <li>• Museum Lighting</li>
              </ul>
            </div>

            {/* Item 4 */}
            <div className="group bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-colors animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-luxury-gold/40 transition-colors">
                <Wifi className="w-6 h-6 text-luxury-gold" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-3">AI Concierge</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                "Jarvis" is your digital butler. Request vehicle detailing, order a midnight snack, or adjust the opacity of your glass wall—all via voice command or chat.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 uppercase tracking-wide">
                <li>• Instant Response</li>
                <li>• Vehicle Detailing Requests</li>
                <li>• Smart Home Control</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
             <p className="font-serif italic text-white text-lg mb-6">"We take care of the details, so you can focus on the drive."</p>
             <button onClick={onReserve} className="text-luxury-gold hover:text-white border-b border-luxury-gold hover:border-white transition-colors pb-1 uppercase tracking-widest text-xs">
               Experience the Service
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesModal;