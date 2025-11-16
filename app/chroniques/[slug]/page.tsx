// app/chronique/[slug]/page.tsx (ou chemin équivalent)

import Link from "next/link";
import Image from "next/image";
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
        <article className="prose prose-sm max-w-none text-gray-800 leading-relaxed font-serif">
          {resto.critique ? (
            <>
              {/* Intro */}
              {resto.critique.intro.map((p, i) => (
                <p key={`intro-${i}`}>{p}</p>
              ))}

              {/* Sections */}
              {resto.critique.sections.map((section, index) => (
                <section key={section.title + index} className="mt-6">
                  <h2 className="text-2xl font-semibold text-red-700">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((p, i) => (
                    <p key={`sec-${index}-p-${i}`}>{p}</p>
                  ))}

                  {/* Image de section (carte / décor…) */}
                  {section.image && (
  <div className="my-4 flex justify-center">
    <Image
      src={`/${section.image}.jpg`}
      alt={section.imageAlt ?? `${resto.name} - illustration`}
      width={500}    // tu peux jouer avec ça
      height={300}
      className={
        section.image === "19_2"
          ? "rounded-xl object-cover shadow-md max-w-md w-full"
          : "rounded-xl object-cover shadow-md w-full"
      }
    />
  </div>
)}


                  {section.items && (
                    <ul className="list-disc pl-5">
                      {section.items.map((item, i) => (
                        <li key={`sec-${index}-li-${i}`}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Petite photo générale à la fin */}
              {resto.generalImage && (
                <div className="mt-8 flex justify-center">
                  <Image
                    src={`/${resto.generalImage}.jpg`}
                    alt={`${resto.name} - vue générale`}
                    width={500}
                    height={300}
                    className="rounded-xl object-cover shadow-md max-w-full"
                  />
                </div>
              )}
            </>
          ) : (
            <p>Chronique à venir pour ce restaurant… 🍽️</p>
          )}
        </article>
      </div>
    </main>
  );
}
