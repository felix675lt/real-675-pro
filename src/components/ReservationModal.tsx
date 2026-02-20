import React, { useState, useEffect, useRef } from 'react';
import { loadPaymentWidget, PaymentWidgetInstance } from '@tosspayments/payment-widget-sdk';
import { X, Calendar, Clock, CreditCard, CheckCircle, ChevronRight, ChevronLeft, Moon, Sun, Users, Lock, Truck, MessageSquare } from 'lucide-react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Language } from '../types';
import { translations } from '../translations';

const PAYPAL_CLIENT_ID = "AdDd-Uz8w-5a-wGlsyroZcP0EdQDg7EgPB5LtQOCvQIGsfQ7o8Hu6pRQI5uOjNgMPTV3YqfGubTBKIjD";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onContactConcierge: () => void;
  initialStep?: Step;
}

type Step = 'type' | 'date' | 'payment' | 'confirmed';
type StayType = 'overnight' | 'dayuse';

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose, language, onContactConcierge, initialStep = 'type' }) => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<Step>('type');
  const [stayType, setStayType] = useState<StayType>('overnight');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewDate, setViewDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('15:00');
  const [guests, setGuests] = useState(2);
  const [isProcessing, setIsProcessing] = useState(false);
  const [includeGateway, setIncludeGateway] = useState(false);
  const [gatewayInfo, setGatewayInfo] = useState({ vehicle: '', plate: '' });

  // Toss Payments Widget State (Moved to top level)
  const [paymentWidget, setPaymentWidget] = useState<PaymentWidgetInstance | null>(null);
  const paymentWidgetRef = useRef<HTMLDivElement>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<PaymentWidgetInstance['renderPaymentMethods']> | null>(null);
  const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm"; // Official Test Client Key for Payment Widget
  // Use a stable customer key or ensure it doesn't change on re-renders unless intended
  const [customerKey] = useState("customer_key_" + new Date().getTime());

  const t = translations[language].reservation;
  const gt = translations[language].gateway;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setVisible(true), 10);
      document.body.style.overflow = 'hidden';
      setStep(initialStep);
      setIsProcessing(false);
      setIncludeGateway(false);
      setGatewayInfo({ vehicle: '', plate: '' });
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

  // Toss Payments Widget Initialization Effect
  useEffect(() => {
    if (step === 'payment') {
      (async () => {
        try {
          const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

          // @ts-ignore
          const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
            "#payment-widget",
            { value: stayType === 'overnight' ? 1200 : 450 },
            { variantKey: "DEFAULT" }
          );

          // @ts-ignore
          paymentWidget.renderAgreement(
            '#agreement',
            { variantKey: 'AGREEMENT' }
          );

          setPaymentWidget(paymentWidget);
          paymentMethodsWidgetRef.current = paymentMethodsWidget;
        } catch (e) {
          console.error("Error loading payment widget:", e);
        }
      })();
    }
  }, [step, clientKey, customerKey, stayType]);

  // Toss Payments Amount Update Effect
  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    // @ts-ignore
    paymentMethodsWidget.updateAmount(
      stayType === 'overnight' ? 1200 : 450
    );
  }, [stayType]);

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

  const isPrevMonthDisabled = () => {
    const today = new Date();
    return viewDate.getMonth() === today.getMonth() && viewDate.getFullYear() === today.getFullYear();
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto pb-8">

          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-lg text-white capitalize">
                {viewDate.toLocaleDateString(language, { month: 'long', year: 'numeric' })}
              </span>
              <div className="flex gap-2">
                <button onClick={() => changeMonth(-1)} disabled={isPrevMonthDisabled()} className="p-1 hover:bg-white/10 rounded text-white transition-colors disabled:opacity-20"><ChevronLeft className="w-4 h-4" /></button>
                <button onClick={() => changeMonth(1)} className="p-1 hover:bg-white/10 rounded text-white transition-colors"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
              {getWeekDays(language).map((d) => (
                <div key={d} className="text-slate-500 text-xs uppercase">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {generateCalendarDays().map((day, idx) => {
                const isSelected = day && day === selectedDate.getDate() && viewDate.getMonth() === selectedDate.getMonth() && viewDate.getFullYear() === selectedDate.getFullYear();
                const isPast = day && new Date(viewDate.getFullYear(), viewDate.getMonth(), day) < new Date(new Date().setHours(0, 0, 0, 0));
                return (
                  <button key={idx} disabled={!day || !!isPast} onClick={() => day && handleDateSelect(day)} className={`p-3 rounded-lg text-sm font-medium transition-all ${!day ? 'invisible' : ''} ${isSelected ? 'bg-luxury-gold text-black shadow-lg shadow-luxury-gold/20' : 'text-slate-300 hover:bg-white/10 disabled:opacity-20'}`}>
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <label className="flex items-center gap-2 text-luxury-gold text-xs uppercase tracking-widest mb-4">
                <Clock className="w-4 h-4" /> {t.checkin}
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {stayType === 'overnight' ?
                  ['15:00', '16:00', '17:00', '18:00', '19:00', '20:00'].map(time => (
                    <button key={time} onClick={() => setSelectedTime(time)} className={`py-3 border rounded-lg text-sm transition-all ${selectedTime === time ? 'border-luxury-gold bg-luxury-gold/10 text-white' : 'border-white/10 text-slate-400 hover:border-white/30'}`}>{time}</button>
                  )) :
                  ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'].map(time => (
                    <button key={time} onClick={() => setSelectedTime(time)} className={`py-3 border rounded-lg text-sm transition-all ${selectedTime === time ? 'border-luxury-gold bg-luxury-gold/10 text-white' : 'border-white/10 text-slate-400 hover:border-white/30'}`}>{time}</button>
                  ))
                }
              </div>

              {/* Custom Time Adjustment Button */}
              <button
                onClick={onContactConcierge}
                className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-slate-500 hover:text-luxury-gold transition-colors group"
              >
                <MessageSquare className="w-3 h-3 group-hover:scale-110 transition-transform" />
                {t.customCheckin}
              </button>
            </div>

            <div>
              <label className="flex items-center gap-2 text-luxury-gold text-xs uppercase tracking-widest mb-4">
                <Users className="w-4 h-4" /> {t.guests}
              </label>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">-</button>
                <span className="flex-1 text-center font-serif text-xl">{guests}</span>
                <button onClick={() => setGuests(Math.min(3, guests + 1))} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">+</button>
              </div>
            </div>

            {/* Gateway Service Toggle */}
            <div className="pt-4 border-t border-white/5">
              <button
                onClick={() => setIncludeGateway(!includeGateway)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${includeGateway ? 'border-luxury-gold bg-luxury-gold/5' : 'border-white/10 bg-white/5 opacity-60'}`}
              >
                <div className="flex items-center gap-3">
                  <Truck className={`w-5 h-5 ${includeGateway ? 'text-luxury-gold' : 'text-slate-500'}`} />
                  <span className={`text-sm tracking-wide ${includeGateway ? 'text-white' : 'text-slate-400'}`}>{t.includeGateway}</span>
                </div>
                <div className={`w-10 h-5 rounded-full relative transition-colors ${includeGateway ? 'bg-luxury-gold' : 'bg-slate-700'}`}>
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${includeGateway ? 'right-1' : 'left-1'}`}></div>
                </div>
              </button>
              {includeGateway && (
                <div className="mt-4 grid grid-cols-2 gap-3 animate-fade-in">
                  <input
                    type="text" required placeholder={gt.fields.vehicle}
                    value={gatewayInfo.vehicle}
                    onChange={(e) => setGatewayInfo({ ...gatewayInfo, vehicle: e.target.value })}
                    className="bg-black/40 border border-white/10 rounded px-4 py-2 text-sm text-white focus:border-luxury-gold focus:outline-none"
                  />
                  <input
                    type="text" required placeholder={gt.fields.plate}
                    value={gatewayInfo.plate}
                    onChange={(e) => setGatewayInfo({ ...gatewayInfo, plate: e.target.value })}
                    className="bg-black/40 border border-white/10 rounded px-4 py-2 text-sm text-white focus:border-luxury-gold focus:outline-none"
                  />
                </div>
              )}
            </div>

            <button onClick={() => setStep('payment')} className="w-full bg-luxury-gold text-black py-4 uppercase tracking-widest font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2 mt-8">
              {t.continue} <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const handlePayment = async () => {
    if (!paymentWidget) return;

    setIsProcessing(true);

    try {
      // @ts-ignore
      await paymentWidget.requestPayment({
        orderId: "order_id_" + new Date().getTime(),
        orderName: stayType === 'overnight' ? t.overnight : t.dayuse,
        customerName: "Anonymous Customer",
        customerEmail: "customer@example.com",
        customerMobilePhone: "01012345678",
        successUrl: window.location.href,
        failUrl: window.location.href,
      });
    } catch (error) {
      console.error(error);
      setIsProcessing(false);
    }
  };

  const renderPayment = () => (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <div className="text-center mb-8">
        <button onClick={() => setStep('date')} className="text-xs text-slate-500 hover:text-white mb-2 flex items-center justify-center gap-1 mx-auto"><ChevronLeft className="w-3 h-3" /> {t.back}</button>
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
            {includeGateway && (
              <div className="flex justify-between text-luxury-gold text-xs italic">
                <span>+ Gateway Service Included</span>
                <span>{gatewayInfo.plate}</span>
              </div>
            )}
            <div className="border-t border-white/10 pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">{t.total}</span>
                <span className="text-2xl font-serif text-luxury-gold">${stayType === 'overnight' ? 1200 : 450}.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Global Payment Options (PayPal) */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h4 className="text-xs uppercase tracking-widest text-luxury-gold mb-6 flex items-center gap-2">
              <CreditCard className="w-4 h-4" /> Global Payment
            </h4>
            <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: "USD", intent: "capture", components: "buttons" }}>
              <PayPalButtons
                style={{ layout: "vertical", color: "gold", shape: "rect", label: "paypal", height: 48 }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                      {
                        description: `Reservation - ${stayType === 'overnight' ? t.overnight : t.dayuse}`,
                        amount: {
                          currency_code: "USD",
                          value: (stayType === 'overnight' ? 1200 : 450).toString(),
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (data, actions) => {
                  setIsProcessing(true);
                  if (actions.order) {
                    try {
                      const details = await actions.order.capture();
                      console.log("PayPal Transaction completed by " + details?.payer?.name?.given_name);
                      setStep('confirmed');
                    } catch (error) {
                      console.error("PayPal Capture Error", error);
                    } finally {
                      setIsProcessing(false);
                    }
                  }
                }}
                onError={(err) => {
                  console.error("PayPal Error:", err);
                  setIsProcessing(false);
                }}
              />
            </PayPalScriptProvider>
          </div>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink-0 mx-4 text-slate-600 text-[10px] tracking-widest uppercase font-medium">Or</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          {/* Domestic Payment Options (Toss) */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-4 px-2">
              Domestic Payment (KRW)
            </h4>
            <div className="bg-white rounded-lg p-2">
              {/* Payment Widget Render Area */}
              <div id="payment-widget" className="w-full" />
              <div id="agreement" className="w-full" />
            </div>

            <button onClick={handlePayment} disabled={isProcessing} className="w-full bg-luxury-gold text-black py-4 uppercase tracking-widest font-semibold hover:bg-white transition-all disabled:opacity-50 mt-4 rounded-b-lg">
              {isProcessing ? t.processing : t.pay}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose}></div>
      <div className={`relative w-full max-w-5xl h-[90vh] bg-luxury-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col transition-all transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex-1 p-8 md:p-16 overflow-y-auto custom-scrollbar">
          {step === 'type' && renderTypeSelection()}
          {step === 'date' && renderDateSelection()}
          {step === 'payment' && renderPayment()}
          {step === 'confirmed' && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
              <h1 className="text-4xl font-serif text-white mb-4">{t.confirmed}</h1>
              <p className="text-slate-400 mb-8">{t.confirmMsg}</p>
              <button onClick={onClose} className="text-luxury-gold border-b border-luxury-gold pb-1">{t.return}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
