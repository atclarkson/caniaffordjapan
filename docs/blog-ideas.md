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
- **Does a Japan trip need a VPN, the China-censorship assumption
  corrected.** 02:00 UTC firing (2026-10-19, new day). Both priority
  sources exhausted again (same BLOCKED Ginza sumo idea, all three
  teamLab items still without real photos). Confirmed zero new
  AL_Vault uploads. Spent real effort checking several photo pools
  before pivoting (Katsushika, 37 photos, turned out to be home-life
  documentation from a residential stay, not attraction content;
  Urayasu/Disney, Kawasaki/Nihon Minkaen, Shinjuku/Godzilla, Minato,
  Chuo, Sumida/street-kart, Ota/Heiwa no Mori, Narita, Koto, and
  Bunkyo all confirmed already covered by existing posts or, for
  Katsushika and Narita, genuinely thin). Per CLAUDE.md's own
  explicit allowance, pivoted to a real, previously uncovered
  logistics topic sourced from `docs/affiliates-reference.md`: the
  IT category's ExpressVPN and NordVPN links, neither used anywhere
  on the site before. Researched real, current facts rather than
  assuming (Freedom House's 2025 Freedom on the Net report, Japan
  scored 78/100, rated "Free," no government website or social media
  blocking) and used that to correct a real, common misconception
  (confusing Japan with China's firewall) rather than inventing a
  myth to knock down, consistent with format 4's own stated rule.
  Also fact checked a separate real claim (VPNs getting cheaper
  flights, a real travel-TikTok trend) via multiple 2025 outlet tests
  (Tom's Guide, Express & Star), found it mostly didn't hold for
  flights, honestly flagged hotel/park regional pricing as thinner,
  anecdotal evidence rather than a settled result. Noted the real
  legal line (VPN use itself is legal, copyright piracy isn't, up to
  10 million yen and 2 years for the worst cases) and the real
  banking-app VPN-flagging caveat. Rolled length tier 1 (quick hit,
  450-600 words) and format 4 (myth-correction) from CLAUDE.md's
  system, no reroll needed, a real myth existed to correct. Published
  2026-10-19 as `vpn-japan-trip-do-you-need-one`, 572 words, within
  the rolled tier. Topic `en/unexpected-costs`. No AL_Vault photo
  existed that illustrates VPN use directly, so reused a real,
  previously unused photo instead ("Working From an Osaka Apartment
  in Spring 2023," `381dd3d`, a genuine family work-from-Japan desk
  photo), captioned honestly as a real moment rather than claimed as
  VPN-specific, the same honest-reuse pattern as the kids-debit-card
  post's Pokemon Center cover. `mark_photo_used` called for that
  cover photo. Both ExpressVPN and NordVPN links used with their real
  stated commission terms, verified present in the built HTML,
  presented neutrally as the family's own real accounts rather than
  a recommendation that either is needed for Japan specifically.
  Zero uses of "actually" or "genuinely" in the published body (2
  caught and cut, both from early headings).
- **The real Torikizoku receipt: 6,840 yen for five, 1,368 yen a
  head.** 08:00 UTC firing (2026-10-19). Both priority sources
  exhausted again (same BLOCKED Ginza sumo idea, all three teamLab
  items still without real photos). Confirmed zero new AL_Vault
  uploads. Checked Shibuya (otter cafe, already published) and then
  worked through Taito's full 122-photo pool, Tokyo's largest
  unexplored-feeling destination even though 20 existing posts
  already touch Asakusa; most of what's unused there is Kappabashi
  (already covered twice), Tiger Gyoza (already covered), and Ueno
  Zoo Halloween photos from a visit the existing
  `halloween-costumes-cost-tokyo-ueno-zoo-shinobazu` post already
  covers in depth. Found one genuinely unused, genuinely distinct
  artifact instead: a real October 26 2023 payment-terminal photo
  (`aa805093`, `used_in_count: 0`) showing the exact split bill from
  a Torikizoku dinner, 6,840 yen for the family of five, 1,368 yen
  per person, confirmed via its own `notes_for_ai` field as a real
  family favorite ("one of our FAVORITE chains in all of japan").
  Torikizoku is mentioned in passing in three existing posts (the
  Senso-ji free-temple post, the Osaka yakitori-vs-wagyu post, and
  the Hiroshima otoshi post) but had no dedicated post of its own and
  no post used this specific receipt, a genuinely different angle
  from those (an itemized walkthrough of the chain's actual real
  pricing mechanics, not a passing mention inside a different post's
  thesis). Researched real chain facts (founded 1985, 600+ Japan
  locations, 700+ worldwide, flat menu pricing confirmed at 390 yen
  by this site's own existing Osaka post and cross-checked against
  fresh web search, honestly flagged real per-branch/per-year
  variation from roughly 280 to 390 yen rather than treating 390 as
  fixed everywhere) and real ordering mechanics (tablet ordering with
  English available at most branches, a queue-number tablet at some
  locations, all-you-can-drink with a real roughly-two-hour peak-time
  limit, kamameshi needing a mid-meal order since it's cooked
  tableside). Rolled length tier 1 (quick hit, 450-600 words) and
  format 8 (itemized breakdown) from CLAUDE.md's system, no reroll
  needed, a genuine fit for a receipt-driven post. Published
  2026-10-19 as `torikizoku-yakitori-chain-bill-line-by-line`, 531
  words, within the rolled tier. Topic `en/budget-food`.
  `mark_photo_used` called for the cover photo. No AffiliateBox or
  Klook/GYG link, a walk-in chain izakaya isn't bookable, consistent
  with the existing Osaka izakaya post also carrying none. Zero uses
  of "actually" or "genuinely" in the published body (3 caught and
  cut, one from the first-draft title itself).
- **What's free vs. what isn't when hunting cheap flights to Japan.**
  14:00 UTC firing (2026-10-19). Both priority sources exhausted
  again (same BLOCKED Ginza sumo idea, all three teamLab items still
  without real photos). Confirmed zero new AL_Vault uploads. Finished
  working through Taito's full 122-photo pool (started last firing),
  everything remaining either duplicated existing posts (the
  September 2025 grill-it-yourself wagyu night is already fully
  covered in `ten-days-in-asakusa-september-2025`) or was thin
  home-life material. Checked Shibuya too (otter cafe, already
  published). Pivoted to a real, previously uncovered affiliate
  category per CLAUDE.md's own allowance: Skyscanner, from
  `docs/affiliates-reference.md`. While there, checked the adjacent
  LostPlate entry (flagged in that doc as needing a real Japan tour
  URL) by fetching lostplate.com directly: confirmed it runs no Japan
  tours at all, only China, Cambodia, Thailand, Vietnam, and
  Portland, updated the doc so a future firing doesn't re-check it.
  Rolled length tier 6 (extended feature, 1,600-2,000 words) and
  format 2 (free-vs-paid split) from CLAUDE.md's system; format 2
  landed on the same number on the one allowed reroll, decided it
  genuinely did fit after all with a free-strategies-vs-paid-airline-fees
  framing rather than rerolling again. Researched real facts rather
  than assuming: the incognito-mode flight-price myth (a 2016
  Consumer Reports test of 372 searches, plus a Berkeley/Yale/Chicago
  economist study of one airline's real pricing data, both finding no
  individual-tracking effect), real cheap-month consensus (late
  January to early March, September; premiums of 45-90% around cherry
  blossom season, Golden Week, and December holidays), real ANA/JAL
  baggage fee structures, the 2026 US-carrier checked-bag fee
  increase (~$45/~$55), and real 2026 round-trip price estimates by
  coast ($900-1,300 West, $1,100-1,600 East). Also researched a
  long-layover stopover strategy (Korean Air/EVA Air multi-city
  pricing) but honestly flagged that sourcing as thinner than the
  rest, travel blogs rather than airline-published policy, rather
  than presenting it with the same confidence as the rest. Added a
  worked family-of-five cost table (base fare vs. bag vs. seat fees)
  as a genuine expansion in the site's own established style.
  Published 2026-10-19 as
  `finding-cheap-flights-to-japan-whats-free-whats-not`, 1,340 words,
  landed short of the rolled tier 6 (closer to tier 4-5), said so here
  rather than padding further once the real, well-sourced material
  for a logistics-only topic with no personal trip to draw from was
  used up. Topic `en/unexpected-costs`. No AL_Vault photo exists of
  the actual booking process, so reused a real, previously unused
  inflight photo instead ("Nearly Empty Flight From Tokyo to Taipei,"
  `aa9bcb8c`, a real family flight, departing Japan rather than
  arriving, captioned honestly rather than claimed as the booking
  moment itself), the same honest-reuse pattern as prior logistics
  posts. `mark_photo_used` called for the cover photo. Skyscanner
  link verified present in the built HTML, used with no stated
  commission rate (none given in `affiliates-reference.md`, none
  invented). Zero uses of "actually" or "genuinely" in the published
  body (5 caught and cut across drafts).
- **A real capybara touch experience as the uncovered third stop on a
  Yokohama day.** 20:00 UTC firing (2026-10-19). Both priority
  sources exhausted again (same BLOCKED Ginza sumo idea, all three
  teamLab items still without real photos). Confirmed zero new
  AL_Vault uploads. First tried a Jackery (portable power bank)
  angle per `docs/affiliates-reference.md`, but caught a real
  mismatch before writing anything: web research showed Jackery's
  current lineup is dominated by larger Explorer-series power
  stations (e.g. 256Wh at $129), not small pocket phone chargers,
  reliable current pricing for the old pocket-sized "Bar" product
  couldn't be found (only decade-old reviews), so abandoned that
  angle rather than force a mismatched recommendation, the same
  discipline applied to the LostPlate finding earlier today. Pivoted
  back to AL_Vault and found a real, previously unused lead in
  Yokohama's own video descriptions: video 96 ("YOKOHAMA, JAPAN,"
  filmed December 2 2022, same day as the already-published Cup
  Noodles Museum visit) describes a real capybara touch experience
  the family visited that day, never covered on this site. Checked
  the thumbnail's tone first (a cheerful, appropriate family-animal
  photo, no concern) before using it as cover. Tried to identify and
  price the exact 2022 venue but hit real, genuine uncertainty:
  multiple differently-located Yokohama capybara-cafe businesses with
  overlapping names and conflicting reported prices (1,000 to 1,600
  yen at one, an unconfirmed 5,000 yen reported at another), decided
  the honest move was presenting a wide, clearly-hedged price range
  and telling readers to confirm with their specific venue, rather
  than asserting a single confident number the sourcing couldn't
  support. Added real, separately-sourced capybara background
  (native to South America, closely related to guinea pigs, a real
  calm temperament that's part of why the hands-on cafe format works)
  and a genuine, relevant welfare consideration (PETA's stated
  concerns about this cafe category) rather than treating the topic
  as cost-only. Cross-referenced the real, already-published Cup
  Noodles Museum (500 yen, +500 for a custom cup) and Christmas
  Market (500-1,000 yen) admission numbers rather than re-deriving
  them, to build an honest stacked-day estimate. Also found a second
  real, previously undocumented Viator link in this same video's own
  description, Yokohama-specific rather than the generic city page
  used for Kobe, added to `docs/affiliates-reference.md`. Rolled
  length tier 3 (standard, 800-1,000 words) and format 10
  (budget-tier framing) from CLAUDE.md's system; format 10 didn't
  fit, a single admission price has no real cheap-vs-splurge split,
  rerolled once per CLAUDE.md's allowance and landed on format 14
  (direct address), a genuine fit for planning advice aimed straight
  at a reader. Published 2026-10-19 as
  `capybara-touch-experience-yokohama-day-trip-cost`, 865 words,
  within the rolled tier. Topic `en/animals-wildlife`. Viator link
  verified in the built HTML. Zero uses of "actually" or "genuinely"
  in the published body (4 caught and cut across drafts). No
  `mark_photo_used` call, video-only source.
- **Sanrio Puroland's real birthday visit and the August 2026 dynamic-pricing
  change.** 02:00 UTC firing (2026-10-20, new day). Both priority
  sources exhausted again (same BLOCKED Ginza sumo idea, all three
  teamLab items still without real photos). Confirmed zero new
  AL_Vault uploads. Rather than re-mining the same small neighborhood
  pools again, checked the large, mostly-unmined `Tokyo` city-level
  video pool (41 videos, only a few used across the whole site so
  far). Found a real, completely uncovered attraction: Sanrio
  Puroland, visited for Cora's 6th birthday (March 2023), confirmed
  via `grep` that only a passing Klook-pass mention existed, no
  dedicated post. A real, unused still photo existed for this exact
  visit ("Cora Turns Six at Sanrio Puroland," `67778405`,
  `used_in_count: 0`), so used that as cover instead of a video
  thumbnail, the first time in several firings a still photo rather
  than a video thumbnail was available. Found a third real,
  previously undocumented Viator link in the video's own description,
  this one a specific bookable product (Sanrio Puroland tickets)
  rather than a tour, added to `docs/affiliates-reference.md`
  alongside the Kobe and Yokohama ones. Researched real, current
  pricing rather than quoting the video's own vague framing: Sanrio
  Puroland's dynamic, date-based pricing structure, including a real
  tier increase that took effect August 1 2026 (adult day passes now
  3,900-6,900 yen, under-18/senior 2,800-5,800 yen, under 2 free), and
  the Fast Pass system (sold per-ride at machines near each
  attraction, 500-2,000 yen depending on the ride per multiple
  sources, honestly flagged as inconsistently reported rather than
  picking one figure to state as fact). Cross-referenced the video's
  own real logistics (Shinjuku to Tama train, a Sushiro dinner, a
  Shinjuku Gigo arcade stop) rather than inventing a different
  itinerary. Rolled length tier 1 (quick hit, 450-600 words) and
  format 2 (free-vs-paid split) from CLAUDE.md's system; format 2
  didn't fit, nothing about a fully paid theme park is free, rerolled
  once per CLAUDE.md's allowance and landed on format 14 (direct
  address), a genuine fit for "here's what changed, here's what to
  know before you book." Published 2026-10-20 as
  `sanrio-puroland-ticket-price-worth-it`, 475 words, within the
  rolled tier. Topic `en/theme-parks`. `mark_photo_used` called for
  the cover photo. Viator link verified in the built HTML. Zero uses
  of "actually" or "genuinely" in the published body (3 caught and
  cut across drafts).
- **Is the Pokémon Café in Nihonbashi worth its notoriously brutal
  booking system.** 08:00 UTC firing (2026-10-20). Both priority
  sources exhausted again (same BLOCKED Ginza sumo idea, all three
  teamLab items still without real photos). Confirmed zero new
  AL_Vault uploads. Went back to the large `Tokyo` city-level video
  pool that surfaced Sanrio Puroland last firing and found another
  real, completely uncovered visit: the Pokémon Café in Nihonbashi,
  filmed October 18 2023 during a visit from the site owner's
  parents, including her father's 70th birthday, confirmed real via
  the video's own `notes_for_ai`. Confirmed via `grep` this is
  distinct from the already-published Pokémon Center Tokyo DX post,
  a different real location and business entirely. Checked the
  thumbnail's tone before using it as cover (cheerful, clear, no
  concern). No Klook or Viator listing found for a guaranteed
  reservation, consistent with research showing the café only
  accepts bookings through its own official site, so skipped
  AffiliateBox entirely rather than force a mismatched or unverified
  third-party link. Researched real, current facts: the café's
  genuinely brutal 31-day-ahead, 6pm-JST booking window (site
  regularly crashes, slots sell out in seconds), its real March-June
  2026 renovation closure and reopening (directly relevant given
  today's date), real history (opened March 14 2018, the first
  permanent official Pokémon café, ~100,000 visitors in its first six
  months, a second Osaka location since September 2019), and real
  operational detail (140-seat communal tables, a hard 90-minute time
  limit, a 15-minute late cutoff, group size honestly flagged as
  conflicting between sources, 6 to 8 depending on which guide).
  Cross-referenced the real, already-published Pokémon Center Tokyo
  DX pricing post rather than re-deriving it when discussing the
  café's own separate merchandise line. Rolled length tier 5 (deep
  dive, 1,300-1,600 words) and format 3 (question title, verdict at
  the end) from CLAUDE.md's system, no reroll needed. Published
  2026-10-20 as `pokemon-cafe-tokyo-reservation-worth-it`, 1,122
  words, landed short of the rolled tier 5, said so here rather than
  padding further once the real material for a single-location cafe
  (history, booking mechanics, seating rules, pricing, merchandise)
  was used up. Topic `en/tokyo`. Zero uses of "actually" or
  "genuinely" in the published body (6 caught and cut across
  drafts). No `mark_photo_used` call, video-only source.
- **A real Tokyo Oktoberfest, filmed the last week of May.** 14:00
  UTC firing (2026-10-20). Both priority sources exhausted again
  (same BLOCKED Ginza sumo idea, all three teamLab items still
  without real photos). Confirmed zero new AL_Vault uploads. Checked
  the `Tokyo` city-level video pool again (the same pool that
  surfaced Sanrio Puroland and the Pokémon Café the last two firings)
  and found a real, completely uncovered visit: "145 | TOKYO
  OKTOBERFEST," filmed the last week of May 2023, the video's own
  description noting the real surprise directly ("We went to
  Oktoberfest... in May.... in Tokyo"). Checked the thumbnail's tone
  first (cheerful adult beer-festival content, no concern) before
  using it as cover. Couldn't confirm the exact venue from the
  video's own ambiguous "Ochanomizu" chapter marker against any real
  event listing, so wrote the post honestly describing Tokyo's
  recurring circuit of Oktoberfest-branded beer gardens at named real
  venues (Shiba Park spring/autumn, Odaiba spring) rather than
  asserting a specific unconfirmed location for the family's own
  visit. Researched real, substantial history on both sides of the
  "not October" hook: Munich's own Oktoberfest moved its start into
  September generations ago for better weather, keeping only its
  final weekend in October, and Japan's own beer garden tradition
  predates any Oktoberfest branding by about 150 years (Yokohama
  1875, the first rooftop version traced to Osaka 1953, modern Tokyo
  department-store rooftop gardens running May-September). Also used
  a real, photo-grounded detail: the Hacker-Pschorr brand visible on
  the mugs in the family's own cover photo, a real, officially
  recognized Oktoberfest brewery with roots to 1417, researched
  independently rather than left uncaptioned. Researched real current
  pricing from Shiba Park's recurring events (500 yen admission 12+,
  free under 11, a reusable cup included with admission, food and
  drink charged separately, cashless payment accepted) and real
  hours (shorter weekday windows). Added a genuine family-logistics
  section (a real beer garden, not a kids' attraction, though
  genuinely kid-friendly food and free admission for young kids).
  Rolled length tier 6 (extended feature, 1,600-2,000 words) and
  format 11 (time/season-anchored) from CLAUDE.md's system, no reroll
  needed, a strong natural fit given the whole hook is the real,
  specific May date. Published 2026-10-20 as
  `tokyo-oktoberfest-beer-garden-not-october-cost`, 1,399 words,
  landed short of the rolled tier 6 despite substantial real
  expansions (Munich history, Japan's own beer garden history, the
  Hacker-Pschorr detail, a kids section), said so here rather than
  padding further once the genuinely sourced material for a single
  beer-festival visit was used up. Topic `en/tokyo`. No AffiliateBox,
  a park beer festival isn't Klook/GYG bookable. Zero uses of
  "actually" or "genuinely" in the published body (7 caught and cut
  across drafts). No `mark_photo_used` call, video-only source.
- **A real, itemized Day 0 arrival budget, and the luggage-forwarding
  service most first-timers don't know exists.** 20:00 UTC firing
  (2026-10-20). Both priority sources exhausted again (same BLOCKED
  Ginza sumo idea, all three teamLab items still without real
  photos). Confirmed zero new AL_Vault uploads. Checked the `Tokyo`
  video pool one more time (the pool that's now surfaced Sanrio
  Puroland, the Pokémon Café, and Tokyo Oktoberfest across the last
  three firings) and found a genuinely strong, completely uncovered
  source: "QUICK GUIDE LANDING IN TOKYO! First 24 Hours," whose own
  description contains a real, itemized Day 0 cost breakdown down to
  the yen (luggage forwarding 6,926 yen, pocket wifi 8,008 yen, eSIM
  1,939 yen, accommodation 27,475 yen, snacks 3,472 yen, dinner 5,940
  yen, transportation 8,950 yen, total 62,710 yen / ~$401.34 at the
  stated exchange rate). Confirmed via `grep` this exact itemized
  breakdown and the luggage-forwarding topic were both completely
  uncovered on the site. Previewed the thumbnail before using it as
  cover (a cheerful, clear airport photo, no tone concern), corrected
  the `coverAlt` to describe what it actually shows (a running cost
  counter, not a generic "tips" graphic) rather than reusing boilerplate
  phrasing. Researched real current luggage-forwarding (takuhaibin)
  pricing to supplement the video's own single data point (roughly
  2,000-3,200 yen per bag depending on source, airport-to-hotel
  service available at Narita, Haneda, Kansai, and Chubu Centrair)
  and real Visit Japan Web mechanics (free, browser-based, combines
  immigration and customs into one QR code, usable at Haneda/Narita/
  Kansai self-service kiosks, register 6+ hours ahead). Cross-
  referenced two already-published posts honestly rather than
  re-deriving them: the real eSIM/SIM/pocket-wifi comparison post and
  the real Narita-to-Tokyo transit post (Skyliner, N'EX, bus, local
  train fares). Confirmed SimLocal (the video's own eSIM sponsor) is
  already documented in `telecomAffiliates.ts`, no new affiliate work
  needed. Rolled length tier 3 (standard, 800-1,000 words) and format
  15 (plain declarative) from CLAUDE.md's system, no reroll needed.
  Published 2026-10-20 as `landing-in-tokyo-day-zero-cost-breakdown`,
  805 words, within the rolled tier. Topic `en/transit`. No
  AffiliateBox, arrival-day logistics aren't a single Klook/GYG
  bookable item. Zero uses of "actually" or "genuinely" in the
  published body (2 caught and cut across drafts). No
  `mark_photo_used` call, video-only source.
