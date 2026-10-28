import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  images: { url: string; title: string; category?: string; description?: string }[];
  onNavigate: (newIndex: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  currentIndex,
  images,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-forest-900/95 backdrop-blur-md p-4 md:p-8"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-ivory/80 hover:text-gold transition-colors z-50 focus:outline-none focus:ring-1 focus:ring-gold"
          aria-label="Close Lightbox"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + images.length) % images.length);
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-ivory/80 hover:text-gold transition-colors z-50 bg-forest-800/40 hover:bg-forest-800/80 rounded-full"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        {/* Main Image Container */}
        <div
          className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={currentImage.url}
            src={currentImage.url}
            alt={currentImage.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="max-h-[72vh] w-auto max-w-full object-contain shadow-2xl border border-gold/20"
          />

          <div className="mt-4 text-center max-w-xl">
            {currentImage.category && (
              <span className="text-xs uppercase tracking-widest text-gold block mb-1">
                {currentImage.category}
              </span>
            )}
            <h3 className="font-serif text-xl sm:text-2xl text-ivory">
              {currentImage.title}
            </h3>
            {currentImage.description && (
              <p className="text-sm text-ivory/70 mt-1 font-light">
                {currentImage.description}
              </p>
            )}
            <p className="text-xs text-ivory/50 mt-2">
              {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % images.length);
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-ivory/80 hover:text-gold transition-colors z-50 bg-forest-800/40 hover:bg-forest-800/80 rounded-full"
            aria-label="Next Image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
