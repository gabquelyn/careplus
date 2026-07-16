"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const services = [
    {
      name: "Home Care",
      href: "/home-care",
      desc: "Assistance with daily living activities.",
    },
    {
      name: "Live-in Care",
      href: "/live-in-care",
      desc: "Emotional support and companionship.",
    },
    {
      name: "Specialized Care",
      href: "/specialized-care",
      desc: "Specialized cognitive support.",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-charcoal/5 bg-off-white font-sans text-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}

          <Image src="/assets/logo.png" height={90} width={130} alt="logo" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-semibold hover:text-teal transition-colors duration-200"
            >
              Home
            </Link>

            {/* Our Services Dropdown Container (Hover Trigger) */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-sm font-semibold hover:text-teal transition-colors duration-200 focus:outline-none">
                Our Services
                <svg
                  className="h-4 w-4 text-war-grey group-hover:text-teal group-hover:rotate-180 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-1/2 z-10 mt-2 w-80 -translate-x-1/12 translate-y-2 opacity-0 invisible group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out">
                <div className="rounded-xl border border-charcoal/5 bg-white p-4 shadow-xl ring-1 ring-black/5">
                  <div className="grid gap-4">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="group/item block rounded-lg p-2 hover:bg-soft-teal transition-colors duration-200"
                      >
                        <p className="text-sm font-semibold text-charcoal group-hover/item:text-teal">
                          {service.name}
                        </p>
                        <p className="mt-0.5 text-xs text-war-grey">
                          {service.desc}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-sm font-semibold hover:text-teal transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/care-journey"
              className="text-sm font-semibold hover:text-teal transition-colors duration-200"
            >
              Care journey
            </Link>
            <Link
              href="/resources"
              className="text-sm font-semibold hover:text-teal transition-colors duration-200"
            >
              Resources
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="rounded-lg bg-coral px-5 py-2.5 text-sm font-semibold text-off-white shadow-md shadow-coral/20 hover:bg-coral/95 transition-all duration-200"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-charcoal hover:bg-soft-teal focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-charcoal/5 bg-off-white px-4 py-4 space-y-3 shadow-inner">
          <a
            href="#"
            className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-soft-teal hover:text-teal transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>

          {/* Mobile Dropdown Menu Accordion */}
          <div>
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold hover:bg-soft-teal hover:text-teal transition-colors focus:outline-none"
            >
              Our Services
              <svg
                className={`h-5 w-5 text-war-grey transform transition-transform duration-200 ${isMobileDropdownOpen ? "rotate-180 text-teal" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isMobileDropdownOpen && (
              <div className="mt-1 ml-4 border-l border-teal/20 pl-4 space-y-1">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block rounded-lg px-3 py-2 text-sm text-charcoal/80 hover:bg-soft-teal hover:text-teal transition-colors"
                    onClick={() => {
                      setIsMobileDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#about"
            className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-soft-teal hover:text-teal transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#careers"
            className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-soft-teal hover:text-teal transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Careers
          </a>
          <a
            href="#resources"
            className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-soft-teal hover:text-teal transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Resources
          </a>

          <div className="pt-4 border-t border-charcoal/5">
            <a
              href="#contact"
              className="block w-full text-center rounded-lg bg-coral px-4 py-3 text-base font-semibold text-off-white shadow-md shadow-coral/10 hover:bg-coral/95 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
