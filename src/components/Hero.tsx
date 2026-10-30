import React from 'react';
import { Sparkles, Calendar, ArrowRight, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#123B32]">
      {/* Background Cinematic Image with measured scrim overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_dewan_marquee_1793357124955.jpg"
          alt="DEWAN-E-KHAS Royal Wedding Marquee Hall Interior"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[8000ms]"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered luxury gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#123B32] via-[#123B32]/70 to-[#123B32]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60" />
      </div>

      {/* Decorative Subtle Gold Frame Lines */}
      <div className="absolute top-24 left-8 right-8 bottom-28 pointer-events-none hidden md:block border border-[#C6A15B]/15 z-10" />

      {/* Main Content Area */}
      <div className="relative z-20 flex-1 flex items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtle Royal Emblem Kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#123B32]/80 border border-[#C6A15B]/40 text-[#DFC07C] text-xs uppercase tracking-widest mb-6 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#DFC07C]" />
            <span className="font-semibold">Royal Marquee & Marriage Destination</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FAF7F0] tracking-tight leading-[1.12] mb-6 text-balance drop-shadow-md">
            Celebrate Your Special Moments in{' '}
            <span className="gold-gradient-text italic font-serif">Royal Elegance</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#FAF7F0]/90 font-light leading-relaxed mb-10 tracking-wide text-balance">
            DEWAN-E-KHAS – Where Every Celebration Becomes a Beautiful Memory.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#venue"
              className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#FAF7F0] bg-transparent border-2 border-[#C6A15B] hover:bg-[#C6A15B]/15 active:scale-[0.98] transition-all rounded shadow-sm hover:shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Our Venue</span>
              <ArrowRight className="w-4 h-4 text-[#DFC07C] group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#123B32] bg-[#C6A15B] hover:bg-[#DFC07C] active:scale-[0.98] transition-all rounded shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Event</span>
            </button>
          </div>

          {/* Quick Location Anchor */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#FAF7F0]/70">
            <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Jhang-Chiniot Road, Near Gillani Farm, Bhawana, Pakistan</span>
          </div>
        </div>
      </div>

      {/* 4-Item Feature Strip at the bottom of Hero */}
      <div className="relative z-20 w-full border-t border-[#C6A15B]/25 bg-[#0e2c25]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#C6A15B]/20">
            <div className="px-3 py-1 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C6A15B] shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#FAF7F0] tracking-wide">Grand Marquee Capacity</p>
                <p className="text-[11px] text-[#FAF7F0]/65">Spacious luxury indoor banquet</p>
              </div>
            </div>

            <div className="px-3 py-1 flex items-center gap-3 pt-2 sm:pt-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C6A15B] shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#FAF7F0] tracking-wide">Crystal Chandeliers</p>
                <p className="text-[11px] text-[#FAF7F0]/65">Warm golden ambient lighting</p>
              </div>
            </div>

            <div className="px-3 py-1 flex items-center gap-3 pt-2 sm:pt-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C6A15B] shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#FAF7F0] tracking-wide">Custom Stage Setups</p>
                <p className="text-[11px] text-[#FAF7F0]/65">Barat, Walima & Mehndi decor</p>
              </div>
            </div>

            <div className="px-3 py-1 flex items-center gap-3 pt-2 sm:pt-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C6A15B] shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#FAF7F0] tracking-wide">Prime Highway Access</p>
                <p className="text-[11px] text-[#FAF7F0]/65">Convenient guest arrival & parking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
