"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "My Work", href: "/services" },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full mt-[33px]">
      <div className="h-[47px] container mx-auto flex justify-between">
        {/* Logo */}
        <div className="flex items-end justify-end">
          <Image src={'/image/Brand-logo-white.svg'} width={125} height={22} alt="Brand-Logo"/>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 md:items-center uppercase">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-secondary-white opacity-50 hover:opacity-100"
            >
              <span>{item.label}</span>
            </Link>
          ))}
          <Link href={'/contact'} className="ring-1 ring-brand h-full w-[138px] rounded-full flex items-center justify-center"> <span>Contacts</span> </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute w-full md:hidden bg-gray-50 border-t border-gray-200">
          <div className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 font-medium transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
