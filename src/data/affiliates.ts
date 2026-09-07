// src/data/affiliates.ts - real affiliate link builders for our booking partners.
//
// Klook and GetYourGuide both have a genuine formula: any destination URL on
// their site can be wrapped or tagged with our fixed partner params. Expedia
// does not, their affiliate tool hands out one-off hashed deep links per
// search (see EXPEDIA_SHOP_URL below), so there is no query -> URL formula
// for it. A post that needs a specific Expedia search should pass a real
// generated link through AffiliateBox's `overrides` prop instead of relying
// on the generic fallback here.

export type Provider = "klook" | "getyourguide" | "expedia";

// Klook affiliate account. aid is the publisher id, aff_adid is the ad slot
// id from the affiliate dashboard; both are fixed and reused for every link,
// only k_site (the destination, url-encoded) changes per link.
const KLOOK_AID = "92051";
const KLOOK_AFF_ADID = "1420301";

// GetYourGuide partner id, appended as a query param to any getyourguide.com
// URL (search results, city pages, activity pages, all work the same way).
const GYG_PARTNER_ID = "AJE5L0O";

// Expedia's affiliate storefront for this account. Real, tracked, but not
// query-specific: it's the fallback for any post that doesn't have its own
// generated deep link (see the file header above).
const EXPEDIA_SHOP_URL = "https://expedia.com/shop/adamandlinds";

export const affiliates: Record<Provider, { label: string; searchUrl: (query: string) => string }> = {
  klook: {
    label: "Klook",
    searchUrl: (query) => {
      const target = `https://www.klook.com/search/result/?query=${encodeURIComponent(query)}`;
      return `https://affiliate.klook.com/redirect?aid=${KLOOK_AID}&aff_adid=${KLOOK_AFF_ADID}&k_site=${encodeURIComponent(target)}`;
    },
  },
  getyourguide: {
    label: "GetYourGuide",
    searchUrl: (query) =>
      `https://www.getyourguide.com/s/?q=${encodeURIComponent(query)}&partner_id=${GYG_PARTNER_ID}&utm_medium=online_publisher`,
  },
  expedia: {
    label: "Expedia",
    searchUrl: () => EXPEDIA_SHOP_URL,
  },
};
