'use client';

import React, { useState, useMemo } from 'react';
import { Button } from './ui/Button';
import { menuData } from '@/assets/staticData/menuData';
import Image from 'next/image';
import { MenuItem } from '@/types';
import SocialLinks from './SocialLinks';
import { FiArrowUpRight } from "react-icons/fi";


const HeroSection = () => {
    // Get 4 random products from designer-cakes category
    const designerCakes = useMemo(() => {
        const designerProducts = menuData
            .filter((item) => item.category === 'designer-cakes' && item.isAvailable)
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);
        return designerProducts;
    }, []);

    const [activeItem, setActiveItem] = useState<MenuItem | null>(designerCakes[0] || null);

    // Early return if no designer cakes available
    if (!designerCakes.length || !activeItem) {
        return null;
    }

    return (
        <div>
            <div className='flex md:flex-row flex-col gap-4'>
                <div className='md:text-5xl text-3xl font-bold md:w-[50%] w-full text-center md:text-left'>
                    <h1>Crafted with Love</h1>
                    <h1>Baked to Perfection</h1>
                </div>
                <div className='md:w-[50%] w-full flex items-center justify-end'>
                    <p className='max-w-[450px] md:text-xl text-sm md:text-end text-center'>Art you can taste, designs you’ll admire.
                        From birthdays to weddings, we turn every occasion into a sweet memory.
                    </p>
                </div>
            </div>

            <div className='flex gap-4 mt-4'>
                <div className='w-2/12 flex flex-col gap-4 items-start justify-center'>
                    {
                        designerCakes.map((item) => (
                            <div key={item.id} className={`${item.id === activeItem.id ? '' : 'opacity-50'} text-center cursor-pointer`} onClick={() => setActiveItem(item)}>
                                <div>
                                    <Image src={item.image || ''} alt={item?.name || ''} width={100} height={100} />
                                </div>
                                <div>
                                    {/* <h1>{item.name}</h1> */}
                                </div>
                            </div>
                        ))
                    }
                    
                </div>

                <div className='w-8/12'>
                    <div className='w-full h-full flex items-center justify-center relative'>
                        <Image src={activeItem.image || ''} alt={activeItem?.name || ''} fill className='object-contain' />
                    </div>
                </div>

                <div className='w-2/12 flex flex-col gap-4 items-end'>
                    <SocialLinks vertical={true} size='md' className='flex-1 flex justify-center' />
                </div>
            </div>
            <div className='flex justify-end'>
                <Button 
                  variant='default' 
                  size='lg' 
                  icon={<FiArrowUpRight />} 
                  className='text-sm'
                  onClick={() => window.open('https://fleetwoodbakery.cloudwaitress.com/', '_blank', 'noopener,noreferrer')}
                >
                    Order Now
                </Button>
            </div>
        </div>
    );
};

export default HeroSection; 