'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

export default function OrderPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-secondary mb-4">Order Online</h1>
          <p className="text-xl text-secondary/80">
            Place your order and we'll have it ready for pickup
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-secondary mb-6 text-center">
              Coming Soon!
            </h2>
            <div className="text-center">
              <div className="w-32 h-32 bg-secondary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
              <p className="text-lg text-secondary/80 mb-8">
                We're working hard to bring you an amazing online ordering experience. 
                In the meantime, please call us or visit our bakery to place your order.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-secondary/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">Call Us</h3>
                  <p className="text-secondary/70 mb-2">(555) 123-4567</p>
                  <p className="text-sm text-secondary/60">Monday - Sunday: 6 AM - 9 PM</p>
                </div>
                
                <div className="bg-secondary/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">Visit Us</h3>
                  <p className="text-secondary/70 mb-2">123 Bakery Street</p>
                  <p className="text-sm text-secondary/60">City, State 12345</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-secondary">What to expect:</h3>
                <ul className="text-left max-w-md mx-auto space-y-2 text-secondary/80">
                  <li className="flex items-center">
                    <span className="text-secondary mr-2">✓</span>
                    Browse our full menu online
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-2">✓</span>
                    Customize your orders
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-2">✓</span>
                    Schedule pickup times
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-2">✓</span>
                    Track your order status
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-2">✓</span>
                    Save your favorites
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <button className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary/90 transition-colors mr-4">
                  Call Now
                </button>
                <button className="border border-secondary text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-white transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
