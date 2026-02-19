'use client';

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


// Custom Arrow Components
export const CustomLeftArrow = ({ onClick, ...rest }: any) => {
    return (
      <button
        onClick={() => onClick()}
        className={`${!rest.resetLocation?' md:left-[-18px] left-[-5px]':'left-[10px]'} absolute top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-primary border border-secondary rounded-full flex items-center justify-center hover:bg-secondary/50`}
        aria-label="Previous slide"
      >
        <FaArrowLeft />
      </button>
    );
  };
  
  export const CustomRightArrow = ({ onClick, ...rest }: any) => {
    return (
      <button
        onClick={() => onClick()}
        className={`${!rest.resetLocation?'md:right-[-18px] right-[-5px]':'right-[10px]'} absolute top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-primary border border-secondary rounded-full flex items-center justify-center hover:bg-secondary/50`}
        aria-label="Next slide"
      >
        <FaArrowRight />
      </button>
    );
  };
  
  // Custom Dot Component - Progress Bar Style
  export const CustomDot = ({ onClick, active, ...rest }: any) => {
    return (
      <button
        onClick={() => onClick()}
        className={`h-1 transition-all duration-300 !mr-0 !ml-0 ${
          active ? 'w-full bg-secondary rounded-full' : 'w-full bg-gray-200 rounded-full'
        } hover:bg-secondary/80`}
        aria-label={`Go to slide ${rest.index + 1}`}
      />
    );
  };
  