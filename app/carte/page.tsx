"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import moreSugar from "../fonts/more_sugar/moresugar";

// ⚡ Composant client (Leaflet, pas de SSR)
const CarteClient = dynamic(() => import("./CarteClient"), { ssr: false });

export default function CartePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Titre */}
        <h1
          className={`${moreSugar.className} text-4xl sm:text-5xl text-red-700 text-center`}
        >
          Carte des restos testés
        </h1>

        {/* Sous-titre */}
        <p
          className=' font-semibold text-lg text-yellow-600 text-center max-w-2xl mx-auto'
        >
          Survolez un point pour découvrir un resto, ou cliquez pour accéder à
          la chronique complète 🍽️
        </p>

        {/* Carte */}
        <div className="mt-6">
          <CarteClient />
        </div>

        {/* Retour */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 mt-6 text-sm font-medium text-red-700 border border-red-200 rounded-full hover:bg-red-50 transition"
          >
            ← Retour à l’accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
