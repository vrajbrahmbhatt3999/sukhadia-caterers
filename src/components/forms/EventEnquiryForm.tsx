import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MessageSquare, Send, CheckCircle2, AlertCircle, Calendar, Users, MapPin, Mail, Phone, User, Utensils } from 'lucide-react';
import { BRAND } from '../../config/brand';
import { generateWhatsAppLink } from '../../utils/whatsapp';
import type { EnquiryFormData } from '../../types';

const enquirySchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name (at least 2 characters)' }),
  mobileNumber: z.string().regex(/^[0-9+ -]{10,15}$/, { message: 'Please enter a valid phone number (10-15 digits)' }),
  emailAddress: z.string().email({ message: 'Please enter a valid email address' }),
  eventType: z.string().min(1, { message: 'Please select an event type' }),
  eventDate: z.string().min(1, { message: 'Please select your anticipated event date' }),
  eventLocation: z.string().min(2, { message: 'Please enter the city or venue location' }),
  guestCount: z.string().min(1, { message: 'Please estimate the number of guests' }),
  preferredCuisine: z.string().min(1, { message: 'Please select your primary cuisine preference' }),
  additionalRequirements: z.string().optional(),
});

type FormValues = z.infer<typeof enquirySchema>;

interface EventEnquiryFormProps {
  initialEventType?: string;
  className?: string;
}

export const EventEnquiryForm: React.FC<EventEnquiryFormProps> = ({
  initialEventType,
  className = '',
}) => {
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      eventType: initialEventType || '',
      preferredCuisine: '',
      guestCount: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // 1. WhatsApp Submission Flow
      const whatsappResult = generateWhatsAppLink(data as EnquiryFormData);

      if (!whatsappResult.url) {
        setErrorMessage(
          whatsappResult.error ||
          'WhatsApp consultation number is pending business verification. Please reach us via direct phone or email.'
        );
        setIsSubmitting(false);
        return;
      }

      // Open WhatsApp in new tab
      window.open(whatsappResult.url, '_blank', 'noopener,noreferrer');

      // 2. Structured API integration hook (can be easily connected to backend / email endpoint)
      // Future API Call: await fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(data) });

      setSubmissionSuccess(true);
      reset();
    } catch (err) {
      console.error('Enquiry submission error:', err);
      setErrorMessage('An unexpected error occurred while preparing your enquiry. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white border border-gold/30 p-8 sm:p-12 editorial-card-shadow ${className}`}>
      <div className="border-b border-ivory-300 pb-6 mb-8">
        <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
          Personalized Consultation
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal">
          Plan Your Celebration
        </h3>
        <p className="text-sm text-charcoal-muted mt-2 font-light">
          Fill out the details below. Our executive culinary team will review your requirements and coordinate your bespoke menu discussion.
        </p>
      </div>

      {submissionSuccess ? (
        <div className="bg-forest-50 border border-forest-300 p-8 text-center animate-fade-in">
          <CheckCircle2 className="w-12 h-12 text-forest-600 mx-auto mb-4" />
          <h4 className="font-serif text-2xl text-forest-900 font-normal">
            Enquiry Prepared Successfully
          </h4>
          <p className="text-sm text-charcoal-muted mt-2 max-w-md mx-auto leading-relaxed">
            Your event details have been formatted and directed to our consultation coordinator on WhatsApp. If your WhatsApp window did not open, you may also reach us directly at <span className="text-forest font-semibold">{BRAND.phone}</span>.
          </p>
          <button
            type="button"
            onClick={() => setSubmissionSuccess(false)}
            className="mt-6 text-xs uppercase tracking-widest text-gold-600 hover:text-gold-700 underline font-medium"
          >
            Submit Another Event Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Full Name <span className="text-gold">*</span>
              </label>
              <div className="relative">
                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g. Nilesh Sukhadia"
                  {...register('fullName')}
                  aria-invalid={errors.fullName ? 'true' : 'false'}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  className={`w-full px-4 py-3 pl-11 text-sm bg-ivory-100 border ${
                    errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-gold/30 focus:border-forest-700 focus:ring-forest-700'
                  } focus:outline-none transition-colors`}
                />
                <User className="w-4 h-4 text-gold absolute left-4 top-3.5" />
              </div>
              {errors.fullName && (
                <p id="fullName-error" className="text-red-600 text-xs mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobileNumber" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Mobile Number <span className="text-gold">*</span>
              </label>
              <div className="relative">
                <input
                  id="mobileNumber"
                  type="tel"
                  placeholder="e.g. +91 98250 12345"
                  {...register('mobileNumber')}
                  aria-invalid={errors.mobileNumber ? 'true' : 'false'}
                  aria-describedby={errors.mobileNumber ? 'mobileNumber-error' : undefined}
                  className={`w-full px-4 py-3 pl-11 text-sm bg-ivory-100 border ${
                    errors.mobileNumber ? 'border-red-400 focus:ring-red-400' : 'border-gold/30 focus:border-forest-700 focus:ring-forest-700'
                  } focus:outline-none transition-colors`}
                />
                <Phone className="w-4 h-4 text-gold absolute left-4 top-3.5" />
              </div>
              {errors.mobileNumber && (
                <p id="mobileNumber-error" className="text-red-600 text-xs mt-1">
                  {errors.mobileNumber.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="emailAddress" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Email Address <span className="text-gold">*</span>
              </label>
              <div className="relative">
                <input
                  id="emailAddress"
                  type="email"
                  placeholder="e.g. yourname@example.com"
                  {...register('emailAddress')}
                  aria-invalid={errors.emailAddress ? 'true' : 'false'}
                  aria-describedby={errors.emailAddress ? 'emailAddress-error' : undefined}
                  className={`w-full px-4 py-3 pl-11 text-sm bg-ivory-100 border ${
                    errors.emailAddress ? 'border-red-400 focus:ring-red-400' : 'border-gold/30 focus:border-forest-700 focus:ring-forest-700'
                  } focus:outline-none transition-colors`}
                />
                <Mail className="w-4 h-4 text-gold absolute left-4 top-3.5" />
              </div>
              {errors.emailAddress && (
                <p id="emailAddress-error" className="text-red-600 text-xs mt-1">
                  {errors.emailAddress.message}
                </p>
              )}
            </div>

            {/* Event Type */}
            <div>
              <label htmlFor="eventType" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Event Type <span className="text-gold">*</span>
              </label>
              <select
                id="eventType"
                {...register('eventType')}
                aria-invalid={errors.eventType ? 'true' : 'false'}
                aria-describedby={errors.eventType ? 'eventType-error' : undefined}
                className={`w-full px-4 py-3 text-sm bg-ivory-100 border ${
                  errors.eventType ? 'border-red-400 focus:ring-red-400' : 'border-gold/30 focus:border-forest-700 focus:ring-forest-700'
                } focus:outline-none transition-colors`}
              >
                <option value="">Select Event Type</option>
                <option value="Wedding / Grand Reception">Wedding / Grand Reception</option>
                <option value="Sangeet & Mehendi Celebration">Sangeet & Mehendi Celebration</option>
                <option value="Corporate Summit / Gala">Corporate Summit / Gala</option>
                <option value="Milestone Birthday / Anniversary">Milestone Birthday / Anniversary</option>
                <option value="Intimate Private Dinner">Intimate Private Dinner</option>
                <option value="Spiritual / Auspicious Pooja Feast">Spiritual / Auspicious Pooja Feast</option>
                <option value="Other Special Occasion">Other Special Occasion</option>
              </select>
              {errors.eventType && (
                <p id="eventType-error" className="text-red-600 text-xs mt-1">
                  {errors.eventType.message}
                </p>
              )}
            </div>

            {/* Event Date */}
            <div>
              <label htmlFor="eventDate" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Event Date <span className="text-gold">*</span>
              </label>
              <div className="relative">
                <input
                  id="eventDate"
                  type="date"
                  {...register('eventDate')}
                  aria-invalid={errors.eventDate ? 'true' : 'false'}
                  aria-describedby={errors.eventDate ? 'eventDate-error' : undefined}
                  className={`w-full px-4 py-3 pl-11 text-sm bg-ivory-100 border ${
                    errors.eventDate ? 'border-red-400 focus:ring-red-400' : 'border-gold/30 focus:border-forest-700 focus:ring-forest-700'
                  } focus:outline-none transition-colors`}
                />
                <Calendar className="w-4 h-4 text-gold absolute left-4 top-3.5" />
              </div>
              {errors.eventDate && (
                <p id="eventDate-error" className="text-red-600 text-xs mt-1">
                  {errors.eventDate.message}
                </p>
              )}
            </div>

            {/* Event Location */}
            <div>
              <label htmlFor="eventLocation" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Event Location / City <span className="text-gold">*</span>
              </label>
              <div className="relative">
                <input
                  id="eventLocation"
                  type="text"
                  placeholder="e.g. Ahmedabad, Vadodara, Surat"
                  {...register('eventLocation')}
                  aria-invalid={errors.eventLocation ? 'true' : 'false'}
                  aria-describedby={errors.eventLocation ? 'eventLocation-error' : undefined}
                  className={`w-full px-4 py-3 pl-11 text-sm bg-ivory-100 border ${
                    errors.eventLocation ? 'border-red-400 focus:ring-red-400' : 'border-gold/30 focus:border-forest-700 focus:ring-forest-700'
                  } focus:outline-none transition-colors`}
                />
                <MapPin className="w-4 h-4 text-gold absolute left-4 top-3.5" />
              </div>
              {errors.eventLocation && (
                <p id="eventLocation-error" className="text-red-600 text-xs mt-1">
                  {errors.eventLocation.message}
                </p>
              )}
            </div>

            {/* Guest Count */}
            <div>
              <label htmlFor="guestCount" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Approximate Guest Count <span className="text-gold">*</span>
              </label>
              <div className="relative">
                <select
                  id="guestCount"
                  {...register('guestCount')}
                  aria-invalid={errors.guestCount ? 'true' : 'false'}
                  aria-describedby={errors.guestCount ? 'guestCount-error' : undefined}
                  className={`w-full px-4 py-3 pl-11 text-sm bg-ivory-100 border ${
                    errors.guestCount ? 'border-red-400 focus:ring-red-400' : 'border-gold/30 focus:border-forest-700 focus:ring-forest-700'
                  } focus:outline-none transition-colors`}
                >
                  <option value="">Select Guest Range</option>
                  <option value="25 – 100 Guests (Intimate)">25 – 100 Guests (Intimate)</option>
                  <option value="100 – 300 Guests">100 – 300 Guests</option>
                  <option value="300 – 750 Guests">300 – 750 Guests</option>
                  <option value="750 – 1,500 Guests">750 – 1,500 Guests</option>
                  <option value="1,500 – 3,000+ Guests (Grand)">1,500 – 3,000+ Guests (Grand)</option>
                </select>
                <Users className="w-4 h-4 text-gold absolute left-4 top-3.5" />
              </div>
              {errors.guestCount && (
                <p id="guestCount-error" className="text-red-600 text-xs mt-1">
                  {errors.guestCount.message}
                </p>
              )}
            </div>

            {/* Preferred Cuisine */}
            <div>
              <label htmlFor="preferredCuisine" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Preferred Cuisine Focus <span className="text-gold">*</span>
              </label>
              <div className="relative">
                <select
                  id="preferredCuisine"
                  {...register('preferredCuisine')}
                  aria-invalid={errors.preferredCuisine ? 'true' : 'false'}
                  aria-describedby={errors.preferredCuisine ? 'preferredCuisine-error' : undefined}
                  className={`w-full px-4 py-3 pl-11 text-sm bg-ivory-100 border ${
                    errors.preferredCuisine ? 'border-red-400 focus:ring-red-400' : 'border-gold/30 focus:border-forest-700 focus:ring-forest-700'
                  } focus:outline-none transition-colors`}
                >
                  <option value="">Select Primary Cuisine</option>
                  <option value="Authentic Gujarati Heritage">Authentic Gujarati Heritage</option>
                  <option value="Strict Jain Traditional & Multi-cuisine">Strict Jain Traditional & Multi-cuisine</option>
                  <option value="North Indian & Awadhi Banqueting">North Indian & Awadhi Banqueting</option>
                  <option value="Pan-Indian Multi-Course Extravaganza">Pan-Indian Multi-Course Extravaganza</option>
                  <option value="Indian & Global Live Stations (Mexican, Continental, Asian)">Indian & Global Live Stations (Mexican, Continental, Asian)</option>
                  <option value="Bespoke Gourmet Fusion (Chef Consulted)">Bespoke Gourmet Fusion (Chef Consulted)</option>
                </select>
                <Utensils className="w-4 h-4 text-gold absolute left-4 top-3.5" />
              </div>
              {errors.preferredCuisine && (
                <p id="preferredCuisine-error" className="text-red-600 text-xs mt-1">
                  {errors.preferredCuisine.message}
                </p>
              )}
            </div>
          </div>

          {/* Additional Requirements */}
          <div>
            <label htmlFor="additionalRequirements" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
              Additional Details or Special Dietary Notes (Optional)
            </label>
            <textarea
              id="additionalRequirements"
              rows={4}
              placeholder="Tell us about specific culinary traditions, Jain requirements, venue details, or any special requests..."
              {...register('additionalRequirements')}
              className="w-full px-4 py-3 text-sm bg-ivory-100 border border-gold/30 focus:border-forest-700 focus:ring-forest-700 focus:outline-none transition-colors resize-y"
            />
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-forest-900 text-ivory hover:bg-forest-800 transition-all uppercase tracking-widest text-xs font-medium border border-gold/30 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Preparing Consultation...</span>
              ) : (
                <>
                  <MessageSquare className="w-4 h-4 text-gold" />
                  <span>Enquire Via WhatsApp Coordinator</span>
                  <Send className="w-3.5 h-3.5 ml-1 text-gold" />
                </>
              )}
            </button>

            <span className="text-[11px] text-charcoal-muted text-center sm:text-right">
              Direct consultation response typically within 24 business hours.
            </span>
          </div>
        </form>
      )}
    </div>
  );
};
