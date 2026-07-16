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

interface MapCanvasProps {
  hubs: HubLocation[];
}

// Custom Leaflet Pin Icon Generator
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
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

export default function MapCanvas({ hubs }: MapCanvasProps) {
  const ontarioCenter: [number, number] = [44.0, -79.0];

  return (
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

      {hubs.map((hub) => (
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
  );
}