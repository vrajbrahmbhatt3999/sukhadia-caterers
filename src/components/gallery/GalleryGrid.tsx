import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/cateringData';
import { ImageLightbox } from '../common/ImageLightbox';

const CATEGORIES = ['All', 'Weddings', 'Cuisines', 'Live Stations', 'Decor & Presentation'] as const;

interface GalleryGridProps {
  initialCategory?: string;
  limit?: number;
  showFilters?: boolean;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  initialCategory = 'All',
  limit,
  showFilters = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const lightboxImages = displayedItems.map((item) => ({
    url: item.image,
    title: item.title,
    category: item.category,
    description: item.description,
  }));

  const handleOpenLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Category Filter Buttons */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10 sm:mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-forest-900 text-gold border-gold'
                  : 'bg-white text-charcoal border-gold/20 hover:border-gold hover:text-forest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Asymmetric Gallery Masonry / Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence>
          {displayedItems.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative cursor-pointer overflow-hidden bg-forest-900 border border-gold/20 aspect-[4/3] editorial-card-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-90"
              />

              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-forest-800/80 border border-gold/40 flex items-center justify-center text-gold">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h3 className="font-serif text-xl text-ivory font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-ivory/70 line-clamp-2 mt-1 font-light">
                  {item.description}
                </p>
              </div>

              {/* Permanent subtle bottom badge for mobile */}
              <div className="absolute bottom-3 left-3 bg-forest-900/80 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase tracking-wider text-gold border border-gold/30 md:hidden">
                {item.title}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={currentIndex}
        images={lightboxImages}
        onNavigate={(newIdx) => setCurrentIndex(newIdx)}
      />
    </div>
  );
};
