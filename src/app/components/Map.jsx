"use client";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const mapRef = useRef(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    if (mapRef.current) return;

    // mapRef.current = L.map("map").setView([51.505, -0.09], 15);
    mapRef.current = L.map(mapContainer.current, {
      center: [51.505, -0.09],
      zoom: 15,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(mapRef.current);
  }, []);

  return <div ref={mapContainer} className="h-[600px] w-full"></div>;
}
