import type { EnquiryFormData } from '../types';
import { BRAND } from '../config/brand';

export function generateWhatsAppLink(data: EnquiryFormData): { url: string | null; error?: string } {
  if (!BRAND.hasConfiguredWhatsapp || !BRAND.whatsappNumber || BRAND.whatsappNumber.includes('X')) {
    return {
      url: null,
      error: 'WhatsApp enquiry number is currently pending client configuration. Please use our email enquiry or contact form.'
    };
  }

  const message = [
    `*NEW EVENT ENQUIRY — ${BRAND.name.toUpperCase()}*`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `*Name:* ${data.fullName}`,
    `*Mobile:* ${data.mobileNumber}`,
    `*Email:* ${data.emailAddress}`,
    `*Event Type:* ${data.eventType}`,
    `*Event Date:* ${data.eventDate}`,
    `*Event Location / City:* ${data.eventLocation}`,
    `*Estimated Guests:* ${data.guestCount}`,
    `*Preferred Cuisine(s):* ${data.preferredCuisine}`,
    data.additionalRequirements ? `*Special Notes / Dietary Requirements:*\n${data.additionalRequirements}` : null,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `_Sent via Sukhadia Caterers Official Website_`
  ]
    .filter(Boolean)
    .join('\n\n');

  const encoded = encodeURIComponent(message);
  return {
    url: `https://wa.me/${BRAND.whatsappNumber}?text=${encoded}`
  };
}
