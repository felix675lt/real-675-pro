import React, { useState, useEffect } from 'react';
import { X, Clock, CreditCard, CheckCircle, ChevronRight, ChevronLeft, Moon, Sun, Users, Lock } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

type Step = 'type' | 'date' | 'payment' | 'confirmed';
type StayType = 'overnight' | 'dayuse';

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose, language }) => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<Step>('type');
  const [stayType, setStayType] = useState<StayType>('overnight');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewDate, setViewDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('15:00');
  const [guests, setGuests] = useState(2);
  const [isProcessing, setIsProcessing] = useState(false);

  const t = translations[language].reservation;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setVisible(true), 10);
      document.body.style.overflow = 'hidden';
      setStep('type');
      setIsProcessing(false);
      setViewDate(new Date());
      if (selectedDate < new Date()) {
        setSelectedDate(new Date());
      }
    } else {
      setVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const generateCalendarDays = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return days;
  };

  const getWeekDays = (lang: string) => {
    const baseDate = new Date(2025, 0, 5); 
    const days = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(baseDate);
        d.setDate(baseDate.getDate() + i);
        days.push(d.toLocaleDateString(lang, { weekday: 'short' }));
    }
    return days;
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    setSelectedDate(newDate);
  };

  const changeMonth = (offset: number) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1);
    const today = new Date();
    if (newDate.getFullYear() > today.getFullYear() || 
       (newDate.getFullYear() === today.getFullYear() && newDate.getMonth() >= today.getMonth())) {
      setViewDate(newDate);
    }
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('confirmed');
    }, 2000);
  };

  const renderTypeSelection = () => (
    <div className="space-y-8 animate-fade-in-up">
      <div className="text-center">
        <h2 className="text-luxury-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">{t.step1}</h2>
        <h1 className="text-3xl font-serif text-white mb-2">{t.selectExp}</h1>
        <p className="text-slate-400 font-light">{t.expDesc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <button 
          onClick={() => { setStayType('overnight'); setStep('date'); }}
          className="group relative p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-luxury-gold/50 transition-all text-left"
        >
          <div className="absolute top-4 right-4 text-luxury-gold opacity-50 group-hover:opacity-100">
            <Moon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-serif text-white mb-2 group-hover:text-luxury-gold transition-colors">{t.overnight}</h3>
          <p className="text-sm text-slate-400 mb-4 whitespace-pre-line">{t.overnightDesc}</p>
          <div className="text-xs uppercase tracking-widest text-slate-500 border-t border-white/5 pt-4">
            {t.overnightPrice}
          </div>
        </button>

        <button 
          onClick={() => { setStayType('dayuse'); setStep('date'); }}
          className="group relative p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-luxury-gold/50 transition-all text-left"
        >
          <div className="absolute top-4 right-4 text-luxury-gold opacity-50 group-hover:opacity-100">
            <Sun className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-serif text-white mb-2 group-hover:text-luxury-gold transition-colors">{t.dayuse}</h3>
          <p className="text-sm text-slate-400 mb-4 whitespace-pre-line">{t.dayuseDesc}</p>
          <div className="text-xs uppercase tracking-widest text-slate-500 border-t border-white/5 pt-4">
            {t.dayusePrice}
          </div>
        </button>
      </div>
    </div>
  );

  const renderDateSelection = () => (
    <div className="h-full flex flex-col animate-fade-in-up">
      <div className="text-center mb-8">
        <button onClick={() => setStep('type')} className="text-xs text-slate-500 hover:text-white mb-2 flex items-center justify-center gap-1 mx-auto">
          <ChevronLeft className="w-3 h-3" /> {t.back}
        </button>
        <h2 className="text-luxury-gold text-xs font-bold tracking-[0.3em] uppercase mb-2">{t.step2}</h2>
        <h1 className="text-3xl font-serif text-white">{t.dateDetails}</h1>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Calendar Section */}
          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-lg text-white capitalize">
                {viewDate.toLocaleDateString(language, { month: 'long', year: 'numeric' })}
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={() => changeMonth(-1)} 
                  className="p-1 hover:bg-white/10 rounded text-white transition-colors"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => changeMonth(1)}
                  className="p-1 hover:bg-white/10 rounded text-white transition-colors"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
              {getWeekDays(language).map((d) => (
                <div key={d} className="text-slate-500 text-xs uppercase">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {generateCalendarDays().map((day, idx) => {
                const isSelected = day && 
                                   day === selectedDate.getDate() && 
                                   viewDate.getMonth() === selectedDate.getMonth() && 
                                   viewDate.getFullYear() === selectedDate.getFullYear();
                
                const isPast = day && new Date(viewDate.getFullYear(), viewDate.getMonth(), day) < new Date(new Date().setHours(0,0,0,0));

                return (
                  <button 
                    key={idx}
                    disabled={!day || !!isPast}
                    onClick={() => day && handleDateSelect(day)}
                    className={`
                      p-3 rounded-lg text-sm font-medium transition-all relative
                      ${!day ? 'invisible' : ''}
                      ${isSelected 
                        ? 'bg-luxury-gold text-black shadow-lg shadow-luxury-gold/20' 
                        : 'text-slate-300 hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed'}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time & Guests Section */}
          <div className="space-y-8">
            <div>
              <label className="flex items-center gap-2 text-luxury-gold text-xs uppercase tracking-widest mb-4">
                <Clock className="w-4 h-4" /> {t.checkin}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {stayType === 'overnight' ? (
                   ['15:00', '16:00', '17:00', '18:00', '19:00', '20:00'].map(time => (
                    <button 
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 border rounded-lg text-sm transition-all ${
                        selectedTime === time 
                        ? 'border-luxury-gold bg-luxury-gold/10 text-white' 
                        : 'border-white/10 text-slate-400 hover:border-white/30'
                      }`}
                    >
                      {time}
                    </button>
                   ))
                ) : (
                  ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'].map(time => (
                    <button 
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 border rounded-lg text-sm transition-all ${
                        selectedTime === time 
                        ? 'border-luxury-gold bg-luxury-gold/10 text-white' 
                        : 'border-white/10 text-slate-400 hover:border-white/30'
                      }`}
                    >
                      {time}
                    </button>
                   ))
                )}
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-luxury-gold text-xs uppercase tracking-widest mb-4">
                <Users className="w-4 h-4" /> {t.guests}
              </label>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                <button 
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  -
                </button>
                <span className="flex-1 text-center font-serif text-xl">{guests}</span>
                <button 
                  onClick={() => setGuests(Math.min(3, guests + 1))}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  +
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-2 text-center">{t.maxGuests}</p>
            </div>

            <button 
              onClick={() => setStep('payment')}
              className="w-full bg-luxury-gold text-black py-4 uppercase tracking-widest font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2 mt-8"
            >
              {t.continue} <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
       <div className="text-center mb-8">
        <button onClick={() => setStep('date')} className="text-xs text-slate-500 hover:text-white mb-2 flex items-center justify-center gap-1 mx-auto">
          <ChevronLeft className="w-3 h-3" /> {t.back}
        </button>
        <h2 className="text-luxury-gold text-xs font-bold tracking-[0.3em] uppercase mb-2">{t.step3}</h2>
        <h1 className="text-3xl font-serif text-white">{t.secure}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white/5 p-8 rounded-xl border border-white/10 h-fit">
          <h3 className="font-serif text-xl text-white mb-6 border-b border-white/10 pb-4">{t.summary}</h3>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between text-slate-300">
              <span>{t.experience}</span>
              <span className="text-white font-medium capitalize">{stayType.replace('dayuse', t.dayuse).replace('overnight', t.overnight)}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>{t.date}</span>
              <span className="text-white font-medium">{selectedDate.toLocaleDateString(language)}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>{t.checkin}</span>
              <span className="text-white font-medium">{selectedTime}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>{t.guests}</span>
              <span className="text-white font-medium">{guests}</span>
            </div>
            <div className="border-t border-white/10 pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">{t.total}</span>
                <span className="text-2xl font-serif text-luxury-gold">${stayType === 'overnight' ? 1200 : 450}.00</span>
              </div>
            </div>
          </div>
        </div>

        <div>
            <form onSubmit={handlePayment} className="space-y-6">
            <div>
                <label className="block text-xs uppercase text-slate-500 mb-2">{t.cardName}</label>
                <input type="text" required placeholder="J. DOE" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-luxury-gold focus:outline-none" />
            </div>
            <div>
                <label className="block text-xs uppercase text-slate-500 mb-2">{t.cardNumber}</label>
                <div className="relative">
                <CreditCard className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                <input type="text" required placeholder="0000 0000 0000 0000" className="w-full bg-black/30 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:border-luxury-gold focus:outline-none font-mono" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                <label className="block text-xs uppercase text-slate-500 mb-2">{t.expiry}</label>
                <input type="text" required placeholder="MM/YY" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-luxury-gold focus:outline-none text-center" />
                </div>
                <div>
                <label className="block text-xs uppercase text-slate-500 mb-2">{t.cvc}</label>
                <input type="text" required placeholder="123" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-luxury-gold focus:outline-none text-center" />
                </div>
            </div>
            
            <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-luxury-gold text-black py-4 uppercase tracking-widest font-semibold hover:bg-white transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isProcessing ? (
                <span className="flex items-center gap-2"><span className="animate-spin text-xl">⟳</span> {t.processing}</span>
                ) : (
                <span className="flex items-center gap-2"><Lock className="w-4 h-4" /> {t.pay}</span>
                )}
            </button>
            
            <p className="text-center text-[10px] text-slate-600 uppercase tracking-wider">
                Secure Payment Encrypted via SSL
            </p>
            </form>

            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-white/10"></div>
                <span className="flex-shrink-0 mx-4 text-slate-500 text-[10px] uppercase tracking-widest">{t.orPlatform}</span>
                <div className="flex-grow border-t border-white/10"></div>
            </div>

            <a 
                href="https://www.airbnb.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#FF385C] hover:bg-[#D90B3E] text-white py-4 rounded-lg uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-3"
            >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', height: '24px', width: '24px', fill: 'currentcolor'}}><path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c.198.375.406.796.626 1.249.205-.427.398-.822.59-1.187A13.435 13.435 0 0 1 23.472 3.8l.525-.494c1.693-1.576 3.69-2.062 5.37-1.289 1.545.71 2.368 2.316 2.368 4.66 0 4.198-3.328 10.609-13.82 17.656a3.975 3.975 0 0 1-3.83 0C3.608 17.29 0 10.985 0 6.686 0 4.34.823 2.735 2.368 2.025c1.68-.773 3.677-.287 5.37 1.289l.526.494a13.435 13.435 0 0 1 1.002 1.567c.192.365.385.76.59 1.187.22-.453.428-.874.626-1.25L11.25 4.27C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-.193.365-.403.79-.623 1.25-.236.49-.46 1.033-.674 1.554-.627 1.531-1.25 3.054-2.667 3.054-.53 0-.964-.176-1.267-.534-.403-.475-.466-1.137-.107-1.877.294-.606.883-1.398 1.98-2.67.653-.756 1.164-1.366 1.542-1.92.51-.745.836-1.55.836-2.075 0-.649-.556-1.36-1.332-1.717-.577-.266-1.29-.214-2.137.234-1.272.673-1.776 1.83-1.776 3.493 0 3.395 2.87 9.07 12.004 15.22a1.988 1.988 0 0 0 1.916 0c9.135-6.15 12.004-11.825 12.004-15.22 0-1.663-.504-2.82-1.776-3.493-.847-.448-1.56-.5-2.137-.234-.776.357-1.332 1.068-1.332 1.717 0 .526.326 1.33.836 2.075.378.554.889 1.164 1.542 1.92 1.097 1.272 1.686 2.064 1.98 2.67.359.74.296 1.402-.107 1.877-.303.358-.737.534-1.267.534-1.417 0-2.04-1.523-2.667-3.054a27.18 27.18 0 0 0-.674-1.554c-.22-.46-.43-.885-.623-1.25l-.523-1.008C18.053 3.539 17.24 3 16 3z"></path></svg>
            <span>{t.airbnb}</span>
            </a>
        </div>
      </div>
    </div>
  );

  const renderConfirmed = () => (
    <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in-up">
      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-8">
        <CheckCircle className="w-10 h-10 text-green-500" />
      </div>
      <h2 className="text-luxury-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">{t.success}</h2>
      <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">{t.confirmed}</h1>
      <p className="text-slate-400 max-w-md mb-8">
        {t.confirmMsg}
      </p>
      <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-lg mb-12">
        <span className="block text-xs text-slate-500 uppercase tracking-widest mb-1">Confirmation Code</span>
        <span className="text-2xl font-mono text-white tracking-widest">GL-{Math.floor(100000 + Math.random() * 900000)}</span>
      </div>
      <button 
        onClick={onClose}
        className="text-white hover:text-luxury-gold border-b border-transparent hover:border-luxury-gold transition-all pb-1 uppercase tracking-widest text-xs"
      >
        {t.return}
      </button>
    </div>
  );

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className={`relative w-full max-w-5xl h-[90vh] bg-luxury-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {step !== 'confirmed' && (
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2 bg-black/40 hover:bg-white hover:text-black rounded-full text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        <div className="flex-1 p-8 md:p-16 overflow-y-auto custom-scrollbar">
          {step === 'type' && renderTypeSelection()}
          {step === 'date' && renderDateSelection()}
          {step === 'payment' && renderPayment()}
          {step === 'confirmed' && renderConfirmed()}
        </div>

      </div>
    </div>
  );
};

export default ReservationModal;
