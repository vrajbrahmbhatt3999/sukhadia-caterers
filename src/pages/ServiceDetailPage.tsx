import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { EventEnquiryForm } from '../components/forms/EventEnquiryForm';
import { SERVICES_DATA } from '../data/cateringData';
import { useSeo } from '../utils/seo';

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES_DATA.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  useSeo({
    title: `${service.title} — Sukhadia Caterers`,
    description: service.shortDescription,
    canonicalPath: `/services/${service.id}`,
  });

  const currentIndex = SERVICES_DATA.findIndex((s) => s.id === id);
  const prevService = SERVICES_DATA[(currentIndex - 1 + SERVICES_DATA.length) % SERVICES_DATA.length];
  const nextService = SERVICES_DATA[(currentIndex + 1) % SERVICES_DATA.length];

  return (
    <div>
      <PageHero
        title={service.title}
        eyebrow="Specialized Catering Service"
        description={service.shortDescription}
        image={service.heroImage}
        breadcrumbs={[
          { label: 'Our Services', path: '/services' },
          { label: service.title }
        ]}
      />

      {/* Main Details Section */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-12">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-3">
                  Service Overview
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 leading-snug font-normal">
                  Catering Crafted for {service.title}
                </h2>
                <p className="mt-6 text-base text-charcoal-muted font-light leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Detail Gallery Images */}
              {service.detailImages.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.detailImages.map((img, idx) => (
                    <div key={idx} className="aspect-[4/3] overflow-hidden border border-gold/30">
                      <img
                        src={img}
                        alt={`${service.title} detail ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Key Offerings */}
              <div className="bg-white border border-gold/30 p-8 sm:p-10 editorial-card-shadow">
                <h3 className="font-serif text-2xl text-forest-900 mb-6 flex items-center space-x-3">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <span>Curated Service Inclusions</span>
                </h3>
                <ul className="space-y-4">
                  {service.keyOfferings.map((offering, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-charcoal-muted leading-relaxed font-light">
                      <div className="w-5 h-5 rounded-full bg-forest-50 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Menu Highlights */}
              <div className="bg-forest-900 text-ivory border border-gold/30 p-8 sm:p-10 editorial-shadow">
                <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
                  Sample Culinary Palette
                </span>
                <h3 className="font-serif text-2xl text-ivory mb-6">
                  Signature Menu Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.menuHighlights.map((dish, idx) => (
                    <div key={idx} className="flex items-center space-x-3 border-b border-ivory/10 pb-3">
                      <span className="w-2 h-2 bg-gold rotate-45 flex-shrink-0" />
                      <span className="text-sm text-ivory/85 font-light">{dish}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-ivory/50 mt-6 italic">
                  * Note: Menus are customized during the consultation phase to suit your seasonal and dietary requirements.
                </p>
              </div>

              {/* Prev / Next Service Navigation */}
              <div className="pt-8 border-t border-gold/20 flex items-center justify-between">
                <Link
                  to={`/services/${prevService.id}`}
                  className="flex items-center space-x-2 text-xs uppercase tracking-wider text-forest-900 hover:text-gold transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4 text-gold" />
                  <span>Previous: {prevService.title}</span>
                </Link>
                <Link
                  to={`/services/${nextService.id}`}
                  className="flex items-center space-x-2 text-xs uppercase tracking-wider text-forest-900 hover:text-gold transition-colors font-medium"
                >
                  <span>Next: {nextService.title}</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </Link>
              </div>
            </div>

            {/* Right Consultation Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-8">
                {/* At a glance box */}
                <div className="bg-white border border-gold/30 p-6 sm:p-8">
                  <h4 className="font-serif text-xl text-forest-900 mb-4 border-b border-gold/20 pb-3">
                    Service Specifications
                  </h4>
                  <div className="space-y-4 text-sm text-charcoal-muted font-light">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gold font-medium block mb-1">
                        Guest Capacity
                      </span>
                      <p className="text-forest-900 font-medium">{service.guestCapacity}</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gold font-medium block mb-1">
                        Ideal Occasions
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {service.idealFor.map((item, idx) => (
                          <span key={idx} className="text-xs px-2.5 py-1 bg-ivory text-forest-900 border border-gold/20">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Enquiry Form Embedded */}
                <EventEnquiryForm initialEventType={service.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
