"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch, FaBars } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Button } from "@/components/ui/Button";

export default function TopNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    {
      href: "https://fleetwoodbakery.cloudwaitress.com/",
      label: "Order Now",
      isExternal: true,
    },
  ];

  return (
    <>
      <header className="container mx-auto bg-primary">
        <div className="flex justify-center lg:justify-between items-center px-4 py-3">
          {/* Left Navigation - Desktop Only */}
          <div className="mr-4 hidden md:flex w-[40%]">
            <nav className="flex items-center gap-4 text-md font-medium">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    className={`transition-colors text-secondary border-b-2 ${
                      isActive ? "border-secondary" : "border-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center w-[20%]">
            <Image src={Logo} alt="Logo" width={100} height={100} />
          </div>

          <div className="w-[40%] flex justify-end">
            <Button variant="default" icon={<FiPhoneCall />}>
              <Link href="tel:+16045910699">Call Now</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {/* <MobileNavigation 
        isOpen={isMobileMenuOpen} 
        onToggle={toggleMobileMenu} 
      /> */}
    </>
  );
}
