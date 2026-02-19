'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import TestimonialSection from '@/components/TestimonialSection';
import about_page from '@/assets/images/sections/about_page.png';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { FiArrowUpRight } from 'react-icons/fi';
// import { FaCheck } from 'react-icons/fa';
import { FaLongArrowAltRight } from "react-icons/fa";


export default function AboutPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 flex md:flex-row flex-col gap-8">
        <div className='md:w-1/2 w-full relative'> 
          <div className='w-full md:h-full h-[300px] flex items-center justify-center'>
            <Image src={about_page} alt="About" fill className='object-contain' />
          </div>
        </div>
        <div className='md:w-1/2 w-full md:min-h-[500px] text-center flex items-center justify-center'>
          <div className='flex flex-col gap-4 justify-center items-center'>
            <h1 className='md:text-4xl text-2xl font-bold text-secondary'>About Us</h1>
            <p>
              At Manohar Bakery Fleetwood, every treat is crafted to bring delight. As a proud part of the Fleetwood community in Surrey, 
              we bake fresh every day using quality ingredients and recipes that highlight both tradition and creativity.
            </p>
            <p>
              From custom celebration cakes designed just for your special moments, to breads, cookies, and pastries perfect for everyday 
              enjoyment — everything is made in-house by our skilled bakers. We’re here to make every visit and every bite truly memorable.
            </p>
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

      <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
        <h1 className='md:text-4xl text-2xl font-bold text-secondary text-center'>Our Offerings</h1>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='md:w-1/3 w-full shadow-default rounded-lg p-6 flex flex-col gap-2'>
            <h3 className='text-2xl font-bold text-secondary'>Custom Cakes & Celebration Treats</h3>
            <p className='flex items-start gap-2'><FaLongArrowAltRight />Birthday cakes, anniversary cakes, wedding cakes, and more</p>
            <p className='flex items-start gap-2'><FaLongArrowAltRight />Personalized designs, flavours, and sizes to make your occasion special</p>
            <p className='flex items-start gap-2'><FaLongArrowAltRight />Fresh, delicious, and beautifully decorated for any celebration</p>
          </div>
          <div className='md:w-1/3 w-full shadow-default rounded-lg p-6 flex flex-col gap-2'>
            <h3 className='text-2xl font-bold text-secondary'>Breads & Snacks</h3>
            <p className='flex items-start gap-2'><FaLongArrowAltRight />Freshly baked breads, buns, rusks, and Indian-style snacks</p>
            <p className='flex items-start gap-2'><FaLongArrowAltRight />Perfect for breakfast, tea-time, or anytime cravings</p>
            <p className='flex items-start gap-2'><FaLongArrowAltRight />Made with wholesome ingredients and love</p>
          </div>
          <div className='md:w-1/3 w-full shadow-default rounded-lg p-6 flex flex-col gap-2'>
            <h3 className='text-2xl font-bold text-secondary'>Cookies, Muffins & Pastries</h3>
            <p className='flex items-start gap-2'><FaLongArrowAltRight />A wide variety of cookies, including pista, almond, and more</p>
            <p className='flex items-start gap-2'><FaLongArrowAltRight />Muffins in flavours like banana, blueberry, and carrot</p>
            <p className='flex items-start gap-2'><FaLongArrowAltRight />Flaky pastries baked fresh daily</p>
          </div>
        </div>
      </div>
    
    </MainLayout>
  );
}
