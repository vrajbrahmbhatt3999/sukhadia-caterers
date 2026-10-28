import { ShieldCheck, Sparkles } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { useSeo } from '../utils/seo';

export const AboutPage: React.FC = () => {
  useSeo({
    title: 'About Us — Heritage, Philosophy & Hospitality',
    description: 'Learn about Sukhadia Caterers: our dedication to authentic Gujarati hospitality, pure ingredients, pristine kitchen standards, and bespoke celebratory feasts.',
    canonicalPath: '/about',
  });

  return (
    <div>
      <PageHero
        title="Hospitality Rooted in Tradition, Elevated for Modern Celebrations."
        eyebrow="Our Story & Philosophy"
        description="At Sukhadia Caterers, we approach every celebration with devotion, treating every host as family and every feast as a sacred offering of joy."
        image="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1800&q=80"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Philosophy Section */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <ScrollReveal>
                <SectionHeading
                  eyebrow="The Ethos of Atithi Devo Bhava"
                  title="Where Culinary Artistry Meets Heartfelt Devotion"
                  subtitle="A celebration is more than a gathering—it is a cherished union of families, friends, and lifelong memories."
                />
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-4 text-sm sm:text-base text-charcoal-muted font-light leading-relaxed">
                  <p>
                    Throughout Gujarat, hosting is considered an art form. It demands patience, generosity, and an unhurried appreciation for delicate culinary harmonies. At <strong className="text-forest-900 font-medium">Sukhadia Caterers</strong>, we take immense pride in upholding this noble tradition.
                  </p>
                  <p>
                    From sourcing pure cow ghee and fragrant Kesar saffron from trusted vendors to slow-roasting spices in small batches, our culinary preparations reflect timeless techniques passed down through generations.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start space-x-3 p-4 bg-white border border-gold/30">
                    <ShieldCheck className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-lg text-forest-900 font-normal">Pure Ingredients</h4>
                      <p className="text-xs text-charcoal-muted mt-1 font-light">
                        Certified pure ghee, cold-pressed oils, and farm-fresh produce.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-white border border-gold/30">
                    <Sparkles className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-lg text-forest-900 font-normal">Strict Jain Feasts</h4>
                      <p className="text-xs text-charcoal-muted mt-1 font-light">
                        Segregated ritual kitchen operations without root vegetables.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-[4/5] overflow-hidden border border-gold/40 editorial-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
                    alt="Sukhadia Caterers Master Chef Preparing Delicacies"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-forest-900/10 pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values / Four Pillars */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-white border-y border-gold/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <SectionHeading
                align="center"
                eyebrow="Our Commitments"
                title="Four Guiding Standards of Our Kitchen"
                subtitle="Every service protocol, ingredient choice, and culinary presentation is governed by these core promises."
              />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="p-8 bg-ivory border border-gold/25 h-full flex flex-col justify-between">
                <div>
                  <span className="font-serif text-3xl text-gold/60 font-light block mb-4">01</span>
                  <h3 className="font-serif text-2xl text-forest-900 mb-2">Uncompromising Hygiene</h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    Spotless kitchen environments, continuous temperature surveillance, and stringent hygiene standards for all kitchen staff and servers.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-8 bg-ivory border border-gold/25 h-full flex flex-col justify-between">
                <div>
                  <span className="font-serif text-3xl text-gold/60 font-light block mb-4">02</span>
                  <h3 className="font-serif text-2xl text-forest-900 mb-2">Authentic Provenance</h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    Honoring ancestral regional recipes rather than taking artificial shortcuts. Authentic Surati Undhiyu, hand-rolled kachoris, and pure saffron sweets.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="p-8 bg-ivory border border-gold/25 h-full flex flex-col justify-between">
                <div>
                  <span className="font-serif text-3xl text-gold/60 font-light block mb-4">03</span>
                  <h3 className="font-serif text-2xl text-forest-900 mb-2">Gracious Floor Etiquette</h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    Uniformed, attentive banquet captains and stewards trained in gentle Gujarati table manners, ensuring prompt, polite guest service.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="p-8 bg-ivory border border-gold/25 h-full flex flex-col justify-between">
                <div>
                  <span className="font-serif text-3xl text-gold/60 font-light block mb-4">04</span>
                  <h3 className="font-serif text-2xl text-forest-900 mb-2">Adaptive Flexibility</h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    Seamless integration with wedding planners, venue managers, decor stylists, and destination event teams across Gujarat.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pre-Tasting Session CTA */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-forest-900 text-ivory">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Experience Before Your Event
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
              Schedule an Executive Tasting Session
            </h3>
            <p className="text-sm text-ivory/70 max-w-lg mt-2 font-light">
              We welcome wedding families and corporate hosts to preview our dishes and calibrate flavors firsthand.
            </p>
          </div>
          <PrimaryButton to="/contact" variant="gold" size="md">
            Request Menu Consultation
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
};
