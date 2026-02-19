"use client";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import AboutSection from "@/components/AboutSection";
import BestSeller from "@/components/BestSeller";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Best Seller Section */}
        <BestSeller title="Best Selling" />

        {/* About Section */}
        <AboutSection />

        {/* Testimonial Section */}
        <TestimonialSection />

        {/* Faq Section */}
        <FaqSection />
      </div>
    </MainLayout>
  );
}
