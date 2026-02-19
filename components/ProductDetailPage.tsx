'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { MenuItem, SizeOption, IceCreamFlavor } from '@/types';
import { Button } from '@/components/ui/Button';
import { BiChevronLeft, BiChevronRight, BiPlus, BiMinus, BiArrowBack } from 'react-icons/bi';
import Image from 'next/image';
import { CustomLeftArrow, CustomRightArrow, CustomDot } from '@/components/ui/CarousalCustomItems';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductSizeOptions from './ProductSizeOptions';
import { FiArrowUpRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { menuData } from '@/assets/staticData/menuData';


interface ProductDetailPageProps {
  product: MenuItem;
}

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 3,
      slidesToSlide: 1
    }
};


const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(
    product.sizeOptions?.[0] || null
  );
  const [selectedFlavors, setSelectedFlavors] = useState<IceCreamFlavor[]>([]);
  const [expandedSections, setExpandedSections] = useState<{
    description: boolean;
    allergens: boolean;
    clickAndCollect: boolean;
  }>({
    description: false,
    allergens: false,
    clickAndCollect: false,
  });

  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || product.image);
  const addonsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const images = product.images || (product.image ? [product.image] : []);
  const currentPrice = selectedSize?.price || product.price;

  // Get suggested products from the same category (excluding current product)
  const suggestedProducts = useMemo(() => {
    if (product.addons && product.addons.length > 0) {
      return [];
    }
    return menuData.filter(
      item => item.category === product.category && item.id !== product.id && item.isAvailable
    ).slice(0, 10); // Limit to 10 suggestions
  }, [product.category, product.id, product.addons]);


  const handleFlavorToggle = (flavor: IceCreamFlavor) => {
    if (selectedFlavors.find(f => f.id === flavor.id)) {
      setSelectedFlavors(selectedFlavors.filter(f => f.id !== flavor.id));
    } else if (selectedFlavors.length < 2) {
      setSelectedFlavors([...selectedFlavors, flavor]);
    }
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const checkScrollAvailability = () => {
    const container = addonsContainerRef.current;
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
    const container = addonsContainerRef.current;
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
    
    // Also check when images load
    const images = container.querySelectorAll('img');
    if (images.length > 0) {
      const imageLoadPromises = Array.from(images).map((img) => {
        if ((img as HTMLImageElement).complete) {
          return Promise.resolve();
        }
        return new Promise((resolve) => {
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', resolve, { once: true });
        });
      });
      
      Promise.all(imageLoadPromises).then(() => {
        setTimeout(checkScrollAvailability, 50);
      });
    }

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
  }, [product.addons, suggestedProducts]);

  const scrollAddons = (direction: 'left' | 'right') => {
    const container = addonsContainerRef.current;
    if (!container) return;

    const scrollAmount = 50;
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Product Images */}
          <div className="space-y-6 relative">
            <Button 
              variant='default' 
              icon={<BiArrowBack />}
              iconPosition='left'
              className='absolute top-0'
              size='lg'
              onClick={() => router.push(`/menu?category=${product.category.toLowerCase()}`)}> 
              Back
            </Button>
            {/* Main Product Image */}
            <div className="relative w-full mx-auto aspect-square rounded-2xl overflow-hidden">
                {selectedImage && (
                    <Image
                        src={selectedImage}
                        alt={product?.name || ''}
                        fill
                        className="object-contain"
                    />
                )}
            </div>

            <Carousel
            swipeable={true}
            draggable={true}
            //   showDots={true}
            responsive={responsive}
            ssr={false}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            containerClass=" pb-6"
            itemClass="w-fit flex px-3"
            //   dotListClass="flex justify-center space-x-1 mt-8"
            customLeftArrow={<CustomLeftArrow resetLocation={true} />}
            customRightArrow={<CustomRightArrow resetLocation={true} />}
            //   customDot={<CustomDot />}
            partialVisible={false}
            centerMode={false}
            focusOnSelect={false}
            >
            {images.map((image, index) => (
                <div
                key={index}
                className="relative aspect-square w-full rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setSelectedImage(image)}
                >
                    <Image
                        src={image}
                        alt={`${product?.name || ''} ${index + 1}`}
                        fill
                        className="object-contain"
                    />
                </div>
                ))}
            </Carousel>
          </div>

          {/* Right Section - Product Details */}
          <div className="space-y-8">
            {/* Product Title and Price */}
            <div>
              {product?.name && <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product?.name}
              </h1>}
              {currentPrice && <p className="text-2xl font-bold text-gray-900">
                ${currentPrice}
              </p>}
            </div>

            {/* Size & Servings */}
            {product.sizeOptions && product.sizeOptions.length > 0 && (
              <ProductSizeOptions sizeOptions={product.sizeOptions} setSelectedSize={setSelectedSize} selectedSize={selectedSize || product.sizeOptions[0]} />
            )}

            {/* Addons or Suggested Products */}
            {(product.addons && product.addons.length > 0) || (suggestedProducts.length > 0) ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.addons && product.addons.length > 0 ? 'Choose Addons' : 'More Options'}
                  </h3>
                  <div className="flex space-x-2">
                    <Button 
                      size='icon'
                      disabled={!canScrollLeft}
                      onClick={() => scrollAddons('left')}
                    >
                      <BiChevronLeft />
                    </Button>
                    <Button 
                      size='icon'
                      disabled={!canScrollRight}
                      onClick={() => scrollAddons('right')}
                    >
                      <BiChevronRight />
                    </Button>
                  </div>
                </div>
                <div 
                  ref={addonsContainerRef}
                  id="addons-container" 
                  className="flex space-x-4 overflow-x-auto p-2 scrollbar-hide"
                >
                  {product.addons && product.addons.length > 0 ? (
                    product.addons.map((flavor) => (
                      <button
                        key={flavor.id}
                        // onClick={() => handleFlavorToggle(flavor)}
                        disabled={!flavor.isAvailable || (!selectedFlavors.find(f => f.id === flavor.id) && selectedFlavors.length >= 2)}
                        className={`flex flex-col items-center space-y-2 p-3 rounded-3xl shadow-default transition-all min-w-[120px] ${
                          selectedFlavors.find(f => f.id === flavor.id)
                            ? 'border-secondary bg-secondary/5'
                            : flavor.isAvailable
                            ? ''
                            : 'opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <div className="w-20 h-20 flex items-center justify-center relative">
                          <Image
                            src={flavor.image}
                            alt={flavor.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-secondary text-center">{flavor.name}</span>
                      </button>
                    ))
                  ) : (
                    suggestedProducts.map((suggestedProduct) => (
                      <button
                        key={suggestedProduct.id}
                        onClick={() => router.push(`/menu/${suggestedProduct.id}`)}
                        className="flex flex-col items-center space-y-2 p-3 rounded-3xl border-[1.5px] border-[#fffffff2] shadow-default transition-all min-w-[120px] border-gray-200 hover:border-secondary hover:bg-secondary/5 cursor-pointer"
                      >
                        <div className="w-20 h-20 flex items-center justify-center relative">
                          <Image
                            src={suggestedProduct.image || '/images/placeholder-cake.jpg'}
                            alt={suggestedProduct.name || ''}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-secondary text-center">{suggestedProduct.name}</span>
                      </button>
                    ))
                  )}
                </div>
              </div>
            ) : null}

            {/* Order Now Button */}
            <div className="flex items-center justify-end">
                <Button
                variant="default"
                size="lg"
                icon={<FiArrowUpRight />}
                onClick={() => window.open('https://fleetwoodbakery.cloudwaitress.com/', '_blank', 'noopener,noreferrer')}
                >
                ORDER NOW
                </Button>
            </div>

            {/* Collapsible Sections */}
            <div className="space-y-4">
              {/* Description */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection('description')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-semibold text-gray-900">Description</span>
                  <BiPlus className={`w-5 h-5 transition-transform ${expandedSections.description ? 'rotate-45' : ''}`} />
                </button>
                {expandedSections.description && (
                  <div className="pb-4 text-gray-600">
                    {product.detailedDescription || product?.description}
                  </div>
                )}
              </div>

              {/* Allergens */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection('allergens')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-semibold text-gray-900">Allergens</span>
                  <BiPlus className={`w-5 h-5 transition-transform ${expandedSections.allergens ? 'rotate-45' : ''}`} />
                </button>
                {expandedSections.allergens && (
                  <div className="pb-4 text-gray-600">
                    {product.allergens && product.allergens.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {product.allergens.map((allergen, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                          >
                            {allergen}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p>No allergens listed</p>
                    )}
                  </div>
                )}
              </div>

              {/* Click & Collect */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection('clickAndCollect')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-semibold text-gray-900">Click & Collect</span>
                  <BiPlus className={`w-5 h-5 transition-transform ${expandedSections.clickAndCollect ? 'rotate-45' : ''}`} />
                </button>
                {expandedSections.clickAndCollect && (
                  <div className="pb-4 text-gray-600">
                    {product.clickAndCollectInfo || (
                      <div>
                        <p className="mb-2">Available for pickup at our store location.</p>
                        <p className="text-sm text-gray-500">
                          Please allow 24-48 hours for preparation. We'll notify you when your order is ready for pickup.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
