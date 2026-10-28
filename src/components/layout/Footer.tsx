import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../../config/brand';
import { SERVICES_DATA } from '../../data/cateringData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-900 text-ivory border-t border-gold/20 pt-16 sm:pt-20 pb-12 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Decorative subtle background crest */}
      <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-96 h-96 rounded-full border border-gold/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-ivory/10">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link to="/" className="flex items-center space-x-3 group w-fit">
              <div className="w-10 h-10 border border-gold/60 flex items-center justify-center bg-forest-800">
                <UtensilsCrossed className="w-5 h-5 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-ivory tracking-wide font-medium leading-none">
                  SUKHADIA
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold/90 font-light mt-1">
                  CATERERS
                </span>
              </div>
            </Link>

            <p className="text-sm text-ivory/70 leading-relaxed font-light max-w-sm">
              Curating elevated culinary feasts and gracious hospitality for weddings, corporate galas, and milestones across Gujarat and destination venues.
            </p>

            {/* Social Channels */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile (configurable)"
                className="w-9 h-9 border border-gold/30 flex items-center justify-center text-ivory/80 hover:text-gold hover:border-gold transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook profile (configurable)"
                className="w-9 h-9 border border-gold/30 flex items-center justify-center text-ivory/80 hover:text-gold hover:border-gold transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href={BRAND.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube channel (configurable)"
                className="w-9 h-9 border border-gold/30 flex items-center justify-center text-ivory/80 hover:text-gold hover:border-gold transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-ivory/70">
              <li>
                <Link to="/" className="hover:text-gold transition-colors inline-flex items-center">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors inline-flex items-center">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors inline-flex items-center">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/cuisine" className="hover:text-gold transition-colors inline-flex items-center">
                  Culinary Experience
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors inline-flex items-center">
                  Events Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors inline-flex items-center">
                  Contact & Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Catering Services (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
              Catering Services
            </h4>
            <ul className="space-y-2.5 text-sm text-ivory/70">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services/${srv.id}`}
                    className="hover:text-gold transition-colors flex items-center justify-between group"
                  >
                    <span>{srv.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold/40 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Consultations (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
              Consultations
            </h4>
            <div className="space-y-3.5 text-sm text-ivory/75">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span>{BRAND.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-gold transition-colors">
                  {BRAND.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-gold transition-colors">
                  {BRAND.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block border border-gold/40 text-gold hover:bg-gold hover:text-forest-900 transition-all text-xs uppercase tracking-widest px-4 py-2.5"
              >
                Request Custom Proposal
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Unverified Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="max-w-xl text-center md:text-right leading-relaxed font-light text-[11px] text-ivory/40">
            {BRAND.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
