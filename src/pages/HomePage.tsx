import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ChefHat, ChevronRight, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { BRAND } from '../config/brand';
import { SERVICES_DATA, CUISINES_DATA, APPROACH_STEPS, WHY_CHOOSE_PILLARS } from '../data/cateringData';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { SectionHeading } from '../components/common/SectionHeading';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { TestimonialPlaceholder } from '../components/home/TestimonialPlaceholder';
import { useSeo } from '../utils/seo';

export const HomePage: React.FC = () => {
  useSeo({
    title: 'Sukhadia Caterers — Premium Catering & Event Hospitality in Gujarat',
    description: 'Where every celebration becomes an experience. Thoughtfully crafted cuisine, gracious Gujarati hospitality, and memorable culinary moments for weddings, corporate galas, and milestones.',
    canonicalPath: '/',
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-hidden">
      {/* SECTION A: CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-900 pt-20">
        {/* Background Image with Ken Burns subtle animation */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
            alt="Sukhadia Caterers Luxury Banquet Table"
            className="w-full h-full object-cover object-center animate-ken-burns brightness-[0.55]"
          />
          {/* Subtle gradient overlays for readability and luxury depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/60" />
          <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 sm:w-12 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Elevated Catering &amp; Hospitality • Gujarat
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-gold" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-normal leading-[1.05] tracking-tight max-w-4xl text-balance"
          >
            Where Every Celebration Becomes an <span className="italic text-gold font-light">Experience.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-ivory/85 font-light max-w-2xl leading-relaxed text-balance"
          >
            Thoughtfully crafted cuisine, gracious hospitality, and memorable moments for every occasion.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <PrimaryButton to="/contact" variant="gold" size="lg">
              Plan Your Event
            </PrimaryButton>
            <PrimaryButton
              onClick={() => scrollToSection('brand-intro')}
              variant="outline-white"
              size="lg"
            >
              Explore Our Services
            </PrimaryButton>
          </motion.div>
        </div>

        {/* Refined Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection('brand-intro')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-ivory/60 hover:text-gold transition-colors z-10 focus:outline-none"
          aria-label="Scroll to content"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] mb-2 font-light">
            Scroll to Discover
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-gold" />
        </motion.button>
      </section>

      {/* SECTION B: BRAND INTRODUCTION (MODERN LUXURY EDITORIAL COLLAGE) */}
      <section id="brand-intro" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-ivory relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Modern Dual-Image Luxury Collage */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal>
                <div className="relative pb-14 sm:pb-16 pr-3 sm:pr-8">
                  {/* Primary Grand Banquet Image */}
                  <div className="relative aspect-[4/5] overflow-hidden border border-gold/40 rounded-sm editorial-shadow group">
                    <img
                      src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
                      alt="Sukhadia Caterers Lavish Wedding Banquet Setup"
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* In-Image Tag */}
                    <div className="absolute top-4 left-4 bg-forest-900/90 backdrop-blur-md px-3.5 py-1.5 border border-gold/40 text-gold text-[10px] uppercase tracking-[0.25em] font-medium">
                      Bespoke Banqueting
                    </div>
                  </div>

                  {/* Overlapping Secondary Image */}
                  <div className="absolute -bottom-4 right-0 sm:right-2 w-3/5 sm:w-1/2 aspect-[4/3] border-2 border-gold/50 shadow-2xl rounded-sm overflow-hidden z-20 group">
                    <img
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                      alt="Theatrical Live Culinary Presentation"
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-forest-900/20 pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3 right-3 bg-forest-900/85 backdrop-blur-sm p-2 text-center border border-gold/30">
                      <p className="text-[10px] text-ivory font-serif tracking-wide">
                        Theatrical Live Cooking Stations
                      </p>
                    </div>
                  </div>

                  {/* Heritage Floating Seal */}
                  <div className="absolute -top-4 -left-3 sm:-top-6 sm:-left-6 bg-forest-900 text-ivory p-3.5 sm:p-4 border border-gold/50 rounded-sm shadow-xl z-20 flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full border border-gold/60 flex items-center justify-center bg-forest-800 text-gold">
                      <Sparkles className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.25em] text-gold block font-semibold">
                        Auspicious Catering
                      </span>
                      <span className="font-serif text-xs sm:text-sm text-ivory">
                        100% Pure Shuddh Ghee
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Elevated Editorial Storytelling & Feature Badges */}
            <div className="lg:col-span-6 flex flex-col space-y-7">
              <ScrollReveal>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-gold" />
                    <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                      The Art of Gracious Feasting
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-900 font-normal leading-[1.15] text-balance">
                    Where Sacred Gujarati Tradition Meets <span className="italic text-gold-600 font-light">Bespoke Elegance.</span>
                  </h2>
                  <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light pt-2">
                    In Indian celebration, a feast is the most sacred honor bestowed upon guests. At <strong className="text-forest-900 font-medium">Sukhadia Caterers</strong>, we elevate every occasion into an unforgettable sensory journey—weaving pure flavors, heritage recipes, and theatrical live dining into moments your family will cherish forever.
                  </p>
                </div>
              </ScrollReveal>

              {/* 3 Luxury Feature Cards */}
              <ScrollReveal delay={0.15}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                  <div className="bg-white/80 backdrop-blur-sm border border-gold/30 p-4 rounded-sm hover:border-gold transition-colors">
                    <div className="w-8 h-8 rounded-full bg-forest-50 border border-gold/30 flex items-center justify-center text-forest-800 mb-2.5">
                      <ShieldCheck className="w-4 h-4 text-gold-600" />
                    </div>
                    <h4 className="font-serif text-base text-forest-900 font-medium mb-1">
                      Pure &amp; Authentic
                    </h4>
                    <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                      Strictly pure vegetarian rasoi prepared with pure cow ghee &amp; pristine hygiene.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm border border-gold/30 p-4 rounded-sm hover:border-gold transition-colors">
                    <div className="w-8 h-8 rounded-full bg-forest-50 border border-gold/30 flex items-center justify-center text-forest-800 mb-2.5">
                      <ChefHat className="w-4 h-4 text-gold-600" />
                    </div>
                    <h4 className="font-serif text-base text-forest-900 font-medium mb-1">
                      Curated Menus
                    </h4>
                    <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                      Royal Gujarati thalis alongside theatrical Pan-Asian, Italian &amp; chaat counters.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm border border-gold/30 p-4 rounded-sm hover:border-gold transition-colors">
                    <div className="w-8 h-8 rounded-full bg-forest-50 border border-gold/30 flex items-center justify-center text-forest-800 mb-2.5">
                      <Award className="w-4 h-4 text-gold-600" />
                    </div>
                    <h4 className="font-serif text-base text-forest-900 font-medium mb-1">
                      White-Glove Poise
                    </h4>
                    <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                      Courteous floor stewards trained in dignified traditional hospitality.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Prestige Stat Bar */}
              <ScrollReveal delay={0.25}>
                <div className="bg-forest-900 text-ivory p-4 sm:p-5 border border-gold/30 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center rounded-sm">
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl text-gold font-light block">
                      500+
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-ivory/70 font-light">
                      Grand Celebrations
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl text-gold font-light block">
                      100%
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-ivory/70 font-light">
                      Pure Vegetarian
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl text-gold font-light block">
                      30+
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-ivory/70 font-light">
                      Master Chefs
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl text-gold font-light block">
                      Bespoke
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-ivory/70 font-light">
                      Custom Menus
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal delay={0.3}>
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <PrimaryButton to="/about" variant="forest" size="md">
                    Our Story &amp; Philosophy
                  </PrimaryButton>
                  <Link
                    to="/cuisine"
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-forest-900 hover:text-gold transition-colors font-medium border-b border-forest-900/30 pb-1 hover:border-gold"
                  >
                    <span>Explore Cuisines &amp; Live Counters</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: CATERING SERVICES */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-white border-y border-gold/15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Bespoke Hospitality"
                title="Our Catering Services"
                subtitle="From grand wedding galas to executive boardroom summits, explore services curated to your occasion."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-6 md:mt-0">
                <PrimaryButton to="/services" variant="outline-gold" size="sm">
                  View All Services
                </PrimaryButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Asymmetric Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <div className="group flex flex-col h-full bg-ivory border border-gold/25 hover:border-gold transition-all duration-400 editorial-card-shadow">
                  {/* Image Container with Zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-forest-900">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-forest-900/20 group-hover:bg-forest-900/10 transition-colors" />
                    <span className="absolute top-4 left-4 bg-forest-900/80 backdrop-blur-sm text-gold px-3 py-1 text-[10px] uppercase tracking-widest border border-gold/30">
                      {service.guestCapacity}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 group-hover:text-gold-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gold/20 flex items-center justify-between">
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-forest-900 font-medium group-hover:text-gold transition-colors"
                      >
                        <span>Explore Details</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: THE CULINARY EXPERIENCE */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-forest-900 text-ivory relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <ScrollReveal>
              <SectionHeading
                theme="dark"
                align="center"
                eyebrow="Gastronomic Craft"
                title="The Culinary Experience"
                subtitle="Diverse culinary traditions brought to life with unyielding quality, fresh ingredients, and theatrical live execution."
              />
            </ScrollReveal>
          </div>

          {/* Cuisine Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CUISINES_DATA.slice(0, 6).map((cuisine, index) => (
              <ScrollReveal key={cuisine.id} delay={index * 0.1}>
                <div className="bg-forest-800/60 border border-gold/20 p-6 sm:p-8 flex flex-col justify-between h-full hover:border-gold/60 transition-all duration-300">
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden mb-6 border border-gold/20">
                      <img
                        src={cuisine.image}
                        alt={cuisine.name}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium block mb-1">
                      {cuisine.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl text-ivory mb-3">
                      {cuisine.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-ivory/70 font-light leading-relaxed mb-4">
                      {cuisine.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gold/15">
                    <span className="text-[10px] uppercase tracking-wider text-gold/80 block mb-2 font-medium">
                      Highlights:
                    </span>
                    <ul className="space-y-1 text-xs text-ivory/65">
                      {cuisine.signatureDishes.slice(0, 2).map((dish, dIdx) => (
                        <li key={dIdx} className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-gold rounded-full" />
                          <span>{dish}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <PrimaryButton to="/cuisine" variant="outline-gold" size="md">
              Explore All Cuisines &amp; Live Counters
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* SECTION E: WHY CHOOSE SUKHADIA CATERERS */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <ScrollReveal>
                <SectionHeading
                  eyebrow="The Sukhadia Standard"
                  title="Why Discriminating Hosts Entrust Their Celebrations to Us"
                  subtitle="A steadfast commitment to purity, operational poise, and authentic Gujarati graciousness."
                />
                <div className="mt-8 p-6 bg-white border border-gold/30 editorial-card-shadow">
                  <div className="flex items-center space-x-3 text-forest-900 mb-2 font-medium text-sm">
                    <ChefHat className="w-5 h-5 text-gold" />
                    <span>Personal Executive Tasting</span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    Prior to your celebration, we invite you to experience an exclusive tasting session to calibrate sweetness, spice levels, and presentation nuances.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7 flex flex-col space-y-6">
              {WHY_CHOOSE_PILLARS.map((pillar, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="p-6 sm:p-8 bg-white border border-gold/25 hover:border-gold transition-colors duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
                        {pillar.highlight}
                      </span>
                      <span className="font-serif text-2xl text-gold/40">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-forest-900 mb-2 font-normal">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: SIGNATURE EVENT SHOWCASE (GALLERY PREVIEW) */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-white border-t border-gold/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <SectionHeading
                align="center"
                eyebrow="Visual Portfolio"
                title="Signature Event Showcase"
                subtitle="Glances from our banquet setups, live interactive culinary counters, and artisanal table styling."
              />
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <GalleryGrid limit={6} showFilters={true} />
          </ScrollReveal>

          <div className="mt-14 text-center">
            <PrimaryButton to="/gallery" variant="forest" size="md">
              View Complete Photo Gallery
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* SECTION G: OUR APPROACH */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <ScrollReveal>
              <SectionHeading
                align="center"
                eyebrow="The Hospitality Journey"
                title="How We Orchestrate Your Celebration"
                subtitle="From first conversation to the final sweet delicacy, a structured 5-step journey built on precision."
              />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {APPROACH_STEPS.map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 0.1}>
                <div className="bg-white border border-gold/30 p-6 sm:p-7 flex flex-col justify-between h-full relative group hover:border-forest-700 transition-colors">
                  <div>
                    <span className="font-serif text-4xl sm:text-5xl text-gold/35 group-hover:text-gold transition-colors font-light block mb-4">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-gold block mb-1 font-medium">
                      {step.subtitle}
                    </span>
                    <h3 className="font-serif text-xl text-forest-900 mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION H: TESTIMONIALS */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-forest-900">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <TestimonialPlaceholder />
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION I: PREMIUM ENQUIRY CTA */}
      <section className="relative py-28 sm:py-36 px-6 sm:px-8 lg:px-12 overflow-hidden bg-forest-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=80"
            alt="Sukhadia Caterers Wedding Celebration Dining"
            className="w-full h-full object-cover object-center brightness-40"
          />
          <div className="absolute inset-0 bg-forest-900/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">
            Curate Your Culinary Celebration
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-normal leading-[1.1] tracking-tight">
            Let's Make Your Next Celebration <span className="italic text-gold font-light">Exceptional.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-ivory/80 max-w-xl mx-auto font-light leading-relaxed">
            Reserve your date and let us tailor a bespoke culinary spread that honors your guests and your traditions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <PrimaryButton to="/contact" variant="gold" size="lg">
              Plan Your Event
            </PrimaryButton>
            <a
              href={`tel:${BRAND.phone}`}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-ivory hover:text-gold border border-ivory/30 px-7 py-4 hover:border-gold transition-colors"
            >
              <span>Direct Call: {BRAND.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
