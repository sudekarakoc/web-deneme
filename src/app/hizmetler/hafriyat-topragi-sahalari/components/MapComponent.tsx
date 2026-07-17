"use client";

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { locations } from '../data/locations';

// Fix Leaflet's default icon issue in React
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function MapComponent() {
  return (
    <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 z-0">
      <MapContainer center={[41.0, 27.5]} zoom={9} scrollWheelZoom={false} style={{ height: '100%', width: '100%', zIndex: 0 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, index) => (
          <Marker key={index} position={[loc.lat, loc.lng]}>
            <Popup>
              <div className="p-1">
                <h3 className="font-bold text-gray-900 mb-1 m-0">{loc.title}</h3>
                <p className="text-sm text-gray-600 mb-3 m-0 mt-1">{loc.description}</p>
                <div className="text-xs text-gray-500 mb-3">
                  <strong>Koordinatlar:</strong><br />
                  {loc.lat}, {loc.lng}
                </div>
                <a 
                  href={`https://www.openstreetmap.org/?mlat=${loc.lat}&mlon=${loc.lng}#map=15/${loc.lat}/${loc.lng}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[#00adee] hover:text-[#173556] font-medium transition-colors m-0"
                >
                  🌍 Haritada Aç
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
