import React, { Suspense } from "react";
import MainLayout from "@/components/layout/MainLayout";
import MenuPageContent from "@/components/MenuPageContent";
import { menuCategories } from "@/assets/staticData/menuData";

function MenuPageLoading() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <h3 className="text-sm font-semibold text-secondary">OUR MENU</h3>
          </div>
          <div className="flex items-center justify-center mb-8">
            <p className="text-secondary/70">Loading...</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<MenuPageLoading />}>
      <MenuPageContent />
    </Suspense>
  );
}
