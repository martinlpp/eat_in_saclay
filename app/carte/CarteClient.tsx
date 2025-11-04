"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "leaflet/dist/leaflet.css";
import { restaurants } from "@/data/restaurants";

// Import dynamique des composants React Leaflet
const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false });
const Tooltip = dynamic(() => import("react-leaflet").then(m => m.Tooltip), { ssr: false });

export default function CarteClient() {
  const router = useRouter();
  const [L, setL] = useState<any>(null);
  const [markerIcon, setMarkerIcon] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const leaflet = await import("leaflet");
      const icon = leaflet.icon({
        iconUrl: "/marker-icon.png",
        iconSize: [35, 41],
        iconAnchor: [12, 41],
      });
      setL(leaflet);
      setMarkerIcon(icon);
    })();
  }, []);

  if (!L || !markerIcon) {
    return (
      <div className="flex items-center justify-center h-[500px] text-violet-900">
        Chargement de la carte...
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-violet-100 shadow-sm">
      <MapContainer
        center={[48.7105, 2.1712]}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {restaurants.map((r) => (
          <Marker
            key={r.slug}
            position={[r.lat, r.lng]}
            icon={markerIcon}
            eventHandlers={{
              click: () => router.push(`/chroniques/${r.slug}`),
            }}
          >
            <Tooltip direction="top" offset={[0, -20]} opacity={0.9} sticky>
              <div className="text-sm font-semibold text-violet-900">
                {r.name}
              </div>
              <div className="text-xs text-gray-700">{r.short}</div>
            </Tooltip>

            <Popup>
              <div className="space-y-1">
                <h2 className="font-semibold">{r.name}</h2>
                <p className="text-xs text-gray-700">{r.short}</p>
                <button
                  onClick={() => router.push(`/chroniques/${r.slug}`)}
                  className="mt-2 text-xs text-violet-700 hover:underline"
                >
                  Voir la chronique →
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
