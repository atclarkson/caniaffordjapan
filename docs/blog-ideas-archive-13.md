# Blog article ideas, archive (part 13)

Older "Done" entries moved out of `docs/blog-ideas.md` (via
`docs/blog-ideas-archive-12.md`) to keep files under the house-lint 400-line
cap. This continues straight on from `docs/blog-ideas-archive-12.md`
(chronological, oldest first within each file). Nothing here is deleted,
just relocated. See `docs/blog-ideas.md` for the current backlog and the
more recent entries. When this file nears 400 lines too, start
`blog-ideas-archive-14.md` rather than growing this one past the cap.
- **Quick Tip Tuesday launch, Tue 2026-10-27: packing cubes, budget
  vs premium.** Second post under the new weekly calendar. Checked
  the "already posted today" guard first (no post with today's date
  existed), confirmed via `grep` no existing post covers packing
  cubes, plug adapters, voltage, or coin laundry. Checked AL_Vault
  before defaulting to pure research, per the honesty rule a real
  account always beats a researched one: `search_photos text:
  "packing cubes"` turned up a real, unused (`used_in_count: 0`)
  photo, "Packing Cubes and Stuffed Animals in Warsaw," the family's
  actual cubes piled on a couch during a real repack (Dec 2025,
  Poland, not Japan-specific but the gear and the practice both
  apply to every trip including Japan). Previewed the photo directly
  before committing, wholesome, matches the content, no concern.
  Could not confidently identify a brand from the photo itself (a
  small circular logo, not legible enough to name), so described the
  real cubes generically rather than guessing a brand. Researched
  real current budget-vs-premium pricing to support the rolled
  format: Amazon Basics/Essentials 4-piece sets commonly run $10-25
  (strong real review signal, ~4.6 stars across tens of thousands of
  ratings per multiple deal-tracking sources, though exact current
  price wasn't pinned to one live listing), Eagle Creek's Pack-It
  Reveal 4-piece around $55 with a real lifetime warranty, roughly a
  2-3x premium for thicker material, compression, and the warranty
  specifically, not vague "better quality." Used Amazon's standard
  Associates `tag=` parameter (the real confirmed tag
  `adamandlinds00-20` from `docs/affiliates-reference.md`) appended
  to a real Amazon search URL rather than the `linkCode`/`linkId`
  SiteStripe extras on that doc's one example link, since those
  weren't confirmed as reusable for an arbitrary URL and the plain
  `tag=` parameter is Amazon's own documented, general-purpose
  tracking mechanism. Rendered the link as a plain `Button` component
  with the same affiliate-disclosure sentence `AffiliateBox` uses
  (not `AffiliateBox` itself, that component's providers are
  hardcoded to Klook/GYG/Expedia/Hotels.com) rather than a bare
  unstyled link. Created a new topic, `en/travel-prep`, for this
  recurring column (packing/gear/logistics content with no strong
  existing-topic fit; `deals` and `unexpected-costs` were both close
  but not quite right, see CLAUDE.md's topic-creation guidance).
  Rolled length tier 1 (quick hit, 450-600 words) and format 10
  (budget-tier framing, cheap version vs splurge version of the same
  thing) from CLAUDE.md's system, format 10 fit naturally without a
  reroll. Published 2026-10-27 as
  `packing-cubes-budget-vs-premium-family-travel`, 482 words, within
  the rolled tier. Topic `en/travel-prep`. Zero uses of "actually" or
  "genuinely" in the published body (1 "actually" and 2 "genuinely"
  caught and cut across drafts). One real AL_Vault photo used (cover
  and in-body), `mark_photo_used` called.
- **CORRECTION, 2026-10-27, to the Quick Tip Tuesday packing-cubes
  post above: real brand identified, gifted-for-review disclosure
  added.** The site owner identified the cubes in the cover photo as
  a real TRIPPED set, sent to the family free for review, with a
  genuine opinion (lightweight but heavy-duty) to go with it. The
  published post's original "ours are an ordinary set, nothing
  branded" line was true only because the brand couldn't be
  identified from the photo alone; once given the real fact, that
  line became a factual error and was corrected rather than left
  standing. Rewrote the post: named TRIPPED, added a distinct
  material-connection disclosure for the free product (separate from
  the standard affiliate-commission disclosure, since this is a
  different FTC-relevant fact), folded in the real owner-stated
  opinion (lightweight, sturdy through repeated use) rather than a
  generic description, and restructured the budget/premium framing
  around TRIPPED as the mid-tier real product instead of an
  unbranded stand-in. The owner's pasted Amazon link
  (`https://link.amazon/B00iaJtp7`) doesn't resolve: wrong domain
  (`link.amazon` isn't a real Amazon host) and a non-standard,
  lowercase ASIN shape; WebSearch surfaced two real-format TRIPPED
  ASIN candidates but neither could be confirmed as the correct
  product, so per the standing rule against fabricating a deep link,
  used a brand-specific Amazon search URL
  (`amazon.com/s?k=TRIPPED+packing+cubes&tag=adamandlinds00-20`)
  instead of guessing a specific product page; still needs the
  correct link from the owner to tighten to an exact product URL.
  Re-verified zero uses of "actually"/"genuinely" after the rewrite
  (3 "actually" reintroduced during drafting, all caught and cut).
  `pnpm check` (0 errors) and `node scripts/house.mjs` (no
  violations) both re-run clean after the correction, and the new
  Amazon link confirmed resolving correctly in the built HTML.
- **Klook Wednesday launch, Wed 2026-10-28: teamLab Botanical Garden
  Osaka.** Third post under the new weekly calendar, first Klook
  Wednesday. Checked the "already posted today" guard first (no post
  with today's date existed). Checked AL_Vault before defaulting to
  research, per the honesty rule: `get_destinations` showed no new
  uploads since the last check and Osaka's pool is unchanged (133
  photos, 14 videos, same as documented), no photos tie to this
  specific spot, the family hasn't been. Picked it over the other two
  unblocked teamLab items (Fukuoka, Okinawa) per
  `docs/klook-priority-activities.md`'s stated priority order. Used
  the Google Drive "Brand Assets" export's exact affiliate link
  (aid=42202/aff_adid=1184628) rather than `klookRedirect`, per the
  new policy in `CLAUDE.md`. Researched real current facts via
  WebSearch/WebFetch: osaka-info.jp (the Osaka tourism board, a
  reliable official-adjacent source) gave the real opening date (July
  29, 2022), adult price (1,800 yen and up), closure days (2nd/4th
  Monday), and garden size (240,000 sqm, ~1,200 plant types); hedged
  honestly on exact seasonal hours where sources disagreed (last entry
  consistently 20:30 except one source citing 21:00 on spring
  weekends). Found a genuinely different angle partway through
  research rather than writing another generic ticket-price post: this
  is a real working botanical garden that only becomes the art
  installation after sunset, and what's displayed changes with what's
  actually blooming (a real cherry-blossom "Resonating Trees" run, a
  real ~20,000-sunflower August run), a structural difference from the
  two fixed-exhibit Tokyo museums already covered. Used topic
  `en/teamlab` to match those two sibling posts rather than `en/osaka`,
  cross-linked both by real URL, confirmed resolving in the built HTML.
  No Commons photo exists of the night installation itself (searched,
  zero results), so used a real Commons daytime photo of the garden's
  promenade instead (Laitche, CC BY-SA 4.0), captioned honestly as a
  daytime shot rather than implying it shows the night art, downloaded
  via the `Special:FilePath` workaround after `action=query` hit its
  usual rate limit. Rolled length tier 2 (short, 600-800 words) and
  format 14 (direct address) from CLAUDE.md's system, format 14 fit
  naturally, no reroll needed. Published 2026-10-28 as
  `teamlab-botanical-garden-osaka-ticket-price`, 614 words, within the
  rolled tier. Topic `en/teamlab`. Zero uses of "actually" or
  "genuinely" in the published body (1 "actually" and 1 "genuinely"
  caught and cut across drafts). No `mark_photo_used` call, Commons
  photo, not AL_Vault. (Cover later swapped to the Drive export's real
  Klook photo, see `docs/klook-priority-activities.md`'s 2026-10-29
  update on that same entry.)
- **Throwback Thursday, 2026-10-29: a third real Round1 visit, this one
  in Narashino, Chiba, near the Tokyo Disney area.** Checked the
  "already posted today" guard first (no post with today's date
  existed). Both AL_Vault priority checks and `docs/klook-priority-
  activities.md`/`docs/blog-ideas.md` offered nothing new (today
  requires a real visit, so the Wednesday-only unblocked Klook ideas
  don't apply). Confirmed zero new AL_Vault uploads via
  `get_destinations`. Swept several smaller photo pools not previously
  exhausted: Bunkyo (16 photos, the handful of unused ones turned out
  to be spares from the same May 2024 Tokyo Dome game already covered
  by `tokyo-dome-stadium-beer-price-worth-it.mdx`, confirmed by
  previewing them, two of the three photos that post embeds are from
  this exact cluster), Hiroshima's 4-video pool (confirmed all four
  already mined across the four existing Hiroshima posts, down to the
  Shinkansen-bathroom aside), and Yokohama (6 photos/2 videos, capybara,
  Cup Noodle Museum, Sankei-en, and the Christmas market all already
  published). The real find: searching city `Nara` in `search_photos`
  also surfaced a `Narashino`-tagged photo via a substring match (worth
  remembering, the city filter isn't exact-match only), "The Girls
  Discover Round1 in Japan," unused, with a real AI caption confirming
  it's a Round1 arcade/bowling complex, not Nara temple content. `get_trip`
  for 2025-09-25/27 (no city filter, same workaround as past firings)
  placed it the day after a real Sept 25, 2025 Tokyo Disney Sea day
  (Urayasu-tagged photos, also unused but Disney is already extensively
  covered elsewhere). Confirmed via `grep` this is a third distinct real
  Round1 visit, after the two Sakai posts and the June 2023 Harper's-
  birthday Osaka one, this one with only a single photo and no video, a
  genuinely thin but real new visit. Verified the specific store (Round1
  Stadium Narashino, Shibazono 1-4-5) via WebSearch against the photo's
  own `location_label`, confirmed real address, nearest station,
  shuttle-bus stops, and parking capacity. Found real current weekday
  pricing for this specific store but didn't quote it in the post,
  it's from an unknown-vintage Japanese listings site and conflicts
  slightly with the existing Sakai post's confirmed May 2026 nationwide
  figures, cross-linked to that post for pricing instead of risking two
  different numbers on the site. Rolled length tier 5 (deep dive,
  1,300-1,600 words) and format 8 (itemized breakdown) from CLAUDE.md's
  system; format 8 didn't fit at all, nothing to itemize for a one-photo
  visit with no receipt, rerolled once to format 9 (heads-up/warning
  framing), used honestly: the real trap is a reader assuming from this
  site's own prior Round1 posts that the chain is Osaka-only. Landed
  far short of tier 5, one real photo plus a real address and a
  cross-linked pricing table doesn't stretch past a quick hit without
  inventing detail, said so here rather than padding. Published
  2026-10-29 as `round1-narashino-near-tokyo-disney-not-just-osaka`,
  509 words. Topic `en/tokyo` (no Chiba-specific topic exists, and one
  photo doesn't justify creating one, same "thing that happened in
  Tokyo" pattern as the worldschool popup post). Zero uses of "actually"
  or "genuinely" in the published body (2 "actually" caught and cut
  across drafts). One real AL_Vault photo used (cover and in-body, the
  same image), `mark_photo_used` called.
- **Food Friday, 2026-10-30: CoCo Ichibanya curry, researched.** Checked
  the "already posted today" guard first (no post with today's date
  existed). AL_Vault had nothing: swept `food`/`convenience store`/
  `curry`/`soba`/`dessert` text searches and the still-unused Katsushika
  photo cluster (37 photos, confirmed via preview it's a kids'-art/
  homeschool cluster, not food), found a real unused "End of Dinner
  Overhead at an Osaka Restaurant" photo (2023-06-05, via `get_trip`)
  but no restaurant name, no price, no video, too thin and too close to
  the site's several existing unnamed-izakaya/shared-plates posts to be
  a genuinely new angle, left it alone rather than force it. Checked
  `src/data/posts/en/` for the full `budget-food` topic list (18 posts)
  before picking a subject: takoyaki and okonomiyaki are only mentioned
  in passing elsewhere, Marugame/udon the same, but CoCo Ichibanya,
  Japan's largest curry chain, had zero mentions anywhere on the site,
  confirmed via `grep`. Researched real facts via WebSearch/WebFetch:
  Wikipedia's Ichibanya page for the real founding story (Tokuji and
  Naomi Munetsugu, Bacchus coffee shop Nagoya 1974, first CoCo
  Ichibanya Aichi 1978, House Foods Group bought the family's stake in
  2015), real store counts (1,300+ in Japan, ~181 international per
  Wikipedia's own country breakdown), and the real spice/rice/topping
  pricing system (Mild/Standard free, Level 1 +25 yen up to Level 20
  +200 yen, rice upgrades separate) from a Fun-Japan guide, hedged
  since no single official 2026 price list was found. Real example
  prices (a Yokosuka location's chicken cutlet curry, a KITTE Osaka
  flagship's beef curry) cited as single-location snapshots, not a
  national price. Rolled length tier 2 (short, 600-800 words) and
  format 11 (time/season anchored) from CLAUDE.md's system; format 11
  doesn't fit a no-visit researched post at all (nothing to anchor to a
  specific day), rerolled once to format 10 (budget-tier framing),
  a strong genuine fit given the chain's real build-to-order pricing.
  Cover: a real, licensed Wikimedia Commons photo of the Namba
  Sennichimae location in Osaka (Tokumeigakarinoaoshima, CC BY-SA 4.0),
  attributed in the post body per CLAUDE.md's Images section. Published
  2026-10-30 as `coco-ichibanya-curry-budget-vs-splurge-cost`, 601
  words, within the rolled tier. Topic `en/budget-food`. Zero uses of
  "actually" or "genuinely" in the published body (1 "actually" caught
  and cut across drafts). No `mark_photo_used` call, Commons photo, not
  AL_Vault.
- **Day Trip Saturday, 2026-10-31: a guided Mt Fuji/Hakone day tour,
  researched, cross-linked to the real DIY visit.** Checked the
  "already posted today" guard first (no post with today's date
  existed). Checked AL_Vault for real day-trip material first, per the
  honesty rule: found a genuinely promising lead, a real Kobe day-trip
  video (vlog 150) with an honest "Kobe beef didn't live up to the
  hype" angle and a real Viator link in its own description, but
  `grep` confirmed it's already fully covered by
  `kobe-beef-day-trip-steak-not-worth-hype.mdx` (steak, Chinatown,
  getting there, the Viator link, all of it), a dead end rather than a
  new post. Used the real Mt Fuji/Hakone Expedia activity already on
  file in `docs/weekly-calendar.md`'s Day Trip Saturday section
  instead (a2457971), confirmed via `grep` it hadn't been used in any
  post yet. Direct `WebFetch` on the Expedia listing hit a 429, so
  researched real current details via WebSearch instead: operator
  (Japan Panoramic Tours), real price (~$155/adult, varies by Shinjuku-
  no-lunch vs Ginza-with-lunch departure), real itinerary (Mt Fuji
  Fifth Station, Hakone Ropeway over Owakudani), ~10 hour duration,
  Shinkansen return. Found a real, honest differentiator from the
  family's own DIY Hakone Free Pass post rather than writing a
  duplicate: the guided tour reaches Mt Fuji's Fifth Station, which
  isn't on the Free Pass route at all, a genuine reason to pick one
  over the other rather than a generic "guided vs DIY" framing.
  Cross-linked `hakone-free-pass-worth-it-cost-breakdown.mdx` by real
  URL, confirmed resolving in the built HTML. Used `expediaRedirect()`
  wrapping the real activity URL via `AffiliateBox`, confirmed the
  real wrapped link (camref/creativeref/adref) resolves correctly in
  the built HTML. Rolled length tier 2 (short, 600-800 words) and
  format 14 (direct address) from CLAUDE.md's system, format 14 fit
  naturally, no reroll needed. Cover: a real, licensed Wikimedia
  Commons photo of Mt Fuji from Lake Ashi (Suicasmo, CC BY-SA 4.0),
  attributed in the post body. Published 2026-10-31 as
  `mt-fuji-hakone-guided-day-tour-bullet-train-cost`, 607 words,
  within the rolled tier. Topic `en/day-trips`. Zero uses of "actually"
  or "genuinely" in the published body (3 "actually" and 1 "genuinely"
  caught and cut across drafts, including one draft sentence inventing
  an unsourced "locals half-joke" detail, cut entirely rather than
  softened, never invent color to fill a gap). No `mark_photo_used`
  call, Commons photo, not AL_Vault.
- **Gear Up Sunday, 2026-11-01: the Wayb Pico travel car seat, a real
  family-owned product with real Day One photos.** Checked the
  "already posted today" guard first (no post with today's date
  existed). Checked existing coverage: `japan-child-car-seat-law-taxi-
  rental-car.mdx` already covers the legal requirement and mentions
  Wayb in one passing sentence with no real price or specs, a genuine
  gap for a dedicated gear post rather than a duplicate. Checked
  AL_Vault before defaulting to pure research, per the honesty rule: a
  text search for "car seat" and "Wayb" turned up 5-6 real, unused
  photos explicitly tagged `wayb carseat`, from May 14, 2022, the
  family's actual first day of full-time travel (leaving Indiana for
  good), confirmed via `get_trip`. Real, not Japan-specific, but
  honestly framed as the same seat still in the family's real kit
  years later rather than implying the photos were taken in Japan.
  Researched real current specs/pricing via WebSearch: ~8 lb weight,
  FAA-approved for airplane use, 22-50 lb/30-45in forward-facing
  capacity, pricing from a single retail listing and a detailed
  third-party review ($499 seat alone up to $649 bundled), hedged
  since no official 2026 price page was found, plus a single-sourced,
  unconfirmed claim about tightened specs on seats made after June
  2025, flagged as such rather than stated as fact. Found a real
  adamandlinds.com review of this same seat via WebSearch but the
  specific URL 404'd when fetched directly (same pattern as a prior
  firing's teamLab Osaka research), didn't invent quotes from
  inaccessible content, worked from what could actually be verified
  instead. Cross-referenced the existing car-seat-law post's real
  Toyota Rent a Car pricing (1,650 yen one-time fee) for a genuine
  owning-vs-renting-locally comparison rather than re-deriving it,
  confirmed resolving in the built HTML. Used the real Wayb affiliate
  link on file (`docs/affiliates-reference.md`, a generic storefront
  link, no specific product deep link exists, didn't fabricate one).
  Rolled length tier 4 (long, 1,000-1,300 words) and format 8
  (itemized breakdown) from CLAUDE.md's system, format 8 fit well
  given the real spec/price table. Landed just short of tier 4 (961
  words) after adding one genuine extra section (owning vs renting
  locally) rather than padding further with anything unverified, said
  so here rather than inventing detail to close the gap. Published
  2026-11-01 as `wayb-pico-travel-car-seat-cost-review`, 961 words.
  Topic `en/travel-prep`. Zero uses of "actually" or "genuinely" in
  the published body (2 "actually" caught and cut across drafts). Two
  real AL_Vault photos used (cover and in-body), `mark_photo_used`
  called.
- **Stay Spotlight, 2026-11-02: Hakone Kowakien Mikawaya Ryokan,
  researched (no real family stay).** Checked the "already posted
  today" guard first (no post with today's date existed), confirmed
  via `grep` only one prior Stay Spotlight exists
  (`kimpton-shinjuku-tokyo-stay-spotlight`). Checked AL_Vault before
  defaulting to research, per the honesty rule: `search_photos` for
  "ryokan"/"hotel room" (Japan) turned up only already-used photos
  (a Hakone coin-locker shot, a Thanksgiving-in-a-hotel-room shot, a
  Halloween-costume shot) plus one unused but too-thin/generic
  Skytree-view-from-hotel-room photo, no real material for a
  dedicated Stay Spotlight. Also checked the Google Drive "Brand
  Assets" folder across both pages, no hotel-specific subfolder
  exists, newest additions are all eSIM brands, confirmed research
  was the honest path. Picked a traditional ryokan deliberately, a
  genuinely different angle from the Kimpton boutique-hotel post, and
  targeted Hakone specifically for real cross-linking potential with
  `hakone-free-pass-worth-it-cost-breakdown` and the newly-published
  `mt-fuji-hakone-guided-day-tour-bullet-train-cost`. WebSearch for
  real bookable Hakone ryokan candidates surfaced several (KAI
  Sengokuhara, Mikawaya, Yaeikan, Lalaca, Fukuzumiro, Gora Kadan);
  picked Mikawaya after confirming it has real, distinct property
  pages on both Hotels.com (`ho325734496`) and Expedia (`h10147953`),
  verified via multiple regional-mirror search hits since direct
  WebFetch of both returned 503/429 (same rate-limiting pattern as
  prior firings). Researched real history (1883 founding per one
  detailed source, 140+ years, Registered Tangible Cultural Property,
  hedged as single-sourced), real amenities (10 private open-air
  onsen rooms per one count, shared indoor mineral bath, free Mori no
  Yu access, family rooms with garden views), and real price
  snapshots from multiple booking-site dates ($353-386/night range,
  one guest-reported ¥90,000), explicitly hedged as snapshots rather
  than live quotes. Found a real but unconfirmed renovation notice
  (mid-to-late 2025) via a Booking.com listing, flagged honestly as
  likely passed rather than omitted or stated as current fact. No
  Wikimedia Commons photo exists of Mikawaya itself (searched,
  confirmed via Commons' own MediaSearch), used a real, licensed
  Commons photo of a different, unnamed ryokan in Hakone instead
  (Raita Futo, CC BY 2.0), downloaded via the `Special:FilePath`
  workaround with a `?width=` param after the plain endpoint hit the
  usual rate limit, captioned explicitly as illustrative/not the
  specific property to avoid implying it shows Mikawaya. Used real
  `hotelsRedirect()`/`expediaRedirect()` wraps around the two real
  property URLs found above, matching the established Stay Spotlight
  pattern. Rolled length tier 4 (long, 1,000-1,300 words) and format
  3 (question title, build to a verdict) from CLAUDE.md's system,
  format 3 fit naturally, no reroll needed. Landed at 990 words, just
  under the rolled tier-4 floor after adding one genuine extra
  transit detail (the real Odakyu Shinjuku-to-Hakone-Yumoto fare
  already on file) rather than padding further with anything
  unverified, said so here rather than inventing detail to close the
  gap. Published 2026-11-02 as `hakone-ryokan-mikawaya-stay-spotlight`,
  990 words. Topic `en/hotels-stays`. Zero uses of "actually" or
  "genuinely" in the published body (3 "actually" caught and cut
  across drafts). No `mark_photo_used` call, Commons photo, not
  AL_Vault. Moved the two packing-cubes "Done" entries out to
  `docs/blog-ideas-archive-13.md` (new file, archive-12 was already
  near its own cap) to keep this file under the house-lint 400-line
  cap.
- **Quick Tip Tuesday, 2026-11-03: plug adapters and voltage
  converters, researched.** Checked the "already posted today" guard
  first (no post with today's date existed). Checked AL_Vault before
  defaulting to research: no unused, topic-specific real photos
  exist (checked "luggage forwarding," "takuhaibin," "suitcase,"
  "luggage," "bags," all either zero results or already-used family
  photos), honest research is the correct path, and Tuesday doesn't
  require a real visit anyway. Confirmed via `grep` no existing post
  covers plug adapters or voltage. Picked this over a luggage-
  forwarding angle (genuinely useful too, but no natural real
  affiliate tie-in) since it pairs cleanly with a real Amazon
  product, matching CLAUDE.md's stated Quick Tip Tuesday affiliate
  guidance. Researched real facts via WebSearch/WebFetch (GTN
  Magazine, a Japan-based relocation/expat guide): Japan runs 100V
  through the same flat two-pin Type A plug shape as North America;
  the 50Hz east/60Hz west frequency split (roughly at Shizuoka) dates
  to Meiji-era generator purchases, German (50Hz) for Tokyo, American
  (60Hz) for Osaka. Used the real Amazon Associates tag
  (`adamandlinds00-20`) on a generic search URL rather than a
  fabricated specific product link, same pattern as the packing-cubes
  post. Cover: no AL_Vault photo fits, searched Wikimedia Commons and
  found a real, licensed, directly on-topic photo of an actual
  Japanese outlet (a Lawson convenience store rest area, AC100V
  label visible, Kyu3/KKPCW, CC BY-SA 4.0), downloaded via the
  `Special:FilePath` `?width=` workaround, also reused in-body via a
  direct `upload.wikimedia.org` thumb URL (same pattern already used
  on `hiroshima-peace-memorial-museum-admission-cost`). Rolled length
  tier 3 (standard, 800-1,000 words) and format 10 (budget-tier
  framing) from CLAUDE.md's system; format 10 fit naturally (a cheap
  shape adapter vs. a pricier real voltage converter is a genuine
  budget/splurge split), no reroll needed. Landed at 907 words, within
  tier. Published 2026-11-03 as
  `japan-plug-adapter-voltage-converter-guide`, 907 words. Topic
  `en/travel-prep`. Zero uses of "actually" or "genuinely" in the
  published body (3 "actually" caught and cut across drafts). No
  `mark_photo_used` call, Commons photo, not AL_Vault.
