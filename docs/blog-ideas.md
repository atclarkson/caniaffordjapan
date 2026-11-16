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
- **Klook Wednesday, 2026-11-11: teamLab Future Park Okinawa,
  researched.** Checked the "already posted today" guard first (no
  post with today's date existed), then pulled this from
  `docs/klook-priority-activities.md`'s unblocked priority list
  (first and only entry left there). Full provenance (real pricing,
  the official-vs-Klook date-change tradeoff, the real Yui Rail
  transit-fare math, the DFS cover photo, the caught overclaim about
  Japan's total teamLab count, the dead adamandlinds.com search
  result checked and discarded) logged in
  `docs/klook-priority-activities.md` rather than duplicated here.
  Slug: `teamlab-future-park-okinawa-direct-vs-klook`. Length tier 4
  (1,070 words), format 6 (head-to-head). Topic `en/teamlab`.
- **Throwback Thursday, 2026-11-12: a real March 2023 Tokyo Skytree
  visit, both decks, found via the Tokyo video pool.** Checked the
  "already posted today" guard first (no post with today's date
  existed). `get_destinations` showed the same 32 destinations as
  every recent check, no new uploads, so swept the 41-item Tokyo
  video pool rather than defaulting to research (Thursday always
  needs a real visit). Most titles traced to already-published posts
  via `grep`, but "We Went to the Top of Tokyo… Was It Worth It?"
  (youtube_id `Lt3QdpqE1Wc`, filmed March 2023) matched no existing
  post: confirmed via `get_trip` and a direct read of
  `tokyo-skytree-tembo-deck-ticket-price-cost.mdx` that the existing
  Skytree post is a researched 2026-dynamic-pricing/history piece,
  not built from this real visit, so no duplicate. `get_trip` for the
  surrounding window also surfaced the real "Family Reunion" video
  (Adam's parents, Kim and Terry, Nov 2023, a different and unrelated
  stretch of the trip, already covered in two other posts) and two
  other unused-but-thin candidates (`127 | CHEAP FAMILY DAY OUT`, the
  real Ueno Zoo visit referenced in `ueno-zoo-shinobazu-pond-boats-
  tokyo-cost.mdx` via a different photo source already, so not a
  fresh angle); picked the Skytree one as the clearest genuinely
  unused real visit. Noticed a possible factual inconsistency in an
  already-published post while cross-checking (`thanksgiving-dinner-
  tokyo-apartment-turkey-chicken-cost.mdx` says "Lindsay's parents,"
  but this video's own `notes_for_ai` and two other published posts
  say Adam's parents, Kim and Terry, for the same November 2023
  visit); flagging here for a future audit pass rather than editing
  an old post speculatively without stronger evidence. No AL_Vault
  photos exist for this specific day (`get_trip` returned 0 photos,
  7 videos, for the window), so used the real YouTube thumbnail as
  cover and embedded the video in-body, same pattern as the Zauo and
  ekiben posts. No affiliate link forced (Thursday doesn't require
  one); found a real, unused Viator affiliate link for this exact
  activity in the video's own description
  (`https://www.viator.com/tours/Tokyo/Tokyo-Skytree-Admission-Ticket/d334-293458P3?pid=P00074464&mcid=42383&medium=link&medium_version=selector&campaign=vlog-126-skytree`)
  but didn't use it here since the existing pricing post already
  carries a full Klook booking box for the same ticket, a competing
  box for the same attraction would confuse readers; cross-linked to
  that post for booking and current pricing instead. Rolled length
  tier 4 (1,000-1,300 words) and format 3 (question title, build to a
  verdict); format 3 fit naturally since the real video's own title
  already asks the question. Landed at 1,065 words after genuinely
  adding real content, not padding (a verified transit-access fact,
  real Skytree Cafe menu detail, current pricing cross-reference) to
  reach the floor honestly rather than stretching thin material.
  Zero uses of "actually" or "genuinely" in the published body (3
  "actually" and 2 "genuinely" caught and cut across drafts). No
  `mark_photo_used` call, YouTube thumbnail, not AL_Vault. Slug:
  `tokyo-skytree-real-visit-both-decks-worth-it`. Topic
  `en/towers-observation-decks`.
- **Food Friday, 2026-11-13: Kurumaya Ramen, Urayasu, a real find from
  2026-11-06's flagged lead.** Checked the "already posted today"
  guard first (no post with today's date existed). Pulled the
  Kurumaya Ramen lead flagged two firings ago as "kept as a future
  idea" rather than starting a fresh sweep; confirmed via `grep` it
  was still unused. The short video has no `city`/`country` tag and
  no `date_filmed` in AL_Vault (unlike most videos), published
  2023-09-02; checked for a corroborating DisneySea video in the same
  window to pin down an exact visit date, found none (the Nov 2022
  DisneySea vlog and the Sept 2025 Urayasu/Disney photo set are both
  too far off to be the same trip), so the post doesn't claim a
  specific date beyond "posted September 2023," honest about the gap
  rather than guessing. Real address (3 Chome-5-45 Fujimi, Urayasu)
  confirmed via Tabelog's current Urayasu-branch listing: chilled soy
  sauce noodles 1,000 yen, gyoza 290 yen (157 yen at lunch with a
  ramen order), draft beer 680 yen, free half-bowl of rice, open
  11am-1am, closed Tuesdays. Rolled format 2 (free-vs-paid split)
  first, didn't fit at all (nothing at a restaurant is "free"),
  rerolled once per CLAUDE.md's own allowance, landed on format 6
  (head-to-head), which fit well: real Tokyo Disney Resort
  counter-service pricing (Casbah Food Court curry 950-1,200 yen,
  China Voyager's own ramen, typical counter meals 900-1,800 yen,
  table service 2,500-9,000 yen) researched via WebSearch for an
  honest comparison. The real finding undercut the obvious "cheaper
  outside the park" narrative, the two options land in roughly the
  same yen range, so the post's verdict is about logistics (a
  kitchen open past midnight) rather than forcing a price gap that
  isn't really there. One real, unused AL_Vault photo used in body
  (a different, later Urayasu/Disney stay, explicitly labeled as
  separate from the Kurumaya visit to avoid conflating two trips),
  `mark_photo_used` called. Cover: the short's own YouTube thumbnail.
  Rolled length tier 3 (800-1,000 words); landed at 799 after two
  genuine real-content additions (other Kurumaya branches' pricing
  for context, a real family-of-five math line using only confirmed
  menu numbers, explicitly declining to invent kids' pricing since
  none is published). Zero uses of "actually" or "genuinely" in the
  published body (2 "actually" and 1 "genuinely" caught and cut
  across drafts). Slug: `kurumaya-ramen-urayasu-vs-disney-counter-
  meal`. Topic `en/budget-food`.
- **Day Trip Saturday, 2026-11-14: Nikko, researched (no real visit),
  the family-logistics angle.** Checked the "already posted today"
  guard first (no post with today's date existed). Checked AL_Vault
  before defaulting to research: small remaining pools (Chiba, Ota)
  turned up nothing new, no real Nikko material exists anywhere in
  the catalog, honest research is the correct path, Saturday doesn't
  require a visit anyway. Confirmed via `grep` no existing post
  covers Nikko. Rolled format 7 (artifact-driven) first, didn't fit
  at all (no real visit means no real physical artifact to build a
  post around), rerolled once per CLAUDE.md's own allowance, landed
  on format 12 (family-logistics framing), which fit genuinely well:
  Nikko's real selling point against Kamakura and Hakone, both
  already covered, is that it's a meaningfully longer, more
  physically demanding day (10-12 hour guided tours, real steps and
  hilly paths at Toshogu Shrine per multiple tour listings, Tobu's
  own warning about autumn bus-delay risk to Lake Chuzenji with no
  refund), a real reason it keeps getting passed over for an easier
  option. Researched real current prices via WebSearch/WebFetch:
  Toshogu Shrine admission (1,600 yen adult/550 yen child), Shinkyo
  Bridge crossing fee (300 yen, free to view from the road bridge),
  Kegon Falls elevator (600 yen adult round trip/400 yen child, free
  upper deck), Tobu's own NIKKO PASS World Heritage Area (3,000
  yen/1,500 yen, fetched directly from tobu.co.jp) versus the limited
  express fare, and real Klook/Viator guided-tour pricing ($52-90+).
  Found a real kid-friendlier alternative several tours bundle in
  instead of the waterfall-and-lake half (Edo Wonderland Nikko
  Edomura, ninja shows over a mountain hike, 5,800 yen adult gate
  price), presented honestly as costing more rather than less. Used
  the real `klookRedirect()` helper and `<KlookCodeBox>` on a real,
  verified Klook activity page (id 20405) rather than a generic
  search link; noted honestly it's not on the 1% named-activity
  code tier. Cover: no AL_Vault or booking-site photo exists for an
  unvisited destination, found and verified a real, properly
  licensed Wikimedia Commons photo of the Yomeimon Gate (Jpatokal, CC
  BY-SA 4.0, 2024), first guess at the filename was wrong and 404'd
  the API, found the real file via a Commons search instead; credit
  in frontmatter `photoCredits` per the 2026-11-10 convention, not a
  caption line. Initially included a reused Disney-photo aside for
  pacing contrast, cut it before publishing, a forced non-sequitur
  (a Disney castle photo in a Nikko post) rather than something that
  actually served the post. Rolled length tier 5 (1,300-1,600 words);
  landed at 1,291 after two genuine real-content additions (USD
  conversions throughout per house style, a real family-of-five cost
  math section, the Edo Wonderland alternative), short of the strict
  floor by a handful of words rather than padded further to clear it
  artificially. Zero uses of "actually" or "genuinely" in the
  published body (4 "actually" and 1 "genuinely" caught and cut
  across drafts, several in section headers). `pnpm build`, `pnpm
  check`, `pnpm lint:house` all clean. Slug:
  `nikko-day-trip-tokyo-with-young-kids-cost`. Topic `en/day-trips`.
- **Gear Up Sunday, 2026-11-15: a digital luggage scale, researched, no
  real visit.** Checked the "already posted today" guard first (no post
  with today's date existed). Gear Up Sunday's real sources are narrow
  (Amazon, Wayb, Zenni, Greenlight, Travel Spend per `docs/weekly-
  calendar.md`), and `grep` confirmed all five already have a dedicated
  post (`wayb-pico-travel-car-seat-cost-review`, `zenni-glasses-before-
  trip-vs-japan-optician`, `kids-debit-card-japan-cash-still-needed`,
  `travelspend-app-tracking-japan-trip-costs`, and several Amazon-linked
  Quick Tip posts). Picked a genuinely new angle under the standing
  Amazon link rather than repeating one of those: a luggage scale, tied
  to a real cost the site hadn't covered yet (confirmed via `grep`, no
  existing post mentions an overweight baggage fee as its own topic).
  Researched ANA's own current domestic fee page directly (1,100 yen for
  23-32kg on most routes, 500 yen on a few named exceptions; 5,500 yen
  for 32-45kg, 4,400 yen on those same exceptions), a real, confirmed
  source. A direct `WebFetch` of ANA's international overweight-fee page
  timed out twice, so the international figures (~$60 for 23-32kg,
  roughly 6,000 yen; ~$200 for 32-45kg, roughly 20,000 yen) are attributed to
  third-party baggage-fee trackers only, with an explicit note in the
  post that they're unconfirmed against ANA's own page and the reader
  should check their own route. Found no confirmable current JAL
  overweight rate at all (WebSearch returned nothing from JAL's own
  site), said so honestly rather than inventing or reusing ANA's number
  for JAL. Cover: no AL_Vault photo fits a generic gear topic with no
  real visit; found a real, properly licensed Wikimedia Commons
  illustration (`File:Luggage That's Too Heavy at the Airport.jpg`,
  Familydestinationsguide.com Images, CC BY 2.0) via Commons' own media
  search, verified via the MediaWiki API and the file's own description
  page that it's an illustration (not a photo) before writing the
  `coverAlt` to say so honestly; credited in frontmatter `photoCredits`.
  Used the standing generic Amazon tag (`adamandlinds00-20`) on a
  digital-luggage-scale search URL via `<AffiliateButton>`, same pattern
  as the power-bank and plug-adapter posts. Rolled length tier 1 (450-
  600 words, landed at 509) and format 14 (direct address), which fit
  well, the whole post is framed as "weigh your bag before you leave."
  Caught and cut 2 "actually" instances before publishing (a section
  heading and the closing paragraph), zero in the final body. `pnpm
  build`, `pnpm check`, `pnpm lint:house` all clean. Slug: `luggage-
  scale-overweight-baggage-fee-japan-flight`. Topic `en/travel-prep`.
  Moved the 2026-11-08 off-cycle fix note and the Minn Kappabashi Stay
  Spotlight "Done" entries out to `docs/blog-ideas-archive-14.md` to
  stay under the house-lint 400-line cap (that archive file is now at
  259 lines).
- **Stay Spotlight, 2026-11-16: The Park Front Hotel at Universal Studios
  Japan, Osaka, researched, no real stay.** Checked the "already posted
  today" guard first (no post with today's date existed). Checked AL_Vault
  first for a real unused stay (a Sep 2025 Taito Airbnb shows up in the
  family's own Travel Spend export but has no interior/property photos in
  AL_Vault and no confirmed listing name, not enough to write a real
  account from; a "hotel room" text search turned up only Minn Kappabashi
  material, already covered), so honest research is the right call, Monday
  doesn't require a visit anyway. Confirmed via `grep` no existing post
  covers this property; the three existing Stay Spotlight posts are a
  Hakone ryokan, Kimpton Shinjuku, and Minn Kappabashi, none near USJ.
  Real facts verified via WebSearch: the hotel sits a 1-minute walk from
  USJ's main gate (multiple independent sources agree), a standard double
  runs $121-127/night across several booking sites (Expedia Singapore/
  India, Hotels.com US/Korea, dates vary), and it lists family quad rooms
  (Superior Floor and Premium Superior Park View Family Quad) built around
  two twin beds plus Murphy beds. Deliberately did NOT state a specific
  quad-room capacity or price: sources directly conflict (6 vs 8 sleeps
  across Hotels.com/Orbitz/Trip.com) and no source gave a quad-specific
  rate, so the post says "more than four, confirm before booking" rather
  than picking one disputed number. Also checked and deliberately dropped
  an "early park entry" perk several third-party guides claim: one 2026
  source says it was discontinued in Oct 2024, another still lists it:
  genuinely contested, so left it out rather than repeat an unconfirmed
  claim. Real Expedia (h12315627) and Hotels.com (ho546281) property ids
  found via WebSearch and used directly with `expediaRedirect()`/
  `hotelsRedirect()`, not the generic storefront fallback. Cover: no
  AL_Vault or Commons-first option for an unvisited property normally
  applies the same way for a named commercial building, but Commons
  turned out to have real photos of this exact hotel (searched by name),
  used one (J o, CC BY-SA 4.0) instead of falling back to a booking-site
  photo. Rolled length tier 1 (450-600 words) and format 13 (history-led)
  first, no real history angle exists for a hotel this new, rerolled per
  CLAUDE.md's one-reroll allowance to format 11 (time/season-anchored);
  that didn't fit either, a Halloween Horror Nights booking-crunch angle
  had no confirmed sellout evidence and the 2026 season had already ended
  by this firing's date, so landed on format 6 (head-to-head) instead,
  undeclared in the roll but justified here: the real "one family quad vs
  two standard rooms" math is a genuine, already-proven-to-work angle on
  this site (same structure as the Minn Kappabashi post). Landed at 486
  words, tier 1. Zero "actually"/"genuinely" in the published body (2
  "actually" caught and cut across drafts, both section headings). `pnpm
  build`, `pnpm check`, `pnpm lint:house` all clean. Slug: `park-front-
  hotel-usj-osaka-stay-spotlight`. Topic `en/hotels-stays`. Moved the
  power-bank Quick Tip Tuesday "Done" entry and its same-day expansion
  out to `docs/blog-ideas-archive-14.md` to stay under the house-lint
  400-line cap (that archive file is now at 324 lines).
- **Off-cycle, 2026-11-16, same day: Oriental Hotel Universal City, a
  real April 2026 stay, site owner's direct request.** Not from the
  daily routine, the site owner said in chat "we did actually stay at
  the oriental hotel in usj" after today's Park Front Hotel post
  (researched, no real stay) went out, and sent 8 real photos from the
  stay (April 23, 2026) directly. Per the honesty rule, a real visit
  beats a researched one, so this got its own full post rather than a
  tacked-on mention. Checked AL_Vault first for these photos the normal
  way (text search for "Oriental Hotel," "Konohana," "hotel room" in
  Osaka), found nothing, the photos aren't AL_Vault-tracked, so no
  `mark_photo_used` call applies here, they came as direct chat
  attachments and were copied straight into the repo (cover via
  `src/assets/covers/`, in-body via a new `public/photos/` folder,
  served as absolute paths rather than the usual AL_Vault CDN pattern
  since there is no CDN URL for these). Compressed the four in-body
  JPEGs from 0.8-1.5MB down to 240-340KB each (ImageMagick resize to
  1600px + quality 82) before committing, since they don't pass through
  Astro's image pipeline the way the cover does. Of the 8 photos sent,
  3 (the Bubba Gump Forrest Gump shoes bench, the CityWalk 25th
  anniversary sign, a Minions splash-pad photo op) were skipped for
  this post, confirmed via `grep` that `universal-citywalk-osaka-three-
  kids.mdx` already covers that exact photo-op strip including what
  looks like the same Bubba Gump shot, used the other 4 (two room
  photos, the night view, the breakfast restaurant) instead and
  cross-linked to that existing post plus the Kaiyukan/Tempozan Harbor
  Village post for the shared Ferris wheel visible from the room at
  night, rather than re-describing ground already covered. Researched
  real current pricing (Expedia id 68823132, Hotels.com id
  ho2203340224) and Osaka's per-person accommodation tax and self-
  parking rate to round out the real account. Rolled length tier 2
  (600-800 words) and format 14 (direct address); landed at 633 words
  after two genuine real-detail additions (the accommodation tax note,
  the self-parking rate) rather than padding to clear the floor. Zero
  "actually"/"genuinely" in the published body (2 "actually" caught and
  cut across drafts). `pnpm build`, `pnpm check`, `pnpm lint:house` all
  clean. Slug: `oriental-hotel-universal-city-stay-spotlight`. Topic
  `en/hotels-stays`.
