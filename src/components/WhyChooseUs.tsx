import React from 'react';
import { Crown, Sparkles, Heart, Smile, Palette, ShieldCheck } from 'lucide-react';
import { FeatureItem } from '../types/index.ts';

const features: FeatureItem[] = [
  {
    id: 'elegant-event-environment',
    title: 'Elegant Event Environment',
    description: 'A stately hall designed with majestic ceiling drapery, crystal chandeliers, polished marble walkways, and refined royal touches that elevate every gathering.',
    iconName: 'Crown'
  },
  {
    id: 'beautiful-wedding-atmosphere',
    title: 'Beautiful Wedding Atmosphere',
    description: 'Immersive golden lighting, romantic floral accents, and harmonious architectural symmetry that create a fairytale bridal entrance and celebration.',
    iconName: 'Sparkles'
  },
  {
    id: 'memorable-celebrations',
    title: 'Memorable Celebrations',
    description: 'Creating treasured family memories that last a lifetime, honoring timeless cultural traditions with dignity, grandeur, and heartfelt joy.',
    iconName: 'Heart'
  },
  {
    id: 'comfortable-guest-experience',
    title: 'Comfortable Guest Experience',
    description: 'Spacious banquet layouts, comfortable seating, smooth guest reception, and a welcoming environment for elders, families, and honored guests.',
    iconName: 'Smile'
  },
  {
    id: 'beautiful-event-arrangements',
    title: 'Beautiful Event Arrangements',
    description: 'Meticulously coordinated stages, dining setups, color themes, and floral designs tailored to the unique aesthetic of your celebration.',
    iconName: 'Palette'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#123B32] text-[#FAF7F0] relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#DFC07C]">
            The Hallmark of Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F0] mt-2 mb-4">
            Why Choose DEWAN-E-KHAS?
          </h2>
          <p className="text-[#FAF7F0]/80 text-sm sm:text-base leading-relaxed">
            Distinguished by regal ambiance and dedicated hospitality, we transform your dream celebration into an unforgettable royal reality.
          </p>
        </div>

        {/* 5 Feature Cards Grid (Asymmetric layout: 3 on top, 2 centered below) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feat, idx) => (
            <div
              key={feat.id}
              className="bg-[#0e2c25]/90 border border-[#C6A15B]/30 hover:border-[#C6A15B] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-black/20 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#C6A15B]/15 border border-[#C6A15B]/40 flex items-center justify-center text-[#DFC07C] mb-6 group-hover:scale-110 transition-transform">
                  {idx === 0 && <Crown className="w-7 h-7" />}
                  {idx === 1 && <Sparkles className="w-7 h-7" />}
                  {idx === 2 && <Heart className="w-7 h-7" />}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF7F0] group-hover:text-[#DFC07C] transition-colors mb-3">
                  {feat.title}
                </h3>

                <p className="text-sm text-[#FAF7F0]/75 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C6A15B]/15 flex items-center gap-2 text-xs text-[#DFC07C] font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Premier Venue Quality</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2 Cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {features.slice(3, 5).map((feat, idx) => (
            <div
              key={feat.id}
              className="bg-[#0e2c25]/90 border border-[#C6A15B]/30 hover:border-[#C6A15B] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-black/20 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#C6A15B]/15 border border-[#C6A15B]/40 flex items-center justify-center text-[#DFC07C] mb-6 group-hover:scale-110 transition-transform">
                  {idx === 0 ? <Smile className="w-7 h-7" /> : <Palette className="w-7 h-7" />}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF7F0] group-hover:text-[#DFC07C] transition-colors mb-3">
                  {feat.title}
                </h3>

                <p className="text-sm text-[#FAF7F0]/75 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C6A15B]/15 flex items-center gap-2 text-xs text-[#DFC07C] font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Premier Venue Quality</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
