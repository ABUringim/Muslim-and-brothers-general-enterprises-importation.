export interface LeadershipMember {
  id: string;
  name: string;
  rank: string;
  department: 'executive' | 'marketing' | 'real_estate' | 'technical' | 'operations' | 'advisory';
  phones: string[];
  email: string;
  bio?: string;
  location?: string;
  image?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'import_export' | 'real_estate' | 'commodities' | 'consultancy' | 'procurement' | 'textiles_gadgets';
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  keyFeatures: string[];
  imageUrl: string;
}

export interface BusinessSector {
  id: string;
  name: string;
  description: string;
  iconName: string;
  bgImage: string;
  stats?: string;
}

export interface OfficeLocation {
  id: string;
  country: string;
  type: 'HEAD OFFICE' | 'GHANA OFFICE' | 'BRANCH OFFICE';
  address: string[];
  landmark?: string;
  phones: string[];
  email: string;
  googleMapUrl: string;
  embedMapUrl: string;
  hours: string;
}

export interface StatItem {
  label: string;
  value: string;
  numericValue: number;
  suffix?: string;
  subtext: string;
  iconName: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}

export interface QuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  sector: string;
  location: string;
  quantityOrDetails: string;
  additionalNotes: string;
}
