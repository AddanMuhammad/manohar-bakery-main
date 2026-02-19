'use client';

import React, { useState } from 'react';
import { faqData } from '@/assets/staticData/faqData';
import { FAQItem } from '@/types';
import faq_page from '@/assets/images/sections/about_page.png';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<FAQItem | null>(faqData[0]!); // First item open by default

  const toggleItem = (item: FAQItem) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className='container mx-auto px-0 md:px-4 py-8 flex flex-col md:flex-row md:gap-8 gap-4'>
        <div className='md:w-5/12 w-full flex flex-col md:gap-6 gap-2'>
            <h2 className='md:text-4xl text-2xl text-center md:text-left font-bold text-secondary mb-4'>Frequently Asked Questions</h2>
            <div>
                <p>Can&apos;t find the answer you&apos;re looking for? Reach out to our team anytime at </p>
                <a href="mailto:Fleetwoodbakery@gmail.com" className='font-semibold italic'>Fleetwoodbakery@gmail.com</a>
            </div>

            <div className='w-full h-[400px] relative rounded-lg overflow-hidden'>
              <Image src={faq_page} alt="Faq" fill className='object-contain' />
            </div>
        </div>
        <div className='md:w-1/12 w-full'></div>
        <div className='md:w-6/12 w-full'>
            <div className='space-y-4'>
              {faqData.map((item) => (
                <div 
                  key={item.id}
                  className='rounded-xl shadow-secondary overflow-hidden transition-all duration-300'
                >
                  <button
                    onClick={() => toggleItem(item)}
                    className='w-full md:px-6 px-2 md:py-4 py-3 text-left flex justify-between items-center hover:bg-secondary/30 transition-colors duration-200'
                  >
                    <h3 className='md:text-lg text-sm font-semibold pr-2 md:pr-4'>
                      {item.question}
                    </h3>
                    <div className=''>
                      <FiChevronDown className={`md:w-5 md:h-5 w-4 h-4 transition-transform duration-300 ${
                          openItem?.id === item.id ? 'rotate-180' : ''
                        }`} />
                    </div>
                  </button>
                  {openItem?.id === item.id && (
                    <div className='px-6 pb-4'>
                      <p className='leading-relaxed'>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
        </div>
    </div>
  );
}

export default FaqSection;
