import React, { useEffect, useState } from 'react';
import { X, Quote } from 'lucide-react';

interface ConceptStoryProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConceptStory: React.FC<ConceptStoryProps> = ({ isOpen, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small delay to allow mounting before fading in
      setTimeout(() => setVisible(true), 10);
      // Disable body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      setVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-xl" 
        onClick={onClose}
      ></div>
      
      {/* Content Container */}
      <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 md:absolute md:top-0 md:right-0 z-50 text-white/40 hover:text-luxury-gold transition-colors duration-300"
        >
          <X className="w-8 h-8 md:w-6 md:h-6" />
        </button>

        <div className="flex flex-col items-center text-center px-4 md:px-12 py-12 md:py-20">
          
          <div className="mb-8 animate-pulse">
            <div className="h-[1px] w-20 bg-luxury-gold/50 mx-auto"></div>
          </div>

          <h3 className="text-luxury-gold uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-semibold animate-fade-in">
            The Origin Story
          </h3>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-12 leading-none animate-fade-in-up">
            Beyond <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600">The Garage</span>
          </h2>

          <div className="max-w-2xl mx-auto space-y-8 text-lg md:text-xl font-light text-slate-300 leading-relaxed font-sans animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <p>
              It began on a rainy night in Zurich. Our founder, exhausted after a 600-mile grand tour, handed his keys to a valet at a 5-star hotel. As he watched his vehicle—his companion—disappear into a dark, unknown basement, he felt a sudden disconnect.
            </p>
            
            <div className="relative py-8 my-4">
              <Quote className="w-8 h-8 text-luxury-gold/20 absolute -top-2 -left-4" />
              <p className="font-serif text-2xl md:text-3xl text-white italic">
                "Why must the machine be hidden? Why is the journey separated from the destination?"
              </p>
            </div>

            <p>
              That night, the concept of <span className="text-white font-medium">The Glass Room</span> was born.
            </p>

            <p>
              We collaborated with automotive architects to erase the boundary between living space and parking space. We replaced concrete walls with acoustic glass. We replaced the valet with a seamless drive-in experience.
            </p>

            <p>
              Here, your vehicle isn't stored. It is exhibited. It sleeps beside you, visible from your bed, bathed in museum-grade lighting. It is the final piece of furniture in your suite.
            </p>
          </div>

          <div className="mt-16 w-full max-w-lg mx-auto relative group animate-fade-in-up" style={{ animationDelay: '500ms' }}>
             <div className="absolute -inset-1 bg-gradient-to-r from-luxury-gold/20 to-purple-900/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
             <img 
                 src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop" 
                 alt="Architectural Sketch" 
                 className="relative w-full h-auto rounded-lg border border-white/10 opacity-70 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
             />
             <p className="text-[10px] text-center text-slate-600 mt-4 tracking-[0.3em] uppercase">
                Figure 1.A — Visual Transparency Concept
             </p>
          </div>

          <div className="mt-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <button 
                onClick={onClose}
                className="text-xs uppercase tracking-[0.3em] text-white hover:text-luxury-gold transition-colors pb-1 border-b border-transparent hover:border-luxury-gold"
            >
                Return to Experience
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ConceptStory;