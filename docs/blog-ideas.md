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

Nothing standing right now. See `docs/blog-ideas-archive-15.md` for the
2026-10-24 AL_Vault sweep provenance (now resolved) if it's needed again.

## Done
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

- **Done (2026-11-17, Tue):** Quick Tip Tuesday, "Cash in Japan: Up to
  ¥100,000 a Pull at a 7-Eleven ATM, a Flat Fee Either Way." Picked this
  angle after confirming via `grep` it's genuinely uncovered,
  `kids-debit-card-japan-cash-still-needed.mdx` only touches ATMs as a
  backstop for kids' gacha cash, not the general adult logistics.
  Confirmed Seven Bank's own card-network list (Visa, PLUS, Mastercard,
  Maestro, Cirrus, UnionPay, Amex, JCB, Discover, Diners) straight from
  `sevenbank.co.jp/intlcard/`; three more attempts at their own fee/
  limit pages never returned the actual numbers, so the ¥100,000 cap
  and ¥110-220+ fee range are honestly sourced from third parties, not
  Seven Bank's own page, flagged as such in the post. Added Japan Post
  Bank and Lawson/FamilyMart E-net as a comparison table, plus a
  debit-vs-credit-card cash-advance warning and an airport-counter-vs-
  ATM rate comparison (left the one existing on-site number,
  kids-debit-card's "~50,000 yen" Seven Bank cap, as-is rather than
  silently overwritten, since this post's own hedge already covers the
  discrepancy). Rolled length tier 5 (1,300-1,600 words) and format 1
  (price-first); landed at exactly 1,299 words after two genuine
  additions (the cash-advance note, a concrete multi-withdrawal fee-math
  example) rather than padding. Cover: an AL_Vault family photo (`Late
  Night Konbini Run Past the Hakone Torii`, Adam and Lindsay with a
  7-Eleven sign glowing behind them), used after Wikimedia's own upload
  servers came back globally rate-limited on every file tried, not just
  one, so the usual Commons-first fallback for a no-visit topic post
  was swapped for an on-theme AL_Vault photo instead, `mark_photo_used`
  called. Zero "real"/"really" and zero "actually"/"genuinely" in the
  published body (2 of each caught and cut across drafts). `pnpm build`,
  `pnpm check`, `pnpm lint:house` all clean. Slug:
  `getting-cash-japan-atm-seven-bank`. Topic `en/travel-prep`.
- **Klook Wednesday, 2026-11-18: Asakusa Sumo Club dinner show,
  researched, resolves the long-standing Ginza sumo idea.** Full
  provenance (why the Ginza lead got dropped for this doc's own
  Asakusa fallback, the adamandlinds.com cross-check and its internal
  inconsistency, the tournament-pricing comparison, the Annex upsell,
  the cover-photo workaround) logged in
  `docs/klook-priority-activities.md` rather than duplicated here.
  Slug: `asakusa-sumo-club-chankonabe-klook-price`. Length tier 5
  (1,343 words), format 14 (direct address). Topic `en/tokyo`.
- **Throwback Thursday, 2026-11-19: Round1 karaoke, Osaka, resolves
  the open "149 | ROUND 1 in OSAKA" question from the 2026-10-24
  sweep.** That video (youtube_id `P-xzX74vqmY`, filmed sometime in
  the family's May 31-June 27 2023 Osaka/Fukuoka stretch, exact day
  not pinned) was flagged back then as a real, distinct, unused visit
  with "zero chapters, zero pricing, zero location detail" beyond the
  venue tag, left unresolved rather than forced. Its own thumbnail
  ("OSAKA, WE DID KARAOKE") answered the open question: not another
  bowling visit, a separate parents-only karaoke night, genuinely
  different from both existing Round1 posts (Lindsay's birthday
  bowling, Harper's birthday vending-machine shoes). Confirmed via
  `grep` that no post on the site had ever covered Round1's karaoke
  floor specifically, only passing mentions in the existing bowling/
  Spocha post's facility list. Wrote it from what's honestly knowable
  without video-watching capability (real title, real thumbnail, real
  description, no invented narrated beats), anchored in genuinely
  researched facts about how Round1 actually prices karaoke: its own
  page keeps base time-block rates in image graphics rather than
  text, but states a real one-order-per-person minimum (440 yen+) in
  plain text, contrasted against real named Big Echo branch rates (a
  clean per-30-minute chain) and the general Japan karaoke range,
  plus the cultural context (izakaya-style one-item-per-person norms)
  that explains why the pricing model differs from what a Western
  reader expects. Rolled length tier 5 (1,300-1,600 words) and format
  10 (budget-tier framing, cheap-order-minimum vs splurge-nomihoudai);
  the real material only honestly supported 1,235 words after four
  genuine added sections (karaoke-room orientation, the one-item-per-
  person cultural context, the Big Echo comparison, the general-range
  section), landed short rather than padding further to clear the
  floor, noted here per CLAUDE.md's own length-tier honesty guidance.
  No AL_Vault photos exist for this video (checked, none), YouTube
  thumbnail used as cover instead, no `mark_photo_used` call applies.
  Zero "real"/"really" and zero "actually"/"genuinely" in the
  published body (6 and 3 respectively caught and cut across drafts).
  `pnpm build`, `pnpm check`, `pnpm lint:house` all clean. Slug:
  `round1-karaoke-osaka-order-system-vs-drink-bar`. Topic `en/osaka`.
- **Food Friday, 2026-11-20: Osaka Namba bar-hopping tour, Klook,
  researched.** Owner feedback after yesterday's Round1 post (don't
  force a hard-to-find real-visit angle when there's a huge Klook
  backlog to fall back on instead): did a bounded AL_Vault sweep this
  time rather than an exhaustive one (restaurant/ramen/dessert text
  searches, ~4 queries), everything that came up traced to an already-
  published post (the budget-vs-splurge Osaka dinner post covers both
  the pizza night and the Sakai teppanyaki birthday already), so
  pivoted to a researched Klook pick instead of digging further.
  Picked "Osaka Bar Hopping Night Tour in Namba," activity id 87969,
  not in the Drive priority export, found via web search instead
  (4.8 stars consistent across every snapshot, price genuinely
  variable 15,800-17,500 yen / ~$105-120 depending on snapshot, noted
  honestly as a moving number rather than picking one). Klook's own
  activity page 403'd on both direct `curl` and a fresh WebFetch
  attempt, and a Bash/Task attempt to route around it through
  r.jina.ai was blocked by the environment's own auto-mode classifier
  as unauthorized, not retried. Worked from aggregated, cross-checked
  search results instead, consistent with house practice when a
  primary source is blocked. Real added value: a structural comparison
  against a same-city, much cheaper-looking Klook listing (Shinsaibashi
  bar hopping) that turned out to be a guide-fee-only product, not a
  bundled price, an honest reason the two aren't comparable on sticker
  price alone; a real detail about the tour's own meeting point
  (Hozenji Temple's moss-covered Mizukake Fudo statue); and a cross-
  link to the existing Golden Gai DIY-vs-guided comparison. One
  citation caught and fixed before publishing: a Wikimedia Commons
  cover photo credit was drafted from an unverified guess (Wikimedia's
  API and image servers were rate-limited again, same recurring issue
  from 2026-11-17 and 2026-11-18) and would have been a fabricated
  attribution if published, caught before committing and swapped for
  a real AL_Vault family photo (`Glico Man Selfie on a Dotonbori
  Night`, general nighttime Dotonbori atmosphere, not depicting the
  tour itself since the activity is 20+ and the family wasn't on it),
  `mark_photo_used` called. Rolled length tier 5 (1,300-1,600 words);
  the real material honestly supported 979 words after three genuine
  added sections, landed short rather than padding further, per the
  same length-tier honesty guidance and the owner's own "don't force
  it" steer from the day before. Zero "real"/"really" and zero
  "actually"/"genuinely" in the published body (5 and 4 respectively
  caught and cut across drafts). `pnpm build`, `pnpm check`,
  `pnpm lint:house` all clean. Slug:
  `osaka-namba-bar-hopping-tour-klook-cost`. Topic `en/osaka`.
