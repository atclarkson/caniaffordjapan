// src/data/klookCode.ts - Klook Kreator code ADAMANDLINDSKLOOK, single source of truth for its terms.
//
// Pulled directly from the Klook affiliate dashboard on 2026-09-07. Do not
// invent or round these numbers, and do not add an offer that isn't in the
// dashboard. If an offer expires or a new one appears, update this file
// first, every post that cites KLOOK_CODE_OFFERS stays correct automatically.
//
// Left out on purpose: a Universal Studios Singapore coupon (3% off,
// redeem before 2026-01-31), a Scenic Trains coupon (6% off, redeem before
// 2025-12-31), and two Disneyland California coupons (10% and 3% off,
// redeem before 2025-12-31). All four had already passed their "redeem
// before" date as of the last check above, publishing an expired offer
// is worse than not mentioning it.

export const KLOOK_CODE = "ADAMANDLINDSKLOOK";

export interface KlookCodeOffer {
  label: string;
  discount: string;
  terms: string;
  redeemBefore: string;
}

export const KLOOK_CODE_OFFERS: KlookCodeOffer[] = [
  {
    label: "New Klook user",
    discount: "10% off",
    terms: "$50 minimum spend, capped at $50 off, one time use.",
    redeemBefore: "December 31, 2026",
  },
  {
    label: "Existing Klook user",
    discount: "3% off",
    terms: "$50 minimum spend, capped at $50 off, up to three uses.",
    redeemBefore: "December 31, 2026",
  },
  {
    label:
      "Selected things to do and mobility, including teamLab Planets TOKYO, teamLab Borderless, teamLab Biovortex Kyoto, Japan Shinkansen tickets, SHIBUYA SKY, Warner Bros. Studio Tour Tokyo, and Osaka Amazing Pass",
    discount: "1% off",
    terms: "No stated minimum spend for this tier.",
    redeemBefore: "December 31, 2026",
  },
  {
    label: "eSIM, new eSIM customers only",
    discount: "50% off",
    terms: "No minimum spend, capped at $1.50 saved, one time use.",
    redeemBefore: "December 31, 2026",
  },
];
