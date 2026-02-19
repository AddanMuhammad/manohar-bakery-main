'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import ProductDetailPage from '@/components/ProductDetailPage';
import { menuData } from '@/assets/staticData/menuData';
import { notFound } from 'next/navigation';
import BestSeller from '@/components/BestSeller';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  
  const product = menuData.find(item => item.id === productId);
  
  if (!product) {
    notFound();
  }

  return (
    <MainLayout>
      <ProductDetailPage product={product} />
      <div className="container mx-auto px-4 py-8">
        <BestSeller title='You May Also Like'/>
      </div>
    </MainLayout>
  );
}
