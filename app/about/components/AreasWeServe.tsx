"use client";
import React from "react";
import dynamic from "next/dynamic";

interface HubLocation {
  name: string;
  lat: number;
  lng: number;
  phone: string;
}

const ONTARIO_HUBS: HubLocation[] = [
  { name: "Toronto Hub", lat: 43.6532, lng: -79.3832, phone: "(416) 555-0192" },
  { name: "Mississauga Office", lat: 43.5890, lng: -79.6441, phone: "(905) 555-0143" },
  { name: "Hamilton Care Team", lat: 43.2557, lng: -79.8711, phone: "(905) 555-0177" },
  { name: "London Regional Office", lat: 42.9849, lng: -81.2453, phone: "(519) 555-0122" },
  { name: "Kitchener Support Center", lat: 43.4516, lng: -80.4925, phone: "(519) 555-0166" },
  { name: "Barrie Intake Center", lat: 44.3894, lng: -79.6903, phone: "(705) 555-0155" },
  { name: "Peterborough Hub", lat: 44.3091, lng: -78.3197, phone: "(705) 555-0188" },
  { name: "Ottawa Regional Headquarters", lat: 45.4215, lng: -75.6972, phone: "(613) 555-0111" },
  { name: "Niagara Falls Support Team", lat: 43.0896, lng: -79.0849, phone: "(289) 555-0133" },
];

const DynamicMapCanvas = dynamic(() => import("./DynamicMapCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-soft-teal/50 animate-pulse">
      <div className="text-center">
        <svg className="mx-auto h-8 w-8 text-teal animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <p className="mt-3 text-sm font-semibold text-teal">Loading interactive map...</p>
      </div>
    </div>
  ),
});

export default function AreasWeServeMap() {
  return (
    <section id="areasweserve" className="bg-white py-24 font-sans text-charcoal lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          
          {/* Left Text Block - Renders immediately on the server for SEO */}
          <div className="lg:col-span-5">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal">Areas We Serve</span>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Proudly Serving Communities Across Ontario
            </h2>
            <p className="mt-4 text-base text-warm-grey sm:text-lg">
              Local care. Local teams. Local commitment.
            </p>
            <p className="mt-4 text-sm text-warm-grey leading-relaxed">
              Our coordinators and vetted care providers live and work right inside your community. Select a location icon on the map to find your nearest regional office.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-charcoal/10 pt-6">
              {ONTARIO_HUBS.map((hub) => (
                <div key={hub.name} className="flex items-center gap-2 text-sm text-charcoal font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral shrink-0" />
                  {hub.name.split(" ")[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Right Map Canvas Container */}
          <div className="relative h-112.5 w-full overflow-hidden rounded-2xl border border-teal/10 bg-soft-teal shadow-2xl lg:col-span-7 z-10">
            <DynamicMapCanvas hubs={ONTARIO_HUBS} />
          </div>

        </div>
      </div>
    </section>
  );
}