import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp, Crown } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c2620] text-[#FAF7F0] border-t border-[#C6A15B]/30 relative overflow-hidden">
      {/* Decorative top border line */}
      <div className="h-1 w-full gold-gradient-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Intro Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-royal text-2xl sm:text-3xl font-bold tracking-wider text-[#FAF7F0]">
                DEWAN-E-KHAS
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-[#DFC07C] font-semibold">
              Marquee Marriage Hall · Bhawana
            </p>
            <p className="text-sm text-[#FAF7F0]/75 leading-relaxed max-w-md">
              Where Every Celebration Becomes a Beautiful Memory. A premier luxury wedding marquee providing royal elegance, grand hospitality, and cherished memories on Jhang-Chiniot Road, Bhawana, Pakistan.
            </p>
            
            {/* Quick Contact Badges */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="tel:03347200600"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-[#DFC07C] border border-[#C6A15B]/30 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0334 7200600</span>
              </a>
              <a
                href="https://wa.me/923347200600"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-xs text-[#25D366] border border-[#25D366]/30 transition-colors font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Available</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#DFC07C] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF7F0]/80">
              <li>
                <a href="#about" className="hover:text-[#DFC07C] transition-colors">
                  About Our Venue
                </a>
              </li>
              <li>
                <a href="#venue" className="hover:text-[#DFC07C] transition-colors">
                  Marquee & Photo Gallery
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#DFC07C] transition-colors">
                  Weddings, Walima & Mehndi
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#DFC07C] transition-colors">
                  Why Choose DEWAN-E-KHAS
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#DFC07C] transition-colors">
                  Check Date Availability
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#DFC07C] uppercase tracking-wider">
              Venue Location & Hours
            </h4>
            <div className="space-y-3 text-sm text-[#FAF7F0]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>
                  Jhang-Chiniot Road, Near Gillani Farm,<br />
                  Bhawana, 35400, Punjab, Pakistan.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href="tel:03347200600" className="hover:underline">0334 7200600</a>
              </div>
              <div className="pt-2 text-xs text-[#FAF7F0]/60">
                Hall tours and consultations welcome daily from 11:00 AM to 10:00 PM.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="mt-14 pt-8 border-t border-[#C6A15B]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F0]/60">
          <p>© {new Date().getFullYear()} DEWAN-E-KHAS Marquee Marriage Hall. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span>Bhawana · Chiniot · Pakistan</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#DFC07C] transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
