'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { testimonials } from '@/assets/staticData/testimonialData';
import TestimonialCard from '@/components/TestimonialCard';
import { CustomLeftArrow, CustomRightArrow, CustomDot } from '@/components/ui/CarousalCustomItems';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

const TestimonialSection = () => {
  return (
    <div className="">
      <h2 className='md:text-4xl text-2xl font-bold text-center mb-6'>Trusted Tastes, Verified Reviews</h2>
      
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
          itemClass="w-fit flex px-6"
          dotListClass="flex justify-center space-x-1 mt-8"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          customDot={<CustomDot />}
          partialVisible={false}
          centerMode={false}
          focusOnSelect={false}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialSection;