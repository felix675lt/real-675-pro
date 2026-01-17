import React, { useEffect, useState } from 'react';
import { X, Layers, ArrowRight } from 'lucide-react';

interface SuitesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReserve: () => void;
}

const SuitesModal: React.FC<SuitesModalProps> = ({ isOpen, onClose, onReserve }) => {
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
      
      <div className={`relative w-full max-w-6xl h-[90vh] bg-luxury-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Header */}
        <div className="absolute top-0 left-0 w-full z-20 p-6 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex flex-col">
             <h2 className="text-luxury-gold text-xs font-bold tracking-[0.3em] uppercase mb-2">The Architecture</h2>
             <h1 className="text-3xl font-serif text-white">Three Levels of Luxury</h1>
          </div>
          <button onClick={onClose} className="p-2 bg-black/20 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto custom-scrollbar flex-1 pb-20">
          
          {/* Level 1.5 - The Hero */}
          <div className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1600" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[2000ms]"
              alt="The Glass Suite"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-900 via-transparent to-black/40"></div>
            
            <div className="relative z-10 max-w-4xl px-8 text-center mt-20">
              <span className="inline-block px-4 py-1 border border-luxury-gold/50 rounded-full text-luxury-gold text-xs tracking-widest mb-6 backdrop-blur-md">LEVEL 1.5</span>
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">The Glass Suite</h2>
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                A suspended sanctuary designed around visibility. Separated from your machine only by a wall of acoustic glass, this is where you sleep beside your passion.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto border-t border-white/10 pt-8">
                <div>
                   <h4 className="text-white font-serif mb-2">Sleep</h4>
                   <p className="text-sm text-slate-400">Two Single King beds with Egyptian cotton, positioned for the perfect view.</p>
                </div>
                <div>
                   <h4 className="text-white font-serif mb-2">View</h4>
                   <p className="text-sm text-slate-400">Direct panoramic sightline to your private garage bay.</p>
                </div>
                <div>
                   <h4 className="text-white font-serif mb-2">Tech</h4>
                   <p className="text-sm text-slate-400">Smart glass opacity control for instant privacy.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Level 2 - The Recharge */}
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
             <div className="bg-luxury-800 p-12 md:p-20 flex flex-col justify-center">
                <span className="text-luxury-gold text-xs tracking-widest mb-4">LEVEL 2.0</span>
                <h3 className="text-4xl font-serif text-white mb-6">Redline Zone</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  The upper deck is dedicated to contrasting energies: high-octane focus and deep recovery.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-luxury-gold mt-1">•</span>
                    <div>
                      <strong className="text-white block font-serif">Gaming Arena</strong>
                      <span className="text-sm text-slate-500">Dual high-spec PCs and Sim-Racing rigs.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-luxury-gold mt-1">•</span>
                    <div>
                      <strong className="text-white block font-serif">Wellness Suite</strong>
                      <span className="text-sm text-slate-500">Finnish sauna and cold plunge shower.</span>
                    </div>
                  </li>
                </ul>
             </div>
             <div className="relative h-96 md:h-auto">
               <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover" alt="Redline Zone" />
             </div>
          </div>

          {/* Level 1 - The Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
             <div className="relative h-96 md:h-auto order-2 md:order-1">
               <img src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover" alt="The Paddock Lounge" />
             </div>
             <div className="bg-[#0b101b] p-12 md:p-20 flex flex-col justify-center order-1 md:order-2">
                <span className="text-luxury-gold text-xs tracking-widest mb-4">LEVEL 1.0</span>
                <h3 className="text-4xl font-serif text-white mb-6">The Paddock Lounge</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  The ground floor is the social engine. A space to debrief, drink, and discuss the drive.
                </p>
                <div className="space-y-6">
                  <div className="border-l-2 border-luxury-gold/30 pl-6">
                    <h4 className="text-white font-serif text-lg">Curated Bar</h4>
                    <p className="text-sm text-slate-500 mt-1">Rare scotches and artisanal coffees included.</p>
                  </div>
                  <div className="border-l-2 border-luxury-gold/30 pl-6">
                    <h4 className="text-white font-serif text-lg">Gourmet Bites</h4>
                    <p className="text-sm text-slate-500 mt-1">Rotating menu of chef-prepared tapas available 24/7.</p>
                  </div>
                </div>
             </div>
          </div>

          {/* Call to Action */}
          <div className="bg-luxury-gold py-16 text-center">
            <h2 className="text-2xl font-serif text-black mb-6">Ready to secure your suite?</h2>
            <button 
              onClick={() => { onClose(); onReserve(); }}
              className="bg-black text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2 mx-auto"
            >
              Check Availability <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SuitesModal;