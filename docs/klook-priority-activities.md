# Klook priority activities

The site owner shared a "high earning activity" export from the Klook
affiliate dashboard (not committed here, it's mostly non-Japan and 21,000+
rows) and asked us to prioritize the teamLab activities in particular.
Numbers below are what the export listed as of 2025-12-28, treat them as a
starting point, not current pricing, always link to Klook for the real
current price rather than quoting these in a post.

## Covered so far

- teamLab Planets TOKYO (Toyosu), activity id 25300, was $24.29, 4.7 stars,
  18,326 reviews. Post: `teamlab-planets-tokyo-ticket-price.mdx`.
- teamLab Borderless Tokyo (Azabudai Hills). Not in the export as its own
  row (only mentioned as eligible for the ADAMANDLINDSKLOOK code's
  "selected things to do" tier), so that post uses a search link rather
  than a specific activity page link. Post:
  `teamlab-borderless-tokyo-with-kids.mdx`, real family photos.
- The ADAMANDLINDSKLOOK discount code itself. Post:
  `klook-discount-code-adamandlindsklook.mdx`, terms live in
  `src/data/klookCode.ts`.

Also published, outside this list: `nintendo-museum-uji-ticket-price-lottery.mdx`,
real photos from an April 2026 family trip. Not a Klook or GYG bookable item
(official lottery ticket system only, confirmed via web search), so it uses
`AffiliateBox` for general Kyoto day tours rather than a direct activity link.

## Not yet covered, in priority order

- teamLab Botanical Garden Osaka, activity id 73632, was $11.49, 4.4 stars,
  7,266 reviews. Nagai Botanical Garden, Osaka. Pairs naturally with the
  `osaka` topic. Checked AL_Vault on 2026-09-16, zero photos for this
  specific spot, the family hasn't been. Stays here until there's a real
  visit.
- teamLab Forest Fukuoka, activity id 51227, was $15.35, 4.7 stars, 1,638
  reviews. Inside the BOSS E.ZO FUKUOKA complex. Fukuoka doesn't have a
  topic yet, add one if this gets written. Checked AL_Vault on 2026-09-16,
  the family's only Fukuoka material is 1 photo and 2 videos from a June
  2023 trip, not enough to confirm they actually visited this specific
  attraction, don't write it from a guess.
- teamLab Future Park Okinawa, activity id 98927, was $12.79, 4.8 stars,
  443 reviews. Naha. Also has no topic yet. Checked AL_Vault on
  2026-09-16, zero Okinawa content of any kind, the family has never been.
## Not yet covered

Nothing left on this list has real family photos to draw from (see
the entries above). Recheck AL_Vault periodically in case that
changes with a future trip.

## Done, outside this list's original scope

- Klook Pass Greater Tokyo, activity id 74574. Published 2026-09-17 as
  `klook-pass-greater-tokyo-worth-it`, real family photos of Skytree
  and Tokyo Tower (exterior/street level, not the paid decks
  specifically, noted honestly in the post). Ran real current-price
  math against the pass's tiers (sourced from adamandlinds.com,
  flagged as possibly stale) and found the 3-attraction tier doesn't
  actually beat booking Skytree + Tokyo Tower + teamLab Planets
  separately at current 2026 prices, only becomes a real deal once an
  expensive premium add-on (Disney, Warner Bros. Studio Tour, etc.) is
  in the mix. Honest, not a sales pitch for the pass.
- Klook Pass Kansai, activity id 91434. Published 2026-09-18 as
  `klook-pass-kansai-worth-it`. No real photos for the standard-tier
  attractions themselves (teamLab Botanical Garden Osaka, HARUKAS 300,
  Umeda Sky Building), said so plainly in the post, but real current
  prices for all three show the pass's entry tier actually does edge
  out booking them separately, unlike the Tokyo pass. Used real,
  plentiful USJ photos (14 unused) to illustrate the premium side,
  where an expensive attraction is what makes the bigger savings show
  up, same pattern as Tokyo.

## Before checking used_in and picking a slug or angle

`AL_Vault`'s `used_in` field (via `search_photos` view "blog" or "full")
tracks usage across every property the family runs, not just this site.
When planning a post on a subject that photos have already been used for
elsewhere (check the `used_in` array on candidate photos before writing),
look at what slug/title that other post used and pick a genuinely different
angle or a clearly different slug here, not a near-duplicate. This site's
angle is cost and whether something is worth the money, lean into that
rather than repeating a generic "vs" comparison that might already exist on
one of the family's other sites.
