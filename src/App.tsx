import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Events } from './components/Events.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { Reviews } from './components/Reviews.tsx';
import { ContactLocation } from './components/ContactLocation.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState<string | undefined>(undefined);

  const handleOpenBooking = (prefillEvent?: string) => {
    setSelectedEventType(prefillEvent);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedEventType(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#202522] flex flex-col font-sans selection:bg-[#C6A15B] selection:text-[#123B32]">
      {/* 1. Top Bar Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Full-Screen Cinematic Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. About Us Introduction */}
        <AboutUs onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Venue & Visual Gallery with Lightbox */}
        <Gallery />

        {/* 5. Events & Celebrations (6 Core Cards) */}
        <Events onOpenBooking={handleOpenBooking} />

        {/* 6. Why Choose DEWAN-E-KHAS (5 Confirmed Points) */}
        <WhyChooseUs />

        {/* 7. Customer Reviews (30 Google Reviews Highlight) */}
        <Reviews />

        {/* 8. Contact & Location (Map, Call, WhatsApp, Inquiry) */}
        <ContactLocation />
      </main>

      {/* 9. Comprehensive Luxury Footer */}
      <Footer />

      {/* 10. Interactive Reservation & Availability Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialEventType={selectedEventType}
      />

      {/* Floating Quick Action Widget (WhatsApp & Call) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Direct Call Button (Mobile & Desktop) */}
        <a
          href="tel:03347200600"
          className="w-12 h-12 rounded-full bg-[#123B32] text-[#DFC07C] border border-[#C6A15B]/50 shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all group"
          aria-label="Call 0334 7200600"
          title="Call DEWAN-E-KHAS"
        >
          <Phone className="w-5 h-5 text-[#C6A15B]" />
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/923347200600"
          target="_blank"
          rel="noreferrer noopener"
          className="w-13 h-13 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp with DEWAN-E-KHAS"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>
      </div>
    </div>
  );
}
