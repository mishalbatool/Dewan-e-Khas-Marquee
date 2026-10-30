import React from 'react';
import { Crown, Sparkles, MapPin, HeartHandshake } from 'lucide-react';

interface AboutUsProps {
  onOpenBooking: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF7F0] relative overflow-hidden">
      {/* Subtle background decorative motifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#123B32]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Asset with Luxury Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#E9DFCE] group">
              <img
                src="/src/assets/images/about_grand_venue_1793357125369.jpg"
                alt="DEWAN-E-KHAS Marquee Pavilion Exterior at Twilight"
                className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Quality Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#123B32]/90 backdrop-blur-md border border-[#C6A15B]/40 text-[#FAF7F0] flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-[#DFC07C]">Premium Experience</p>
                  <p className="text-sm font-serif">Bhawana & Chiniot's Royal Landmark</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#C6A15B]/20 flex items-center justify-center border border-[#C6A15B]/50">
                  <Crown className="w-5 h-5 text-[#DFC07C]" />
                </div>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-48 h-48 border-2 border-[#C6A15B]/30 rounded-2xl -z-10" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C6A15B]">
                Discover The Distinction
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123B32] tracking-tight leading-tight">
                An Iconic Venue for Life's Greatest Milestones
              </h2>
            </div>

            {/* Required exact prompt copy */}
            <div className="p-6 rounded-xl bg-[#E9DFCE]/40 border border-[#C6A15B]/25">
              <p className="font-serif text-lg sm:text-xl text-[#123B32] leading-relaxed italic">
                “Welcome to DEWAN-E-KHAS Marquee Marriage Hall, a beautiful destination for unforgettable weddings and special celebrations. We bring elegance, comfort, and memorable experiences together to make your special occasions truly extraordinary.”
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#202522]/80 leading-relaxed">
              Situated right on the main Jhang-Chiniot Road near Gillani Farm in Bhawana, DEWAN-E-KHAS is designed to provide families with a majestic ambiance for their most cherished occasions. From grand wedding receptions and vibrant Mehndi celebrations to intimate Walima gatherings, we ensure your guests experience warmth, grandeur, and hospitable excellence.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/70 border border-[#E9DFCE]">
                <div className="p-2 rounded bg-[#123B32]/10 text-[#123B32] shrink-0">
                  <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#123B32]">Royal Ambience</h4>
                  <p className="text-xs text-[#202522]/70 mt-0.5">Draped ceilings, crystal chandeliers, and curated stages.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/70 border border-[#E9DFCE]">
                <div className="p-2 rounded bg-[#123B32]/10 text-[#123B32] shrink-0">
                  <HeartHandshake className="w-4 h-4 text-[#C6A15B]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#123B32]">Memorable Hospitality</h4>
                  <p className="text-xs text-[#202522]/70 mt-0.5">Comfortable guest experience for both small and large gatherings.</p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FAF7F0] bg-[#123B32] hover:bg-[#0c2620] active:scale-[0.98] transition-all rounded shadow-md cursor-pointer"
              >
                Inquire For Your Date
              </button>

              <a
                href="#venue"
                className="px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider text-[#123B32] hover:text-[#C6A15B] transition-colors flex items-center gap-1.5"
              >
                <span>View Full Photo Gallery</span>
                <span>→</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
