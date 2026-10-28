import { PageHero } from '../components/common/PageHero';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { SERVICES_DATA } from '../data/cateringData';
import { useSeo } from '../utils/seo';

export const ServicesPage: React.FC = () => {
  useSeo({
    title: 'Catering Services Overview — Weddings, Corporate & Social Galas',
    description: 'Explore Sukhadia Caterers comprehensive services: grand wedding feasts, executive corporate summits, intimate home celebrations, and sacred pooja banquets.',
    canonicalPath: '/services',
  });

  return (
    <div>
      <PageHero
        title="Distinguished Catering for Life's Most Significant Moments."
        eyebrow="Our Services"
        description="Every celebration possesses its own rhythm and significance. Discover our thoughtfully designed catering capabilities tailored to your occasion."
        image="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80"
        breadcrumbs={[{ label: 'Our Services' }]}
      />

      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <ScrollReveal>
                    <div className="relative aspect-[16/11] overflow-hidden border border-gold/30 editorial-shadow group">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 left-4 bg-forest-900/85 backdrop-blur-sm text-gold px-3.5 py-1.5 text-xs uppercase tracking-widest border border-gold/40">
                        {service.guestCapacity}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 flex flex-col space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <ScrollReveal>
                    <div className="flex items-center space-x-3 text-gold text-xs uppercase tracking-[0.25em]">
                      <span>Service 0{index + 1}</span>
                      <span className="w-8 h-[1px] bg-gold" />
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest-900 mt-2 font-normal">
                      {service.title}
                    </h2>

                    <p className="text-base text-charcoal-muted font-light leading-relaxed mt-4">
                      {service.fullDescription}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <div className="pt-2">
                      <span className="text-xs uppercase tracking-wider text-forest-900 font-medium block mb-3">
                        Ideal Occasions:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.idealFor.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1.5 bg-white border border-gold/30 text-charcoal"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.3}>
                    <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <PrimaryButton to={`/services/${service.id}`} variant="forest" size="md">
                        Explore Full Offering &amp; Menus
                      </PrimaryButton>
                      <PrimaryButton to="/contact" variant="outline-gold" size="md">
                        Enquire for this Event
                      </PrimaryButton>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
