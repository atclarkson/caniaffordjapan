// src/data/telecomAffiliates.ts - real affiliate accounts for eSIM, physical SIM, and pocket wifi providers.
//
// Pulled directly from the site owner's affiliate spreadsheet on 2026-09-11.
// Do not invent a discount percentage, commission rate, or term that isn't
// listed here, and do not add a provider that isn't in the source sheet. A
// few entries only have a link and no code or stated terms, that's the
// sheet's own data, leave `code` and `terms` undefined rather than guessing.
//
// Japan Wireless is the most Japan specific of these (SIM, eSIM, and pocket
// wifi rental, not just eSIM), worth leading with in a Japan connectivity
// post rather than treating all providers as interchangeable.
//
// The `ADAMANDLINDS` eSIM code below is the same code used on the family's
// separate esimdiscountcodes.com site. The site owner has explicitly
// confirmed it's fine to reuse here, it's their own code either way.

export type TelecomProvider =
  | "airalo"
  | "airhub"
  | "holafly"
  | "japanWireless"
  | "nomad"
  | "simlocal"
  | "amigoEsim"
  | "simOptions"
  | "ubigi";

export interface TelecomAffiliate {
  label: string;
  url: string;
  /** Discount code for the customer to enter, if this provider has one. */
  code?: string;
  /** What the code or link actually does, for both the customer and us. Quote the sheet, don't round or summarize away a caveat. */
  terms: string;
}

export const telecomAffiliates: Record<TelecomProvider, TelecomAffiliate> = {
  airalo: {
    label: "Airalo",
    url: "https://airalo.pxf.io/raoREy",
    code: "ADAMLINDS3",
    terms: "$3 off for the customer. The code alone gives us no commission, the link is required for that.",
  },
  airhub: {
    label: "Airhub",
    url: "https://gighubsystemsinc.sjv.io/9La2Vj",
    terms: "10% off for the customer when using our link, we earn 10%.",
  },
  holafly: {
    label: "Holafly",
    url: "https://holafly.sjv.io/YR0VrR",
    code: "ADAMANDLINDS",
    terms: "We earn 10%. Customer saves 5% on an eSIM, or 10% on a monthly plan.",
  },
  japanWireless: {
    label: "Japan Wireless",
    url: "https://www.japan-wireless.com/?via=adamandlinds",
    code: "ADAMANDLINDS",
    terms: "10% off for the customer.",
  },
  nomad: {
    label: "Nomad",
    url: "https://www.getnomad.app/?rfsn=8767142.451ec7",
    terms: "Customer gets 10% off when purchasing through our referral link within 30 days.",
  },
  simlocal: {
    label: "Simlocal",
    url: "https://www.simlocal.com/?utm_source=awin&utm_medium=affiliate&utm_content=1117223&utm_campaign=affiliate_&sv1=affiliate&sv_campaign_id=1117223&awc=68844_1748590721_a58d8f032ccdd7a14d574d98ac542803",
    code: "ADAMANDLINDS",
    terms: "10% off for the customer.",
  },
  amigoEsim: {
    label: "amigo eSIM",
    url: "https://amigoesim.pxf.io/c/6317027/2900873/34019?irck=xyz12",
    terms: "No code or discount terms listed in the source sheet, link only.",
  },
  simOptions: {
    label: "Sim Options",
    url: "https://simoptions.sjv.io/YVBm0B",
    terms: "No code or discount terms listed in the source sheet, link only.",
  },
  ubigi: {
    label: "Ubigi",
    url: "https://go.ubigi.com/MKydW2",
    terms: "No code or discount terms listed in the source sheet, link only.",
  },
};
