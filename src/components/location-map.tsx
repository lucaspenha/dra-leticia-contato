"use client";

import { useState } from "react";

import type { Location } from "@/lib/site-config";

/**
 * Seletor de unidade (tabs) + iframe do Google Maps correspondente à unidade
 * ativa. O seletor exige estado (`"use client"`); o iframe em si é estático.
 */
export function LocationMap({ locations }: { locations: readonly Location[] }) {
  const [activeId, setActiveId] = useState(locations[0]?.id ?? "");
  const active = locations.find((location) => location.id === activeId) ?? locations[0];

  if (!active) return null;

  return (
    <div>
      <div role="tablist" aria-label="Unidades de atendimento" className="flex flex-wrap gap-2">
        {locations.map((location) => {
          const isActive = location.id === active.id;
          return (
            <button
              key={location.id}
              type="button"
              role="tab"
              id={`tab-${location.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${location.id}`}
              onClick={() => setActiveId(location.id)}
              className={
                "ease-brand rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 " +
                (isActive
                  ? "bg-forest-700 text-cream-50"
                  : "border-cream-200 bg-cream-50 text-ink-700 hover:border-forest-700/30 border")
              }
            >
              {location.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="rounded-brand shadow-soft mt-6 overflow-hidden"
      >
        <iframe
          key={active.id}
          title={`Mapa — ${active.label}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(active.mapsQuery)}&output=embed`}
          width="100%"
          height="360"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="text-ink-500 mt-4">
        {active.address}
        {active.phone ? ` · ${active.phone}` : null}
      </p>
    </div>
  );
}
