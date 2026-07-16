"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = {
    services: [
      { name: "Home Care", href: "/home-care" },
      { name: "Live In Care", href: "/live-in-care" },
      { name: "Specailized Care", href: "/specialized-care" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Care Journey", href: "/care-journey" },
      { name: "Areas We Serve", href: "/about#areasweserve" },
    ],
    resources: [
      { name: "Care Guides", href: "#guides" },
      { name: "FAQ", href: "/resources/#faq" },
      { name: "Seek Consulation", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-charcoal font-sans text-off-white/80 border-t border-teal/10">
      {/* Main Footer Links & Branding Container */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* LEFT: Branding & Mission Statement (5 Cols) */}
          <div className="flex flex-col space-y-6 lg:col-span-5">
            <Logo />

            <p className="max-w-md text-base text-off-white/70 leading-relaxed">
              Supporting families with compassionate, dedicated home care that
              empowers your loved ones to preserve their independence, dignity,
              and joy.
            </p>

            {/* Dynamic Social Links */}
            <div className="flex items-center gap-4 text-off-white/60">
              <a
                href="#"
                className="hover:text-peach transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-peach transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT: Dynamic Multi-Column Links (7 Cols) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal">
                Our Services
              </h3>
              <ul className="mt-4 space-y-3">
                {navigationLinks.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-peach transition-colors duration-150"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {navigationLinks.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-peach transition-colors duration-150"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                {navigationLinks.resources.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-peach transition-colors duration-150"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Dynamic CTA Banner inside the Footer */}
        <div className="mt-16 rounded-2xl bg-teal/10 border border-teal/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-off-white">
              Ready to design a supportive plan together?
            </h4>
            <p className="text-sm text-off-white/70 mt-1">
              Speak with our family intake specialists in your community today.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-lg bg-coral px-6 py-3 text-sm font-semibold text-off-white shadow-md shadow-coral/20 hover:bg-coral/95 transition-all duration-200 whitespace-nowrap"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Bottom Legal & Info Banner */}
        <div className="mt-16 pt-8 border-t border-off-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-off-white/50">
          <p>© {currentYear} CarePlus. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-peach transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-peach transition-colors">
              Terms of Service
            </a>
            <a
              href="#accessibility"
              className="hover:text-peach transition-colors"
            >
              Accessibility Statement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
