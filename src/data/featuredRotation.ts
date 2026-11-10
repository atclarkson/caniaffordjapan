// src/data/featuredRotation.ts - which post the home page shows as "Our pick this month".
//
// Added 2026-11-10. The site owner wanted the pick to change every month and
// to always be a post we're trying to rank and earn from: Holafly and the
// other telecom affiliates, Klook activities and passes, bookable tickets.
// Twelve posts, one per month, so a full year passes before one repeats.
//
// How it's chosen: November 2026 is FEATURED_ROTATION[0], December [1], and so
// on, wrapping after twelve. The site is static, so the pick is decided at
// build time; the daily post push rebuilds the site, so a new month's pick
// goes live with the first post of that month.
//
// To change the lineup, edit the slugs below (file names in
// src/data/posts/en/ without the extension). A slug that's missing or a
// draft is skipped, falling through to the next one. The old `featured:
// true` frontmatter flag is no longer what the home page reads.
export const FEATURED_ROTATION: readonly string[] = [
  "esim-vs-sim-vs-pocket-wifi-japan", // Nov: Holafly and the telecom affiliates
  "tokyo-disney-vs-usj-ticket-price-klook-deal", // Dec: holiday park trips, Klook
  "klook-pass-greater-tokyo-worth-it", // Jan: trip planning season, Klook Pass
  "teamlab-planets-tokyo-ticket-price", // Feb: Klook
  "usj-express-pass-worth-it-cost", // Mar: spring break, Klook
  "travel-insurance-japan-trip-cost", // Apr: insurance affiliates, real search demand
  "shibuya-sky-tokyo-observation-deck-cost", // May: Klook
  "klook-pass-kansai-worth-it", // Jun: Klook Pass
  "hakone-free-pass-worth-it-cost-breakdown", // Jul: summer day trips
  "tokyo-skytree-tembo-deck-ticket-price-cost", // Aug: Klook
  "haruka-vs-rapit-kansai-airport-train-cost", // Sep: Klook transfers
  "teamlab-borderless-tokyo-with-kids", // Oct: Klook
];

/** Month 0 of the rotation: November 2026 (JavaScript months count from 0). */
const START = 2026 * 12 + 10;

/**
 * The rotation in this month's order: this month's pick first, then the
 * fallbacks. `now` is injectable for tests; defaults to build time.
 */
export function rotationForMonth(now: Date = new Date()): string[] {
  const n = FEATURED_ROTATION.length;
  const offset = (((now.getUTCFullYear() * 12 + now.getUTCMonth() - START) % n) + n) % n;
  return [...FEATURED_ROTATION.slice(offset), ...FEATURED_ROTATION.slice(0, offset)];
}
