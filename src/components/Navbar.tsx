import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (prefillEvent?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#123B32]/95 backdrop-blur-md border-b border-[#C6A15B]/20 py-3 shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0"
            aria-label="DEWAN-E-KHAS Marquee Marriage Hall"
          >
            <span className="font-royal text-xl sm:text-2xl font-bold tracking-wider text-[#FAF7F0] group-hover:text-[#DFC07C] transition-colors">
              DEWAN-E-KHAS
            </span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            <a
              href="#about"
              className="text-[#FAF7F0]/85 hover:text-[#DFC07C] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#C6A15B]"
            >
              About
            </a>
            <a
              href="#venue"
              className="text-[#FAF7F0]/85 hover:text-[#DFC07C] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#C6A15B]"
            >
              Venue & Gallery
            </a>
            <a
              href="#events"
              className="text-[#FAF7F0]/85 hover:text-[#DFC07C] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#C6A15B]"
            >
              Events
            </a>
            <a
              href="#why-us"
              className="text-[#FAF7F0]/85 hover:text-[#DFC07C] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#C6A15B]"
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-[#FAF7F0]/85 hover:text-[#DFC07C] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#C6A15B]"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#123B32] bg-[#C6A15B] hover:bg-[#DFC07C] active:scale-[0.98] transition-all rounded shadow-md hover:shadow-lg whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book Your Event
            </button>
          </div>

          {/* Mobile menu hamburger toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-semibold uppercase text-[#123B32] bg-[#C6A15B] rounded"
            >
              Book
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#FAF7F0] hover:text-[#DFC07C] focus:outline-none"
              aria-label="Toggle mobile navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#123B32] border-b border-[#C6A15B]/30 px-6 py-6 mt-3 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-medium">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#FAF7F0] hover:text-[#DFC07C] py-2 border-b border-white/5"
            >
              About Venue
            </a>
            <a
              href="#venue"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#FAF7F0] hover:text-[#DFC07C] py-2 border-b border-white/5"
            >
              Venue & Gallery
            </a>
            <a
              href="#events"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#FAF7F0] hover:text-[#DFC07C] py-2 border-b border-white/5"
            >
              Events & Celebrations
            </a>
            <a
              href="#why-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#FAF7F0] hover:text-[#DFC07C] py-2 border-b border-white/5"
            >
              Why Choose DEWAN-E-KHAS
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#FAF7F0] hover:text-[#DFC07C] py-2 border-b border-white/5"
            >
              Contact & Location
            </a>
          </nav>

          <div className="pt-3 border-t border-[#C6A15B]/20 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-[#123B32] bg-[#C6A15B] hover:bg-[#DFC07C] rounded shadow"
            >
              Book Your Event
            </button>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="tel:03347200600"
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white/10 text-[#FAF7F0] rounded text-xs hover:bg-white/15"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/923347200600"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-[#25D366]/20 text-[#25D366] rounded text-xs hover:bg-[#25D366]/30 font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
