export interface BrandConfig {
  name: string;
  tagline: string;
  subTagline: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address: string;
  whatsappNumber: string; // international format without + or spaces, e.g. "919876543210"
  hasConfiguredWhatsapp: boolean;
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  disclaimer: string;
}

export const BRAND: BrandConfig = {
  name: "Sukhadia Caterers",
  tagline: "Where Every Celebration Becomes an Experience.",
  subTagline: "Thoughtfully crafted cuisine, gracious hospitality, and memorable moments for every occasion.",
  city: "Ahmedabad & Across Gujarat",
  state: "Gujarat",
  country: "India",
  // Clearly configurable contact placeholders
  phone: "+91 98250 XXXXX",
  phoneFormatted: "+91 98250 00000",
  email: "enquiry@sukhadiacaterers.com",
  address: "Ahmedabad, Gujarat, India (Available across Gujarat and destination venues)",
  // Set to true once the client provides their verified business WhatsApp number
  whatsappNumber: "919876543210", 
  hasConfiguredWhatsapp: true,
  social: {
    instagram: "https://instagram.com/sukhadiacaterers",
    facebook: "https://facebook.com/sukhadiacaterers",
    youtube: "https://youtube.com/sukhadiacaterers",
  },
  disclaimer: "All event setups, custom menus, and culinary packages are customized based on individual client consultations. Services and menu items shown are representative proposals."
};
