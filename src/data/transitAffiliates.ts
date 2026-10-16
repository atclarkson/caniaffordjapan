// src/data/transitAffiliates.ts - real affiliate account(s) for Japan bus,
// train, and transit-pass booking.
//
// 12Go is Japan-specific enough (buses, trains, passes) to wire in directly
// rather than leave in docs/affiliates-reference.md as reference only, the
// way most of that doc's entries stay. Sent directly by the site owner on
// 2026-10-16, forwarding a real 12Go affiliate outreach email plus the
// family's own standing code and link.
//
// Two separate things below: the standing `twelveGo` entry (always valid,
// no expiry) and the `twelveGoPromo` object (a time-limited new-user promo
// code from that outreach email). Check `twelveGoPromo.validUntil` before
// using the promo code in any post, it expires; the standing code has no
// such limit.

export interface TransitAffiliate {
  label: string;
  url: string;
  /** Discount code for the customer to enter, if this provider has one. */
  code?: string;
  /** What the code or link actually does. No stated percentage from the site owner for this one, don't invent one. */
  terms: string;
}

export const transitAffiliates = {
  twelveGo: {
    label: "12Go",
    url: "https://12goasiapteltd.sjv.io/KBLKge",
    code: "ADAMANDLINDS",
    terms: "No discount percentage or commission rate stated by the site owner for this standing code, link and code only.",
  } satisfies TransitAffiliate,
};

export interface TimeLimitedPromo {
  code: string;
  discount: string;
  conditions: string;
  /** ISO date. Don't use this code in a post published after this date. */
  validUntil: string;
  /** Total codes available per the outreach email; not something we can verify has run out, noted for honesty only. */
  redemptionQuota: number;
  source: string;
}

export const twelveGoPromo: TimeLimitedPromo = {
  code: "12GOJP",
  discount: "10% off, up to $4 USD",
  conditions: "New users only, Japan routes only",
  validUntil: "2026-12-31",
  redemptionQuota: 500,
  source: "12Go affiliate outreach email (Impact), forwarded by the site owner 2026-10-16",
};
