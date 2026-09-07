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

## Not yet covered, in priority order

- teamLab Botanical Garden Osaka, activity id 73632, was $11.49, 4.4 stars,
  7,266 reviews. Nagai Botanical Garden, Osaka. Pairs naturally with the
  `osaka` topic.
- teamLab Forest Fukuoka, activity id 51227, was $15.35, 4.7 stars, 1,638
  reviews. Inside the BOSS E.ZO FUKUOKA complex. Fukuoka doesn't have a
  topic yet, add one if this gets written.
- teamLab Future Park Okinawa, activity id 98927, was $12.79, 4.8 stars,
  443 reviews. Naha. Also has no topic yet.
- Klook Pass Greater Tokyo, activity id 74574, was $42.15, 4.4 stars, 6,480
  reviews. A multi-attraction pass that includes teamLab Borderless or
  Planets as one of the redeemable options, worth its own cost breakdown
  post (is the pass actually cheaper than booking separately).
- Klook Pass Kansai, activity id 91434, was $35.25, 4.5 stars, 1,077
  reviews. Same idea as the Tokyo pass, for Osaka/Kyoto/Kobe.

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
