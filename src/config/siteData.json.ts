// src/config/siteData.json.ts - l'identite de la publication : nom, auteur, adresse, reseaux.
import type { SiteDataProps } from "./types/configDataTypes";

// Tout ce qui identifie la publication vit ici. C'est le premier fichier que
// l'utilisateur edite, et le seul a editer pour changer de marque.
const siteData: SiteDataProps = {
  name: "Can I Afford Japan?",
  title: "Can I Afford Japan? - Real prices for an affordable Japan trip",
  description:
    "Honest, photo-backed posts on what things really cost in Japan: temples, food, transit, and day trips, from the Clarkson family's own trips. No stock photos, no guessing.",
  useViewTransitions: true,

  demoNotice: "",

  author: {
    name: "The Clarksons",
    email: "clarksontravels@gmail.com",
    twitter: "",
  },

  defaultImage: {
    src: "/og/default.png",
    alt: "Can I Afford Japan? - real trip photos and honest prices from Japan",
  },
};

export default siteData;
