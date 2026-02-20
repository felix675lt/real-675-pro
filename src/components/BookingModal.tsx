import React from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 배경 클릭시 닫힘 */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* 모달 창 */}
      <div className="relative bg-neutral-900 border border-white/10 w-full max-w-md p-8 md:p-12 animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white">
          <X size={24} />
        </button>

        <h3 className="text-2xl text-white font-light mb-2">RESERVATION</h3>
        <p className="text-amber-500 text-xs tracking-widest mb-8 uppercase">Private Garage Suite</p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Name</label>
            <input type="text" className="w-full bg-black/50 border-b border-white/20 text-white p-3 focus:outline-none focus:border-amber-500 transition-colors" placeholder="홍길동" />
          </div>

          <div>
            <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Vehicle Model</label>
            <input type="text" className="w-full bg-black/50 border-b border-white/20 text-white p-3 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Porsche 911 GT3" />
          </div>

          <div>
            <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Date</label>
            <input type="date" className="w-full bg-black/50 border-b border-white/20 text-white p-3 focus:outline-none focus:border-amber-500 transition-colors" />
          </div>

          <button className="w-full bg-luxury-gold text-black py-4 mt-8 uppercase tracking-widest text-sm font-bold hover:brightness-110 transition-all">
            Request Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
