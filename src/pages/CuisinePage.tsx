import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { CUISINES_DATA } from '../data/cateringData';
import { useSeo } from '../utils/seo';
import { ShieldCheck, Sparkles, Utensils } from 'lucide-react';

export const CuisinePage: React.FC = () => {
  useSeo({
    title: 'The Culinary Experience — Authentic Regional & Global Cuisines',
    description: 'Explore Sukhadia Caterers culinary repertoire: authentic Gujarati feasts, royal Awadhi gravies, live street food counters, global grazing spreads, and artisanal sweets.',
    canonicalPath: '/cuisine',
  });

  const [selectedCuisine, setSelectedCuisine] = useState(CUISINES_DATA[0].id);
  const activeCuisine = CUISINES_DATA.find((c) => c.id === selectedCuisine) || CUISINES_DATA[0];

  return (
    <div>
      <PageHero
        title="A Gastronomic Tapestry of Regional Soul and Global Finesse."
        eyebrow="The Culinary Repertoire"
        description="From the comforting warmth of traditional Gujarati Kadhi to theatrical wood-fired pizza ovens and live nitrogen dessert spectacles."
        image="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1800&q=80"
        breadcrumbs={[{ label: 'Culinary Experience' }]}
      />

      {/* Interactive Cuisine Explorer */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <SectionHeading
                align="center"
                eyebrow="Explore By Cuisine"
                title="Our Culinary Categories"
                subtitle="Select any cuisine category below to inspect our flavor philosophy, signature specialties, and presentation style."
              />
            </ScrollReveal>
          </div>

          {/* Cuisine Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {CUISINES_DATA.map((cuisine) => (
              <button
                key={cuisine.id}
                onClick={() => setSelectedCuisine(cuisine.id)}
                className={`px-5 py-3 text-xs uppercase tracking-wider transition-all duration-300 border ${
                  selectedCuisine === cuisine.id
                    ? 'bg-forest-900 text-gold border-gold font-medium shadow-md'
                    : 'bg-white text-charcoal border-gold/25 hover:border-gold hover:text-forest'
                }`}
              >
                {cuisine.name.split(' ')[0]} {cuisine.name.split(' ')[1] || ''}
              </button>
            ))}
          </div>

          {/* Active Cuisine Showcase Detail Card */}
          <div className="bg-white border border-gold/30 p-8 sm:p-12 lg:p-16 editorial-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image Side */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden border border-gold/40">
                  <img
                    src={activeCuisine.image}
                    alt={activeCuisine.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {activeCuisine.accentNote && (
                    <div className="absolute bottom-4 left-4 bg-forest-900/90 text-gold px-3 py-1.5 text-[11px] uppercase tracking-wider border border-gold/40 backdrop-blur-sm">
                      {activeCuisine.accentNote}
                    </div>
                  )}
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
                    {activeCuisine.subtitle}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal">
                    {activeCuisine.name}
                  </h3>
                </div>

                <p className="text-base text-charcoal-muted leading-relaxed font-light">
                  {activeCuisine.description}
                </p>

                <div className="pt-4 border-t border-gold/20">
                  <h4 className="text-xs uppercase tracking-wider text-forest-900 font-medium mb-3">
                    Signature Creations:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCuisine.signatureDishes.map((dish, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-charcoal">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <span>{dish}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-ivory border-l-2 border-gold text-xs text-charcoal-muted">
                  <strong className="text-forest-900 block mb-1">Presentation &amp; Tableware:</strong>
                  {activeCuisine.presentationStyle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dietary Reverence & Hygiene Standards */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-forest-900 text-ivory border-t border-gold/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <SectionHeading
                theme="dark"
                align="center"
                eyebrow="Ritual Reverence"
                title="Specialized Dietary & Religious Accommodations"
                subtitle="We honor your spiritual disciplines and family dietary requirements with dedicated kitchen vessels, segregated stations, and authentic culinary integrity."
              />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-forest-800/60 border border-gold/25">
              <ShieldCheck className="w-8 h-8 text-gold mb-4" />
              <h4 className="font-serif text-2xl text-ivory mb-2">Strict Jain Banqueting</h4>
              <p className="text-xs text-ivory/70 font-light leading-relaxed">
                Prepared with zero root vegetables (potatoes, onions, garlic, carrots) using ritual cleanliness and fresh seasonal gourds, bananas, and pure dairy.
              </p>
            </div>

            <div className="p-8 bg-forest-800/60 border border-gold/25">
              <Sparkles className="w-8 h-8 text-gold mb-4" />
              <h4 className="font-serif text-2xl text-ivory mb-2">Swaminarayan &amp; Sattvic</h4>
              <p className="text-xs text-ivory/70 font-light leading-relaxed">
                Clean, calm, and uplifting culinary preparations crafted without onion or garlic, adhering to pure Vedic dietary guidelines.
              </p>
            </div>

            <div className="p-8 bg-forest-800/60 border border-gold/25">
              <Utensils className="w-8 h-8 text-gold mb-4" />
              <h4 className="font-serif text-2xl text-ivory mb-2">Global Dietary Allergies</h4>
              <p className="text-xs text-ivory/70 font-light leading-relaxed">
                Thoughtful labeling and dedicated options for gluten-sensitive, lactose-intolerant, and nut-sensitive guests so all attendees feel safe and honored.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <PrimaryButton to="/contact" variant="gold" size="md">
              Discuss Your Menu Specifications
            </PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
};
