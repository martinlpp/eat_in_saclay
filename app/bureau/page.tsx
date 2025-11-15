import Link from "next/link";
import Image from "next/image";
import moreSugar from "../fonts/more_sugar/moresugar";

const members = [
  {
    name: "Anton Lucibello",
    role: "Président",
    slug: "anton-lucibello",
    desc: "Le boss : il coordonne l’association, les événements et veille à ce que tout tourne rond sur le plateau.",
    imgAlt: "Photo du président de l'association EatinSaclay",
  },
  {
    name: "Stanislas Hanriot",
    role: "Vice-président",
    slug: "stanislas-hanriot",
    desc: "Le sous-boss : il soutient le président, gère les projets et s’assure que les idées deviennent réalité.",
    imgAlt: "Photo du vice-président de l'association EatinSaclay",
  },
  {
    name: "Martin Loup",
    role: "Secrétaire général",
    slug: "martin-loup",
    desc: "Le maître des mails et des comptes-rendus : il organise, note tout et fait en sorte que personne n’oublie une réunion.",
    imgAlt: "Photo du secrétaire général de l'association EatinSaclay",
  },
  {
    name: "Emma Ganneval",
    role: "Trésorière",
    slug: "emma-ganneval",
    desc: "La gardienne du budget : elle surveille les dépenses, gère les remboursements et s’assure que chaque repas soit équilibré… financièrement.",
    imgAlt: "Photo de la trésorière de l'association EatinSaclay",
  },
  {
    name: "Claudia Aguado",
    role: "Vice-trésorière",
    slug: "claudia-aguado",
    desc: "Toujours prête à compter et recompter : elle assiste la trésorière dans la gestion du budget et des achats pour les événements.",
    imgAlt: "Photo de la vice-trésorière de l'association EatinSaclay",
  },
];

export default function Bureau() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 py-12">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <header className="text-center space-y-4">
          <h1
            className={`${moreSugar.className} text-4xl sm:text-5xl text-red-700`}
          >
            Le Bureau EatinSaclay
          </h1>

          <p
            className=' text-lg font-semibold text-yellow-600 max-w-2xl mx-auto'
          >
            Découvrez l’équipe qui fait vivre l’association{" "}
            <span className="font-semibold text-red-700">EatinSaclay</span> 🍽️
            sur le Plateau !
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 mt-2 text-sm font-medium text-red-700 border border-red-200 rounded-full hover:bg-red-50 transition"
          >
            ← Retour à l’accueil
          </Link>
        </header>

        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <Link
              key={member.slug}
              href={`/bureau/${member.slug}`}
              className="group"
            >
              <article className="flex flex-col items-center text-center bg-red-50/60 border border-red-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
                <div className="w-32 h-32 mb-4 overflow-hidden rounded-full border border-red-200">
                  <Image
                    src="/humain.jpeg"
                    alt={member.imgAlt}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h2
                  className={`${moreSugar.className} text-xl text-red-700 mb-1`}
                >
                  {member.name}
                </h2>

                <p className="text-sm font-semibold text-yellow-600 font-medium mb-2">
                  {member.role}
                </p>

                <p className="text-sm leading-relaxed text-gray-800">
                  {member.desc}
                </p>

                <span className="mt-3 text-xs text-red-700 font-medium group-hover:underline">
                  Voir la fiche détaillée →
                </span>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
