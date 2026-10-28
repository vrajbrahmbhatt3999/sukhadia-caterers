export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  detailImages: string[];
  guestCapacity: string;
  idealFor: string[];
  keyOfferings: string[];
  menuHighlights: string[];
  isProposed?: boolean;
}

export interface CuisineCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  accentNote?: string;
  signatureDishes: string[];
  presentationStyle: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Cuisines' | 'Live Stations' | 'Decor & Presentation';
  image: string;
  description: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface ApproachStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface WhyChoosePillar {
  title: string;
  description: string;
  highlight: string;
}

export interface EnquiryFormData {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  guestCount: string;
  preferredCuisine: string;
  additionalRequirements?: string;
}
