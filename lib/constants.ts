import { NavigationItem } from "@/types";

export const APP_CONFIG = {
  name: 'manohar Bakery',
  description: 'Fresh baked goods made with love and traditional recipes',
  colors: {
    primary: '#FFF4E8',
    text: '#5E270B',
  },
  fonts: {
    primary: 'Poppins, sans-serif',
  },
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Order', href: 'https://fleetwoodbakery.cloudwaitress.com/', isExternal: true },
] as NavigationItem[];
