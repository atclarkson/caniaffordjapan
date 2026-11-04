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
