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
- **Klook Wednesday, 2026-11-04: teamLab Forest Fukuoka, researched.**
  Checked the "already posted today" guard first (no post with
  today's date existed). Picked from `docs/klook-priority-
  activities.md`'s unblocked priority list (first in order, over
  teamLab Future Park Okinawa). Checked AL_Vault before defaulting to
  research: Fukuoka's pool is unchanged (1 photo, 2 videos, all
  already used in the PayPay Dome baseball post), no real teamLab
  Forest material exists. Full provenance logged in
  `docs/klook-priority-activities.md` rather than duplicated here:
  real angle (the one athletic/body-based teamLab space, structurally
  different from the other three), real PayPay Dome cross-link (a
  real family visit next door), real official-vs-Klook price gap
  (2,400 yen door vs. $15-16 Klook), real Drive-export affiliate
  link. Cover: no AL_Vault or Commons photo exists for this specific
  attraction; Klook's own activity page and `res.klook.com` images
  were unreachable (403) and the Drive CSV export was too large to
  download this firing, so used a real Headout listing photo instead
  (a different booking platform, still a genuine credited-listing
  fallback), honestly captioned. Rolled length tier 2 (short, 600-800
  words) and format 1 (price-first title, no verb, open with the
  one-line answer) from CLAUDE.md's system; format 1 fit naturally
  given the real official-vs-Klook price contrast, no reroll needed.
  Landed at 673 words, within tier. Published 2026-11-04 as
  `teamlab-forest-fukuoka-ticket-price`, 673 words. Topic
  `en/teamlab`. Zero uses of "actually" or "genuinely" in the
  published body (2 "actually" and 1 "genuinely" caught and cut
  across drafts). No `mark_photo_used` call, Headout photo, not
  AL_Vault.
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
