// src/data/affiliates.ts - real affiliate link builders for our booking partners.
//
// Klook and GetYourGuide both have a genuine keyword-search formula: any
// destination URL on their site can be wrapped or tagged with our fixed
// partner params. Expedia and Hotels.com don't do keyword search that way,
// but (confirmed by the site owner 2026-10-26, real working examples) both
// DO have a real landing-page wrapper formula: take any real expedia.com or
// hotels.com page (a specific hotel, a specific "things to do" activity) and
// URL-encode it into a `landingPage` param behind their own affiliate
// gateway, see `expediaRedirect`/`hotelsRedirect` below. That's the strongly
// preferred path for a specific property or activity, same role
// `klookRedirect` plays for Klook. `EXPEDIA_SHOP_URL`/`HOTELS_COM_URL`
// remain as flat fallbacks for when a post has nothing specific to wrap
// (a generic "browse Expedia" or "browse Hotels.com" link).

export type Provider = "klook" | "getyourguide" | "expedia" | "hotels";

// Klook affiliate account (the main ADAMANDLINDSKLOOK one). aid is the
// publisher id, aff_adid is the ad slot id from the affiliate dashboard;
// both are fixed and reused for every link, only k_site (the destination,
// url-encoded) changes per link.
const KLOOK_AID = "92051";
const KLOOK_AFF_ADID = "1420301";

// A second, separate real Klook account the site owner also holds, for the
// JR/shinkansen campaign specifically (confirmed 2026-10-16, both aids are
// genuinely theirs, not a mismatch). Use `klookJrRedirect` instead of
// `klookRedirect` for shinkansen/JR pass content.
const KLOOK_JR_AID = "42202";
const KLOOK_JR_AFF_ADID = "1503965";

// GetYourGuide partner id, appended as a query param to any getyourguide.com
// URL (search results, city pages, activity pages, all work the same way).
const GYG_PARTNER_ID = "AJE5L0O";

// Expedia's affiliate storefront for this account. Real, tracked, flat
// fallback for a post with nothing specific to wrap (see `expediaRedirect`
// below for the real per-page formula, which converts far better).
const EXPEDIA_SHOP_URL = "https://expedia.com/shop/adamandlinds";

// The real Expedia affiliate gateway params (siteid/camref/creativeref/
// adref), confirmed by the site owner 2026-10-26 with a real working
// example (a Mt Fuji/Hakone day-tour activity page). Fixed and reused for
// every link, only the wrapped landingPage URL changes.
const EXPEDIA_SITE_ID = "1";
const EXPEDIA_CAMREF = "1100lGsSj";
const EXPEDIA_CREATIVEREF = "1100l68075";
const EXPEDIA_ADREF = "PZhiJloQjg";

// Hotels.com's own flat tracked link (a Partnerize/prf.hn redirect), found
// 2026-10-22 in the family's own description on the "$300/Day 7-Day Budget"
// Tokyo vlog. Flat fallback, same role as EXPEDIA_SHOP_URL above (see
// `hotelsRedirect` below for the real per-property formula).
const HOTELS_COM_URL = "https://prf.hn/l/EJnx85V";

// The real Hotels.com affiliate gateway params (camref/creativeref/adref),
// confirmed by the site owner 2026-10-26 with a real working example (a
// Shinjuku hotel property page). Fixed and reused for every link, only the
// wrapped landingPage URL changes.
const HOTELS_CAMREF = "1011lGuyp";
const HOTELS_CREATIVEREF = "1011l66481";
const HOTELS_ADREF = "PZo6dlHxoV";

// Wraps any klook.com URL (a search page, or a specific activity page) in
// the affiliate redirect. Use this directly when a post has a real activity
// page to link to, it converts far better than a generic search link.
export function klookRedirect(targetUrl: string): string {
  return `https://affiliate.klook.com/redirect?aid=${KLOOK_AID}&aff_adid=${KLOOK_AFF_ADID}&k_site=${encodeURIComponent(targetUrl)}`;
}

// Same wrapping, but through the JR/shinkansen-specific account above.
export function klookJrRedirect(targetUrl: string): string {
  return `https://affiliate.klook.com/redirect?aid=${KLOOK_JR_AID}&aff_adid=${KLOOK_JR_AFF_ADID}&k_site=${encodeURIComponent(targetUrl)}`;
}

// Wraps any real expedia.com page (a specific hotel, activity, or
// "things to do" page) in the affiliate gateway. `targetUrl` should be a
// real page found via search, not a guessed or hand-built URL, the page's
// own property/activity id and slug matter, the rest of its query string
// (dates, sort order, etc.) doesn't need to be reproduced exactly.
export function expediaRedirect(targetUrl: string): string {
  return `https://expedia.com/affiliate?siteid=${EXPEDIA_SITE_ID}&landingPage=${encodeURIComponent(targetUrl)}&camref=${EXPEDIA_CAMREF}&creativeref=${EXPEDIA_CREATIVEREF}&adref=${EXPEDIA_ADREF}`;
}

// Same wrapping for a real hotels.com property page.
export function hotelsRedirect(targetUrl: string): string {
  return `https://www.hotels.com/affiliate?landingPage=${encodeURIComponent(targetUrl)}&camref=${HOTELS_CAMREF}&creativeref=${HOTELS_CREATIVEREF}&adref=${HOTELS_ADREF}`;
}

export const affiliates: Record<Provider, { label: string; searchUrl: (query: string) => string }> = {
  klook: {
    label: "Klook",
    searchUrl: (query) => klookRedirect(`https://www.klook.com/search/result/?query=${encodeURIComponent(query)}`),
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
  hotels: {
    label: "Hotels.com",
    searchUrl: () => HOTELS_COM_URL,
  },
};
