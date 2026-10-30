import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageCircle, Send, CheckCircle2, Phone } from 'lucide-react';
import { InquiryFormData } from '../types/index.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEventType?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialEventType
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    eventType: initialEventType || 'Wedding Ceremonies (Barat)',
    eventDate: '',
    guestCount: '300-500 Guests',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialEventType) {
      setFormData((prev) => ({ ...prev, eventType: initialEventType }));
    }
  }, [initialEventType]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setIsSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hello DEWAN-E-KHAS Marquee! I am inquiring about booking your venue:
• Name: ${formData.fullName || 'Guest'}
• Phone: ${formData.phone || 'N/A'}
• Event Type: ${formData.eventType}
• Desired Date: ${formData.eventDate || 'Flexible'}
• Guest Count: ${formData.guestCount}
• Special Requests: ${formData.notes || 'Please provide package details and date availability.'}`;

    window.open(`https://wa.me/923347200600?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#C6A15B]/30 shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#202522] transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#123B32]/10 border-2 border-[#123B32] flex items-center justify-center text-[#123B32] mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#C6A15B]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#123B32]">Inquiry Received</h3>
            <p className="text-sm text-[#202522]/80 leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. We have logged your reservation request for <strong>{formData.eventType}</strong>. Our venue manager will connect with you at <strong>{formData.phone}</strong> promptly.
            </p>

            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open in WhatsApp for Faster Booking</span>
              </button>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="py-2.5 px-4 rounded-xl text-xs font-semibold text-[#123B32] hover:bg-slate-100 transition-colors"
              >
                Done / Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123B32]/10 text-[#123B32] text-xs font-semibold mb-2">
                <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Date Availability & Booking</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#123B32]">
                Book Your Event
              </h3>
              <p className="text-xs sm:text-sm text-[#202522]/70 mt-1">
                DEWAN-E-KHAS Marquee Marriage Hall, Bhawana
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#123B32] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chaudhry Tariq"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9DFCE] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] text-sm outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#123B32] uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0334 7200600"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E9DFCE] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#123B32] uppercase tracking-wider mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E9DFCE] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#123B32] uppercase tracking-wider mb-1">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E9DFCE] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] text-sm outline-none transition-colors"
                  >
                    <option>Wedding Ceremonies (Barat)</option>
                    <option>Walima Celebrations</option>
                    <option>Engagement Events</option>
                    <option>Mehndi Functions</option>
                    <option>Family Celebrations</option>
                    <option>Special Events</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#123B32] uppercase tracking-wider mb-1">
                    Expected Guests
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E9DFCE] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] text-sm outline-none transition-colors"
                  >
                    <option>100 - 300 Guests</option>
                    <option>300 - 500 Guests</option>
                    <option>500 - 800 Guests</option>
                    <option>800 - 1,200+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#123B32] uppercase tracking-wider mb-1">
                  Notes or Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Special stage themes, timing or guest requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-[#E9DFCE] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] text-sm outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#FAF7F0] bg-[#123B32] hover:bg-[#0c2620] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 text-[#DFC07C]" />
                  <span>Submit Reservation Request</span>
                </button>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#123B32] bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp Booking</span>
                  </button>

                  <a
                    href="tel:03347200600"
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#123B32] bg-slate-100 hover:bg-slate-200 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>0334 7200600</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
