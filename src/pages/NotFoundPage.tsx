import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { useSeo } from '../utils/seo';

export const NotFoundPage: React.FC = () => {
  useSeo({
    title: 'Page Not Found — Sukhadia Caterers',
    description: 'The requested page could not be located. Explore our catering services, culinary gallery, or contact us.',
    canonicalPath: '/404',
  });

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-32 px-6 sm:px-8 bg-ivory">
      <div className="max-w-xl mx-auto text-center flex flex-col items-center">
        <div className="w-16 h-16 border border-gold/50 flex items-center justify-center bg-forest-900 text-gold mb-6">
          <UtensilsCrossed className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3">
          404 — Page Not Found
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl text-forest-900 font-normal leading-tight">
          A Moment of Pause.
        </h1>

        <p className="mt-4 text-sm sm:text-base text-charcoal-muted font-light leading-relaxed max-w-md">
          The celebratory page you are seeking is either being prepared or has moved. Allow us to guide you back to our culinary experience.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <PrimaryButton to="/" variant="gold" size="md">
            Return to Home
          </PrimaryButton>
          <PrimaryButton to="/services" variant="forest" size="md">
            View Catering Services
          </PrimaryButton>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/20 w-full flex justify-center space-x-6 text-xs uppercase tracking-widest text-charcoal-muted">
          <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
          <Link to="/cuisine" className="hover:text-gold transition-colors">Cuisines</Link>
          <Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
          <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  );
};
