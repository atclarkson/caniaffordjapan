// src/data/affiliates.ts - base URLs for booking partners, one place to update once real tracking IDs exist.
//
// pending: true means a plain, non-monetized link to the provider. Do not
// fabricate tracking params: flip to false only once a real partner ID is
// added to searchUrl below. See CLAUDE.md "Affiliate links".

export type Provider = "klook" | "getyourguide" | "expedia";

export const affiliates: Record<
  Provider,
  { label: string; searchUrl: (query: string) => string; pending: boolean }
> = {
  klook: {
    label: "Klook",
    searchUrl: (query) => `https://www.klook.com/search/result/?query=${encodeURIComponent(query)}`,
    pending: true,
  },
  getyourguide: {
    label: "GetYourGuide",
    searchUrl: (query) => `https://www.getyourguide.com/s/?q=${encodeURIComponent(query)}`,
    pending: true,
  },
  expedia: {
    label: "Expedia",
    searchUrl: (query) => `https://www.expedia.com/Hotel-Search?destination=${encodeURIComponent(query)}`,
    pending: true,
  },
};
