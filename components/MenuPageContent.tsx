"use client";

import React, { useState, useMemo, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import ProductCard from "@/components/ProductCard";
import {
  menuData,
  menuCategories,
  sortOptions,
} from "@/assets/staticData/menuData";
import { Button } from "@/components/ui/Button";
import { BiChevronLeft, BiChevronRight, BiSortAlt2 } from "react-icons/bi";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function MenuPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const categoryFromUrl = searchParams.get("category");

  // Validate category from URL - must match one of the menu category IDs
  const validCategoryIds = menuCategories.map((cat) => cat.id);
  const isValidCategory =
    categoryFromUrl && validCategoryIds.includes(categoryFromUrl);
  const initialCategory = isValidCategory ? categoryFromUrl : "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Update selected category when URL param changes
  useEffect(() => {
    if (categoryFromUrl) {
      if (validCategoryIds.includes(categoryFromUrl)) {
        setSelectedCategory(categoryFromUrl);
        setCurrentPage(1);
      } else {
        // Invalid category in URL, redirect to menu without category
        router.push(pathname);
        setSelectedCategory("all");
        setCurrentPage(1);
      }
    }
  }, [categoryFromUrl, router, pathname]);

  // Update URL when category changes
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    // Update URL with category query param
    if (categoryId === "all") {
      router.push(pathname);
    } else {
      router.push(`${pathname}?category=${categoryId}`);
    }
  };
  const [sortBy, setSortBy] = useState("top-rated");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = menuData;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === selectedCategory,
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => {
          const priceA =
            parseFloat(a?.price?.replace(/[^0-9.]/g, "") || "") || 0;
          const priceB =
            parseFloat(b?.price?.replace(/[^0-9.]/g, "") || "") || 0;
          return priceA - priceB;
        });
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => {
          const priceA =
            parseFloat(a?.price?.replace(/[^0-9.]/g, "") || "") || 0;
          const priceB =
            parseFloat(b?.price?.replace(/[^0-9.]/g, "") || "") || 0;
          return priceB - priceA;
        });
        break;
      case "name-a-z":
        filtered = [...filtered].sort((a, b) => {
          const nameA = a.name || "";
          const nameB = b.name || "";
          return nameA.localeCompare(nameB);
        });
        break;
      case "name-z-a":
        filtered = [...filtered].sort((a, b) => {
          const nameA = a.name || "";
          const nameB = b.name || "";
          return nameB.localeCompare(nameA);
        });
        break;
      default:
        // Top rated (default) - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }

    return pages.map((page, index) => (
      <button
        key={index}
        onClick={() => typeof page === "number" && handlePageChange(page)}
        disabled={page === "..."}
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
          page === currentPage
            ? "bg-secondary/20 text-secondary"
            : page === "..."
              ? "text-secondary/50 cursor-default"
              : "text-secondary/70 hover:text-secondary hover:bg-secondary/10"
        }`}
      >
        {page}
      </button>
    ));
  };

  return (
    <MainLayout>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="text-center mb-6">
            <h3 className="text-sm font-semibold text-secondary">OUR MENU</h3>
          </div>

          {/* Filters and Sort */}
          <div className="flex items-center justify-center mb-8 gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-4 justify-center">
              {menuCategories.map((category) => (
                <Button
                  variant="secondary"
                  size="lg"
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium bg-transparent ${
                    selectedCategory === category.id ? "bg-secondary/10" : ""
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-4">
            {/* Results Count */}
            <div className="">
              <p className="text-sm text-secondary/70">
                {startIndex + 1}-
                {Math.min(endIndex, filteredAndSortedProducts.length)} of{" "}
                {filteredAndSortedProducts.length} items
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                {" "}
                <BiSortAlt2 /> SORT BY:
              </span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-primary text-sm text-gray-500 focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages >= 1 && (
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center text-secondary/70 hover:text-secondary hover:bg-secondary/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <BiChevronLeft className="w-6 h-6" />
              </button>

              {renderPagination()}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full flex items-center justify-center text-secondary/70 hover:text-secondary hover:bg-secondary/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <BiChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
