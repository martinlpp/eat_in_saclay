import Link from "next/link";
import { restaurants } from "@/data/restaurants";
import moreSugar from "../../fonts/more_sugar/moresugar";

// ⚠️ Server Component
export default async function ChroniquePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const resto = restaurants.find((r) => r.slug === slug);

  if (!resto) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white text-red-700 px-4 text-center">
        <h1 className={`${moreSugar.className} text-3xl mb-4`}>
          Restaurant introuvable
        </h1>

        <pre className="bg-red-50 text-xs p-4 rounded border border-red-200 max-w-full overflow-x-auto mb-4 text-left">
{JSON.stringify(
  {
    slug_recu: slug,
    slugs_connus: restaurants.map((r) => r.slug),
  },
  null,
  2
)}
        </pre>

        <Link href="/carte" className="text-red-700 font-medium underline">
          ← Retour à la carte
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 py-10">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Retour */}
        <Link
          href="/carte"
          className="text-sm text-red-700 hover:underline"
        >
          ← Retour à la carte
        </Link>

        {/* Titre */}
        <h1
          className={`${moreSugar.className} text-4xl text-red-700 tracking-tight`}
        >
          {resto.name}
        </h1>

        {/* Sous-titre court */}
        <p className={`${moreSugar.className} text-lg text-yellow-600`}>
          {resto.short ?? "Un resto du plateau testé pour vous 🍽️"}
        </p>

        {/* Contenu de la chronique */}
        <article className="prose prose-sm max-w-none text-gray-800 leading-relaxed">
          <p>
            blablabla
          </p>
        </article>
      </div>
    </main>
  );
}
