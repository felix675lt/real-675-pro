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
                <CreditCard className="absolute
