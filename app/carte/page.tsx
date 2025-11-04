"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

// ⚡ Import du composant client de la carte (sans SSR)
const CarteClient = dynamic(() => import("./CarteClient"), { ssr: false });

export default function CartePage() {
  return (
    <main className="min-h-screen bg-white text-violet-950 px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-center">
          Carte des restos testés
        </h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Passez votre souris sur un point pour voir les infos, ou cliquez pour
          accéder à la chronique complète 🍽️
        </p>

        {/* 💡 Composant client ici */}
        <CarteClient />

        <Link
          href="/"
          className="inline-flex items-center justify-center px-4 py-2 mt-6 text-sm font-medium text-violet-950 border border-violet-200 rounded-full hover:bg-violet-50 transition"
        >
          ← Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
