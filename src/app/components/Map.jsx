"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ data }) {
  const mapRef = useRef(null);
  const mapContainer = useRef(null);
  const markerRef = useRef(null);
  const [coords, setCoords] = useState([51.505, -0.09]);

  // if the data obj contain corrds of the location we will update the state 'setCoords' as result the useEffect will trigger and the map will marker will point to the ip address location

  useEffect(() => {
    if (data?.latitude && data?.longitude) {
      setCoords([data.latitude, data.longitude]);
    }
  }, [data]);

  // display map
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    mapRef.current = L.map(mapContainer.current).setView(coords, 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(mapRef.current);

    markerRef.current = L.marker(coords, {
      icon: L.icon({ iconUrl: "/assets/icon-location.svg" }),
    }).addTo(mapRef.current);
  });

  useEffect(() => {
    if (!mapRef.current || !markerRef.current) return;

    mapRef.current.setView(coords, 15);
    markerRef.current.setLatLng(coords);
  }, [coords]);
  return <div ref={mapContainer} className="h-[600px] w-full"></div>;
}
