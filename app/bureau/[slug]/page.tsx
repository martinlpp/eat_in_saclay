import Image from "next/image";
import Link from "next/link";

const members = [
  {
    name: "Anton Lucibello",
    role: "Président",
    slug: "anton-lucibello",
    email: "anton.lucibello@eatinsaclay.fr",
    desc: "Anton est le président de l’association EatinSaclay. Il coordonne les activités, gère les partenariats et représente l’asso sur le plateau de Saclay.",
    img: "/humain.jpeg",
  },
  {
    name: "Stanislas Hanriot",
    role: "Vice-président",
    slug: "stanislas-hanriot",
    email: "stanislas.hanriot@eatinsaclay.fr",
    desc: "Stanislas seconde Anton dans la gestion des projets et la logistique des événements. Il veille à ce que chaque idée devienne un événement concret et convivial.",
    img: "/humain.jpeg",
  },
  {
    name: "Martin Loup",
    role: "Secrétaire général",
    slug: "martin-loup",
    email: "martin.loup@eatinsaclay.fr",
    desc: "Martin est le gardien de l’organisation interne : réunions, comptes-rendus et suivi des actions. C’est lui qui s’assure que personne ne rate une info importante.",
    img: "/humain.jpeg",
  },
  {
    name: "Emma Ganneval",
    role: "Trésorière",
    slug: "emma-ganneval",
    email: "emma.ganneval@eatinsaclay.fr",
    desc: "Emma veille au bon équilibre du budget : suivi des dépenses, remboursements et gestion des recettes. Elle fait en sorte que chaque événement soit viable… et gourmand.",
    img: "/humain.jpeg",
  },
  {
    name: "Claudia Aguado",
    role: "Vice-trésorière",
    slug: "claudia-aguado",
    email: "claudia.aguado@eatinsaclay.fr",
    desc: "Claudia assiste Emma dans la trésorerie. Elle suit les achats, aide à la préparation des budgets et s’assure que l’asso garde une marge pour les prochains repas.",
    img: "/humain.jpeg",
  },
];

// 🔥 NOTE : params est maintenant une Promise -> on l'attend
export default async function MemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // on "déplie" la Promise
  const member = members.find((m) => m.slug === slug);

  if (!member) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-black text-white">
        <h1 className="text-2xl font-bold mb-4">Membre introuvable</h1>
        <pre className="bg-zinc-900 text-xs p-4 rounded max-w-full overflow-x-auto text-left">
{JSON.stringify(
  {
    slug_recu: slug,
    slugs_connus: members.map((m) => m.slug),
  },
  null,
  2
)}
        </pre>
        <Link href="/bureau" className="mt-4 text-violet-300 hover:underline">
          ← Retour au bureau
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-violet-950 px-4 py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/bureau"
          className="inline-block text-sm text-violet-700 hover:underline mb-2"
        >
          ← Retour au bureau
        </Link>

        <div className="flex flex-col items-center text-center gap-4">
          <Image
            src={member.img}
            alt={member.name}
            width={200}
            height={200}
            className="rounded-full border border-violet-200 shadow-md object-cover"
          />
          <h1 className="text-3xl font-bold">{member.name}</h1>
          <p className="text-lg font-medium text-violet-700">
            {member.role}
          </p>
        </div>

        <p className="text-base leading-relaxed text-gray-800 text-center">
          {member.desc}
        </p>

        <div className="text-center pt-4">
          <p className="text-sm text-gray-600">
            Contact :{" "}
            <a
              href={`mailto:${member.email}`}
              className="text-violet-700 font-medium hover:underline"
            >
              {member.email}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
