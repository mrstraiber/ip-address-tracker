"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ data }) {
  const mapRef = useRef(null);
  const mapContainer = useRef(null);
  const markerRef = useRef(null);

  // check if the property (latitude, longitude) exists in the data object, and if it does, we will save it in a variable, otherwise we will assign a default value
  const lat = data?.latitude ?? 51.505;
  const long = data?.longitude ?? -0.09;

  // display map
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    mapRef.current = L.map(mapContainer.current).setView([lat, long], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(mapRef.current);

    markerRef.current = L.marker([lat, long], {
      icon: L.icon({ iconUrl: "/assets/icon-location.svg" }),
    }).addTo(mapRef.current);
  }, [lat, long]);

  useEffect(() => {
    if (!mapRef.current || !markerRef.current) return;

    mapRef.current.setView([lat, long], 15);
    markerRef.current.setLatLng([lat, long]);
  }, [lat, long]);
  return <div ref={mapContainer} className="h-[600px] w-full"></div>;
}
