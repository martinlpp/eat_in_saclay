import Link from "next/link";
import { restaurants } from "@/data/restaurants";

// ⚠️ Server Component (PAS de "use client" ici)
export default async function ChroniquePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // sur ta version de Next, params est une Promise → on le "déplie"
  const { slug } = await params;

  const resto = restaurants.find((r) => r.slug === slug);

  if (!resto) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold mb-4">Restaurant introuvable</h1>
        <pre className="bg-gray-100 text-xs p-4 rounded max-w-full overflow-x-auto text-left mb-4">
{JSON.stringify(
  {
    slug_recu: slug,
    slugs_connus: restaurants.map((r) => r.slug),
  },
  null,
  2
)}
        </pre>
        <Link href="/carte" className="text-violet-700 hover:underline">
          ← Retour à la carte
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-violet-950 px-4 py-10">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link href="/carte" className="text-sm text-violet-700 hover:underline">
          ← Retour à la carte
        </Link>

        <h1 className="text-3xl font-bold">{resto.name}</h1>

        <p className="text-gray-700">
          blablabla
        </p>

        
      </div>
    </main>
  );
}
