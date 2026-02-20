import React, { useState } from 'react';
import { ArrowRight, X, Calendar, ChevronRight } from 'lucide-react';
import { Room, Language } from '../types';
import { translations } from '../translations';

interface GalleryProps {
  onReserve: () => void;
  language: Language;
}

const Gallery: React.FC<GalleryProps> = ({ onReserve, language }) => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const t = translations[language].gallery;

  const rooms: Room[] = [
    {
      id: '1',
      title: t.rooms[0].title,
      description: t.rooms[0].desc,
      details: t.rooms[0].detail,
      // Luxury Bedroom Suite
      imageUrl: "https://images.unsplash.com/photo-1631049035182-249067d7618e?q=80&w=1200&auto=format&fit=crop",
      price: t.rooms[0].price,
      features: ["1.5 Floor", "2 Single Kings", "Car View", "AR Tuning"]
    },
    {
      id: '2',
      title: t.rooms[1].title,
      description: t.rooms[1].desc,
      details: t.rooms[1].detail,
      // Premium Lounge Bar
      imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
      price: t.rooms[1].price,
      features: ["1st Floor", "Premium Bar", "Snacks"]
    },
    {
      id: '3',
      title: t.rooms[2].title,
      description: t.rooms[2].desc,
      details: t.rooms[2].detail,
      // High-end Gaming/Entertainment Zone
      imageUrl: "/luxury_sauna_redline.png",
      price: t.rooms[2].price,
      features: ["2nd Floor", "PC Gaming", "Sauna"]
    }
  ];

  return (
    <section id="suites" className="py-24 bg-luxury-800 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h3 className="text-luxury-gold uppercase tracking-widest text-sm mb-2">{t.spaces}</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">{t.explore}</h2>
          </div>
          <button
            onClick={onReserve}
            className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-luxury-gold transition-colors mt-6 md:mt-0"
          >
            {t.checkAvailability} <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="group relative overflow-hidden rounded-xl bg-luxury-900 border border-white/5 hover:border-luxury-gold/50 transition-all duration-700 flex flex-col hover:shadow-[0_0_30px_rgba(197,160,89,0.15)]">
              <div className="h-72 overflow-hidden relative cursor-pointer" onClick={() => setSelectedRoom(room)}>
                <img
                  src={room.imageUrl}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-900 via-luxury-900/40 to-transparent opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[4px]">
                  <span className="uppercase tracking-[0.2em] text-xs border border-luxury-gold/50 text-luxury-gold px-6 py-3 rounded-sm">{t.viewDetails}</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-luxury-900 relative">
                {/* Subtle top glow line */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif text-white cursor-pointer group-hover:text-luxury-gold transition-colors duration-500" onClick={() => setSelectedRoom(room)}>
                    {room.title}
                  </h3>
                </div>
                <p className="text-slate-200 text-sm mb-6 leading-relaxed flex-1">
                  {room.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((feature, i) => (
                    <span key={i} className="text-xs border border-white/20 px-3 py-1 rounded-full text-slate-100 bg-white/5">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-white/5 mt-auto">
                  <span className="text-luxury-gold font-serif text-sm md:text-base tracking-wider">{room.price}</span>
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-luxury-gold transition-colors"
                  >
                    {t.details} <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onReserve}
          className="md:hidden flex items-center justify-center w-full gap-2 text-sm uppercase tracking-widest border border-white/10 py-4 mt-8 hover:bg-white/5 transition-colors"
        >
          {t.checkAvailability} <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Detail Modal Overlay */}
      {selectedRoom && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 animate-fade-in">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedRoom(null)}></div>

          <div className="relative w-full max-w-5xl bg-luxury-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Side */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img
                src={selectedRoom.imageUrl}
                alt={selectedRoom.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-luxury-900 via-transparent to-transparent opacity-80 md:opacity-50"></div>
              <div className="absolute bottom-6 left-6 md:hidden">
                <h2 className="text-3xl font-serif font-bold text-white">{selectedRoom.title}</h2>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-luxury-900 flex flex-col custom-scrollbar">
              <div className="hidden md:block mb-6">
                <h2 className="text-4xl font-serif font-bold text-white mb-2">{selectedRoom.title}</h2>
                <p className="text-luxury-gold uppercase tracking-widest text-sm">{selectedRoom.features[0]}</p>
              </div>

              <div className="prose prose-invert prose-slate max-w-none mb-8">
                {selectedRoom.details.split('\n\n').map((paragraph, idx) => (
                  <div key={idx} className="mb-4">
                    {paragraph.includes(':') ? (
                      <>
                        <h4 className="text-white font-serif text-lg mb-1">{paragraph.split(':')[0]}</h4>
                        <p className="text-slate-400 font-light leading-relaxed text-sm">{paragraph.split(':')[1]}</p>
                      </>
                    ) : (
                      <p className="text-slate-300 font-light leading-relaxed">{paragraph}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedRoom.features.map((f, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/5">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => {
                      setSelectedRoom(null);
                      onReserve();
                    }}
                    className="flex-1 bg-luxury-gold text-black py-4 uppercase tracking-widest font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    {selectedRoom.id === '1' ? t.book : t.inquire}
                  </button>
                  <button
                    onClick={() => setSelectedRoom(null)}
                    className="px-6 py-4 border border-white/10 hover:bg-white/5 transition-colors uppercase tracking-widest text-sm"
                  >
                    {t.close}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
