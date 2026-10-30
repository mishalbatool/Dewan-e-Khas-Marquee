import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GalleryItem } from '../types/index.ts';

const galleryItems: GalleryItem[] = [
  {
    id: 'hall-grand-interior',
    title: 'Grand Marquee Royal Interior',
    category: 'hall',
    categoryLabel: 'Grand Hall',
    image: '/src/assets/images/hero_dewan_marquee_1793357124955.jpg',
    description: 'Breathtaking draped ceiling with emerald and ivory silks, high-capacity banquet layout, and gleaming marble walkway.'
  },
  {
    id: 'stage-royal-emerald',
    title: 'Royal Emerald & Floral Bridal Stage',
    category: 'stage',
    categoryLabel: 'Stage Decor',
    image: '/src/assets/images/gallery_stage_decor_1793357126867.jpg',
    description: 'Lavish floral arch with thousands of white roses, hydrangeas, ornate carved gold settee, and crystal lanterns.'
  },
  {
    id: 'dining-banquet-setting',
    title: 'Luxury Wedding Table & Seating Arrangements',
    category: 'dining',
    categoryLabel: 'Seating & Dining',
    image: '/src/assets/images/gallery_table_banquet_1793357128177.jpg',
    description: 'Champagne gold charger plates, crystal glassware, emerald green napkins, and tall orchid candlelit centerpieces.'
  },
  {
    id: 'lighting-chandeliers-cascade',
    title: 'Cascading Tiered Crystal Chandeliers',
    category: 'lighting',
    categoryLabel: 'Lighting & Chandeliers',
    image: '/src/assets/images/gallery_chandeliers_lighting_1793357146727.jpg',
    description: 'Magnificent warm golden illumination suspended from draped silks, creating an enchanting royal canopy.'
  },
  {
    id: 'stage-walima-elegance',
    title: 'Walima Mirrored Runway & Ivory Stage',
    category: 'stage',
    categoryLabel: 'Stage Decor',
    image: '/src/assets/images/events_walima_elegance_1793357147728.jpg',
    description: 'Understated royal elegance with champagne drapery, crystal candelabras, and reflective mirrored aisle.'
  },
  {
    id: 'stage-engagement-floral',
    title: 'Romantic Floral Arch Engagement Setting',
    category: 'stage',
    categoryLabel: 'Stage Decor',
    image: '/src/assets/images/events_engagement_reception_1793357146917.jpg',
    description: 'Blush rose ring arch, fairy light curtain, plush velvet seating, and candlelit walkways.'
  },
  {
    id: 'mehndi-festive-canopy',
    title: 'Vibrant Mehndi Celebration & Royal Diwan',
    category: 'mehndi',
    categoryLabel: 'Festive Mehndi',
    image: '/src/assets/images/events_mehndi_celebration_1793357127724.jpg',
    description: 'Marigold and jasmine garlands, brass lanterns, richly embroidered cushions, and warm fairy lights canopy.'
  },
  {
    id: 'hall-twilight-pavilion',
    title: 'Grand Entrance & Twilight Pavilion',
    category: 'hall',
    categoryLabel: 'Grand Hall',
    image: '/src/assets/images/about_grand_venue_1793357125369.jpg',
    description: 'Illuminated arched entrance, welcoming red carpet, landscaped fountains, and royal evening aura on Jhang-Chiniot Road.'
  }
];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <section id="venue" className="py-24 bg-[#123B32] text-[#FAF7F0] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#DFC07C]">
            Visual Grandeur & Atmosphere
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F0] mt-2 mb-4">
            Our Venue & Visual Gallery
          </h2>
          <p className="text-[#FAF7F0]/80 text-sm sm:text-base leading-relaxed">
            Explore the royal architecture, breathtaking crystal chandeliers, luxurious seating, and bespoke stage settings crafted for perfection at DEWAN-E-KHAS.
          </p>

          {/* Interactive Filter Controls adhering to Zero-Pill discipline (Segmented control) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#0e2c25] rounded-xl border border-[#C6A15B]/30 max-w-2xl mx-auto">
            {[
              { id: 'all', label: 'All Showcase' },
              { id: 'hall', label: 'Grand Hall' },
              { id: 'stage', label: 'Stage Decor' },
              { id: 'dining', label: 'Seating & Dining' },
              { id: 'lighting', label: 'Lighting' },
              { id: 'mehndi', label: 'Mehndi Setup' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? 'bg-[#C6A15B] text-[#123B32] shadow-sm'
                    : 'text-[#FAF7F0]/75 hover:text-[#FAF7F0] hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-[#0e2c25] border border-[#C6A15B]/25 hover:border-[#C6A15B] transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {/* Aspect Ratio Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover Eye / Zoom Icon */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#123B32]/80 backdrop-blur-sm border border-[#C6A15B]/50 flex items-center justify-center text-[#DFC07C] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Clean unboxed category label */}
                <div className="absolute top-3 left-3 text-[11px] font-semibold tracking-wider text-[#DFC07C] uppercase bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                  {item.categoryLabel}
                </div>

                {/* Card Title & Snippet */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-serif text-base font-semibold text-[#FAF7F0] line-clamp-1 group-hover:text-[#DFC07C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FAF7F0]/70 line-clamp-1 mt-0.5 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Modal Controls */}
            <div className="absolute top-6 right-6 flex items-center gap-3 z-50">
              <span className="text-xs text-[#FAF7F0]/70 tracking-widest uppercase">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(null);
                }}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F0] transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#123B32]/80 hover:bg-[#123B32] border border-[#C6A15B]/50 text-[#FAF7F0] transition-colors z-50 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#123B32]/80 hover:bg-[#123B32] border border-[#C6A15B]/50 text-[#FAF7F0] transition-colors z-50 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Body */}
            <div
              className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-lg overflow-hidden border border-[#C6A15B]/40 shadow-2xl max-h-[70vh]">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[70vh] w-auto object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption & Category */}
              <div className="mt-4 text-center max-w-2xl px-4">
                <span className="text-xs uppercase tracking-widest text-[#DFC07C] font-semibold">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF7F0] mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-sm text-[#FAF7F0]/80 mt-1">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
