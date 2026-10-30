import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Calendar, CheckCircle2, Send, ExternalLink } from 'lucide-react';
import { InquiryFormData } from '../types/index.ts';

export const ContactLocation: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    eventType: 'Wedding Ceremonies (Barat)',
    eventDate: '',
    guestCount: '300-500 Guests',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
• Message: ${formData.notes || 'Please provide venue package and availability details.'}`;

    window.open(`https://wa.me/923347200600?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Call to Action Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C6A15B]">
            Plan With Our Event Coordinators
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123B32] mt-2 mb-4">
            Let's Make Your Event Unforgettable
          </h2>
          <p className="text-[#202522]/80 text-sm sm:text-base leading-relaxed">
            Reach out directly for date availability, venue walkthroughs, and customized event arrangements at DEWAN-E-KHAS Marquee Marriage Hall.
          </p>
        </div>

        {/* Quick Direct Action Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          
          {/* Click to Call Button Card */}
          <a
            href="tel:03347200600"
            className="p-6 rounded-2xl bg-[#123B32] text-[#FAF7F0] hover:bg-[#0c2620] transition-all shadow-lg hover:shadow-xl flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#DFC07C] shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#DFC07C]">Direct Phone Line</p>
              <p className="font-serif text-lg font-bold">0334 7200600</p>
              <span className="text-[11px] text-[#FAF7F0]/70">Tap to call our venue manager</span>
            </div>
          </a>

          {/* WhatsApp Direct Chat Card */}
          <a
            href="https://wa.me/923347200600"
            target="_blank"
            rel="noreferrer noopener"
            className="p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/40 hover:bg-[#25D366]/20 transition-all shadow-md hover:shadow-lg flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#123B32]">Official WhatsApp</p>
              <p className="font-serif text-lg font-bold text-[#123B32]">Chat on WhatsApp</p>
              <span className="text-[11px] text-[#202522]/70">Instant response & photo inquiries</span>
            </div>
          </a>

          {/* Location & Address Card */}
          <div className="p-6 rounded-2xl bg-white border border-[#E9DFCE] shadow-sm flex items-center gap-4 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-[#123B32]/10 border border-[#123B32]/20 flex items-center justify-center text-[#123B32] shrink-0">
              <MapPin className="w-6 h-6 text-[#C6A15B]" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#C6A15B]">Prime Address</p>
              <p className="text-xs sm:text-sm font-semibold text-[#123B32]">Jhang-Chiniot Road</p>
              <span className="text-[11px] text-[#202522]/70">Near Gillani Farm, Bhawana, 35400</span>
            </div>
          </div>

        </div>

        {/* 2-Column Section: Inquiry Form & Interactive Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Column 1: Date & Event Inquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#E9DFCE] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E9DFCE]">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#123B32]">Check Date Availability</h3>
                  <p className="text-xs text-[#202522]/70 mt-1">Submit your details for a personalized reservation quote.</p>
                </div>
                <Calendar className="w-6 h-6 text-[#C6A15B]" />
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#123B32]/10 border-2 border-[#123B32] flex items-center justify-center text-[#123B32] mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#C6A15B]" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#123B32]">Inquiry Received</h4>
                  <p className="text-sm text-[#202522]/80 max-w-sm mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Our booking manager at DEWAN-E-KHAS will review your requested date for <strong>{formData.eventType}</strong> and contact you shortly at <strong>{formData.phone}</strong>.
                  </p>
                  
                  <div className="pt-4 flex flex-col gap-3">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Direct to WhatsApp for Faster Booking</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-[#123B32] hover:underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#123B32] uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chaudhry Muhammad Ali"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E9DFCE] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] text-sm outline-none bg-[#FAF7F0]/40 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#123B32] uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0334 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E9DFCE] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] text-sm outline-none bg-[#FAF7F0]/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#123B32] uppercase tracking-wider mb-1.5">
                        Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E9DFCE] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] text-sm outline-none bg-[#FAF7F0]/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#123B32] uppercase tracking-wider mb-1.5">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E9DFCE] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] text-sm outline-none bg-[#FAF7F0]/40 transition-colors"
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
                      <label className="block text-xs font-semibold text-[#123B32] uppercase tracking-wider mb-1.5">
                        Approximate Guests
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E9DFCE] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] text-sm outline-none bg-[#FAF7F0]/40 transition-colors"
                      >
                        <option>100 - 300 Guests</option>
                        <option>300 - 500 Guests</option>
                        <option>500 - 800 Guests</option>
                        <option>800 - 1,200+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#123B32] uppercase tracking-wider mb-1.5">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Stage preferences, catering requirements, or questions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E9DFCE] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] text-sm outline-none bg-[#FAF7F0]/40 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-[#FAF7F0] bg-[#123B32] hover:bg-[#0c2620] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-3.5 h-3.5 text-[#DFC07C]" />
                      <span>Submit Inquiry</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#123B32] bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            <p className="text-[11px] text-[#202522]/50 text-center mt-4">
              Your contact details are used strictly for reservation coordination at DEWAN-E-KHAS.
            </p>
          </div>

          {/* Column 2: Google Maps Location & Venue Overview */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl p-8 sm:p-10 border border-[#E9DFCE] shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-[#E9DFCE]">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#123B32]">Venue Location</h3>
                  <p className="text-xs text-[#202522]/70 mt-1">Conveniently located on the main highway in Bhawana.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#123B32]/10 flex items-center justify-center text-[#123B32]">
                  <MapPin className="w-5 h-5 text-[#C6A15B]" />
                </div>
              </div>

              {/* Exact Location Card details */}
              <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#E9DFCE] space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#123B32]">DEWAN-E-KHAS Marquee Marriage Hall</h4>
                    <p className="text-xs text-[#202522]/80 mt-0.5">
                      Jhang-Chiniot Road, Near Gillani Farm, Bhawana, 35400, Pakistan.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 text-xs text-[#202522]/70 border-t border-[#E9DFCE]">
                  <Clock className="w-4 h-4 text-[#C6A15B]" />
                  <span>Visiting Hours: 11:00 AM – 10:00 PM (Daily)</span>
                </div>
              </div>

              {/* Interactive Map Embed */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E9DFCE] shadow-inner h-[260px] sm:h-[280px]">
                <iframe
                  title="DEWAN-E-KHAS Marquee Marriage Hall Bhawana Map"
                  src="https://maps.google.com/maps?q=Bhawana+Jhang+Chiniot+Road+Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Navigation & Directions Button */}
            <div className="pt-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=DEWAN-E-KHAS+Marquee+Marriage+Hall+Bhawana"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-[#123B32] bg-[#E9DFCE]/60 hover:bg-[#C6A15B] border border-[#C6A15B]/30 hover:border-[#C6A15B] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Get Driving Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
