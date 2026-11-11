# Klook priority activities

**Update 2026-10-28:** superseded by a live source. The site owner added a
Google Drive "Brand Assets" folder, growing over time with per-brand
reference material, check it regularly (see `CLAUDE.md` "Affiliate
links"). Its `Klook` subfolder holds a `Klook Info` doc (code/terms,
cross-checked against `klookCode.ts`, fully consistent, no changes
needed) and a "High-earning activity" spreadsheet, 4,221 real worldwide
activities (813 Japan) with ready `aid=42202&aff_adid=1184628` affiliate
links, current price/rating/review count, and images, dated 2026-01-03.
Use a listed row's exact `Affiliate link` cell as-is rather than
rebuilding one with `klookRedirect`/`klookJrRedirect`, this export's
aid/aff_adid pairing is real but different from either hardcoded
constant in `affiliates.ts`, don't assume they're interchangeable.
Figures below are a starting point either way, not current pricing,
always confirm against the live Klook page before publishing.

## Covered so far

- teamLab Botanical Garden Osaka, activity id 73632. Published 2026-10-28
  as `teamlab-botanical-garden-osaka-ticket-price.mdx`, Klook Wednesday,
  honestly researched (the family hasn't been). Topic `en/teamlab`,
  matching the two Tokyo posts rather than `en/osaka`. Used the Drive
  export's exact affiliate link, not `klookRedirect`. Real angle found
  while researching: unlike the two fixed Tokyo museums, this one is a
  genuine working botanical garden that only becomes the art installation
  after sunset, and what's on display shifts with what's actually
  blooming (a cherry-blossom "Resonating Trees" run, an August run with
  ~20,000 lit sunflowers), a real structural difference worth leading
  with rather than another generic "ticket price" post. Cover updated
  2026-10-29: the Drive export's own `Image URL 1`/`Image URL 2` for
  this row are real teamLab installation photos (checked both, genuine,
  not stock), the site owner confirmed a booking site's own marketing
  photo is now an acceptable fallback cover (see `CLAUDE.md` "Images"),
  so the Commons daytime garden photo was swapped for the real night
  installation shot, with a second Klook-hosted photo added in the
  body (remote, not downloaded, same as an AL_Vault body image) and an
  honest "via Klook's listing" caption on both, no false CC claim.
  Also added an explicit closing link-back to both Tokyo teamLab posts
  in addition to the inline intro links. Length tier 2, format 14.
- teamLab Forest Fukuoka, activity id 51227. Published 2026-11-04 as
  `teamlab-forest-fukuoka-ticket-price.mdx`, Klook Wednesday, honestly
  researched (checked AL_Vault first, Fukuoka's pool is unchanged at 1
  photo/2 videos, all already used in the PayPay Dome baseball post,
  no teamLab-specific material exists). Topic `en/teamlab`, same
  series-consistency call as the Osaka post. Used the Drive export's
  exact affiliate link. Real angle: structurally the most different of
  the four teamLab spaces, an explicitly athletic/body-based space
  (uneven terrain, spinning balls, balance stepping stones) rather
  than Planets' water, Borderless' light orbs, or Osaka's living
  garden, worth leading with over a generic price post. Real location
  tie-in: 5th floor of BOSS E.ZO FUKUOKA, opened July 2020 right next
  to PayPay Dome, the same stadium already covered by a real family
  visit (`paypay-dome-fukuoka-vs-tokyo-dome-baseball-cost.mdx`), cross-
  linked both directions. Real pricing cross-check: official door
  price 2,400 yen adult regular/2,700 yen peak (BOSS E.ZO's own
  site via a secondary source) vs. Klook's $15-16 current listing,
  4.7 stars, roughly 1.7-1.9K reviews, a genuine official-vs-Klook
  cost gap worth stating plainly (fits the site's cost-first angle).
  Cover: no AL_Vault or Wikimedia Commons photo exists for this
  specific attraction (checked both), used a real Headout listing
  photo instead (a different booking platform than the one linked,
  still a genuine "credited booking-site listing photo" fallback per
  CLAUDE.md's Oct 29 policy), honest "via Headout's listing" caption,
  no false CC claim. Klook's own `res.klook.com` images and activity
  page were unreachable (403, same pattern as other Klook fetch
  attempts), the large Google Drive CSV export also couldn't be
  downloaded in full this firing (connection size limit), so Headout
  was the real, verifiable fallback rather than inventing a Klook
  image URL. Not in the 1% "selected things to do" code tier, noted
  honestly, general 10%/3% tiers still apply. Length tier 2, format 1.
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
- teamLab Future Park Okinawa, activity id 98927. Published 2026-11-11
  as `teamlab-future-park-okinawa-direct-vs-klook.mdx`, Klook
  Wednesday, honestly researched (checked AL_Vault fresh this firing,
  still zero Okinawa content of any kind, same as the 2026-09-16
  check, the family has never been). Topic `en/teamlab`, same series-
  consistency call as the other three. Format 6 (head-to-head), a
  genuine real comparison rather than a forced one: official adult
  price 2,000 yen vs. Klook's current $12.65-12.75 listing (4.8
  stars, 20K+ booked) are close enough that price isn't the real
  decider, the real tradeoff is that an official-site ticket's date
  can be changed (sources differ on exactly how many times, teamLab's
  own English page says up to three, its FAQ page says once) while a
  Klook ticket is fixed and non-refundable. Used the Drive export's
  exact affiliate link via `<KlookCodeBox>`, not on the code's 1%
  named list, noted honestly, general 10%/3% tiers still apply once
  cart clears $50. Real added detail beyond the ticket: the Yui Rail
  monorail's own official fare from Naha Airport to Omoromachi (320
  yen adult/160 yen child, 19 minutes) and what a family of five's
  total admission plus round-trip transit actually comes to. One
  overclaim caught before publishing: a first draft said "three of
  Japan's four permanent teamLab spaces," but a real-count check
  turned up sources disagreeing on Japan's total teamLab location
  count (8 to 10 depending on what's counted as permanent, including
  the new 2025 Biovortex Kyoto), so the claim was narrowed to "the
  three we've covered so far" instead, about this site's own
  coverage rather than an unverifiable total. Also checked a search
  result claiming a real family visit already existed on
  adamandlinds.com (a page titled "teamLab Future Park Okinawa:
  Family Guide & Tickets (April 2026)"), the URL 404s, treated as a
  dead search snippet rather than evidence, not as a real visit.
  Cover: no AL_Vault or Wikimedia Commons photo exists for this
  specific venue (checked both), used a real DFS (the venue's own
  operator, confirmed via DFS's official "what's happening" page)
  listing photo of the Sketch Aquarium installation instead, a
  genuine operator-marketing-photo fallback per CLAUDE.md's Oct 29
  policy, honest "via DFS's own listing" caption, no false CC claim.
  Rolled length tier 4 (long, 1,000-1,300 words); landed at 1,070
  after one genuine added section (the real transit-fare math).
  Zero uses of "actually" or "genuinely" in the published body (3
  "actually" caught and cut across drafts, one arithmetic error in
  the transit-cost math also caught and corrected before publishing).
  `pnpm build`, `pnpm check`, `pnpm lint:house` all clean.

Also published, outside this list: `nintendo-museum-uji-ticket-price-lottery.mdx`,
real photos from an April 2026 family trip. Not a Klook or GYG bookable item
(official lottery ticket system only, confirmed via web search), so it uses
`AffiliateBox` for general Kyoto day tours rather than a direct activity link.

## Not yet covered, in priority order

**Update 2026-10-26:** the site owner's new weekly calendar (see
`CLAUDE.md` "Weekly calendar") added a Klook Wednesday column that
explicitly does not require a real family visit, only honest research
and no false claim of having done the thing. That unblocks both
entries below for a Wednesday post, they were only stuck on "the family
hasn't been", not on missing pricing or activity data. Still worth a
real-photo check first (a trip since the dates below would upgrade one
of these to a real-visit post instead, always the stronger version),
but absence of photos is no longer a reason to skip them on a
Wednesday.

Re-check each activity's current price, rating, and review count against
the live Klook page before publishing either way, the figures above are
from a 2026-01-03 export and will have moved.

**On the Ginza sumo idea (see `docs/blog-ideas.md`):** the exact "Tokyo
Ginza Sumo Experience" activity from the 2026-09-12 marketing email isn't
a row in the Drive export, keep searching for its real page independently
before publishing. The export does carry several other real, bookable
Tokyo sumo experiences as a fallback or alternative angle if that one
page can't be found: Asakusa Sumo Club Sumo Show Admission with
Chankonabe, id 109994, $101.99, 4.8 stars, 1,076 reviews; Sumo Practice
Watch with a Specialist Reporter (Ryogoku), id 93976, $91.79, 5 stars,
462 reviews. Both affiliate links follow the same
`aid=42202&aff_adid=1184628` pattern as above, swap in the activity id
and slug.

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
