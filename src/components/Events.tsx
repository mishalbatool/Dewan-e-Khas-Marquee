import React from 'react';
import { Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { EventCardItem } from '../types/index.ts';

interface EventsProps {
  onOpenBooking: (prefillEvent?: string) => void;
}

const eventTypes: EventCardItem[] = [
  {
    id: 'wedding-ceremonies',
    title: 'Wedding Ceremonies (Barat)',
    urduSubtitle: 'بارات و شادی کی تقریبات',
    description: 'A grand royal setting for the main wedding reception. Featuring opulent floral bridal stages, majestic red carpet entryways, and climate-controlled luxury halls for the bride, groom, and esteemed guests.',
    image: '/src/assets/images/gallery_stage_decor_1793357126867.jpg',
    highlights: ['Grand Bridal Stage', 'Royal Red Carpet Entry', 'Spacious Seating Capacity']
  },
  {
    id: 'walima-celebrations',
    title: 'Walima Celebrations',
    urduSubtitle: 'ولیمہ کی پروقار تقریب',
    description: 'An atmosphere of sophisticated grace and serene beauty. Styled in soft champagne, ivory, and crystal palettes with reflective mirror aisles and impeccable banquet dining layouts.',
    image: '/src/assets/images/events_walima_elegance_1793357147728.jpg',
    highlights: ['Champagne & Ivory Elegance', 'Mirrored Aisle Setup', 'Fine Dining Layouts']
  },
  {
    id: 'engagement-events',
    title: 'Engagement Events',
    urduSubtitle: 'منگنی کی تقریب',
    description: 'Intimate and romantic ceremonies surrounded by close family and friends. Curated floral ring backdrops, ambient fairy lighting, and comfortable lounge seating for heartfelt moments.',
    image: '/src/assets/images/events_engagement_reception_1793357146917.jpg',
    highlights: ['Intimate Floral Arches', 'Fairy Light Ambience', 'Family Lounge Styling']
  },
  {
    id: 'mehndi-functions',
    title: 'Mehndi Functions',
    urduSubtitle: 'مہندی و مایوں کا جشن',
    description: 'Vibrant, festive, and colorful celebrations filled with joy and cultural tradition. Decorated with golden marigolds, traditional brass lanterns, royal diwans, and dance floor arrangements.',
    image: '/src/assets/images/events_mehndi_celebration_1793357127724.jpg',
    highlights: ['Marigold & Floral Canopies', 'Traditional Royal Diwan', 'Festive Music & Lighting']
  },
  {
    id: 'family-celebrations',
    title: 'Family Celebrations & Get-Togethers',
    urduSubtitle: 'خاندانی تقریبات و دعوتیں',
    description: 'Milestone anniversaries, birthday banquets, Qawwali nights, and reunion dinners hosted in an atmosphere of warmth, supreme comfort, and distinguished culinary hospitality.',
    image: '/src/assets/images/gallery_table_banquet_1793357128177.jpg',
    highlights: ['Versatile Dining Configurations', 'Dedicated Hospitality', 'Private & Secure Setting']
  },
  {
    id: 'special-events',
    title: 'Special Events & Corporate Dinners',
    urduSubtitle: 'خصوصی تقریبات و سیمینارز',
    description: 'Executive dinners, institutional gatherings, award ceremonies, and high-profile community receptions requiring audio-visual support, grand capacity, and refined protocol.',
    image: '/src/assets/images/hero_dewan_marquee_1793357124955.jpg',
    highlights: ['High-Capacity Hall', 'Audio-Visual Preparedness', 'Ample Parking & Highway Access']
  }
];

export const Events: React.FC<EventsProps> = ({ onOpenBooking }) => {
  return (
    <section id="events" className="py-24 bg-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C6A15B]">
            Celebrations of Distinction
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123B32] mt-2 mb-4">
            Events & Celebrations
          </h2>
          <p className="text-[#202522]/80 text-sm sm:text-base leading-relaxed">
            From the majesty of royal wedding ceremonies to vibrant Mehndi festivities, DEWAN-E-KHAS provides the perfect setting for every momentous chapter of your life.
          </p>
        </div>

        {/* 6 Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventTypes.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E9DFCE] hover:border-[#C6A15B] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Urdu Calligraphy Subtitle Tag */}
                  {event.urduSubtitle && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded bg-[#123B32]/90 backdrop-blur-sm border border-[#C6A15B]/40 text-[#DFC07C] text-xs font-serif">
                      {event.urduSubtitle}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#123B32] group-hover:text-[#C6A15B] transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-sm text-[#202522]/75 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Unboxed clean metadata / highlights */}
                  <div className="pt-2 border-t border-[#E9DFCE] space-y-1.5">
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#123B32]/90 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking(event.title)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase text-[#123B32] bg-[#E9DFCE]/60 hover:bg-[#C6A15B] hover:text-[#123B32] border border-[#C6A15B]/30 hover:border-[#C6A15B] transition-all flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Inquire For This Event</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
