import React from 'react';
import { Star, ExternalLink, CheckCircle2, MessageSquareQuote } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF7F0] relative overflow-hidden border-t border-[#E9DFCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C6A15B]">
            Authentic Community Trust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123B32] mt-2 mb-4">
            Guest Satisfaction & Google Reviews
          </h2>
          <p className="text-[#202522]/80 text-sm sm:text-base leading-relaxed">
            Discover the experiences of families and hosts who celebrated their most memorable milestones at DEWAN-E-KHAS Marquee Marriage Hall.
          </p>
        </div>

        {/* Premium Google Reviews Verification Banner */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-[#C6A15B]/30 shadow-xl overflow-hidden p-8 sm:p-12 relative">
          
          {/* Subtle gold accent corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A15B]/10 rounded-bl-full pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            {/* Left: Google Badge & Verified Rating Highlights */}
            <div className="space-y-4 max-w-md">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B32]/10 text-[#123B32] text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                <span>Verified Public Google Business Profile</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                {/* Google Logo / Icon */}
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
                  <svg className="w-7 h-7" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.99 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-[#C6A15B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#C6A15B] text-[#C6A15B]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#202522]/70 mt-1 font-medium">
                    Based on <strong className="text-[#123B32] font-bold">30 Google Reviews</strong>
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#202522]/80 leading-relaxed">
                DEWAN-E-KHAS Marquee Marriage Hall is proud to serve families across Bhawana, Chiniot, and surrounding regions with transparent feedback and exceptional service standards.
              </p>
            </div>

            {/* Right: Action Card linking to Google search */}
            <div className="flex flex-col items-center md:items-end justify-center w-full md:w-auto shrink-0 bg-[#FAF7F0] p-6 rounded-2xl border border-[#E9DFCE]">
              <div className="text-center md:text-right mb-4">
                <span className="font-serif text-3xl font-bold text-[#123B32]">30 Reviews</span>
                <p className="text-xs text-[#202522]/65">Verified Public Feedback</p>
              </div>

              <a
                href="https://www.google.com/search?q=DEWAN-E-KHAS+Chiniot+reviews"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#123B32] hover:bg-[#0c2620] text-[#FAF7F0] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all group cursor-pointer"
              >
                <span>Read Reviews on Google</span>
                <ExternalLink className="w-4 h-4 text-[#DFC07C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-[11px] text-[#202522]/50 mt-2">
                Opens Google Search for DEWAN-E-KHAS reviews
              </span>
            </div>

          </div>

          {/* Authentic Venue Highlights Note */}
          <div className="mt-8 pt-6 border-t border-[#E9DFCE] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-lg bg-[#FAF7F0]/60">
              <p className="text-xs font-bold text-[#123B32]">Authentic Social Proof</p>
              <p className="text-[11px] text-[#202522]/70">Honest testimonials from real families</p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F0]/60">
              <p className="text-xs font-bold text-[#123B32]">High Regional Standing</p>
              <p className="text-[11px] text-[#202522]/70">Preferred venue along Jhang-Chiniot Road</p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F0]/60">
              <p className="text-xs font-bold text-[#123B32]">Direct Transparency</p>
              <p className="text-[11px] text-[#202522]/70">Reviewable directly on Google Search & Maps</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
