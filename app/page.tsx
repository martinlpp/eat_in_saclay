import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4">
      <Image
        src="/logo.png"
        alt="Logo de EatinSaclay"
        width={400}
        height={400}
        className="mb-4"
      />
      <h1 className="text-5xl text-violet-950 font-bold mb-6">
        Bienvenue sur le Plateau !
      </h1>
      <p className="text-lg text-violet-900 text-center max-w-2xl mb-10 leading-relaxed">
        Bienvenue sur le site officiel de l’association <strong>EatinSaclay</strong> 🍽️.
        Les bons plans food du Plateau, testés et approuvés par les étudiants.
        EatinSaclay explore les restos du coin pour que vous ne gaspilliez ni votre temps, ni votre faim.
      </p>
      <Link
        href="/bureau"
        className="px-6 py-3 bg-violet-950 text-white rounded-xl hover:bg-violet-700 transition-all"
      >
        Découvrir le bureau
      </Link>
      <Link
        href="/carte"
        className="mt-4 px-6 py-3 bg-violet-100 text-violet-900 rounded-xl hover:bg-violet-200 transition"
      >
        Voir la carte des restos
      </Link>

      
    </main>
  );
}

