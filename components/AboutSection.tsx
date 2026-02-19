'use client';

import React from 'react';
import Image from 'next/image';
import about_page from '@/assets/images/sections/contact_page.png';
import { Button } from '@/components/ui/Button';
import { FiArrowUpRight } from 'react-icons/fi';

export default function AboutSection() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row md:gap-8 gap-4">
        <div className='md:w-1/2 w-full relative'> 
          <div className='w-[100%] md:w-full h-[250px] md:h-full flex items-center justify-center'>
            <Image src={about_page} alt="About" fill className='object-contain' />
          </div>
        </div>
        <div className='md:w-1/2 w-full md:min-h-[500px] text-center flex items-center justify-center'>
          <div className='flex flex-col gap-4 justify-center items-center'>
            <h1 className='text-2xl md:text-4xl font-bold text-secondary'>Why Choose Us</h1>
            <div className='flex flex-col md:gap-3 gap-2 text-start'>
              <div className='flex flex-col'>
                <h3 className='text-xl font-bold'>Local & Fresh:</h3>
                  <p>Everything is baked fresh daily in Fleetwood, Surrey.</p>
              </div>
              <div className='flex flex-col'>
                <h3 className='text-xl font-bold'>Vegetarian & Healthy:</h3>
                  <p>Made with pure, wholesome ingredients for a mindful indulgence.</p>
              </div>
              <div className='flex flex-col'>
                <h3 className='text-xl font-bold'>Custom Creations:</h3>
                  <p>Cakes and treats designed exactly how you want them.</p>
              </div>
              <div className='flex flex-col'>
                <h3 className='text-xl font-bold'>Community Focused:</h3>
                  <p>Your neighbourhood bakery, serving Fleetwood families with love and care.</p>
              </div>
            </div>
            <Button 
              variant='default' 
              size='lg' 
              icon={<FiArrowUpRight />}
              onClick={() => window.open('https://fleetwoodbakery.cloudwaitress.com/', '_blank', 'noopener,noreferrer')}
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
