import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { useSeo } from '../utils/seo';

export const GalleryPage: React.FC = () => {
  useSeo({
    title: 'Events & Food Gallery — Visual Portfolio of Banquets & Counters',
    description: 'Browse the visual showcase of Sukhadia Caterers: opulent wedding banquets, live theatrical food stations, traditional Gujarati thalis, and custom table decor.',
    canonicalPath: '/gallery',
  });

  return (
    <div>
      <PageHero
        title="Moments of Grandeur, Artistry, and Celebratory Joy."
        eyebrow="Visual Portfolio"
        description="Explore snapshots of our banqueting layouts, interactive live stations, authentic heritage spreads, and bespoke event styling across Gujarat."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80"
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <SectionHeading
                align="center"
                eyebrow="Curated Portfolio"
                title="Banqueting &amp; Culinary Showcase"
                subtitle="Filter by category to explore wedding dining arrangements, authentic regional cuisines, theatrical live stalls, and table decor."
              />
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <GalleryGrid showFilters={true} />
          </ScrollReveal>

          <div className="mt-20 p-8 sm:p-10 bg-white border border-gold/30 text-center max-w-2xl mx-auto editorial-card-shadow">
            <h4 className="font-serif text-2xl text-forest-900 mb-2">
              Envisioning Your Special Occasion?
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light mb-6">
              Every venue layout is customized in consultation with your family and event planners. Connect with our banquet directors to begin conceptualizing your setup.
            </p>
            <PrimaryButton to="/contact" variant="forest" size="md">
              Start Planning Your Event
            </PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
};
