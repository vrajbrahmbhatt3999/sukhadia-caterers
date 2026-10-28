import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { EventEnquiryForm } from '../components/forms/EventEnquiryForm';
import { BRAND } from '../config/brand';
import { useSeo } from '../utils/seo';
import { Phone, Mail, MapPin, MessageSquare, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'How early should we reserve Sukhadia Caterers for weddings or grand celebrations?',
    a: 'For peak auspicious wedding dates and winter seasons (November through February), we recommend reserving 4 to 8 months in advance to ensure complete date exclusivity and dedicated executive chef availability.'
  },
  {
    q: 'Do you offer menu tasting sessions prior to final confirmation?',
    a: 'Yes. Once an initial event scope and menu proposal are agreed upon, we host a curated tasting session with key family decision-makers to calibrate spice levels, sweets, and presentation styles.'
  },
  {
    q: 'Can you provide strict Jain or Swaminarayan banquets?',
    a: 'Absolutely. We specialize in authentic Gujarati Jain banqueting, prepared strictly without root vegetables, with segregated kitchen utensils and traditional pure cow ghee preparations.'
  },
  {
    q: 'Do you cater outside Ahmedabad or at destination venues across Gujarat?',
    a: 'Yes. We cater across Gujarat—including Surat, Vadodara, Rajkot, Bhavnagar, Udaipur, and destination palaces or farmhouses, bringing our mobile culinary brigade and equipment.'
  }
];

export const ContactPage: React.FC = () => {
  useSeo({
    title: 'Contact & Event Consultation — Sukhadia Caterers',
    description: 'Connect with Sukhadia Caterers in Gujarat for bespoke wedding catering, corporate galas, and family celebrations. Request a personalized consultation and WhatsApp proposal.',
    canonicalPath: '/contact',
  });

  return (
    <div>
      <PageHero
        title="Begin Orchestrating Your Grand Celebration."
        eyebrow="Consultations & Inquiries"
        description="Share your event details with our culinary directors. We look forward to creating an unforgettable feast for your family and guests."
        image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=80"
        breadcrumbs={[{ label: 'Contact & Enquiry' }]}
      />

      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Contact & Info (5 cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <ScrollReveal>
                <SectionHeading
                  eyebrow="Direct Touchpoints"
                  title="Gracious Dialogue From Day One"
                  subtitle="We value clear, respectful, and prompt communication. Connect with our dedicated event coordinators through your preferred channel."
                />
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4 p-6 bg-white border border-gold/30">
                    <div className="w-10 h-10 border border-gold/40 flex items-center justify-center bg-forest-900 text-gold flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
                        Telephone Consultation
                      </span>
                      <a
                        href={`tel:${BRAND.phone}`}
                        className="font-serif text-xl text-forest-900 hover:text-gold transition-colors block mt-1"
                      >
                        {BRAND.phone}
                      </a>
                      <p className="text-xs text-charcoal-muted mt-1 font-light">
                        Monday – Sunday, 9:30 AM to 8:30 PM IST
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 p-6 bg-white border border-gold/30">
                    <div className="w-10 h-10 border border-gold/40 flex items-center justify-center bg-forest-900 text-gold flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
                        Direct Email Inquiries
                      </span>
                      <a
                        href={`mailto:${BRAND.email}`}
                        className="font-serif text-xl text-forest-900 hover:text-gold transition-colors block mt-1"
                      >
                        {BRAND.email}
                      </a>
                      <p className="text-xs text-charcoal-muted mt-1 font-light">
                        Send detailed event RFP / venue briefs
                      </p>
                    </div>
                  </div>

                  {/* Operational Base */}
                  <div className="flex items-start space-x-4 p-6 bg-white border border-gold/30">
                    <div className="w-10 h-10 border border-gold/40 flex items-center justify-center bg-forest-900 text-gold flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
                        Hospitality Headquarters
                      </span>
                      <p className="font-serif text-xl text-forest-900 mt-1">
                        {BRAND.city}
                      </p>
                      <p className="text-xs text-charcoal-muted mt-1 font-light">
                        {BRAND.address}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Consultation Note */}
              <ScrollReveal delay={0.3}>
                <div className="p-6 bg-forest-900 text-ivory border border-gold/30">
                  <div className="flex items-center space-x-2 text-gold text-xs uppercase tracking-widest font-medium mb-2">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Coordination</span>
                  </div>
                  <p className="text-xs text-ivory/80 leading-relaxed font-light">
                    Submitting the event form will directly format your celebration details into an organized WhatsApp message for our consultation manager, allowing immediate dialogue and sharing of sample menus.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Event Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.2}>
                <EventEnquiryForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-white border-t border-gold/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <SectionHeading
                align="center"
                eyebrow="Host Guidance"
                title="Frequently Asked Inquiries"
                subtitle="Practical information regarding booking procedures, tastings, dietary arrangements, and venue logistics."
              />
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-6 sm:p-8 bg-ivory border border-gold/30">
                  <h4 className="font-serif text-xl sm:text-2xl text-forest-900 mb-3 flex items-start space-x-3">
                    <HelpCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-sm text-charcoal-muted leading-relaxed font-light pl-8">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
