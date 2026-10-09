# Blog article ideas

A running backlog, not a schedule. Add to this whenever an idea comes up.
The daily post routine (CLAUDE.md) checks `src/data/posts/en/` for what's
already covered and `docs/klook-priority-activities.md` for Klook priority
activities first; this file is the third place to check for what's next,
picked whenever nothing higher priority fits that day.

Move an idea to "Done" with a link to the post once it's published, don't
delete it. Older "Done" entries get moved out to numbered archive files
(`docs/blog-ideas-archive-1.md`, `-2.md`, and so on, oldest entries in the
lowest-numbered file) when this file nears the house-lint 400-line cap.
The archive files themselves get the same treatment once they fill up,
start a new `-N.md` rather than letting any single one grow past the cap.
`docs/blog-ideas-archive.md` (no number) is a stub pointing here, its
content lives in the numbered files now. Check the archive files if you
need provenance on a post published before 2026-10-07 (02:00 UTC).

## Ideas

- **BLOCKED, no real material yet: Ginza sumo experience, with the
  Klook code.** A real, current lead as of 2026-09-12: a Klook
  marketing email (fall flash sale, forwarded by the site owner)
  featured "Tokyo Ginza Sumo Experience," 50% off, 4.8 stars, 10K+
  booked. That's Ginza, not Asakusa, note the correct neighborhood
  rather than the original idea's guess. Checked AL_Vault on
  2026-09-12 (`search_photos text: "sumo"`), zero results, the family
  has never actually done this. Per the site's own rule, real trips
  only, don't write this from the marketing email alone. Stays
  blocked until there's a real visit to draw from. If one happens: the
  email had no clickable links (a flattened print-to-PDF), find the
  real Klook activity page URL independently (web search
  "site:klook.com Tokyo Ginza Sumo Experience" worked for the
  Disney/USJ post) before using klookRedirect, and note that
  ADAMANDLINDSKLOOK's general new/existing user tiers apply to any
  Klook cart over $50 regardless of activity, only the separate 1%
  tier is restricted to the named list in `klookCode.ts`, so the code
  is worth including either way. Flash sale discounts like the 50%
  off seen in the email are time limited, verify the current rate
  before publishing rather than quoting September's number.
## Done
- **Tokyo Solamachi, the free mall Skytree's own ticket post never
  covered.** 14:00 UTC firing. Both priority sources exhausted again
  (same BLOCKED Ginza sumo idea, all three teamLab items still
  without real photos). Checked Nara (7-photo pool, but 5 of 7
  already used by the existing dedicated Nara post, the 2 remaining
  unused photos same-day near-duplicates of what's published,
  skipped), Shibuya (25 photos, nearly all from the already-covered
  otter cafe visit), and Katsushika's remaining unused clusters
  (previewed 11 candidates, all either Father's Day cards, a
  railway crossing, home-life ephemera, or extra Harper's-birthday
  shots already covered, confirmed thin via `preview_photo` rather
  than trusting alt-text alone) before finding 3 real unused Sumida
  photos geolocated to Oshiage, right at Skytree's own base: cherry
  blossoms framing the tower (March 2023), a beer at street level
  (June 2024), and the Kura Sushi flagship's lantern walkway (June
  2024), 3 separate real visits. Rolled length tier 4 (long,
  1,000-1,300 words) and format 11 (time/season anchored) from
  CLAUDE.md's system; format 11 didn't fit material spanning 3
  different real visits over 15 months rather than one anchored day,
  rerolled once per CLAUDE.md's allowance and landed on format 13
  (history-led). Published 2026-10-07 as
  `tokyo-solamachi-free-shopping-kura-sushi-skytree-base`, 977 words
  (just under the tier 4 floor, genuinely couldn't stretch further
  without padding, said so here), topic `en/towers-observation-decks`.
  The real hook: Tokyo Solamachi (312 shops, free admission) opened
  the exact same day as the tower itself, May 22 2012, not a later
  add-on. Verified Kura Sushi's Oshiage flagship is a real title
  holder, the world's largest conveyor-belt sushi restaurant (834
  sqm, 277 seats, 2 floors), real 110-150 yen plate pricing, and a
  location-specific Bikkura Pon detail (two capsule toys per 5
  plates here, versus the usual one elsewhere). Added real Sumida
  Aquarium (2,700 yen adult) and Planetarium Tenku (1,500 yen adult)
  pricing as the "what else costs money here" cross-reference, and
  the real free Jikkenbashi reflection-photo bridge (built 1939) for
  the ground-level Skytree view. Cross-referenced the existing
  Skytree ticket post's dynamic pricing honestly rather than
  re-deriving it, reused the same real Klook activity listing
  (41352) since it's the same tower's ticket, full AffiliateBox and
  KlookCodeBox. Zero uses of "actually" or "genuinely" in the
  published body (2 caught and cut from section headings).
- **A West Shinjuku izakaya dinner, crab and melon soda, no
  receipt.** 20:00 UTC firing. Both priority sources exhausted again
  (same BLOCKED Ginza sumo idea, all three teamLab items still
  without real photos). Checked Shinjuku's photo pool (21 photos)
  and confirmed the Godzilla/torii cluster already has its own post;
  found a separate, real unused 4-photo cluster from a different
  visit, May 19 2024: a West Shinjuku playground, an izakaya dinner
  with a shared crab dish and bright green melon soda, and a night
  walk through Kabukicho. No restaurant name identifiable from
  geolocation alone (a Nishi-Shinjuku business-district coordinate,
  not a named landmark), so leaned on real research rather than
  guessing a name. Rolled length tier 4 (long, 1,000-1,300 words)
  and format 15 (plain declarative) from CLAUDE.md's system, no
  reroll needed. Published 2026-10-07 as
  `west-shinjuku-izakaya-crab-melon-soda-dinner-cost`, 925 words
  (just under the tier 4 floor, genuinely couldn't stretch further
  without inventing a restaurant name or padding, said so here),
  topic `en/budget-food`. The real myth-correction: Japan's green
  melon soda doesn't taste like real melon, sources disagree on its
  exact origin (Taisho-era kissaten vs. 1970s "cream soda"
  popularization), said so plainly rather than picking one account
  as settled. Added a real, dateable adjacent fact: ramune itself
  (the format melon soda is often sold in) traces to 1884, introduced
  in Kobe by Alexander Cameron Sim, melon a later flavor variant.
  No receipt for the crab, so researched the real range instead
  (Kani Isshin Shinagawa ~8,888 yen all-you-can-eat, Kani Shin Ueno
  ~7,000 yen dinner average) and honestly noted neither matches a
  single shared dish, plus a real seasonal-honesty detail: zuwaigani
  season runs roughly November-March, so a May crab dish was very
  likely frozen rather than fresh-caught. Checked whether an
  affiliate link fit: found a real Klook Kabukicho nightlife
  bar-hopping tour (activity 158212) but judged it a genuine mismatch
  for a post centered on a family dinner with five kids, skipped it
  rather than forcing an unrelated link in. Zero uses of "actually"
  or "genuinely" in the published body (2 caught and cut).
- **An ordinary evening in Chiba: a free Mount Fuji view, pizza, and
  a beer.** 02:00 UTC firing (2026-10-08). Both priority sources
  exhausted again (same BLOCKED Ginza sumo idea, all three teamLab
  items still without real photos). Checked Kawasaki's remaining
  Nihon Minkaen-adjacent cluster (two existing posts already cover
  that site thoroughly, including a "travel friends" meetup with no
  real cost angle), Bunkyo (Tokyo Dome overflow already covered
  twice, one thin unrelated train selfie), and Minato (teamLab
  Borderless and Tokyo Tower overflow, both already covered)
  before finding a real, previously untouched city: Chiba, a
  December 2023 apartment stay, 4 unused photos across two separate
  evenings. Rolled length tier 6 (extended feature, 1,600-2,000
  words) and format 10 (budget-tier framing) from CLAUDE.md's
  system. Neither fit: tier 6 would have required inventing detail
  for an evening with no receipts and no named venues, and format 10
  needs a cheap-vs-splurge pair of the same thing, which this mixed
  material (a view, a pizza, a beer) doesn't have. Rerolled format
  once per CLAUDE.md's allowance, landed on format 14 (direct
  address). For length, picked different, broader material instead
  of forcing the original single-photo idea (a Fuji view alone)
  into tier 6, then still landed well short of even that broadened
  tier 6 roll once drafted honestly, said so here rather than
  padding. Published 2026-10-08 as
  `chiba-apartment-pizza-beer-mount-fuji-view-cost`, 634 words (tier
  2 territory), topic `en/unexpected-costs`. Verified Mount Fuji's
  real visibility from Chiba via web search: roughly 120-130 km
  straight-line distance, confirmed by multiple sources plus a
  direct coordinate estimate, the Boso Peninsula's low elevation
  giving an unobstructed sightline, winter air clarity helping.
  Found a second unused photo from the same window showing an
  unidentified industrial night scene and said plainly we don't know
  what it is rather than guessing a landmark. No receipts for the
  pizza or the beer, researched real honest benchmarks instead: casual
  Japanese pizza spots commonly run 1,200-2,500 yen (with the real
  "Japanese large equals Western medium" sizing quirk flagged), and
  Tokyo's own government CPI "beer, eating out" index at 667 yen for
  January 2026, clearly labeled as an index figure rather than a
  specific menu price. No AffiliateBox, nothing on the page is
  bookable (an apartment view, two unnamed casual restaurants). Zero
  uses of "actually" or "genuinely" in the published body (2 caught
  and cut from drafts).
- **Is DisneySea's theming worth it without riding anything.** 08:00
  UTC firing. Both priority sources exhausted again (same BLOCKED
  Ginza sumo idea, all three teamLab items still without real
  photos). Scanned the Urayasu pool (21 photos) and found 2 real
  unused photos from a September 2025 DisneySea day, distinct from
  what the existing Beast's Castle, ticket-price, and extra-costs
  posts already used: Arabian Coast's domed architecture and Mount
  Prometheus, the park's volcano, lit up at night. Rolled length
  tier 5 (deep dive, 1,300-1,600 words) and format 3 (question
  title, build to a verdict) from CLAUDE.md's system, no reroll
  needed. Published 2026-10-08 as
  `disneysea-ports-of-call-theming-worth-it-without-rides`, 918
  words (landed short of tier 5's floor, 2 photos genuinely couldn't
  stretch further without restating facts, said so here rather than
  padding), topic `en/theme-parks`. The real hook: DisneySea has no
  "lands" like every other Disney park, just 7 original fictional
  "ports of call," opened 2001-09-04 after roughly 3 years of
  construction at a real 335 billion yen cost. Added real Mount
  Prometheus detail (189 feet, 750,000 sq ft of sculpted rockwork,
  10 rocket boosters producing real 50-foot flames, houses 2 real
  rides) and real Fantasy Springs detail (the 2024 eighth port, 320
  billion yen, 140,000 sqm, Frozen/Tangled/Peter Pan themed areas)
  including the one detail that directly answers the post's own
  question: a standard ticket gives free walking access to the
  whole Fantasy Springs area, only the 3 specific rides inside cost
  extra (2,000 yen each via Premier Access). Added real, honestly
  caveated 2024 attendance context (12.4 million visitors, 7th most
  visited theme park worldwide per independent estimates, Disney
  itself publishes no official park-level figures). Cross-referenced
  the site's existing Disney-vs-USJ ticket pricing (7,900-10,900 yen)
  honestly rather than re-deriving it. Reused the existing Tokyo
  Disney Resort 1-Day Passport Klook listing (activity 695) since
  it's the same real bookable ticket, full AffiliateBox and
  KlookCodeBox. Zero uses of "actually" or "genuinely" in the
  published body (3 caught and cut from drafts).
- **A Mario welcome sign and a paid lounge at Narita Airport.** 14:00
  UTC firing. Both priority sources exhausted again (same BLOCKED
  Ginza sumo idea, all three teamLab items still without real
  photos). Checked Sakai (all remaining unused photos overflow from
  the already-covered Lindsay's-40th teppanyaki dinner and Round1),
  then found a genuinely untouched city: Narita, 10 photos, mostly
  flight/departure shots already covered by an existing post, but 2
  real unused photos stood out, a Mario-themed "Welcome to Japan"
  escalator display (May 2024) and a paid airport lounge stop
  (December 2023, different trip). Rolled length tier 6 (extended
  feature, 1,600-2,000 words) and format 5 (narrative-first, cost as
  payoff) from CLAUDE.md's system, no reroll needed. Tier 6 didn't
  fully hold up: even after substantial real research (Narita's
  Sanrizuka Struggle history, the still-unresolved Takao Shito
  farmland holdout, real lounge and transit pricing, a real Klook
  Skyliner listing), 2 photos topped out at 985 words honestly,
  documented here rather than padding further. Published 2026-10-08
  as `narita-airport-mario-sign-lounge-history-transit-cost`, topic
  `en/transit`. Honestly hedged the Mario sign: web search confirmed
  only a real but temporary 2-day June 2022 Nintendo Check In
  promotion, not a permanent fixture, so the post says plainly we
  can't confirm whether our May 2024 photo shows the same display
  extended, a second run, or something else entirely. Honestly
  ranged the lounge cost too (1,600-13,200 yen depending on lounge
  and airline) since the specific lounge in the photo isn't
  identifiable. Added real, verified Sanrizuka Struggle history
  (1966 opposition league founding, 3 police deaths in a 1971
  expropriation, the March 1978 control tower occupation delaying
  opening roughly 2 months) and the real, still-unresolved Takao
  Shito case (a farmer's land forcing runway B's taxiway to bend
  around his plot, a 2022 eviction order, 2023 skirmishes, current
  status unconfirmed past early 2023, said so plainly). Added real
  current transit pricing across 4 real options (Skyliner, Narita
  Express, limousine bus, and the budget Keisei-plus-JR-transfer
  combo). Found a real, well-established Klook Skyliner listing
  (activity 1410, 3M+ booked) to add as a genuine affiliate fit,
  full AffiliateBox and KlookCodeBox. Zero uses of "actually" or
  "genuinely" in the published body (2 caught and cut).
- **Ginza's main street has been car-free on weekends since 1970.**
  20:00 UTC firing. Both priority sources exhausted again (same
  BLOCKED Ginza sumo idea, ironically, all three teamLab items still
  without real photos). Checked Chuo ward's small pool (6 photos) and
  found a real unused photo, the family standing in the middle of a
  closed-off Ginza street, March 21 2023; the only other unused
  photo in the pool was a Pokemon Center overflow shot from a visit
  the existing Pokemon Center post already covers, skipped as a
  near-duplicate. Rolled length tier 2 (short, 600-800 words) and
  format 13 (history-led) from CLAUDE.md's system, no reroll needed.
  Published 2026-10-08 as
  `ginza-hokosha-tengoku-pedestrian-paradise-free`, 631 words, topic
  `en/free-attractions`. The real hook: Chuo-dori closes to cars
  every weekend and public holiday, noon-5pm, a tradition called
  Hokosha Tengoku (Hokoten) dating to August 1970, Japan's first
  "pedestrian paradise." Solved a real puzzle honestly: the photo is
  dated a Tuesday, explained by verifying March 21 2023 was Vernal
  Equinox Day, a genuine Japanese national holiday whose date is
  recalculated by astronomical observation each February rather than
  fixed on the calendar. Added real, honestly-hedged "Gin-bura" slang
  history (two competing, undocumented origin stories) and the
  annual Gin-bura Festival. Cross-referenced the site's existing
  Pokemon Center and Sanrio-plush Ginza posts honestly rather than
  re-deriving Ginza's cost reputation. No specific klook.com activity
  URL could be confirmed for a Ginza walking tour despite checking,
  so used AffiliateBox's query-based Klook search link instead of a
  fabricated deep link (per CLAUDE.md's rule against inventing URLs),
  and added KlookCodeBox pointing at that same real search URL via
  `affiliates.klook.searchUrl()` since any Klook link at all requires
  the code box. Zero uses of "actually" or "genuinely" in the
  published body.
- **Tempozan Bridge's real seasonal lighting colors.** 02:00 UTC
  firing (2026-10-09). Both priority sources exhausted again (same
  BLOCKED Ginza sumo idea, all three teamLab items still without
  real photos). This firing's search was unusually long: checked
  Yokohama (the one unused photo was another angle of the same
  illuminated YOKOHAMA sign the existing Cup Noodles/Sankeien post
  already uses), Koto (the only unused photo was the Unicorn Gundam
  statue at DiverCity, disqualified outright, the existing Doraemon/
  Odaiba post already states plainly that statue's display run ended
  August 31 2026 and writing a fresh "go see it free" post today
  would be stale, wrong information), Hakone (the remaining unused
  photos were either Lake Ashi pirate-ship overflow or a weaker
  angle of the Hakone Shrine floating torii the existing Hakone Free
  Pass post already covers with a better photo), Uji (all remaining
  unused photos were overflow from exhibits the existing Nintendo
  Museum post already shows), Chiyoda and Matsudo (single thin,
  unidentifiable photos, no real angle) before finding a real lead
  back in Osaka's own pool: an unused night photo from the family's
  Osaka apartment window showing both the Tempozan Ferris Wheel and,
  behind it, a cable-stayed bridge lit entirely pink. Rolled length
  tier 5 (deep dive, 1,300-1,600 words) and format 6 (head-to-head
  comparison) from CLAUDE.md's system. Format 6 didn't fit once
  checked against the existing Kaiyukan/Tempozan post, which already
  covers the Ferris Wheel's real 900 yen price in its own "third
  option" section, a true head-to-head would have re-derived that
  rather than adding anything new, so a second AffiliateBox pointing
  at the same ticket the existing post already covers didn't belong
  here either. Rerolled format once per CLAUDE.md's allowance,
  landed on format 15 (plain declarative). Published 2026-10-09 as
  `tempozan-bridge-seasonal-colors-osaka-free-view`, 695 words
  (landed well short of tier 5, a single photo of a bridge genuinely
  couldn't stretch further without padding even after real research,
  said so here), topic `en/free-attractions`. The real hook,
  verified via Japanese-language web search after the photo's own AI
  caption misnamed the bridge: Tempozan Bridge (640m cable-stayed,
  crossing the Ajikawa River) runs a real, documented seasonal LED
  lighting scheme, sakura pink in spring, light blue in summer, gold
  in autumn, warm white in winter, and the photo's April 23 2026 date
  lines up exactly with its pink spring color. Added real context on
  why the bridge briefly ran different colors during the 2025 Osaka
  Expo (a special blue/red/white scheme that ended with the Expo in
  October 2025) and real history on the Ajikawa River itself (dug
  1684 as a flood-control channel, became Osaka Port's gateway,
  the port's own founding dated to July 15 1868). Said plainly that
  the bridge's own opening year couldn't be confirmed rather than
  guessing. Cross-referenced the existing Kaiyukan/Tempozan post's
  real 900 yen Ferris Wheel price honestly instead of re-deriving it.
  No AffiliateBox, the post is about a free view, not a bookable
  activity, and the relevant affiliate link already lives on the
  post this one cross-references. Zero uses of "actually" or
  "genuinely" in the published body (1 caught and cut from a draft).
- **Japan's clear vinyl umbrella, real history and lost-and-found
  numbers.** 08:00 UTC firing (2026-10-09). Both priority sources
  exhausted again (same BLOCKED Ginza sumo idea, all three teamLab
  items still without real photos). Checked Urayasu's remaining
  Disneyland/DisneySea material (castle and tree-stump photos, all
  risking heavy overlap with the existing ticket-price, extra-costs,
  Beast's Castle, and DisneySea-ports posts) before pivoting to a
  single real unused Osaka photo near the family's own apartment: a
  rainy-night street walk under a clear vinyl umbrella, no
  identifiable landmark. Rolled length tier 5 (deep dive, 1,300-1,600
  words) and format 15 (plain declarative) from CLAUDE.md's system,
  no reroll needed. Published 2026-10-09 as
  `japan-clear-vinyl-umbrella-cost-history-lost-and-found`, 825
  words (landed short of tier 5, an everyday object with one photo
  and no attraction genuinely couldn't stretch further without
  padding even after real research, said so here), topic
  `en/unexpected-costs`. The real material: wagasa, Japan's
  pre-plastic oiled-paper folding umbrella, real Edo-period history
  (Gifu alone shipping an estimated 520,000 a year to Edo at its
  peak, a single umbrella taking months to make but lasting up to a
  decade) and its real Meiji-era decline once Western umbrellas
  arrived. Added the clear umbrella's own honestly-hedged origin (two
  competing, undocumented 1958 stories), real current convenience
  store pricing (300-1,000 yen), real konbini restocking behavior at
  the first sign of rain, and real, striking lost-and-found numbers:
  Tokyo police took in roughly 300,000 umbrellas in one recent year
  with only 3,700 ever reclaimed (about 1 percent), Nagoya Railroad's
  FY2025 figures showing a similar pattern. Added real umbrella
  vending/rental-machine options (roughly 500 yen to buy, or a real
  Tokyo sharing service at 140 yen/24hr or 280 yen/month). No
  AffiliateBox, an everyday umbrella isn't Klook/GYG bookable. Zero
  uses of "actually" or "genuinely" in the published body (5 caught
  and cut from drafts).
- **Sumida River Walk, the free bridge, and the night grandparents
  found us.** 14:00 UTC firing (2026-10-09). Both priority sources
  exhausted again (same BLOCKED Ginza sumo idea, all three teamLab
  items still without real photos). Re-scanned Taito's full 118-photo
  pool one more time rather than checking smaller, more marginal
  cities, and found a titled, previously overlooked unused photo:
  "Grandparents Meet Us in Tokyo at Night," geolocated to Hanakawado
  1, the same neighborhood as the existing Asahi Flamme d'Or post but
  a genuinely different real moment, Adam's parents meeting the family
  on a lit pedestrian bridge the night they flew in. Rolled length
  tier 5 (deep dive, 1,300-1,600 words) and format 1 (price-first, no
  verb in the title) from CLAUDE.md's system, no reroll needed, format
  1 hadn't been used in any recent firing. Published 2026-10-09 as
  `sumida-river-walk-free-asakusa-skytree-bridge-grandparents`, 1,229
  words (landed just under tier 5's floor after two genuine
  expansions, a getting-there section and a permanent-features section,
  a single photo with no receipts couldn't stretch further without
  padding, said so here), topic `en/free-attractions`. The real hook:
  identified the bridge as the Sumida River Walk, a free pedestrian
  passage Tobu Railway attached to its own Sumida River railway
  bridge between Asakusa and Tokyo Skytree stations, opened June 2020
  per Tobu's own notice (an earlier search had turned up conflicting
  secondary sources before the primary source settled it). Added the
  real Tokyo Mizumachi/Tokyo Solamachi naming pair, cross-referencing
  the site's own existing Solamachi post honestly rather than
  re-deriving it. Verified the photo's exact lighting via a real,
  documented bamboo lantern event (Tobu's "Tokyo Shitamachi Tour,"
  November 9 2023 through January 31 2024) running along this same
  bridge, dates that line up exactly with the photo's November 17
  2023 capture, distinct from the bridge's own permanent nightly
  lighting. Added real transit comparison (Tobu's own 18-minute walk
  estimate vs. a roughly 2-3 minute one-stop train ride, no fare
  quoted since none could be confirmed) and two real permanent
  features, the glass floor section and the hidden Sorakara-chan
  mascot spots. No AffiliateBox, nothing new on the page is bookable;
  cross-referenced the existing Skytree ticket post and the Asahi
  Flamme d'Or post's Sumida River cruise link instead of duplicating
  either. Zero uses of "actually" or "genuinely" in the published body
  (2 caught and cut from drafts).
