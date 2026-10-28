import React from 'react';
import { Award, Quote, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TestimonialPlaceholder: React.FC = () => {
  return (
    <div className="bg-forest-900 border border-gold/30 p-8 sm:p-12 md:p-16 max-w-4xl mx-auto text-center relative overflow-hidden editorial-shadow">
      {/* Subtle decorative quote background */}
      <div className="absolute top-4 left-6 text-gold/10 pointer-events-none">
        <Quote className="w-24 h-24" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-14 h-14 border border-gold/40 flex items-center justify-center bg-forest-800 text-gold mb-6">
          <Award className="w-7 h-7" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-3">
          Client Reflections &amp; Trust
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory font-normal max-w-xl leading-snug">
          "A legacy of hospitality is measured in the smiles of your guests."
        </h3>

        <div className="w-12 h-[1px] bg-gold/50 my-6" />

        <p className="text-sm sm:text-base text-ivory/70 max-w-lg mx-auto font-light leading-relaxed">
          We honor authentic relationships with our celebratory hosts. Verified client reviews and wedding experiences will be featured here following our upcoming event season.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold hover:text-gold-200 border-b border-gold/40 hover:border-gold pb-1 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect with our event coordinators</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
