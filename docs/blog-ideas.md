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
- **Moving day: what a month-long furnished Tokyo stay really costs a
  family of five.** 20:00 UTC firing (2026-10-21). Both priority
  sources exhausted again (same BLOCKED Ginza sumo idea, all three
  teamLab items still without real photos). Confirmed zero new
  AL_Vault uploads. Checked the `Tokyo` video pool again and found a
  real, completely uncovered logistics angle: "132 | MOVING
  APARTMENTS IN TOKYO," filmed May 2023, the video's own thumbnail
  asking "Is Japan Too Expensive?" directly. Confirmed via `grep`
  this site had never covered long-term apartment rental logistics at
  all, despite it being a real, recurring part of how this
  full-time-traveling family actually stays in Japan. Checked the
  thumbnail's tone before using it as cover (cheerful, on-brand, no
  concern). No AL_Vault still photo exists for this topic, used the
  video thumbnail. Researched real, substantial logistics most
  tourist content never covers: why a standard Japanese lease isn't
  realistic for a short-term family stay (shikikin deposit, reikin
  key money, agency and guarantor-company fees totaling a real
  4-6x-monthly-rent upfront cost, plus the traditional
  Japanese-guarantor requirement), the real furnished-rental
  alternative industry that exists specifically to solve that
  (Sakura House's no-deposit/no-key-money model, 90+ locations;
  Oakhouse's real current ~73,000 yen/month listing with its own fee
  structure; broader 105,000-140,000 yen/month estimates), and UR
  housing as a real, genuinely foreigner-friendly government option
  honestly noted as inapplicable to a tourist-visa family. Worked
  real per-night math for a family of five against hotel
  extra-occupancy pricing rather than asserting the apartment route
  is automatically cheaper. Added a real, current (early 2026)
  grocery-vs-eating-out cost section, honestly noting the
  cooking/eating-out price gap has narrowed recently rather than
  repeating an older, wider estimate. Rolled length tier 5 (deep
  dive, 1,300-1,600 words) and format 5 (narrative-first, cost as
  payoff) from CLAUDE.md's system, no reroll needed, a real scene
  existed to open with (the actual moving day). Published 2026-10-21
  as `monthly-apartment-rental-tokyo-vs-hotel-long-stay-cost`, 1,062
  words, landed short of the rolled tier 5, said so here rather than
  padding further once the real, well-sourced material was used up.
  Topic `en/unexpected-costs`. No AffiliateBox, apartment rental
  platforms aren't Klook/GYG bookable activities. Zero uses of
  "actually" or "genuinely" in the published body (7 caught and cut
  across drafts). No `mark_photo_used` call, video-only source.
- **Trying tonkatsu for the first time with three kids, the real
  1899 Ginza invention story.** 02:00 UTC firing (2026-10-22, new
  day). Both priority sources exhausted again (same BLOCKED Ginza
  sumo idea, all three teamLab items still without real photos).
  Confirmed zero new AL_Vault uploads. Checked the `Tokyo` video pool
  once more and found a real, only-passing-mentioned dish: "128 | We
  Try TONKATSU for the FIRST TIME," filmed March 2023. Confirmed via
  `grep` tonkatsu only appeared as one menu item inside the Denny's
  post, no dedicated post existed. Checked the thumbnail's tone
  before using it as cover (cheerful restaurant content, no concern).
  Researched real, substantial history: invented in 1899 at Rengatei,
  a Western-style Ginza restaurant, adapted from a French veal
  cutlet (katsuretsu) the kitchen found too greasy pan-fried in
  butter, switched to tempura-style deep-frying, pork instead of
  veal, panko instead of a heavier breading, Worcestershire-blend
  sauce replacing the original demi-glace, and cabbage replacing
  carrots/potatoes as the side, reportedly a staffing-driven
  substitution. Added a real, fun, separately-researched cultural
  fact beyond the food itself: the katsu/katsu ("to win") pun that
  makes tonkatsu a real pre-exam and pre-competition good-luck food
  (genkatsugi), and its direct, documented connection to Kit Kat's
  own "kitto katsu" good-luck reputation in Japan, a genuine
  surprise connection most readers won't already know. Researched
  real, current (2026) tiered Tokyo pricing (1,400-2,000 yen budget
  chain lunch sets with free cabbage/rice refills, 3,000-5,000 yen
  mid-range kurobuta courses, 5,000-15,000 yen premium single-breed
  tonkatsu) rather than quoting one stale number. Added a real
  family-logistics angle built around the free-refill detail
  specifically (low financial risk for a picky-eating first try,
  pre-sliced strips easy to split between kids) and a short
  katsudon-vs-tonkatsu distinction section. Rolled length tier 4
  (long, 1,000-1,300 words) and format 12 (family-logistics framing)
  from CLAUDE.md's system, no reroll needed. Published 2026-10-22 as
  `tonkatsu-first-time-family-cost-history`, 957 words, landed just
  short of the rolled tier, said so here rather than padding further
  once the real material was used up. Topic `en/budget-food`. No
  AffiliateBox, a casual restaurant meal isn't Klook/GYG bookable.
  Zero uses of "actually" or "genuinely" in the published body (9
  caught and cut across drafts). No `mark_photo_used` call,
  video-only source.
- **Tokyo on $300 a day: the real Day 1 number from a week-long
  budget vlog.** 08:00 UTC firing (2026-10-22). Both priority sources
  exhausted again (BLOCKED Ginza sumo, all three teamLab items still
  without real photos). Confirmed zero new AL_Vault uploads via
  `get_destinations` (identical 32-destination list, same counts as
  every prior check this window). Pulled the full 41-video `Tokyo`
  pool with `view: full` and found a genuinely uncovered angle: "Tokyo
  With Kids on $300/Day? Our Real 7-Day Budget (Family of 5)," filmed
  2025-09-10 to 2025-09-17, a day-by-day Tokyo trip with an on-screen
  running cost counter and a stated loose $300/day goal. Confirmed via
  `grep` that no existing post covers a multi-day/weekly budget total
  (only single-attraction or single-day costs exist elsewhere).
  Checked the thumbnail's tone before using it as cover (a cheerful
  family selfie with Tokyo Tower, text matches the real premise, no
  concern). The video description gives a confirmed, specific Day 1
  total ($401.34) but not a clean per-day number for days 2 through 7
  since the counter runs live on screen rather than being stated in
  the text; said so plainly in the post rather than inventing six
  figures that aren't backed by anything. Cross-referenced rather than
  re-deriving: the Day Zero cost breakdown post for what Day 1's total
  actually covers, the eSIM-vs-pocket-wifi post for the connectivity
  piece of that cost, and the Odaiba/Gundam, Senso-ji, Kappabashi, Ueno
  zoo, Ameyoko, and teamLab Borderless posts for the free/paid split
  across the week's real itinerary (confirmed all six slugs resolve in
  the built HTML). Rolled length tier 1 (quick hit, 450-600 words) and
  format 1 (price-first, no verb in the title, lead with the number
  before any scene-setting) from CLAUDE.md's system; the first draft's
  title and opening were written as a question-led format 3 piece by
  mistake, caught before publishing and rewritten to actually open
  with "$401.34." and a price-first title rather than rerolling.
  Published 2026-10-22 as `tokyo-300-dollar-day-budget-week-reality-check`,
  501 words, within the rolled tier. Topic `en/tokyo`. No affiliate
  link: nothing on this specific page is itself bookable, it's a
  budget-reflection piece pointing to posts that already carry their
  own affiliate boxes; found a real Hotels.com affiliate link
  (`https://prf.hn/l/EJnx85V`) in the video's own description but
  didn't use it here since the trip itself ran on an Airbnb, not a
  hotel booking, noted in `docs/affiliates-reference.md` instead for a
  post where it actually fits. Zero uses of "actually" or "genuinely"
  in the published body (1 "actually" caught and cut from a draft
  sentence). No `mark_photo_used` call, video-only source.
- **The Hello Kitty Shinkansen, ridden in 2023, retired in May 2026.**
  14:00 UTC firing (2026-10-22). Both priority sources exhausted again
  (BLOCKED Ginza sumo, all three teamLab items still without real
  photos). Confirmed zero new AL_Vault uploads via `get_destinations`.
  Pivoted to the `Osaka` video pool (14 videos, mostly unmined this
  window) since the `Tokyo` pool is running thin, and found two
  genuinely uncovered angles in one pass: a Hello Kitty Shinkansen
  ride and a micro pig cafe. Picked the Shinkansen one, stronger real
  cost data already in the video's own description (¥15,000-20,000
  reserved seat, ¥1,200 ekiben, no theming upcharge) and a bigger real
  hook. Confirmed via `grep` neither was covered anywhere on the site.
  Checked the thumbnail's tone before using it as cover (excited kids,
  real train, matches the content, no concern). WebSearched current
  status before writing a word and found the actual story: JR West
  retired this specific train on 2026-05-17 after ~8 years (launched
  June 2018), confirmed via a Timeout Osaka piece with real farewell-
  campaign detail (the "Thanks! Plaza" car rename, Kyoto Railway
  Museum merchandise). That turned this from a routine ride-review
  into a now-it's-gone piece, the most honest framing available since
  the specific train in the family's own 2023 footage no longer
  exists to book. Cross-referenced rather than re-deriving: the Haruka
  cost breakdown post for the still-running (for now, reportedly
  until ~2027) Hello Kitty Haruka trains as the current alternative,
  and the Shinkansen booking-savings post for the general JR Pass/
  Klook mechanics (confirmed both slugs resolve in the built HTML).
  Added one genuine second cost angle to earn real length rather than
  padding: a real, hedged flight-price comparison (Itami-Fukuoka
  aggregator fares from ~¥7,450) against the Shinkansen fare, with an
  honest note that the "from" price isn't a confirmed airline quote.
  Rolled length tier 6 (extended feature, 1,600-2,000 words) and
  format 5 (narrative-first, cost as payoff) from CLAUDE.md's system.
  Landed well short of tier 6 even after the added section, a single
  now-retired train topic doesn't honestly stretch past about 1,100
  words without restating facts or inventing detail, said so here
  rather than padding further. Published 2026-10-22 as
  `hello-kitty-shinkansen-family-review-retired-2026`, 1,084 words.
  Topic `en/transit`. No affiliate link: the specific train can't be
  booked anymore, nothing on the page is bookable. Zero uses of
  "actually" or "genuinely" in the published body (6 "actually" and 1
  "genuinely" caught and cut across drafts, mostly from section
  headings). No `mark_photo_used` call, video-only source; the
  uncovered pig-cafe angle stays available in the `Osaka` pool for a
  future firing.
- **mipig cafe, Osaka's micro pig cafe: real session pricing and
  booking rules.** 20:00 UTC firing (2026-10-22). Both priority
  sources exhausted again (same
  BLOCKED Ginza sumo idea, all three teamLab items still without
  real photos). Confirmed zero new AL_Vault uploads. Picked up the
  pig-cafe lead flagged in the prior firing's entry: "147 | PIG CAFE
  IN OSAKA" and a companion short, both from the `Osaka` video pool,
  confirmed uncovered anywhere on the site via `grep`. Checked the
  thumbnail's tone first (Adam holding a small pig, cheerful, matches
  the content, no concern). The video's own description names it only
  as "Micro Pig Café," no venue name, so identified the likely venue
  via research rather than assuming: mipig cafe in Nishishinsaibashi
  is the only dedicated micro-pig cafe confirmed to exist in Osaka as
  of the 2023 filming date (a second venue, Butagoya, didn't open
  until July 2025), said so plainly in the post as how the
  identification was made rather than asserting certainty the
  thumbnail alone can't support. Researched real, current facts
  directly from mipig's own site via WebFetch: time-based pricing
  (1,870 yen/25min, 2,970 yen/55min for ages 4+, 770 yen flat for
  under-4s, +550 yen/25min for a private room), exact address
  (Nishishinsaibashi, Chuo-ku, near Shinsaibashi/Yotsubashi stations),
  hours (10am-8pm), and the real entry restriction tied to hog disease
  outbreaks, hedged honestly in the post since sources disagreed on
  whether the restriction is specifically African Swine Fever or a
  broader "hog cholera" framing from the official site. Found and
  used a real, working Klook listing independently via web search
  (activity id 85917, "Micro Pig Cafe Experience in Osaka," 4.4 stars,
  10K+ booked, not on the named 1% selected-activities list so only
  the general 10%/3% ADAMANDLINDSKLOOK tiers apply), added
  `<AffiliateBox>` and `<KlookCodeBox>` with the real activity URL,
  confirmed both render with the correct link and terms in the built
  HTML. Rolled length tier 2 (short, 600-800 words) and format 15
  (plain declarative title, no hook) from CLAUDE.md's system, no
  reroll needed. Published 2026-10-22 as
  `mipig-cafe-osaka-micro-pig-price-booking`, 579 words, landed just
  under the rolled tier, said so here rather than padding further.
  Topic `en/animals-wildlife`. Zero uses of "actually" or "genuinely"
  in the published body (2 "genuinely" caught and cut across drafts).
  No `mark_photo_used` call, video-only source.
- **The family's first-ever Shinkansen ride, the same route the
  bullet train launched on in 1964.** 02:00 UTC firing (2026-10-23,
  new day). Both priority sources exhausted again (same BLOCKED Ginza
  sumo idea, all three teamLab items still without real photos).
  Confirmed zero new AL_Vault uploads. Went back to the `Osaka` video
  pool and found "84 | BULLET TRAIN FROM TOKYO TO OSAKA," filmed
  2022-11-10, the family's literal first bullet train ride (confirmed
  by the video's own "FIRST-TIME SHINKANSEN" thumbnail text),
  genuinely uncovered: confirmed via `grep` that the existing
  booking-shinkansen post is pure booking mechanics with no first-ride
  narrative, and that no post covers the family's actual 2022 Tokyo-
  Osaka ride or the Mt Fuji sighting mentioned in the video's own
  title. Checked the thumbnail's tone first (excited, clearly matches
  "first-time" framing, no concern). Researched real, verified
  history before drafting: the Shinkansen's actual October 1, 1964
  launch, the Hikari 1 train running the same Tokyo-Osaka route, nine
  days before the Tokyo Olympics opening ceremony, built in five years
  flat, 210 km/h top speed at launch versus about 285 km/h on today's
  fastest trains. Also researched and included a real, specific,
  previously-unpublished practical tip: traveling Tokyo to Osaka, Mt
  Fuji shows on the right side (window seat E) roughly 40-45 minutes
  after departure near Shin-Fuji Station, hedged with the real caveat
  that cloud cover often blocks it. Cross-referenced rather than
  re-deriving: the booking-shinkansen post for the real JR Pass/Klook
  savings math, and the Day Zero cost post for the luggage-forwarding
  service, both confirmed resolving in the built HTML. Deliberately
  did not duplicate `<AffiliateBox>`/`<KlookCodeBox>` here since this
  post doesn't link to Klook directly, just cross-links to the post
  that already carries that affiliate content, consistent with the
  no-forced-duplication principle. Rolled length tier 1 (quick hit,
  450-600 words) and format 13 (history-led, cost as second-half
  payoff) from CLAUDE.md's system, no reroll needed. Published
  2026-10-23 as `first-shinkansen-ride-tokyo-osaka-mt-fuji-history`,
  515 words, within the rolled tier. Topic `en/transit`. Zero uses of
  "actually" or "genuinely" in the published body (2 "actually"
  caught and cut across drafts). No `mark_photo_used` call,
  video-only source.
- **The Hiroshima tram cars that survived the atomic bombing, still
  in regular service.** 08:00 UTC firing (2026-10-23). Both priority
  sources exhausted again (same BLOCKED Ginza sumo idea, all three
  teamLab items still without real photos). Confirmed zero new
  AL_Vault uploads. Checked the `Kyoto` video pool first (2 videos)
  and confirmed both already fully covered (the Kani Doraku crab post
  and the purikura post, both from the same two Kyoto vlogs), so
  moved to the `Hiroshima` pool (4 videos, the family's November 2022
  visit) and found "90 | FIRST IMPRESSIONS OF HIROSHIMA," genuinely
  uncovered: confirmed via `grep` the existing Hiroshima posts (Peace
  Memorial Museum, yakitori izakaya otoshi charge, Dreamination
  lights) cover different videos from the same trip, and that no post
  mentions the Hiroshima tram network, business-class Shinkansen leg,
  or Hiroshima-style okonomiyaki specifically. Checked the thumbnail's
  tone before using it as cover (okonomiyaki being cooked, cheerful,
  matches a real chapter of the video, no concern; noted the cover
  doesn't depict the tram specifically since that's not what the
  video's own thumbnail shows). Researched real, verified, moving
  history before drafting: Hiroden's two surviving 1942-built tram
  cars (651, 652) that were running on August 6, 1945, the network's
  resumption just three days after the bombing, and the real "moving
  streetcar museum" reputation (retired cars bought from Kyoto, Kobe,
  and German cities, oldest car 582 a prewar Kobe streetcar).
  Confirmed current fares directly from hiroden.co.jp via WebFetch
  (240 yen adult flat fare, 120 yen child, 700/350 yen day passes)
  rather than trusting conflicting third-party listings found in an
  earlier search. Added a genuine second real-history section rather
  than padding: Hiroshima-style okonomiyaki's own documented postwar
  origin from issen yoshoku, war-widow-run food stalls, and Otafuku's
  1952 sauce launch, with honestly hedged current pricing (900-1,500
  yen standard, 1,800-2,300 yen seafood) since sources disagreed.
  Cross-referenced rather than re-deriving: the booking-shinkansen
  post for the Kyoto-Hiroshima leg and the Peace Memorial Museum post
  for the same trip's memorial visit, both confirmed resolving in the
  built HTML. Rolled length tier 6 (extended feature, 1,600-2,000
  words) and format 7 (artifact-driven, built around one real
  physical thing) from CLAUDE.md's system; framed the post around the
  specific surviving tram cars as the "artifact" per the rolled
  format. Landed short of tier 6 even after two added sections, a
  transit-and-dinner topic doesn't honestly stretch to 2,000 words
  without restating facts, said so here rather than forcing it
  further. Published 2026-10-23 as
  `hiroshima-tram-atomic-bomb-survivor-okonomiyaki`, 936 words. Topic
  `en/hiroshima`. No affiliate link: a 240 yen tram fare and a
  restaurant dinner aren't Klook/GYG bookable. Zero uses of "actually"
  or "genuinely" in the published body (3 "actually" and 1
  "genuinely" caught and cut across drafts). No `mark_photo_used`
  call, video-only source.
- **Dotonbori Street, seven real stops from one video, itemized.**
  14:00 UTC firing (2026-10-23). Both priority sources exhausted again
  (same BLOCKED Ginza sumo idea, all three teamLab items still
  without real photos). Confirmed zero new AL_Vault uploads. The
  `Hiroshima` and `Kyoto` pools are now both fully covered, so went
  back to the `Osaka` pool and found "86 | DOTONBORI STREET IN
  OSAKA," filmed November 14 2022, the family's own "7 things you
  must try on Dotonbori Street" video with real numbered chapters.
  Checked each of the 7 stops against existing posts via `grep`
  before drafting: the Glico sign and the Tombori River Cruise are
  both already covered in depth by separate posts, so cross-linked
  rather than re-deriving either. Found the genuinely uncovered stop:
  the Ebisu Tower Ferris wheel at the Don Quijote Dotonbori store,
  no existing post mentions it. Checked the thumbnail's tone before
  using it as cover (okonomiyaki dinner, cheerful, matches a real
  chapter, no concern). Researched real, current facts directly from
  the official donki.com page via WebFetch (1,000 yen standard ticket,
  cash only, weekday/weekend hours, Tuesday 1pm maintenance opening)
  rather than trusting conflicting third-party figures (600 to 3,000
  yen) found in an initial search. Added real supplementary detail:
  the wheel's real distinction as the world's first oval-shaped
  Ferris wheel with horizontally-rotating gondolas, and its Ebisu
  (one of the Seven Lucky Gods) exterior theming. Checked Klook for a
  bookable listing, found none, the ride is cash-only and walk-up, so
  skipped AffiliateBox entirely rather than force a mismatched link.
  Added two genuine extra sections to earn real length rather than
  padding: real current street-food pricing by item (takoyaki,
  kushikatsu, ikayaki, gyoza) and a "getting there" section on
  Namba's multi-operator station cluster, cross-linking the existing
  Rapi:t/Haruka post for the Kansai Airport connection rather than
  re-deriving it. Distinguished Osaka-style okonomiyaki (mixed
  batter) from the Hiroshima-style post published earlier today
  rather than re-explaining the dish from scratch. Left two of the
  seven stops (a kawaii-themed cafe, a canal-side beer) honestly
  thin since neither has a specific venue or price confirmed from the
  video, said so plainly rather than inventing detail to pad them
  out. Rolled length tier 5 (deep dive, 1,300-1,600 words) and format
  8 (itemized breakdown, title promises a list) from CLAUDE.md's
  system, the rolled format fit naturally since the source video
  itself was already structured as a numbered list. Landed short of
  tier 5 even after two added sections, an itemized format with two
  deliberately-thin stops doesn't honestly stretch to 1,300 words
  without padding, said so here rather than forcing it. Published
  2026-10-23 as `dotonbori-seven-stops-what-each-costs`, 793 words.
  Topic `en/osaka`. Zero uses of "actually" or "genuinely" in the
  published body (1 "actually" and 2 "genuinely" caught and cut
  across drafts). No `mark_photo_used` call, video-only source.
