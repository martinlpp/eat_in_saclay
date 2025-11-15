import Image from "next/image";
import Link from "next/link";
import moreSugar from "./fonts/more_sugar/moresugar";

// palette couleur :
// bg-red-700
// bg-yellow-600



export default function Home() {
  return (
    <main className=" bg-white flex flex-col items-center justify-center min-h-screen text-gray-800 px-4">
      <Image
        src="/logo.png"
        alt="Logo de EatinSaclay"
        width={500}
        height={500}
        className="mb-4"
      />
      <h1
  className={`${moreSugar.className} text-5xl text-red-700 mb-6`}
>
  Bienvenue sur le Plateau !
</h1>



      <p className= "font-sans font-semibold text-lg text-yellow-600 text-center max-w-2xl mb-10 leading-relaxed">
        Bienvenue sur le site officiel de l’association <strong>EatinSaclay</strong> 🍽️.
        Les bons plans food du Plateau, testés et approuvés par les étudiants.
        EatinSaclay explore les restos du coin pour que vous ne gaspilliez ni votre temps, ni votre faim.
      </p>
      <Link
        href="/bureau"
        className="px-6 py-3 bg-red-700 text-white rounded-xl hover:bg-red-800 transition-all"
      >
        Découvrir le bureau
      </Link>
      <Link
        href="/carte"
        className="mt-4 px-6 py-3 bg-red-700 text-white rounded-xl hover:bg-red-800 transition"
      >
        Voir la carte des restos
      </Link>

      
    </main>
  );
}

