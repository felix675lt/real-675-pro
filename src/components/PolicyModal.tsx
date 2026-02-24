import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export type PolicyType = 'refund' | 'terms' | 'privacy' | null;

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: PolicyType;
}

const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose, type }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !type) return null;

  const content = {
    refund: {
      title: "Refund Policy",
      body: (
        <div className="space-y-4 text-sm text-slate-300">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          <h3 className="text-lg font-semibold text-white mt-6">1. Cancellation by Guest</h3>
          <p>Cancellations made 14 days or more prior to the scheduled check-in date will receive a 100% refund.</p>
          <p>Cancellations made between 7 and 13 days prior to the scheduled check-in date will receive a 50% refund.</p>
          <p>Cancellations made less than 7 days prior to the scheduled check-in date are strictly non-refundable.</p>
          
          <h3 className="text-lg font-semibold text-white mt-6">2. No-Shows and Early Departures</h3>
          <p>No-shows will be charged the full amount of the reservation. No refunds will be issued for early departures.</p>
          
          <h3 className="text-lg font-semibold text-white mt-6">3. Gateway Service Fees</h3>
          <p>Fees associated with our Gateway Service (temporary import documentation, customs processing, etc.) are non-refundable once the application process has commenced, regardless of whether the accommodation reservation is cancelled.</p>
          
          <h3 className="text-lg font-semibold text-white mt-6">4. Force Majeure</h3>
          <p>The Sanctum is not liable for refunds in the event of unforeseen circumstances beyond our control, including but not limited to natural disasters, government restrictions, or travel bans.</p>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      body: (
        <div className="space-y-4 text-sm text-slate-300">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          <h3 className="text-lg font-semibold text-white mt-6">1. Acceptance of Terms</h3>
          <p>By accessing or using The Sanctum's website and services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access the website or use any services.</p>
          
          <h3 className="text-lg font-semibold text-white mt-6">2. Use of Facility</h3>
          <p>The Sanctum is an exclusive facility. Guests are expected to conduct themselves in a manner consistent with a luxury environment. Any damage to the property, including but not limited to the suites, garage areas, and specialized equipment, will be billed directly to the guest.</p>
          
          <h3 className="text-lg font-semibold text-white mt-6">3. Vehicle Regulations</h3>
          <p>Vehicles brought into The Sanctum must be fully insured and in safe operating condition. The Sanctum is not responsible for any damage, loss, or theft of vehicles or their contents while on the premises, except as covered under specific service agreements.</p>
          
          <h3 className="text-lg font-semibold text-white mt-6">4. Photography and Privacy</h3>
          <p>To ensure the privacy of our distinguished guests, external photography or videography within the facility without prior written consent is strictly prohibited.</p>
          
          <h3 className="text-lg font-semibold text-white mt-6">5. Changes to Terms</h3>
          <p>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.</p>
        </div>
      )
    },
    privacy: {
      title: "Privacy Policy",
      body: (
        <div className="space-y-4 text-sm text-slate-300">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          <h3 className="text-lg font-semibold text-white mt-6">1. Information Collection</h3>
          <p>We collect information you provide directly to us when making a reservation, requesting gateway services, or communicating with us. This may include your name, contact information, passport details (for gateway services), and vehicle information.</p>
          
          <h3 className="text-lg font-semibold text-white mt-6">2. Use of Information</h3>
          <p>We use the information we collect to provide, maintain, and improve our services, process transactions, facilitate temporary vehicle imports, and communicate with you about your stay or inquiries.</p>
          
          <h3 className="text-lg font-semibold text-white mt-6">3. Information Sharing</h3>
          <p>We do not share your personal information with third parties except as necessary to provide our services (e.g., sharing necessary details with customs authorities or our Korean insurance partner for Gateway Services), or when required by law.</p>
          
          <h3 className="text-lg font-semibold text-white mt-6">4. Data Security</h3>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We utilize secure biometric access and prioritize digital privacy.</p>
          
          <h3 className="text-lg font-semibold text-white mt-6">5. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us via the Concierge interface on our website.</p>
        </div>
      )
    }
  };

  const { title, body } = content[type];

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-luxury-900 border border-white/10 p-6 sm:p-8 relative max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-serif text-white mb-6 pr-8">{title}</h2>
        
        <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar">
          {body}
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
