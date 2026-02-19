'use client'

import React, { useState, useRef, useEffect } from 'react';
import { MenuItem, SizeOption } from "@/types";
import { FaCakeCandles } from "react-icons/fa6";
import { Button } from '@/components/ui/Button';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';



const ProductSizeOptions = ({sizeOptions, setSelectedSize, selectedSize}: {sizeOptions: SizeOption[], setSelectedSize: (size: SizeOption) => void, selectedSize?: SizeOption}) => {
    const sizeContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScrollAvailability = () => {
        const container = sizeContainerRef.current;
        if (!container) return;

        const { scrollLeft, scrollWidth, clientWidth } = container;
        
        // Check if scrolling is possible
        const hasScroll = scrollWidth > clientWidth + 1; // Add 1px threshold for rounding
        
        if (!hasScroll) {
            setCanScrollLeft(false);
            setCanScrollRight(false);
            return;
        }
        
        // Left button: show if we can scroll left (scrollLeft > 0)
        setCanScrollLeft(scrollLeft > 0.5);
        
        // Right button: show if we can scroll right (not at the end)
        // Account for sub-pixel scrolling
        const maxScroll = scrollWidth - clientWidth;
        setCanScrollRight(scrollLeft < maxScroll - 0.5);
    };

    useEffect(() => {
        const container = sizeContainerRef.current;
        if (!container) return;

        // Check immediately
        checkScrollAvailability();
        
        // Multiple checks at different intervals to catch all rendering scenarios
        const timeoutId1 = setTimeout(() => {
            checkScrollAvailability();
        }, 50);

        const timeoutId2 = setTimeout(() => {
            checkScrollAvailability();
        }, 150);

        const timeoutId3 = setTimeout(() => {
            checkScrollAvailability();
        }, 300);

        const timeoutId4 = setTimeout(() => {
            checkScrollAvailability();
        }, 500);

        // Use requestAnimationFrame for more accurate timing
        const rafId1 = requestAnimationFrame(() => {
            checkScrollAvailability();
        });

        const rafId2 = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                checkScrollAvailability();
            });
        });

        container.addEventListener('scroll', checkScrollAvailability);
        window.addEventListener('resize', checkScrollAvailability);
        
        // Use ResizeObserver to detect when container size changes
        const resizeObserver = new ResizeObserver(() => {
            checkScrollAvailability();
        });
        resizeObserver.observe(container);

        return () => {
            clearTimeout(timeoutId1);
            clearTimeout(timeoutId2);
            clearTimeout(timeoutId3);
            clearTimeout(timeoutId4);
            cancelAnimationFrame(rafId1);
            cancelAnimationFrame(rafId2);
            container.removeEventListener('scroll', checkScrollAvailability);
            window.removeEventListener('resize', checkScrollAvailability);
            resizeObserver.disconnect();
        };
    }, [sizeOptions]);

    const scrollSizes = (direction: 'left' | 'right') => {
        const container = sizeContainerRef.current;
        if (!container) return;

        const scrollAmount = 200;
        const newScrollLeft = direction === 'left' 
            ? container.scrollLeft - scrollAmount 
            : container.scrollLeft + scrollAmount;

        container.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });
    };

    return (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Size & Servings
            </h3>
            <div className="flex space-x-2">
              <Button 
                size='icon'
                disabled={!canScrollLeft}
                onClick={() => scrollSizes('left')}
              >
                <BiChevronLeft />
              </Button>
              <Button 
                size='icon'
                disabled={!canScrollRight}
                onClick={() => scrollSizes('right')}
              >
                <BiChevronRight />
              </Button>
            </div>
          </div>
          <div 
            ref={sizeContainerRef}
            className="flex space-x-4 overflow-x-auto py-3 px-2 scrollbar-hide"
          >
            {sizeOptions.map((size, index) => (
              <button
                key={index}
                className={`min-w-[120px] p-4 flex flex-col items-center justify-center gap-2 rounded-3xl shadow-default transition-all hover:scale-105
                  ${selectedSize?.size === size.size ? 'bg-secondary/10 shadow-custom-light' : ''}
                `}
                onClick={() => setSelectedSize(size)}
              >
                <div className="">
                  <span className="font-semibold">{size.size}</span>
                </div>
                <p className="text-sm">{size.label}</p>
                <div className="">
                  <span className="text-lg"><FaCakeCandles /></span>
                </div>
                <p className="text-sm">{size.servings}</p>
              </button>
            ))}
          </div>
        </div>
    )
}

export default ProductSizeOptions;