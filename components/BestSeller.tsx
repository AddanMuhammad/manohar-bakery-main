'use client';

import React from 'react';
import { menuData } from '@/assets/staticData/menuData';
import ProductCard from './ProductCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomLeftArrow, CustomRightArrow, CustomDot } from '@/components/ui/CarousalCustomItems';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
};

const BestSeller = ({title}: {title: string}) => {
  return (
    <div className='py-12'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
            <h2 className='text-2xl md:text-4xl font-bold text-secondary mb-4'>{title}</h2>
            <Link href='/menu' className='flex items-center gap-1 underline underline-offset-4 font-semibold'>View Collection <FaArrowRight /></Link>
        </div>

        <div className="px-[1.5%] overflow-hidden">
            <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={false}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            containerClass="custom-carousel pb-6"
            itemClass="w-fit px-8"
            dotListClass="flex justify-center space-x-1 mt-8"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            customDot={<CustomDot />}
            partialVisible={false}
            centerMode={false}
            focusOnSelect={false}
            >
            {menuData.filter(item => item.category !== 'designer-cakes').sort(() => Math.random() - 0.5).slice(0, 10).map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </Carousel>
        </div>
    </div>
  );
};

export default BestSeller;