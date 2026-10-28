import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import { BRAND } from '../../config/brand';
import type { NavItem } from '../../types';
import { PrimaryButton } from '../common/PrimaryButton';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Culinary Experience', path: '/cuisine' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const headerBgClass = isHomePage
    ? isScrolled
      ? 'bg-forest-900/95 backdrop-blur-md border-b border-gold/20 shadow-lg py-4'
      : 'bg-transparent py-6'
    : 'bg-forest-900 border-b border-gold/20 shadow-md py-4';

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <Link to="/" className="group flex items-center space-x-3 focus:outline-none">
          <div className="w-10 h-10 border border-gold/50 flex items-center justify-center bg-forest-800/60 group-hover:border-gold transition-colors">
            <UtensilsCrossed className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl text-ivory tracking-wide font-medium leading-none group-hover:text-gold transition-colors">
              SUKHADIA
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold/90 font-light mt-1">
              CATERERS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-xs uppercase tracking-widest transition-colors duration-300 py-1 ${
                  isActive
                    ? 'text-gold font-medium'
                    : 'text-ivory/80 hover:text-gold'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold animate-line-expand" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <PrimaryButton to="/contact" variant="gold" size="sm">
            Plan Your Event
          </PrimaryButton>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-3 lg:hidden">
          <Link
            to="/contact"
            className="p-2 border border-gold/40 text-gold text-xs uppercase tracking-wider px-3 py-1.5 hover:bg-gold hover:text-forest-900 transition-colors"
          >
            Enquire
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ivory hover:text-gold transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 top-[72px] z-50 bg-forest-900/98 backdrop-blur-xl transition-all duration-400 lg:hidden flex flex-col justify-between p-8 overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6 pt-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold/70 border-b border-gold/15 pb-2">
            Navigation Menu
          </span>
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`font-serif text-2xl tracking-wide transition-colors ${
                  isActive ? 'text-gold italic pl-2 border-l-2 border-gold' : 'text-ivory hover:text-gold'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="border-t border-gold/20 pt-8 mt-8 flex flex-col space-y-5">
          <PrimaryButton to="/contact" variant="gold" size="md" className="w-full">
            Plan Your Event
          </PrimaryButton>

          <div className="flex items-center space-x-3 text-ivory/70 text-xs">
            <Phone className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Consultation: {BRAND.phone}</span>
          </div>

          <p className="text-[11px] text-ivory/50 tracking-wider">
            {BRAND.city} • Authentic Gujarati Hospitality
          </p>
        </div>
      </div>
    </header>
  );
};
