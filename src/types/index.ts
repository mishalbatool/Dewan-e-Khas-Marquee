export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hall' | 'stage' | 'dining' | 'lighting' | 'mehndi';
  categoryLabel: string;
  image: string;
  fallback?: string;
  description: string;
}

export interface EventCardItem {
  id: string;
  title: string;
  urduSubtitle?: string;
  description: string;
  image: string;
  fallback?: string;
  highlights: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  notes: string;
}
