// src/config/legalData.json.ts - contenu des pages privacy et terms.
//
// Can I Afford Japan? est un blog personnel, pas un SaaS : pas de comptes, pas
// de facturation, pas de connexion. Le texte reflete ca directement plutot que
// de garder la structure d'un contrat d'abonnement. Ce n'est pas un avis
// juridique, et vaut d'etre relu si le site se monetise plus serieusement.

import type { Locale } from "@i18n";
import type { LegalDocument } from "./types/configDataTypes";

type LegalPages = { privacy: LegalDocument; terms: LegalDocument };

const en: LegalPages = {
  privacy: {
    title: "Privacy policy",
    description: "What this site collects, and what it doesn't.",
    lastUpdated: "2026-09-07",
    sections: [
      {
        title: "The short version",
        body: "This is a personal blog. There are no accounts, no logins, and nothing to sign up for beyond the optional email list. We collect as little as we can get away with.",
      },
      {
        title: "Hosting and basic logs",
        body: "The site is static files served by Cloudflare. Cloudflare's network sees standard request data (IP address, browser, page requested) to serve the page and protect against abuse, the same as any web host.",
      },
      {
        title: "Cookies and local storage",
        body: "We don't set tracking or advertising cookies. If a feature (like remembering a light or dark mode preference) stores something in your browser, it stays on your device and is never sent to us.",
      },
      {
        title: "Affiliate links",
        body: "This site participates in affiliate programs with Klook, GetYourGuide, and Expedia. Booking links and widgets from those partners are affiliate links, and each one says so where it appears. Those partners may set their own cookies once you click through or interact with an embedded widget; their privacy policies cover what happens on their site, not ours.",
      },
      {
        title: "The email list",
        body: "If you subscribe by email, we use your address only to send you new posts. You can unsubscribe with one click at any time, and we never sell or share that address.",
      },
      {
        title: "Contact",
        body: "Questions about any of this go through the contact page, and a real person answers them.",
      },
    ],
  },

  terms: {
    title: "Terms of use",
    description: "The short agreement that covers using this site.",
    lastUpdated: "2026-09-07",
    sections: [
      {
        title: "Using this site",
        body: "This is a personal blog, published in good faith and kept up to date as best we can. Prices, opening hours, and other details change; treat what's written here as a starting point for your own planning, not a guarantee.",
      },
      {
        title: "Content and reuse",
        body: "The posts, photos, and code on this site belong to us. Quoting a passage with a link back is welcome and needs no permission. Republishing a whole post, or using our photos elsewhere, does not: ask first through the contact page.",
      },
      {
        title: "Affiliate links",
        body: "Some links on this site are affiliate links, marked as such, and we may earn a commission if you book through them at no extra cost to you. See our legal notice page for the full policy.",
      },
      {
        title: "No warranty",
        body: "This site is provided as is, without any warranty. We do our best to keep prices and details accurate, but we're not liable for decisions made based on what's published here.",
      },
      {
        title: "Changes",
        body: "We may update these terms as the site changes. The date at the top of this page always reflects the latest version.",
      },
    ],
  },
};

const byLocale: Record<Locale, LegalPages> = { en };

/** Les deux documents legaux dans la langue demandee. */
export function getLegalData(locale: Locale): { privacy: LegalDocument; terms: LegalDocument } {
  return byLocale[locale];
}
