# Blog article ideas

A running backlog, not a schedule. Add to this whenever an idea comes up.
**As of 2026-10-26 the routine posts once a day, not 4x/day, each day a
different column, see `CLAUDE.md` "Weekly calendar" and
`docs/weekly-calendar.md`.** Entries before that date reflect the old
4x/day cadence, provenance only, not a format to repeat. The routine
checks `src/data/posts/en/` for what's already covered and
`docs/klook-priority-activities.md` for Klook priority activities first
(Throwback Thursday/Food Friday especially); this file is the third place
to check for what's next, picked whenever nothing higher priority fits
that day's column.

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

- **UNBLOCKED 2026-10-26 for Klook Wednesday specifically: Ginza sumo
  experience, with the Klook code.** Was BLOCKED on "no real family
  visit"; the new weekly calendar's Klook Wednesday column doesn't
  require one (see `CLAUDE.md` "Weekly calendar"), so this is fair
  game for a Wednesday now, just write it as an honest researched
  recommendation, not a fake first-person account. A real lead as of
  2026-09-12: a Klook marketing email (fall flash sale, forwarded by
  the site owner) featured "Tokyo Ginza Sumo Experience," 50% off, 4.8
  stars, 10K+ booked. That's Ginza, not Asakusa, note the correct
  neighborhood rather than the original idea's guess. The email had no
  clickable links (a flattened print-to-PDF), find the real Klook
  activity page URL independently (web search "site:klook.com Tokyo
  Ginza Sumo Experience" worked for the Disney/USJ post) before using
  klookRedirect, and note that ADAMANDLINDSKLOOK's general new/existing
  user tiers apply to any Klook cart over $50 regardless of activity,
  only the separate 1% tier is restricted to the named list in
  `klookCode.ts`, so the code is worth including either way. The 50%
  flash-sale figure is six weeks stale as of this update, it was time
  limited even in September, confirm the real current rate, rating,
  and review count on Klook's own page before publishing rather than
  quoting that number.
- **AL_Vault pool status as of the 08:00 UTC 2026-10-24 firing: no new
  post found this firing, both priority sources exhausted and an
  exhaustive AL_Vault sweep came up empty.** Checked `get_destinations`
  first, zero new uploads (same 32-destination list as every prior
  check this window). Then checked every destination pool with
  meaningful volume for unused, confidently-identifiable, non-
  duplicate material: `Osaka` (14 videos, 133 photos; the Round1-
  tagged-Osaka video from 2023 remains a genuine open question, see
  below), `Taito` (122 photos, all traced to already-published posts:
  wagyu, Torikizoku, street kart, ten-days-in-Asakusa), `Katsushika`
  (37 photos, almost entirely generic unlabeled "IMG_####" files with
  no alt text, too unidentifiable to write from confidently),
  `Shibuya` (25 photos, all otter-cafe shoot spares), `Shinjuku` (21
  photos, all Godzilla/Kabukicho spares already used), `Kawasaki` (21
  photos, all Nihon Minkaen/worldschool spares, two dedicated posts
  already cover it), `Urayasu` (21 photos, four existing Disney posts
  already cover ticket pricing, extra costs, DisneySea theming, and
  Beast's Castle specifically), `Sumida` (13 photos, street kart
  spares), `Minato` (9 photos, Tokyo Tower/teamLab Borderless spares,
  both already covered), `Uji` (9 photos, Nintendo Museum spares,
  already covered including the karuta/Wii exhibits specifically),
  `Narita` (10 photos, the one interesting unused angle, a nearly-
  empty flight, turned out to already be the cover photo on the
  cheap-flights post), `Chiba` (7 photos, unidentifiable generic
  IMGs), `Chuo` (6 photos, all Ginza/Pokémon Center spares already
  used), `Koto` (5 photos, all Gundam/Odaiba spares already used),
  `Hakone` (9 photos, the free-pass post already covers the pirate
  ship, ropeway, and the Hakone Shrine torii gate at night
  specifically), `Nara` (7 photos + 1 video, the deer-feeding video
  is already embedded in the existing Nara post, stampede and all),
  `Sakai` (14 photos, Lindsay's 40th birthday teppanyaki and the
  Round1 Sakai visits, both already covered), `Chiyoda` (5 photos,
  4 already used, 1 unused sticker-shop photo too thin on its own for
  a post). Also tried catalog-wide text searches (`festival`,
  `fireworks`) rather than relying on city browsing alone, nothing
  new turned up. The one genuine open question: "149 | ROUND 1 in
  OSAKA," filmed May-June 2023, tagged city `Osaka` rather than
  `Sakai`. The existing Round1 post explicitly describes two 2026
  Sakai visits only, so this 2023 video is likely a real, distinct,
  earlier visit, possibly a different (non-Sakai) Round1 location,
  but its own description has zero chapters, zero pricing, and zero
  location detail beyond "@round1_official," not enough to write a
  confident, honest post without re-deriving the already-published
  Sakai pricing as a stand-in. Left it alone rather than force it;
  worth a second look if a future firing can pin down the actual
  location (the city tag is a real clue worth investigating further
  rather than ignoring). No post published this firing. Not pushing a
  broken or duplicative post is the documented right call per
  CLAUDE.md's own fallback instruction, and this entry exists so the
  next firing doesn't have to re-run the same exhaustive sweep from
  scratch.
- **RESOLVED (14:00 UTC 2026-10-24 firing): the Round1-tagged-Osaka
  video question above.** `get_trip` for the 2023-05-31 to 2023-06-27
  Osaka window confirmed it: a 16-second short, "Got our bowling shoes
  from a vending machine today," filmed 2023-06-25 with
  `notes_for_ai: "Round 1 for harpers birthday June 25"`, the exact
  same date as the already-separate "152 | HAPPY BIRTHDAY HARPER!"
  video. Confirmed real and distinct: Harper's 4th birthday in 2023,
  a different year, a different occasion, and almost certainly a
  different physical Round1 location than either already-published
  2026 Sakai visit. Published from it, see the Done entry below.
## Done
- **Throwback Thursday, 2026-11-05: a real Zauo visit in Tokyo,
  December 4, 2022, found via a video sweep rather than a photo one.**
  Checked the "already posted today" guard first (no post with
  today's date existed). AL_Vault's photo pools showed nothing new
  (same 32 destinations, Tajiri's 2 photos both already used), so
  swept the 41-item Tokyo video pool instead, something not done in
  recent firings. Most titles traced to already-published posts
  (Tsukiji, Kura Sushi, teamLab Planets, Oktoberfest, Copic Markers,
  Pokemon Cafe, Sanrio Puroland, Skytree), confirmed via `grep` against
  `src/data/posts/en/`, but "98 | WE CATCH OUR OWN FISH AT ZAUA IN
  TOKYO," filmed 2022-12-04, matched no existing post, a genuinely
  distinct second Zauo visit roughly six months before the Osaka one
  `zauo-fishing-restaurant-osaka-catch-your-own-fish-cost.mdx` is built
  on. Confirmed via `get_trip` on the surrounding date window: part of
  the family's first extended Japan trip, three days before a flight
  to Bangkok ended a six-week stay. Could not confirm which specific
  Tokyo Zauo branch (the chain has several) from AL_Vault's metadata or
  web research, said so honestly in the post rather than guessing a
  neighborhood. No AL_Vault photos exist for this specific event (the
  Tokyo photo pool only has 2 photos, both unrelated dates), so used
  the video's own real YouTube thumbnail as cover (the vault's own
  asset for this video, same role an AL_Vault photo's `large_url`
  normally plays) and embedded the real video in-body, same iframe
  pattern as the Osaka post. No affiliate link forced, Thursday isn't
  in the weekly calendar's required-affiliate list and the specific
  branch isn't confirmed. Rolled length tier 1 (quick hit, 450-600
  words) and format 8 (itemized breakdown) from CLAUDE.md's system;
  format 8 fit naturally against the video's own real chapter list
  (TGI Fridays, walking to Zauo, the catch, walking at night, a crane
  game), no reroll needed. Landed at 503 words, within tier. Published
  2026-11-05 as `zauo-tokyo-december-2022-real-visit`, 503 words. Topic
  `en/budget-food`. Zero uses of "actually" or "genuinely" in the
  published body (1 "actually" caught and cut, in the description).
  No `mark_photo_used` call, no AL_Vault tool exists to mark a video
  as used (checked), video only. Moved the Round1 Narashino Throwback
  Thursday "Done" entry out to `docs/blog-ideas-archive-13.md` to stay
  under the house-lint 400-line cap.
- **Food Friday, 2026-11-06: ekiben on the Shinkansen, a real moving-
  day lunch.** Checked the "already posted today" guard first (no post
  with today's date existed). Swept AL_Vault's video pool by text
  search (continuing yesterday's discovery that it's under-checked)
  for food-related unused material: "Kurumaya Ramen" in Urayasu and
  "Robot restaurant" both surfaced as real but weaker candidates
  (Kurumaya has a real address and a clear angle, kept as a future
  idea; the robot-restaurant short has no location metadata and only
  a vague caption, too thin to anchor a confident post), picked
  Ekiben on the Shinkansen instead, the strongest of the three:
  specific real food choices per family member (fried chicken, split
  dumplings, two Dr. Yellow themed boxes), tied to a real, dated event
  (moving day, Tokyo to Osaka, 2023-05-23, confirmed via `get_trip`
  against the longer "We Took Japan's Fastest Train" vlog's own
  "Getting Ekiben" chapter from the same day). Confirmed via `grep`
  that the existing `first-shinkansen-ride-tokyo-osaka-mt-fuji-history`
  post (a different, earlier November 2022 ride) and
  `booking-shinkansen-tickets-japan-cheapest-way` don't cover ekiben,
  a genuine gap, cross-linked both. Researched real current ekiben
  pricing (roughly 700-1,800 yen at Tokyo Station, most everyday
  options closer to 1,000-1,200) and real Dr. Yellow background (a
  genuine inspection Shinkansen, rare and considered lucky to spot)
  via WebSearch, explicitly hedged that the exact 2023 Dr. Yellow box
  design/collab isn't confirmed to match whatever Tokyo Station sells
  now, collabs rotate. No AL_Vault photos exist for this event (same
  pattern as yesterday), used the short Ekiben video's own real
  YouTube thumbnail as cover and embedded the video in-body. Rolled
  length tier 1 (quick hit, 450-600 words) and format 11 (time/day
  anchored, open with the specific day rather than a generic intro)
  from CLAUDE.md's system; format 11 fit naturally given the real
  "moving day" framing, no reroll needed. Landed at 571 words, within
  tier. Published 2026-11-06 as
  `ekiben-shinkansen-tokyo-osaka-moving-day`, 571 words. Topic
  `en/budget-food`. Zero uses of "actually" or "genuinely" in the
  published body (2 "actually" caught and cut across drafts). No
  `mark_photo_used` call, video only, same as yesterday.
- **Day Trip Saturday, 2026-11-07: Kamakura, researched (no real
  family visit).** Session started in a fresh container (no prior
  clone present), re-ran `add_repo`/clone/`register_repo_root`/
  `pnpm install` before anything else. Checked the "already posted
  today" guard first (no post with today's date existed). Checked
  AL_Vault for real day-trip material first: all three pre-flagged
  real-link destinations in `docs/affiliates-reference.md` (Kobe,
  Yokohama, Sanrio Puroland) confirmed via `grep` as already fully
  covered by existing posts (`kobe-beef-day-trip-steak-not-worth-hype`,
  three separate Yokohama posts, `sanrio-puroland-ticket-price-worth-it`),
  no new AL_Vault uploads since the last check (same 32 destinations).
  Picked Kamakura, a well-known real day trip with no dedicated post
  yet (confirmed via `grep` for Nikko/Kamakura/Himeji/Enoshima/Nagoya/
  Takayama/Miyajima, all genuinely uncovered, Kamakura chosen for the
  strongest real research base). Could not find a real Viator-specific
  Kamakura destination ID (WebFetch to viator.com blocked, 403, same
  pattern as prior Klook/Viator attempts; search results only surfaced
  livejapan.com mirrors of Viator tours, not viator.com itself), didn't
  fabricate a destination ID the way `docs/affiliates-reference.md`'s
  Kobe/Yokohama examples require a real one; found a real Expedia
  "things to do" activity page instead (a2456078, a $177 half-day
  walking tour with Kotoku-in) and used `expediaRedirect()` on it,
  consistent with the Mt Fuji/Hakone post's precedent for this
  provider. Researched extensively via WebSearch, hedging explicitly
  wherever sources disagreed (JR fare 920-1,040 yen depending on
  source, Tsurugaoka Hachimangu's treasure-hall fee), and confirmed
  Kotoku-in's own official site (kotoku-in.jp) directly via WebFetch
  for authoritative hours/admission rather than relying on third-party
  guides for the single most important real number on the page. Real
  cross-links to both existing Hakone posts for an honest cost
  comparison (Kamakura's ~4,000-6,000 yen DIY total vs. Hakone Free
  Pass's confirmed 7,100-7,500 yen), both resolving in the built HTML.
  Cover: no AL_Vault photo (family has never been), found a real,
  recent (2019), well-licensed Wikimedia Commons photo of the actual
  Great Buddha (DXR, CC BY-SA 4.0). Rolled length tier 6 (extended
  feature, 1,600-2,000 words) and format 14 (direct address) from
  CLAUDE.md's system; format 14 fit naturally. Tier 6 is a stretch for
  a single honestly-researched day trip, so genuinely earned the
  length with six real added sections (a brief real Kamakura-shogunate
  history, official hours/admission, a free Yuigahama Beach add-on,
  real tram-to-temple walking logistics, a cross-link cost comparison
  to the site's two existing Hakone posts, and a real bus-tour
  middle-ground price point) rather than padding with filler. Landed
  at 1,590 words, just under the rolled tier-6 floor, said so here
  rather than inventing more detail to close the last 10 words.
  Published 2026-11-07 as `kamakura-day-trip-great-buddha-cost`, 1,590
  words. Topic `en/day-trips`. Zero uses of "actually" or "genuinely"
  in the published body (2 "actually" and 1 "genuinely" caught and cut
  across drafts). No `mark_photo_used` call, Commons photo, not
  AL_Vault.
- **Gear Up Sunday, 2026-11-08: the GB Pockit stroller, a real product
  from the family's own video descriptions.** Checked the "already
  posted today" guard first (no post with today's date existed).
  Checked AL_Vault for real photos first: no "power bank"/"charger"/
  "solar" results (ruling out Jackery as a researched-only angle that
  also didn't fit the site's hotel-heavy Japan content well), but
  "stroller" turned up a real, unused (`used_in: []`) October 2023
  Ueno Zoo photo. Cross-checked against a real, recurring
  `STROLLER: https://amzn.to/3ujbBz2` link already present in multiple
  of the family's own YouTube video descriptions (confirmed via
  `search_videos` full view on the Cup Noodle Museum vlog, Dec 2022),
  resolved the shortlink via WebFetch to a real product: GB Pockit
  All-City (Velvet-Black), ASIN B07TVL4FN3. Used this site's own
  standard Amazon tag (`adamandlinds00-20`) on that real ASIN rather
  than the different tag (`clarksontravels-20`) embedded in the
  YouTube-sourced link, since that tag is this site's own established
  convention on every other Amazon link so far, not a mismatch, just a
  different real channel's own tracking. Researched real current specs
  via WebSearch/WebFetch (BabyGearLab, a pediatrician-led review site):
  $330 list, ~13.1-13.5 lb, ~21x13x8 in folded, rated 73/100 (4th of
  12 travel strollers tested), real documented pros (compact fold) and
  cons (flexible frame, awkward handles, no sunshade window). Flagged
  honestly that the family's real product link is the original Pockit
  All-City while most current reviews cover the newer Pockit+, close
  enough in spec that the folding math holds either way but noted
  rather than assumed identical. Added real brand context (Goodbaby
  International, parent of GB and Cybex) and a genuine Japan-specific
  test (JR East's own sample coin-locker dimensions vs. the stroller's
  folded size) rather than padding with a weak "best of" roundup from
  lower-confidence aggregator sources found during research. Cross-
  linked to the existing Wayb Pico post, a real "same family, same
  fold-small philosophy, different gear" connection. Rolled length
  tier 5 (deep dive, 1,300-1,600 words) and format 1 (price-first,
  open with the number) from CLAUDE.md's system; format 1 fit
  naturally. Landed at 1,174 words, short of the rolled tier-5 floor
  after exhausting the genuinely available real material (a single
  gear item's real spec sheet, one independent review, and one brand
  history don't stretch indefinitely), said so here rather than
  padding with a low-confidence competitor comparison. Published
  2026-11-08 as `gb-pockit-stroller-folds-small-japan-review`, 1,174
  words. Topic `en/travel-prep`. Zero uses of "actually" or
  "genuinely" in the published body (5 "actually" caught and cut
  across drafts, ironic timing right after a Saturday audit that spent
  its whole session removing the same word from 27 other posts). One
  real AL_Vault photo used (cover and in-body, same image),
  `mark_photo_used` called. Moved the Wayb Pico and Hakone ryokan Stay
  Spotlight "Done" entries out to `docs/blog-ideas-archive-13.md` to
  stay under the house-lint 400-line cap (that archive file is now at
  358 lines, will likely need `archive-14.md` soon).
- **Off-cycle, 2026-11-08, same day:** the site owner spot-checked
  `zenni-glasses-before-trip-vs-japan-optician` and found its real
  Zenni affiliate link invisible, plain inline text, no disclosure.
  Swept every post for the same pattern and fixed 3 more (Wayb in the
  car-seat-law post, TravelSpend, Greenlight), each upgraded to the
  standard Button + disclosure pattern. Full write-up in
  `docs/site-audit.md`'s log rather than here, since it's a site-wide
  fix, not a daily post, but noted here too so this file's own history
  stays complete.
- **Stay Spotlight, 2026-11-09: Minn Kappabashi, a real repeat-stay
  aparthotel, found via an AL_Vault "apartment" sweep.** Checked the
  "already posted today" guard first (no post with today's date
  existed). AL_Vault's "hotel room" text search turned up nothing new,
  but "apartment" surfaced a real, unused (used_in_count 0) October
  2023 Tokyo Skytree window-view photo with `notes_for_ai` explicitly
  reading "another reason we love staying at Minn-Kappabashi hotel in
  Asakusa. The VIEW!!", a real, named, repeat-stay property, not a
  researched pick, the strongest version of this column. Cross-checked
  against a real `expedia.com/affiliates/adamandlinds/minn-kappabashi`
  link already in the family's own "We Took Japan's Fastest Train"
  video description ("We booked the Deluxe Apartment at Minn Kappabashi
  in Asakusa"), confirmed via WebSearch as a real property (Expedia
  h90581980, Hotels.com ho2899623360, 4.5 stars, 9.0 review score,
  24-unit aparthotel). Used real `expediaRedirect()`/`hotelsRedirect()`
  on the actual property pages rather than the vanity affiliate URL
  itself, matching the established Stay Spotlight pattern. Confirmed
  via `get_trip` that the family's own photos (Skytree window shot,
  Halloween costumes, a full Thanksgiving dinner cooked in the unit)
  all fall within one extended Oct-Nov 2023 Tokyo stay; caught myself
  overclaiming "three separate trips" in an early draft when the
  confirmed evidence only supports one extended multi-week stay,
  corrected before publishing rather than let an unverified claim
  stand. Rolled format 6 (head-to-head comparison) and fit it to a
  real comparison the site already has data for: this aparthotel vs.
  the existing `kimpton-shinjuku-tokyo-stay-spotlight` post's real
  per-night pricing, used as the "standard hotel room" side rather
  than inventing a second property, plus a real family-of-five
  room-count math point (a standard room needs two bookings for five
  people, a 65sqm/sleeps-6 unit needs one). Rolled length tier 6
  (extended feature, 1,600-2,000 words); landed at 1,350 words after
  three genuinely added real sections (guest reviews, practical
  booking details, the repeat-stay evidence), short of the floor,
  said so here rather than padding further with unverified claims.
  Published 2026-11-09 as
  `minn-kappabashi-aparthotel-vs-hotel-room-asakusa`, 1,350 words.
  Topic `en/hotels-stays`. Zero uses of "actually" or "genuinely" in
  the published body (2 "actually" caught and cut across drafts). One
  real AL_Vault photo used (cover and in-body, same image),
  `mark_photo_used` called.
- **Quick Tip Tuesday, 2026-11-10: power bank watt-hour rules for an
  ANA/JAL flight, researched.** Checked the "already posted today"
  guard first (no post with today's date existed), then checked
  AL_Vault (no power-bank/charger photos in the catalog, and no
  journal entries mentioning one via text search) before confirming
  honest research was the right path, same as any no-visit-required
  Tuesday. Confirmed via `grep` no existing post covers power banks
  as a dedicated topic (the eSIM-vs-pocket-wifi post only mentions
  one in passing, as a pocket wifi accessory). Researched real facts
  via WebSearch (FAA packsafe, ANA's and JAL's own current baggage
  pages, cross-checked across multiple independent sources since a
  direct WebFetch of the FAA and ANA pages both failed, 403 and
  timeout respectively): the FAA's 100Wh carry-on-without-approval
  threshold and 160Wh hard ban, ANA's and JAL's current two-spare cap
  for the 100-160Wh band, JAL's in-flight-charging ban and
  label-must-show-rating rule, carry-on-only on every airline. Held
  back from stating one unconfirmed claim (a vendor blog's report of
  a global March 2026 two-power-bank limit) since it wasn't
  corroborated on an official FAA/TSA page. Used the real Amazon
  Associates tag (`adamandlinds00-20`) on a generic search URL, same
  pattern as the plug-adapter and packing-cubes posts, inside a
  `<Button>` with the standard affiliate disclosure line (the
  2026-11-08 standing rule). Caught and rewrote a draft section that
  framed a specific packing habit as "what we actually pack," a
  personal-anecdote claim with no AL_Vault or journal basis to
  support it; reworded as general advice before publishing, per the
  honesty rule. Cover and one in-body figure: a real, licensed
  Wikimedia Commons photo (`File:Power_bank.JPG`, Ilya Plekhanov, CC
  BY-SA 3.0, a phone charging from a portable battery), downloaded via
  the reliable `thumb.wikimedia.org` URL after the full-res
  `upload.wikimedia.org` guess 429'd. Rolled length tier 2 (600-800
  words, landed at 743) and format 8 (itemized breakdown). Caught two
  "actually" instances on the first pass (description and two body
  sentences) and cut them before publishing. `pnpm build` and `pnpm
  check` both clean (0 errors). Slug:
  `power-bank-japan-flight-watt-hour-rules`.
- **Same post, expanded same day at the site owner's direct request:**
  "do some research on other airlines that fly to japan or in japan,
  find out their policy. max mah, if you can use them on the flight.
  etc and put it in a table." Added a new "How other airlines flying
  to and around Japan compare" section with a 14-row table (JAL, ANA,
  Peach/Jetstar Japan/ZIPAIR/Skymark/Spring Japan grouped under Japan's
  single national rule, United, Delta, American, Singapore Airlines,
  Cathay Pacific, Korean Air, EVA Air, China Airlines, British
  Airways, Air Canada, Qantas). Researched each via WebSearch against
  that airline's own current baggage/dangerous-goods page where one
  surfaced (Delta, EVA Air, China Airlines, British Airways, Qantas,
  Singapore Airlines/CAAS all had an official source; United, Cathay
  Pacific, and Air Canada did not, so those three rows are sourced
  from multiple independent secondary guides that agree with each
  other instead, and the table says so explicitly rather than
  presenting them as equally confirmed). Marked cells "not addressed"
  or "not confirmed" rather than guessing a yes/no for in-flight
  charging where no source stated one (United, EVA Air, China
  Airlines, Air Canada), per the honesty rule extended to this kind
  of factual table. Did not include one unconfirmed claim (three
  specific Anker models allegedly banned by Air Canada by name) since
  it couldn't be checked against Air Canada's own page. Rebuilt the
  word count to 1,432 (well past the original tier 2 roll, expanding
  an already-published post to answer a direct follow-up request
  isn't a length-tier violation, the tier only governs the initial
  draft). One more "actually" caught and cut in the new section
  before publishing, zero in the final body. `pnpm build`, `pnpm
  check`, `pnpm lint:house` all clean after the expansion.
