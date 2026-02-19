import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from '@/types';
import { Button } from '@/components/ui/Button';
import { FiArrowUpRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: MenuItem;
  // onOrderClick?: (product: MenuItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  return (
    <div className="rounded-3xl bg-[#ffffff12] p-4 h-fit shadow-custom-light hover:shadow-default hover:scale-105 transition-all duration-300">
      {/* Product Image - Clickable to detail page */}
      <Link href={`/menu/${product.id}`}>
        <div className="relative w-[150px] md:w-[280px] h-[150px] md:h-[280px] mx-auto mb-4 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
          <Image
            src={product.image || '/images/placeholder-cake.jpg'}
            alt={product?.name || ''}
            fill
            className="object-contain"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex flex-col gap-2 justify-center items-center w-[90%] mx-auto text-center">
        {product?.name && <Link href={`/menu/${product.id}`}>
          <h3 className="text-lg font-bold text-secondary capitalize hover:text-secondary/80 transition-colors cursor-pointer">
            {product?.name}
          </h3>
        </Link>}
        {product?.category === 'designer-cakes' && <Link href={`/menu/${product.id}`}>
          <h3 className="text-lg font-bold text-secondary capitalize hover:text-secondary/80 mt-4 transition-colors cursor-pointer">
            Designer Cake
          </h3>
        </Link>}
        
        {product?.description && <p className="text-sm text-secondary/70 leading-relaxed">
          {product?.description.length > 50 ? product?.description.substring(0, 50)
          : product?.description}
          {product?.description.length > 50 && <Link href={`/menu/${product.id}`} className="text-secondary/70 hover:text-secondary/80 transition-colors cursor-pointer">
             ... Read More
            </Link>}
        </p>}
        {!product?.description && product?.detailedDescription && <p className="text-sm text-secondary/70 leading-relaxed">
          {product?.detailedDescription.length > 50 ? product?.detailedDescription.substring(0, 50)
          : product?.detailedDescription}
          {product?.detailedDescription.length > 50 && <Link href={`/menu/${product.id}`} className="text-secondary/70 hover:text-secondary/80 transition-colors cursor-pointer">
             ... Read More
            </Link>}
        </p>}

        {/* Order Button */}
        <div className="flex items-center justify-center">
          <Button
            variant="default"
            size="lg"
            className="mt-4"
            onClick={() => router.push(`/menu/${product.id}`)}
            icon={<FiArrowUpRight />}
            >
            ORDER NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
