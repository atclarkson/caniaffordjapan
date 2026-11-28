// src/config/siteData.json.ts - l'identite de la publication : nom, auteur, adresse, reseaux.
import type { SiteDataProps } from "./types/configDataTypes";

// Tout ce qui identifie la publication vit ici. C'est le premier fichier que
// l'utilisateur edite, et le seul a editer pour changer de marque.
const siteData: SiteDataProps = {
  name: "Can I Afford Japan?",
  title: "Can I Afford Japan? - Prices for an affordable Japan trip",
  description:
    "Honest, well-researched posts on what things cost in Japan: temples, food, transit, hotels, activities, and day trips, from the Clarkson family's trips and research in between. Never invented pricing.",
  useViewTransitions: true,

  demoNotice: "",

  author: {
    name: "The Clarksons",
    email: "clarksontravels@gmail.com",
    twitter: "",
  },

  defaultImage: {
    src: "/og/default.png",
    alt: "Can I Afford Japan? - trip photos and honest prices from Japan",
  },
};

export default siteData;
