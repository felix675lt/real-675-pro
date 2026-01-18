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
