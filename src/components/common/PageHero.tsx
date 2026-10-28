import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  description?: string;
  image: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  eyebrow,
  description,
  image,
  breadcrumbs = [],
}) => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end justify-start pt-32 pb-16 md:pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden bg-forest-900">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center brightness-60 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/70 to-forest-900/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs uppercase tracking-widest text-ivory/70 mb-4 sm:mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-gold transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="w-8 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
              {eyebrow}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-ivory leading-[1.08] tracking-tight max-w-4xl"
        >
          {title}
        </motion.h1>

        {/* Supporting Copy */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-ivory/80 font-light max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
};
