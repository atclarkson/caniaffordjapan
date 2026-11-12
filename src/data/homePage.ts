// src/data/homePage.ts - the hand-picked content of the home page's planning sections.
//
// Added 2026-11-12 with the home page rebuild (the owner's brief: make the
// home page help someone plan a Japan trip, not read like an archive).
// Everything here points at real pages and real numbers on the site:
// - every `slug` is a published post in src/data/posts/en/
// - every verdict line restates that post's own conclusion or key price
// - every number in WHAT_WE_SPENT is copied from that post's table
// - every partner link is a real affiliate link from affiliates.ts or
//   telecomAffiliates.ts, never a guessed URL.
// Edit freely, but keep those four rules.
import { affiliates, klookRedirect } from "@data/affiliates";
import { telecomAffiliates } from "@data/telecomAffiliates";

/** The four "Start planning" cards. `href` is a real post, topic or search. */
export const START_PLANNING = [
  {
    title: "What does Japan cost?",
    text: "Our Tokyo budget week, starting with Day One: $401.34 for a family of five.",
    href: "/blog/tokyo-300-dollar-day-budget-week-reality-check/",
    icon: "receipt",
  },
  {
    title: "Where to stay",
    text: "Aparthotels, a ryokan and city hotels, priced for a family that doesn't fit one room.",
    href: "/topics/hotels-stays/",
    icon: "map-pin",
  },
  {
    title: "Getting around",
    text: "IC cards, Shinkansen tickets, airport trains, and what each one costs.",
    href: "/topics/transit/",
    icon: "globe",
  },
  {
    title: "Japan with kids",
    text: "Strollers, car seat rules, haircuts, theme parks and restaurants with three kids.",
    href: "/search/?q=kids",
    icon: "users",
  },
] as const;

/**
 * "What we spent": one real day, from the post below, every figure copied
 * from its own table. The post flags the room line as unconfirmed (the same
 * figure appears in another trip's video), so it's shown apart from the
 * day's spending, with the post's own $139.65 "everything but the room".
 */
export const WHAT_WE_SPENT = {
  slug: "ueno-ameyoko-day-budget-breakdown-free-vs-paid",
  heading: "One day in Ueno, line by line",
  dayTotalUsd: "$139.65",
  dayTotalLabel: "Food, tickets and transit for five, everything except the room",
  groups: [
    {
      label: "Food",
      items: [
        { name: "Dinner", yen: "¥8,510", usd: "$54.46" },
        { name: "Lunch", yen: "¥5,640", usd: "$36.10" },
        { name: "Snacks and groceries", yen: "¥2,740", usd: "$17.54" },
      ],
    },
    {
      label: "Activities",
      items: [
        { name: "Swan boats", yen: "¥1,600", usd: "$10.24" },
        { name: "Ueno Zoo", yen: "¥1,200", usd: "$7.68" },
      ],
    },
    {
      label: "Transport and other",
      items: [
        { name: "Trains", yen: "¥1,680", usd: "$10.75" },
        { name: "Miscellaneous", yen: "¥450", usd: "$2.88" },
      ],
    },
  ],
  room: { yen: "¥27,475", usd: "$175.84" },
  total: { yen: "¥49,295", usd: "$315.49" },
  roomNote: "The room line matches a figure from another trip exactly, so we treat it as approximate.",
} as const;

/** "Worth the money?": six verdict posts, each line from the post itself. */
export const WORTH_IT = [
  {
    slug: "tokyo-disney-vs-usj-ticket-price-klook-deal",
    verdict: "Both use date-based pricing. Real current ranges for each park, side by side.",
  },
  {
    slug: "usj-express-pass-worth-it-cost",
    verdict: "9,500 to 26,000 yen on top of admission. Worth it on a packed day, often not on a quiet one.",
  },
  {
    slug: "teamlab-planets-tokyo-ticket-price",
    verdict: "Around $24 a ticket, and a discount code that applies to it.",
  },
  {
    slug: "klook-pass-greater-tokyo-worth-it",
    verdict: "Skytree, Tokyo Tower, teamLab and more in one pass, checked against buying each ticket.",
  },
  {
    slug: "hakone-free-pass-worth-it-cost-breakdown",
    verdict: "Train, ropeway and pirate ship in one ticket, against paying for each leg.",
  },
  {
    slug: "tokyo-skytree-real-visit-both-decks-worth-it",
    verdict: "Yes. Floor 350 does the job; the spiral Tembo Galleria is what earns the second ticket.",
  },
] as const;

/** "Brands we work with": real partners, real affiliate links only. */
export const PARTNERS = [
  { name: "Klook", href: klookRedirect("https://www.klook.com/") },
  { name: "GetYourGuide", href: affiliates.getyourguide.searchUrl("Japan") },
  { name: "Expedia", href: affiliates.expedia.searchUrl("") },
  { name: "Hotels.com", href: affiliates.hotels.searchUrl("") },
  { name: "Holafly", href: telecomAffiliates.holafly.url },
  { name: "Airalo", href: telecomAffiliates.airalo.url },
  { name: "Airhub", href: telecomAffiliates.airhub.url },
  { name: "Ubigi", href: telecomAffiliates.ubigi.url },
] as const;
