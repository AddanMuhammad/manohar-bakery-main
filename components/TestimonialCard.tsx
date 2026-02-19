'use client'

import React from 'react'
import { FaStar } from "react-icons/fa";


// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: any}) => {
    return (
      <div className="rounded-3xl shadow-secondary p-4 m-2 flex-1 flex flex-col relative">
        {/* Name and Rating Row */}
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-amber-900 text-lg">{testimonial.name}</h4>
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FaStar key={i} className="w-5 h-5 text-secondary" />
            ))}
          </div>
        </div>
  
        {/* Testimonial Content */}
        <div className="flex-1">
          <p className="text-amber-900 leading-relaxed">
            {testimonial.content}
          </p>
        </div>
      </div>
    );
  };

export default TestimonialCard