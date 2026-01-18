import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop", // Dark Porsche
  "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1000&auto=format&fit=crop", // Garage atmosphere
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop"  // Detail shot
];

const Gallery: React.FC = () => {
  return (
    <section className="bg-black py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {images.map((img, idx) => (
          <div key={idx} className="relative aspect-square overflow-hidden group">
            <img 
              src={img} 
              alt={`Gallery ${idx}`} 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
