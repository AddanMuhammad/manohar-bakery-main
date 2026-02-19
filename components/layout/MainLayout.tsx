'use client';

import React, { useState } from 'react';
import TopNavigation from '@/components/layout/TopNavigation';
import Footer from '@/components/layout/Footer';
import Cover from '@/components/common/Cover';
import { MobileNavigation } from '@/components/layout/MobileNavigation';
import bg_pattern from '@/assets/images/sections/bg_pattern.png';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Cover>
      <div className="min-h-screen flex flex-col">
        {/* Top Navigation - Desktop */}
        <div className="bg-primary sticky top-[44px] z-50">
          <div className='hidden md:block'>
            <TopNavigation />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1" style={{ backgroundImage: `url(${bg_pattern.src})`, backgroundSize: '100%', backgroundPosition: 'center' }}>
          {children}
        </main>

        {/* Footer */}
        <div className='border-t-[2px] border-secondary'> 
          <Footer />
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation 
          isOpen={isMobileMenuOpen} 
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        />
      </div>
    </Cover>
  );
};

export default MainLayout;
