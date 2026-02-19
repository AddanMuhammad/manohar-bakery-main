import { IconType } from "react-icons";

export interface HeroSectionItem {
  id: string;
  title: string;
  heading: string;
  description: string;
  image: string;
}

export interface SocialData {
  id: string;
  platform: string;
  url: string;
  icon: IconType;
}

export interface TestimonialData {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface SizeOption {
  size: string;
  label: string;
  servings: string;
  price?: string;
  icon?: string;
}

export interface IceCreamFlavor {
  id: string;
  name: string;
  image: string;
  isAvailable: boolean;
}

export interface MenuItem {
  id: string;
  name?: string;
  price?: string;
  description?: string;
  image?: string;
  images?: string[];
  category: string;
  isAvailable: boolean;
  allergens?: string[];
  nutritionInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  sizeOptions?: SizeOption[];
  addons?: Addon[];
  detailedDescription?: string;
  clickAndCollectInfo?: string;
}

export interface Addon {
  id: string;
  name: string;
  image: string;
  price: string;
  isAvailable: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
  sortOrder: number;
}



















export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
  isExternal?: boolean;
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  createdAt: Date;
  estimatedDelivery?: Date;
  notes?: string;
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'youtube' | 'tiktok';
  url: string;
  icon: string;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  isClosed: boolean;
}

export interface StoreInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: BusinessHours[];
  socialLinks: SocialLink[];
}
