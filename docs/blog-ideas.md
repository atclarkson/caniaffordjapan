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
- **Abandoned lead: Tokyo Metropolitan Government Building's free
  observation decks.** Same 02:00 UTC firing (2026-10-26), tried
  before the Super Nintendo World angle above. Found via the same
  7-day \$300/day vlog's own chapter list (Day 5: Shinjuku & Shibuya
  includes the building), confirmed via `grep` genuinely uncovered
  anywhere on the site, and the free-entry fact is well corroborated
  across many independent sources. Abandoned for two real reasons:
  no AL_Vault photo exists from this family's own visit to the
  building specifically (the $300/day vlog's Sept 2025 Tokyo trip has
  no supporting photo shoot in AL_Vault at all), and the video's own
  thumbnail depicts an unrelated scene (Mario/Peach at the airport)
  that would be a real content mismatch as a cover for a skyscraper
  post. Tried sourcing a Wikimedia Commons reference image per
  CLAUDE.md's explicit allowance for this exact situation and hit a
  persistent Commons API rate limit across three retries, see the
  note on the published Super Nintendo World entry above. Separately,
  current hours for the building's North and South decks are
  genuinely conflicting across sources (one official-looking page
  turned out to be a stale 2021 COVID-reopening notice), which would
  have meant hedging hours fairly heavily even with a cover image
  solved. A real, free, genuinely uncovered Tokyo attraction, worth
  revisiting if a future firing finds a working image source or
  real family photos of the building turn up in AL_Vault.
- **Akihabara's real history as a postwar radio-parts black market,
  long before anime and arcades took over.** 08:00 UTC firing
  (2026-10-26). Both priority sources exhausted again (same BLOCKED
  Ginza sumo idea, all three teamLab items still without real
  photos). Confirmed zero new AL_Vault uploads. Chased the Akihabara
  "Electronics Shopping, Trading Cards" chapter from the 7-day
  $300/day vlog's own chapter list again (the same video already
  mined for the Ueno/Ameyoko post), confirmed no AL_Vault photos
  exist for that Sept 2025 trip and the video's own thumbnail
  (Mario/Peach at the airport) would be a content mismatch for an
  Akihabara-specific post, so widened the search to the family's
  other real Akihabara material: a 37-second short, "Headed to
  Akihabara! If you ever miss the good ol' RadioShack days, this is
  your Mecca," real footage of jump-wire and component shop shelves,
  completely uncovered anywhere on the site (confirmed via `grep`,
  the two existing Akihabara posts cover a DS Lite mod workshop and a
  street-kart tour, neither touches the district's own history).
  Downloaded and visually inspected the short's thumbnail before
  using it as cover (genuine electronics-shop shelf shot, on-screen
  text matches the content directly, no concern), embedded the short
  itself in the post body via `youtube-nocookie.com` since it's the
  real source material, not just a cover image. Researched real,
  verified history via WebSearch: the 1869-fire/Chinkasha-shrine name
  origin, the postwar radio-parts black market (hedged honestly
  between two sources that disagree on the exact 1949 Occupation-ban
  vs. 1951 stall-order mechanics), the 1970s shift into computers,
  and AKB48's real namesake connection to the district (founded
  December 2005, theater on an upper floor of Akihabara's own Don
  Quijote store), a genuine, verifiable marker of how far the
  neighborhood's identity shifted from its radio-parts origins.
  Cross-referenced rather than re-deriving: the existing DS Lite
  workshop and street-kart posts for their own real current pricing,
  both confirmed resolving in the built HTML. No AffiliateBox: the
  cross-linked DS Lite workshop post already carries the real Klook
  link for Akihabara, consistent with the no-forced-duplication
  principle, and this post's own subject, walking the neighborhood
  and its history, isn't separately bookable. Rolled length tier 4
  (long, 1,000-1,300 words) and format 12 (family-logistics framing)
  from CLAUDE.md's system; rerolled format once since family logistics
  doesn't fit a history piece at all and format 12 was also just used
  on the immediately prior post, landed on format 13 (history-led,
  cost as second-half payoff), a strong genuine fit. Landed short of
  tier 4, one real short video plus verified history doesn't stretch
  to 1,000 words without restating facts, said so here rather than
  padding further. Published 2026-10-26 as
  `akihabara-electronics-district-history-radio-shack`, 786 words.
  Topic `en/shopping`. Zero uses of "actually" or "genuinely" in the
  published body (written clean on the first two drafting passes, no
  crutch words caught or cut). No `mark_photo_used` call, video-only
  source.
- **Stay Spotlight launch, Mon 2026-10-26: Kimpton Shinjuku Tokyo, the
  brand's debut Japan property.** First post under the new weekly
  calendar (see `CLAUDE.md`/`docs/weekly-calendar.md`). Site owner
  handed over real, working Hotels.com and Expedia affiliate-link
  examples mid-session (a Kimpton Shinjuku hotel page, a Mt Fuji/Hakone
  Expedia activity page), confirming both partners have a genuine
  landing-page wrapper formula, not just a flat storefront link as
  previously documented. Built and verified `expediaRedirect()` /
  `hotelsRedirect()` in `src/data/affiliates.ts` against the exact
  examples given (byte-for-byte match via a Node script, except one
  Expedia example had a stray `?&` artifact from however it was
  copied, confirmed harmless and not a flaw in the function). Picked
  Kimpton Shinjuku itself (the property in the site owner's own
  example) as the debut subject: researched real history (IHG's first
  Japan Kimpton, announced July 2018, opened October 2, 2020, deep in
  pandemic border closures, same week as Kimpton Bangkok), real
  property facts (Art Deco boutique near Shinjuku Gyoen, ~150 rooms,
  room sizes, amenities, rooftop bar, Jones Café, District brasserie),
  real but hedged pricing (roughly $336-509/night across recent
  snapshots, explicitly not live pricing), real rating caveats (9.6/10
  aggregator score on a small review sample; Michelin lists it with no
  score, no verified stay). Added real Kimpton brand history (founded
  1981, Bill Kimpton, IHG's $430M acquisition in 2014/2015, the real
  pet-friendly policy) as a genuine second section rather than padding.
  Cross-referenced the existing Narita transit post for the real N'EX
  fare/time rather than re-deriving it. No AL_Vault photo (family
  hasn't stayed there, and per the new honesty rule that's fine, no
  disclaimer needed, just never claimed a visit). Wikimedia Commons hit
  its now-familiar persistent rate limit on the `action=query` search/
  imageinfo endpoints again, but `Special:FilePath` (a direct redirect
  to the file, no api.php query) worked immediately and wasn't rate
  limited, a real workaround worth remembering for future firings, now
  documented in `CLAUDE.md` "Images". Used a real, licensed Commons
  photo of Shinjuku Gyoen National Garden (the hotel's own neighborhood
  landmark, no Commons photo of the hotel itself existed) with full
  attribution (Basile Morin, CC BY-SA 4.0). Rolled length tier 3
  (standard, 800-1,000 words) and format 13 (history-led, cost as
  second-half payoff) from CLAUDE.md's system, format 13 fit naturally
  given the real pandemic-opening hook. Landed just under tier 3 (779
  words before the Commons attribution line), said so rather than
  padding further. Published 2026-10-26 as
  `kimpton-shinjuku-tokyo-stay-spotlight`. Topic `en/hotels-stays` (new
  topic, created for this column). Real Hotels.com and Expedia
  affiliate links via `AffiliateBox` `overrides`, both verified
  resolving correctly in the built HTML. Zero uses of "actually" or
  "genuinely" in the published body (6 "actually" and 2 "genuinely"
  caught and cut across drafts). No `mark_photo_used` call, Commons
  photo, not AL_Vault.
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
  photo, not AL_Vault.
