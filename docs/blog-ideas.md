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
- **Harper's 4th-birthday letter-balloon banner, the one that fell
  apart mid-party.** 20:00 UTC firing (2026-10-23). Both priority
  sources exhausted again (same BLOCKED Ginza sumo idea, all three
  teamLab items still without real photos). Confirmed zero new
  AL_Vault uploads. Found "152 | HAPPY BIRTHDAY HARPER!" in the
  `Osaka` video pool while re-checking it for text matches, filmed
  2023-06-25, `notes_for_ai` field confirming "June 25 is Harpers
  Birthday." Confirmed via `grep` this is genuinely distinct from two
  existing birthday posts: Cora's 2026 Osaka apartment party (same
  city, different kid, different year) and Harper's own 5th-birthday
  cake post (same kid, different year, different city, Katsushika),
  neither overlapping with this 2023 4th birthday. Checked the
  thumbnail's tone before using it as cover: confirmed a real, funny,
  family-appropriate mishap rather than anything concerning, the
  video's own "A TRAIN WRECK" text overlay refers to the collapsed
  balloon-letter banner spelling "Appy Pi Thoa H," visible directly
  in the thumbnail's jumbled pink letters. Researched real current
  Japanese pricing for the self-adhesive letter-balloon product
  category rather than guessing at a number for the specific banner
  (no receipt survives): Daiso's printed round balloon at 110 yen,
  Can Do's foil logo balloon set at 330 yen (both 100-yen-shop tier),
  versus sturdier Rakuten marketplace garland sets starting around
  1,600 yen with real string backing. Framed the post (format 7,
  artifact-driven) around the banner itself as the real "artifact"
  rather than the apartment or the venue. Added a genuine cross-
  reference section comparing this party's decoration budget against
  the other two real family birthdays already published rather than
  re-deriving their numbers, both links confirmed resolving in the
  built HTML. Rolled length tier 3 (standard, 800-1,000 words) and
  format 7 from CLAUDE.md's system, no reroll needed. Landed short of
  tier 3 even after the added comparison section, a single-product
  mishap story doesn't honestly stretch past about 620 words without
  restating the same pricing facts, said so here rather than forcing
  it further. Published 2026-10-23 as
  `birthday-balloon-letter-banner-fell-apart-osaka`, 621 words. Topic
  `en/unexpected-costs`. No affiliate link: a 100-yen-shop balloon and
  a Rakuten garland set aren't Klook/GYG bookable. Zero uses of
  "actually" or "genuinely" in the published body (2 "actually"
  caught and cut across drafts). No `mark_photo_used` call,
  video-only source.
- **Plush souvenirs from Japan, and the real habit of giving every
  one its own airplane seat home.** 02:00 UTC firing (2026-10-24, new
  day). Both priority sources exhausted again (same BLOCKED Ginza
  sumo idea, all three teamLab items still without real photos).
  Confirmed zero new AL_Vault uploads. The `Osaka`, `Taito`,
  `Katsushika`, `Shibuya`, `Shinjuku`, and `Kawasaki` pools all came
  up either already fully covered or too ambiguous to write
  confidently from (checked each via `grep` against existing posts
  before moving on, including a Round1-tagged-Osaka video that
  couldn't be confirmed as genuinely distinct from the already-
  published Sakai visits, so left alone rather than guessing). Found
  real, unused material in the small `Ota` photo pool instead (Haneda
  Airport sits in Ota ward): three photos tagged "transit day," all
  `used_in_count: 0`, real AI captions ("The stuffed animals always
  get their own seat on the flight out of Japan") and `notes_for_ai`
  ("on the way home to america") confirming this is a genuine,
  recurring family habit, not a one-off staged shot. Previewed the
  actual photos before committing (no video thumbnail to check here,
  a photo-sourced post), confirmed wholesome, on-brand, no concern.
  Cross-checked a broader `tags_any: ["stuffed animal", "transit
  day"]` search across the whole catalog and found the same habit
  documented on a separate occasion (Disney Sea plushies on the
  monorail), confirming this as a real pattern rather than inventing
  one from a single photo. Cross-referenced rather than re-deriving:
  the existing cheap-vs-official Sanrio plush post for all pricing,
  this post covers the departure-day logistics angle instead, link
  confirmed resolving in the built HTML. Used two real AL_Vault
  photos in the body for the first time this window (prior firings
  were all video-sourced), cover image downloaded directly from the
  AL_Vault CDN rather than a YouTube thumbnail, `mark_photo_used`
  called for both. Rolled length tier 2 (short, 600-800 words) and
  format 15 (plain declarative, no hook) from CLAUDE.md's system, no
  reroll needed. Published 2026-10-24 as
  `plush-souvenirs-japan-flying-home-cost`, 597 words, just under the
  rolled tier. Topic `en/unexpected-costs`. No affiliate link: nothing
  on the page is bookable, souvenir plush and airline carry-on policy
  aren't Klook/GYG activities. Zero uses of "actually" or "genuinely"
  in the published body (2 "actually" caught and cut across drafts).
- **Round1's bowling-shoe vending machine, found on Harper's 4th
  birthday.** 14:00 UTC firing (2026-10-24). Both priority sources
  exhausted again. Picked up the open question flagged in the 08:00
  firing's exhaustion note: confirmed via `get_trip` that the
  Round1-tagged-`Osaka` video is a real, distinct 2023 visit tied to
  Harper's birthday (see the RESOLVED note above), not an overlap
  with either already-published 2026 Sakai visit. Checked the 16-
  second short's own thumbnail tone before using it as cover
  (cheerful, matches the content, no concern). Researched the vending-
  machine shoe-rental mechanism itself (size-labeled machines, button,
  shoes drop from an opening at the bottom, sizing tops out around
  27.5-28cm) since the family's own clip is too short to document the
  mechanics on its own, hedged honestly that the detailed sourcing is
  thinner (a single 2011 traveler account) than the rest of the site's
  research. Added a genuine real-history section to earn length
  rather than padding: Round1's real 1980 roller-rink-and-arcade
  origin as Sugino Kosan in Izumiotsu, bowling added in 1982, renamed
  Round1 in 1993, confirmed via the company's own official history
  page rather than a tertiary source. Cross-referenced rather than
  re-deriving: the existing Round1-Sakai pricing post for current
  costs, link confirmed resolving in the built HTML. Rolled length
  tier 1 (quick hit, 450-600 words) and format 2 (free-vs-paid split)
  from CLAUDE.md's system; rerolled format once since nothing at
  Round1 splits cleanly into free versus paid, landed on format 3
  (question title, build to a verdict) instead, noted here per the
  reroll-once allowance. Published 2026-10-24 as
  `round1-bowling-shoe-vending-machine-harper-birthday`, 461 words,
  within the rolled tier. Topic `en/osaka`. No affiliate link: this
  post doesn't link to Klook directly, the cross-linked Sakai post
  already carries that content, consistent with the no-forced-
  duplication principle used elsewhere this window. Zero uses of
  "actually" or "genuinely" in the published body (2 "actually" and 1
  "genuinely" caught and cut across drafts). No `mark_photo_used`
  call, video-only source.
- **A real hotel evacuation during July 2023's Kyushu rain emergency,
  and what Japan's alert levels mean for travelers.** 20:00 UTC firing
  (2026-10-24). Both priority sources exhausted again. Went back to
  the `Fukuoka` pool (1 photo + 2 videos, only the baseball video
  previously mined) and found "154 | FUKUOKA FIRST IMPRESSIONS,"
  genuinely uncovered: the existing PayPay Dome baseball post
  mentions the same rainy week and hotel evacuation only as one
  passing backstory sentence, never gives the evacuation or the real
  regional event its own treatment. Confirmed via `grep` neither
  "evacuat" (beyond that one sentence) nor the real event got a
  dedicated post. WebSearched before writing anything and found the
  real, documented event behind the family's own account: a record
  rain emergency across northern Kyushu around 2023-07-10, JMA
  calling it some of the heaviest rain the region
  had recorded, real harm nearby including a Kurume landslide.
  Treated this carefully given the sensitivity, real people were
  genuinely hurt in the broader event: kept the family's own account
  modest and factual (a hotel evacuation on real local guidance, nothing
  dramatized), gave the regional event brief, respectful, accurately-
  sourced context rather than dwelling on it, and centered the post on
  practical, genuinely useful value for travelers instead of the
  family's own story. Researched Japan's real 5-level evacuation alert
  system (Level 4 instruction = leave immediately, don't wait for
  Level 5) for the practical section. Checked the thumbnail's tone
  first (neutral "first impressions" skyline shot, no mismatch
  concern either direction). Cross-referenced rather than re-deriving:
  the eSIM-vs-pocket-wifi post for the connectivity angle and the
  PayPay Dome baseball post for what happened once the rain cleared,
  both confirmed resolving in the built HTML. Rolled length tier 1
  (quick hit, 450-600 words) and format 14 (direct address) from
  CLAUDE.md's system, no reroll needed, format 14's reader-facing
  framing fit the sensitive subject well without needing a dramatized
  angle. Published 2026-10-24 as
  `japan-weather-emergency-evacuation-hotel-fukuoka`, 497 words,
  within the rolled tier. Topic `en/fukuoka`. No affiliate link:
  nothing on the page is bookable. Zero uses of "actually" or
  "genuinely" in the published body (5 "actually" caught and cut
  across drafts). No `mark_photo_used` call, video-only source.
- **A real, unplanned Osaka ramen shop stop: ticket-machine ordering,
  real etiquette, and current pricing.** 02:00 UTC firing (2026-10-25,
  new day). Both priority sources exhausted again. The `Fukuoka` pool
  is now fully mined (both videos used), so tried a new approach
  instead of re-checking already-exhausted city pools from scratch:
  `get_trip` across a broad, previously-unchecked Osaka date window
  (2026 year-to-date) first, which mostly surfaced material already
  covered by the Tennoji Zoo, birthday, and yakitori-with-friends
  posts (confirmed via `used_in` on the `search_photos` blog view
  rather than assuming), then re-sorted the full `Osaka` photo pool by
  `uploaded_newest` instead of capture date, which surfaced a real,
  completely unused photo from a 2023-05-30 stop never used anywhere:
  "Fish Face at a Ramen Shop in Osaka," confirmed `used_in: []` before
  committing to it. No restaurant name, no receipt, no video to go
  with it, just the one real candid photo and a genuine detail worth
  building around: a Japanese "no additives" quality sign (無添加)
  visible on the wall behind her. Confirmed via `grep` no existing
  post covers fresh ramen (only a passing Bamiyan-chain mention and
  the Cup Noodle Museum's instant-noodle history). Previewed the
  photo directly before committing (no YouTube thumbnail to check,
  photo-sourced), wholesome, no concern. Researched real ordering
  mechanics (ticket machines/shokkenki, top-left button convention,
  cash-preferred), real etiquette nuance (slurping is fine but not a
  free-for-all, eat-and-go shop culture, tsukemen's dip-don't-pour
  rule), real history (Chinese chūka-soba origins, the 1926 Sapporo
  milestone), and real current pricing (Japan's own government survey,
  607 yen national average as of January 2026, versus the honest
  800-1,300+ yen real-world range restaurants actually charge, the
  documented industry-wide price-pressure trend toward 1,000 yen a
  bowl), hedged honestly that Osaka-specific pricing sourcing wasn't
  reliable enough to quote as fact. Cross-referenced rather than
  re-deriving the instant-ramen/Momofuku Ando history already covered
  by the Cup Noodle Museum post, link confirmed resolving in the built
  HTML. Rolled length tier 6 (extended feature, 1,600-2,000 words) and
  format 5 (narrative-first, cost as payoff) from CLAUDE.md's system;
  opened with the real photo's own scene per the rolled format. Landed
  short of tier 6, a single unplanned-stop photo with real ordering/
  etiquette/history/pricing research genuinely supports under 1,000
  words without restating facts, said so here rather than forcing it
  further. Published 2026-10-25 as
  `ramen-shop-osaka-ordering-etiquette-real-cost`, 941 words. Topic
  `en/budget-food`. No affiliate link: an unnamed neighborhood shop
  isn't a bookable Klook/GYG activity, consistent with how the
  tonkatsu and conveyor-belt-sushi posts handled the same situation.
  Zero uses of "actually" or "genuinely" in the published body (6
  "actually" and 1 "genuinely" caught and cut across drafts). Real
  AL_Vault photo used in cover and body, `mark_photo_used` called.
- **Free kao-hame face-cutout board in Shinsekai versus the roughly
  400-yen purikura booth already covered.** 08:00 UTC firing
  (2026-10-25). Both priority sources exhausted again (same BLOCKED
  Ginza sumo idea, all three teamLab items still without real
  photos). Confirmed zero new AL_Vault uploads via `get_destinations`.
  Re-sorted the full photo catalog by `uploaded_newest` rather than
  city browsing, the technique that found the ramen-shop photo last
  firing, and found a batch of eight unused (`used_in_count: 0`)
  photos from a June 3, 2023 Shinsekai stop: kids posing at a
  Tsutenkaku-shaped face-cutout board, genuinely uncovered. Confirmed
  via `grep` that both existing Tsutenkaku/Shinsekai posts cover the
  tower and the neighborhood's free walk but never mention the
  cutout board itself. Checked the thumbnail's tone first (cheerful
  kid photo, matches the content, no concern). Researched real
  history via WebSearch before drafting: the Japanese name "kaohame"
  (face-insert) was coined by researcher Ijichi Hiroyuki for a 2001
  book because the format had no settled name before that, and the
  concept itself isn't Japanese at all, American illustrator Cassius
  Coolidge patented "comic foregrounds," the same head-hole-in-a-
  painted-canvas idea, in the US in 1874. Rolled length tier 1 (quick
  hit, 450-600 words) and format 10 (budget-tier framing, cheap
  version vs splurge version of the same thing) from CLAUDE.md's
  system; the free cutout board and the already-covered ~400 yen
  purikura booth are both souvenir-photo formats, a genuine fit for
  format 10 without needing a reroll. Cross-referenced rather than
  re-deriving: linked the existing purikura post for its real cost
  and mechanics instead of repeating them, confirmed resolving in
  the built HTML. No `AffiliateBox`: neither the free board nor
  purikura is Klook/GYG bookable, consistent with how the purikura
  post itself handled the same situation. Published 2026-10-25 as
  `kao-hame-face-cutout-board-shinsekai-purikura-comparison`, 552
  words, within the rolled tier. Topic `en/osaka`. Zero uses of
  "actually" or "genuinely" in the published body (written clean on
  the first pass, no crutch words caught or cut). Two real AL_Vault
  photos used (cover and one in-body), `mark_photo_used` called for
  both.
- **Our actual first Worldschool Pop-Up Hub experience, a full week
  in Tokyo, months before the already-published Kawasaki meetup
  day.** 14:00 UTC firing (2026-10-25). Both priority sources
  exhausted again (same BLOCKED Ginza sumo idea, all three teamLab
  items still without real photos). Confirmed zero new AL_Vault
  uploads via `get_destinations`. Re-sorted the full photo catalog by
  `uploaded_newest` again and spotted "Worldschool Kids on a Concrete
  Slide in Taito" (unused) and several Heiwanomorikoen rope-climb
  photos from the same week; `get_trip` across 2023-10-28 to
  2023-10-29 (no city filter, a city-filtered `get_trip` call
  returned nothing for these dates even though the photos
  themselves are geotagged, worth remembering for a future firing)
  surfaced the real find: a video titled "What is a Worldschool
  Popup? Our First Experience," filmed October 28 2023 in Tokyo,
  months before the already-published Kawasaki worldschool meetup.
  Confirmed via `grep` that the Kawasaki post already explains what
  the Pop-Up Hub is in full (the Carlsons, free, informal, no
  booking link) and even mentions Tokyo as a past stop, but never
  details this specific first week, so cross-linked to it for that
  background rather than re-deriving it and focused this post on the
  genuinely new angle: what a multi-day popup week looks like versus
  the single meetup day already covered. Checked the thumbnail's
  tone first (group of kids on a slide, cheerful, matches the
  content, no concern). The two Heiwanomorikoen photos used here are
  already used elsewhere (that park's own free-vs-paid post), reuse
  is fine per AL_Vault's own policy, confirmed via `grep` that post
  never mentions worldschooling at all so there's no content overlap
  beyond the shared location. Disregarded one `notes_for_ai` field on
  the source video that claimed it was filmed "over Thanksgiving 2023
  for my dad's 70th birthday," since that contradicts the video's own
  October 28 filmed date and reads as a mismatched note from a
  different video, not something to state as fact. Rolled length
  tier 2 (short, 600-800 words) and format 1 (price-first, no verb in
  the title) from CLAUDE.md's system; opened the body with the
  one-line free-to-join answer per format 1's own instruction rather
  than scene-setting first. Added one genuine extra section to reach
  the rolled tier honestly rather than padding: how a family would
  actually find out a popup week is happening (word of mouth, no
  booking page), a real logistical point implied but not spelled out
  in the Kawasaki post. Published 2026-10-25 as
  `worldschool-popup-tokyo-first-week-free`, 668 words, within the
  rolled tier. Topic `en/tokyo` (no existing worldschool-specific
  topic, and this is genuinely just "a thing that happened in Tokyo"
  the way CLAUDE.md's topic guidance describes). No affiliate link:
  a free informal meetup isn't Klook/GYG bookable, consistent with
  how the Kawasaki worldschool post handled the same situation. Zero
  uses of "actually" or "genuinely" in the published body (2
  "actually" and 1 "genuinely" caught and cut across drafts). Two
  real AL_Vault photos used (cover and one in-body), `mark_photo_used`
  called for both.
