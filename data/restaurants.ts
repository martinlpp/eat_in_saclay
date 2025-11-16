// data/restaurants.ts

export type CritiqueSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];      // pour les listes (plats, desserts…)
  image?: string;        // nom de base de l'image (ex : "19_1")
  imageAlt?: string;     // texte alternatif pour cette image
};

export type Critique = {
  intro: string[];        // paragraphes d’intro
  sections: CritiqueSection[];
};

export type Restaurant = {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  short: string;
  critique?: Critique;
  generalImage?: string;  // image générale à la fin de la page (ex : "19_3")
};

export const restaurants: Restaurant[] = [
  {
    name: "Food Asia",
    slug: "food-asia",
    lat: 48.71437637300416,
    lng: 2.201754282078431,
    short: "Restaurant asiatique sur le campus IP Paris",
    // Tu pourras ajouter une critique + images plus tard
  },

  {
    name: "Le 19",
    slug: "Le-19",
    lat: 48.713061,
    lng: 2.202215,
    short: "Restaurant-Bar Bistrot sur le campus IP Paris",
    critique: {
      intro: [
        "Pour son premier déplacement officiel, Eat in Saclay a testé pour toi Le 19, un restaurant sur le plateau de Palaiseau.",
        "En tant qu’étudiant, tu n’y mangeras probablement pas tous les midis, mais à l’occasion, si l’envie te prend de faire un resto digne de ce nom, ton asso culinaire préférée te le conseille vivement.",
        "Le 19 allie une offre large et de qualité, des prix abordables et une ambiance agréable."
      ],
      sections: [
        {
          title: "L’offre – carte & rapport qualité-prix",
          paragraphs: [
            "Le spectre des offres est assez large : tu peux manger convenablement pour 15–16 €, comme t’offrir une belle pièce de viande à 30 €.",
            "Les végés trouveront aussi leur bonheur : pâtes fourrées, burger végé, salade César.",
            "Plus d’infos directement sur le site du 19 : website-19-restaurant-palaiseau.eatbu.com."
          ],
          image: "19_2",
          imageAlt: "Assiette au 19, illustrant la carte et les plats proposés."
        },
        {
          title: "Rapport quantité / prix",
          paragraphs: [
            "Un des seuls bémols : certains plats s’avéraient peu copieux et les gros mangeurs ne se satisferont pas des offres les plus abordables."
          ]
        },
        {
          title: "Le service",
          paragraphs: [
            "Un service efficace en une quinzaine de minutes. Parfait pour un étudiant pressé de retourner en TD !",
            "Présentation et service convenables."
          ]
        },
        {
          title: "Le décor",
          paragraphs: [
            "Parce qu’un bon resto ce n’est pas seulement une bonne bouffe, il faut dire que le décor du 19 nous a particulièrement séduits.",
            "La salle est spacieuse et dispose d’une bonne hauteur sous plafond, la lumière est chaleureuse et nous fait presque oublier la morosité du plateau.",
            "Quelques touches végétales rendent le lieu charmant."
          ],
          image: "19_1",
          imageAlt: "Vue de la salle du 19, mettant en avant le décor et l’ambiance."
        },
        {
          title: "Quelques mots sur quelques mets – Plats",
          items: [
            "Conchiglioni (pâtes fourrées) : farce goûtue mais plat peu copieux (16,90 €).",
            "Burger : classic burger, bien garni (16,50 €).",
            "Suprême de poulet : gros morceau, bon rapport quantité/prix (16,50 €).",
            "Chili con carne : assiette chargée, chili légèrement relevé (menu du jour).",
            "Pièce du boucher : viande bonne et sauce généreuse (14,90 €).",
            "Poitrine de porc : viande juteuse et tendre, sauce excellente (17,50 €).",
            "Parmentier de canard : plat sec et peu copieux (beaucoup de purée)."
          ]
        },
        {
          title: "Les desserts",
          items: [
            "Pain perdu : le Prez recommande vivement.",
            "Crumble : croustillant et chaud.",
            "Crème brûlée : sucrée mais pas trop, croûte pas assez craquante.",
            "Fondant au chocolat : cher et trop sucré, plat « enfantin »."
          ]
        }
      ]
    },
    generalImage: "19_3" // petite photo générale à la fin de la chronique
  }
];
