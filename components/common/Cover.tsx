'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import cover_image from '@/assets/images/sections/cover_page.png';
import logo from '@/public/images/logo.png';
import { Button } from '../ui/Button';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

interface CoverProps {
  children: React.ReactNode;
}

const Cover: React.FC<CoverProps> = ({ children }) => {
  const [showCover, setShowCover] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const pathname = usePathname();

  useEffect(() => {
    // Only show cover on home page
    if (pathname === '/') {
      setShowCover(true);
    } else {
      setShowCover(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (!showCover) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setShowCover(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showCover]);

  if (!showCover) {
    return <>{children}</>;
  }

  return (
    <div className='w-full h-[45px] bg-primary fixed top-0 left-0 right-0 z-50'>
    <div className='container mx-auto fixed inset-0 z-50 bg-primary '>
      <div className='w-2/12 mx-auto mt-4'>
        <Image src={logo} alt="logo" width={150} height={150} className='object-cover' />
      </div>
      <div className="flex items-center justify-center flex-col-reverse md:flex-row">
        <div className='w-full md:w-1/2 md:px-8 px-4 flex flex-col gap-4 md:gap-6'>
          <h1 className='text-4xl lg:text-8xl font-bold text-center md:text-left'>Welcome To Manohar Bakery</h1>
          <p>Your local Fleetwood bakery, baking fresh daily. We specialize in pure vegetarian, eggless treats made with wholesome ingredients. From custom cakes to your daily bread, every bite is crafted with care for our community.</p>
          
          <div className='flex flex-col items-center md:items-start md:flex-row gap-4'>
            <Link href='/menu'>
              <Button variant='default' size='lg' className='w-full md:w-auto' icon={<FiArrowUpRight />}>Order Now</Button>
            </Link>
            <Button variant='primary' size='lg' icon={<FiArrowUpRight />} onClick={() => setCountdown(0)}>Go to Home</Button>
          </div>
        </div>

        <div className='w-[50%] md:w-1/2'>
          <Image src={cover_image} alt="Cover" width={1000} height={1000} className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cover;
