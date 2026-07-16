"use client";
import Link from "next/link";
import React from "react";

export default function AboutCTA() {
  return (
    <section className="bg-charcoal px-6 py-12 font-sans text-off-white border-t border-teal/10">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Voice Icon & Statement */}
        <div className="flex items-center gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal/25 border border-teal/40 text-peach">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-off-white font-serif">Let&apos;s Talk About Your Care Needs</h3>
            <p className="text-sm text-off-white/70 mt-0.5">Our care experts are here to help you find the right support.</p>
          </div>
        </div>

        {/* Right Side: CTA Trigger */}
        <Link 
          href="/contact"
          className="rounded-lg bg-teal px-6 py-3.5 text-sm font-semibold text-off-white shadow-lg hover:bg-teal/90 transition-all flex items-center gap-2"
        >
          Request a Free Consultation <span>→</span>
        </Link>

      </div>
    </section>
  );
}