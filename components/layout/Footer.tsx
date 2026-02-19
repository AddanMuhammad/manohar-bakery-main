"use client";

import React from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import SocialLinks from "../SocialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto px-2 md:px-4">
      <div className="py-12 flex flex-col md:flex-row items-center md:gap-16 gap-6">
        <div className="md:w-4/12 w-full md:max-w-[450px] flex flex-col gap-8 text-center md:text-left">
          <div className="mx-auto md:mx-0">
            <Image src={Logo} alt="Logo" width={100} height={100} />
          </div>
          <p>
            <span className="font-bold">Order Your Cake Today </span> –
            Celebrate in style with Manohar Bakery, Fleetwood. Walk in or call
            us to explore our full range of fresh breads, snacks, cookies, and
            pastries.
          </p>
          <SocialLinks size="md" className="mx-auto md:mx-0" />
        </div>

        <div className="md:w-2/12 w-full">
          <h3 className="font-semibold">Quicks</h3>
          <div className="flex flex-row flex-wrap md:flex-col gap-4 md:gap-2 md:mt-6 mt-2">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/blogs">Blogs</Link>
          </div>
        </div>

        <div className="md:w-4/12 w-full text-center md:text-left">
          <h3 className="font-semibold">Cake Flavours</h3>
          <div className="flex justify-center md:justify-start gap-10">
            <div className="flex flex-col gap-2 md:mt-6 mt-2">
              <Link href="/menu/8">Oreo</Link>
              <Link href="/menu/12">Pista</Link>
              <Link href="/menu/5">Mango</Link>
              <Link href="/menu/2">Vanilla</Link>
              <Link href="/menu/3">Chocolate</Link>
              <Link href="/menu/10">Rasmalai</Link>
            </div>
            <div className="flex flex-col gap-2 md:mt-6 mt-2">
              <Link href="/menu/9">Pineapple</Link>
              <Link href="/menu/6">Strawberry</Link>
              <Link href="/menu/11">Red Velvet</Link>
              <Link href="/menu/1">Mixed Fruit</Link>
              <Link href="/menu/4">Black Forest</Link>
              <Link href="/menu/7">Butter Scotch</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center text-sm text-secondary py-2 md:mb-0 mb-16">
        <p className="text-gray-400">
          Copyright © 2025 All rights reserved. Powered by{" "}
          <Link
            href="https://easytoscale.com/"
            className="hover:text-secondary"
          >
            Easy To Scale Inc.
          </Link>
        </p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-secondary">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-secondary">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
