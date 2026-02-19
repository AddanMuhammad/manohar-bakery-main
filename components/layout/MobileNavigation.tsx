'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaEnvelope, FaHome, FaUtensils, FaInfoCircle, FaPhone, FaShoppingCart } from 'react-icons/fa';
import { FaPhoneVolume } from "react-icons/fa6";

import { Button } from '@/components/ui/Button';
import { NAVIGATION_ITEMS } from '@/lib/constants';

interface MobileNavigationProps {
  isOpen: boolean;
  onToggle: () => void;
}

const iconMap = {
  'Home': FaHome,
  'Menu': FaUtensils,
  'About': FaInfoCircle,
  'Contact': FaEnvelope,
  'Order': FaShoppingCart,
};

export function MobileNavigation({ isOpen, onToggle }: MobileNavigationProps) {
  const pathname = usePathname();
  
  const navigationItems = NAVIGATION_ITEMS.map(item => ({
    ...item,
    icon: iconMap[item.name as keyof typeof iconMap] || FaHome
  }));

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/50 border-t border-white/10">
        <div className="flex justify-between items-center py-3 px-4">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                target={item.isExternal ? '_blank' : '_self'}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  isActive 
                    ? 'text-secondary font-semibold' 
                    : 'text-primary hover:text-secondary font-medium'
                }`}
                onClick={() => onToggle()}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.name}</span>
              </Link>
            );
          })}
          {/* <Button variant='primary' size='icon' className='' icon={<FaPhoneVolume className='ml-0' />}> */}
            <Link href='tel:+16045910699' className={`flex flex-col items-center space-y-1 transition-colors ${ 
                'text-primary font-semibold' }`}
              onClick={() => onToggle()}
            >
              <FaPhoneVolume className="w-5 h-5" />
              <span className="text-xs">Call</span>
            </Link>
          {/* </Button> */}
        </div>
      </div>
    </>
  );
} 