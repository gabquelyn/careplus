"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

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

// Generates a sharp SVG Location Map Pin Icon built directly with Tailwind classes
const createLocationPinIcon = () => {
  return L.divIcon({
    className: "custom-location-pin",
    html: `
      <div class="relative flex items-center justify-center transition-transform duration-200 hover:scale-110 drop-shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-8 w-8 text-coral fill-current">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" class="text-coral" />
          <circle cx="12" cy="9" r="2.5" class="fill-off-white" />
        </svg>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32], // Dynamic anchors to ensure the sharp point rests precisely on the coordinate
    popupAnchor: [0, -32],
  });
};

export default function AreasWeServeMap() {
  const ontarioCenter: [number, number] = [44.0, -79.0];

  return (
    <section id="areasweserve" className="bg-white py-24 font-sans text-charcoal lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Text Block */}
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
            <MapContainer 
              center={ontarioCenter} 
              zoom={7} 
              className="h-full w-full"
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />

              {ONTARIO_HUBS.map((hub) => (
                <Marker 
                  key={hub.name} 
                  position={[hub.lat, hub.lng]} 
                  icon={createLocationPinIcon()}
                >
                  <Popup className="custom-map-popup">
                    <div className="p-1 font-sans">
                      <h4 className="font-bold text-charcoal text-sm">{hub.name}</h4>
                      <p className="text-xs text-teal font-medium mt-0.5">Ontario Branch Support</p>
                      <p className="text-xs text-warm-grey mt-2 flex items-center gap-1">
                        <svg className="h-3 w-3 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {hub.phone}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

        </div>
      </div>
    </section>
  );
}