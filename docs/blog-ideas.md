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
- **REMOVED: The Unicorn Gundam statue at DiverCity Tokyo.** Published
  2026-10-16 (08:00 UTC firing) as `unicorn-gundam-divercity-tokyo-free-gone`,
  then deleted the same day on the site owner's direct instruction: a
  post about a statue that's already gone doesn't help anyone planning
  a trip, wrong call to publish it even though every fact in it was
  real and sourced. Don't pick this topic again. The source photo
  (`17e8ee36`, Koto, November 2023) is still real and unused in
  AL_Vault if a genuinely useful angle on it ever comes up, but "a
  thing that used to be free and isn't there anymore" isn't one.
- **Kids' debit cards in Japan: what a card covers and what still
  needs cash.** 08:00 UTC firing (2026-10-17). Both priority sources
  exhausted again (same BLOCKED Ginza sumo idea, all three teamLab
  items still without real photos). Confirmed zero new AL_Vault
  uploads since the last firing. Pivoted to another real,
  uncovered affiliate category from `docs/affiliates-reference.md`
  per the loosened routine: Greenlight (kids debit card), link only,
  no stated commission in that doc. Verified via web search that
  Greenlight's own help center lists Japan as supported with
  automatic international activation for kids' cards and no stated
  foreign transaction fee, flagged one conflicting third-party note
  on possible conversion fees honestly rather than picking a side.
  Found the real, genuinely differentiating hook through research
  rather than assumption: gacha/capsule toy machines in Japan default
  to coins (confirmed via multiple sources), not cards, directly
  relevant to this site's own existing gacha pricing (MOOOSH Squishy
  Harajuku, Kura Sushi's Bikkura Pon machines, both already
  published, cross-referenced rather than re-derived). Researched
  real 7-Eleven/Seven Bank ATM mechanics for the "where does the cash
  come from" angle (English interface, ~50,000 yen per-transaction
  cap, 110-220 yen typical fee range, choose yen not dynamic
  conversion) and real UFO catcher/claw machine pricing (roughly 100
  yen baseline, honestly flagged as thinly and inconsistently
  sourced). Rolled length tier 6 (extended feature, 1,600-2,000
  words) and format 15 (plain declarative) from CLAUDE.md's system,
  no reroll needed. Published 2026-10-17 as
  `kids-debit-card-japan-cash-still-needed`, 1,255 words, landed
  short of the rolled tier 6 despite genuine expansions (the ATM/cash
  section, a worked real-numbers day-in-the-life example combining
  already-published gacha pricing), said so here rather than padding
  further with thinly sourced claw-machine detail beyond the one
  honestly hedged figure already included. Topic
  `en/unexpected-costs`. Reused a real, previously unused Nihonbashi
  Pokémon Center photo (`9956db4d`, October 2023, `used_in_count: 0`)
  as the cover, captioned honestly as a card-friendly retail purchase
  rather than claimed as gacha-specific. No Klook/GYG, not bookable;
  the Greenlight link is the only affiliate content, used neutrally
  as information about how the card functions abroad rather than an
  endorsement. Zero uses of "actually" or "genuinely" in the
  published body (6 caught and cut across drafts).
- **Hiroshima's Dreamination vs. Yokohama's Christmas Market, a real
  head-to-head on which winter lights are actually free.** 14:00 UTC
  firing (2026-10-17). Both priority sources exhausted again (same
  BLOCKED Ginza sumo idea, all three teamLab items still without
  real photos). Confirmed zero new AL_Vault photo uploads, but
  checked the video catalog for completely unexplored destinations
  this session hadn't touched: Hiroshima (0 photos, 4 videos) and
  Kyoto (0 photos, 2 videos). Found real, substantial material in
  Hiroshima specifically: a real November 28 2022 family vlog of the
  Dreamination winter light festival, filmed during the festival's
  own 20th anniversary year, confirmed via web search against
  multiple independent sources (started 2002, so 2022 genuinely was
  year 20; free, no ticket, every night of its run; roughly 1.4-1.5
  million LEDs across ~500 figures/tunnels; current 2026 dates not
  yet officially published, said so honestly). Hiroshima had no
  topic or posts on this site at all, created
  `src/data/topics/en/hiroshima.json` (order 16). No AL_Vault still
  photos exist for Hiroshima, so the cover is a direct download of
  the video's own real YouTube thumbnail, the same established
  pattern as the original Zauo post, and the video itself is embedded
  in the body via a 16:9 youtube-nocookie iframe (the same pattern as
  the existing Nara deer park post). Rolled length tier 4 (long,
  1,000-1,300 words) and format 6 (head-to-head comparison) from
  CLAUDE.md's system, no reroll needed; a genuine second real option
  existed for the comparison, the already-published Yokohama
  Christmas Market post from two firings earlier today, both real
  family-visited winter light events, letting this post compare them
  honestly (Dreamination fully free with no paid tier at all, vs.
  Yokohama's free zone around a real paid core) rather than forcing
  an artificial pairing. Published 2026-10-17 as
  `hiroshima-dreamination-vs-yokohama-christmas-market-free`, 1,004
  words, topic `en/hiroshima`. Added real, respectful detail on the
  Peace Park's eternal Flame of Peace (lit August 1 1964, designed by
  Kenzo Tange, meant to burn until nuclear weapons are abolished,
  doubles in size each August 6), cross-referenced the existing
  shinkansen booking post and the Yokohama post's own getting-there
  section honestly rather than re-deriving either. No AffiliateBox on
  either side, nothing about a free public light display or an
  already-covered market is newly bookable here. Zero uses of
  "actually" or "genuinely" in the published body (5 caught and cut
  across drafts). No `mark_photo_used` call, video-only source, no
  AL_Vault photo UUID to mark.
- **Kani Doraku's giant crab sign talking us into a Kyoto dinner.**
  20:00 UTC firing (2026-10-17). Both priority sources exhausted
  again (same BLOCKED Ginza sumo idea, all three teamLab items still
  without real photos). Confirmed zero new AL_Vault uploads. Followed
  up on Kyoto's own unexplored video pool (0 photos, 2 videos,
  flagged but not used in the prior Hiroshima firing): a real
  November 18 2022 family vlog, "First Time in Kyoto," covering an
  unplanned dinner at Kani Doraku, the crab restaurant chain known
  for its giant mechanized crab sign. Kyoto already had a topic
  (`en/kyoto`, used so far only by the Uji Nintendo Museum post) but
  no Kyoto-city post of its own, this is the first. No receipt or
  stated price in the video itself, researched and used the real
  current Kyoto-location menu instead (5 crab kaiseki tiers, all 9
  dishes, 4,730 to 7,260 yen, tax included, sourced from the
  restaurant's own reservation platform listing) rather than
  guessing a number for the unseen bill. Verified real chain history
  independently (founded 1960 in Dotonbori Osaka, the original
  mechanized crab sign roughly 6.5m tall, two real documented
  incidents: a 1984 accident and a 2003 Hanshin Tigers celebration
  incident) and the real structure of a crab kaiseki course (sashimi,
  vinegared crab, grilled crab, kani-suki hot pot, tempura, crab rice
  to close) to explain honestly why the higher tiers cost more
  (better crab, not more dishes). Rolled length tier 3 (standard,
  800-1,000 words) and format 5 (narrative-first, cost as payoff)
  from CLAUDE.md's system, no reroll needed, a real scene existed to
  open with (the sign itself prompting an unplanned dinner). Published
  2026-10-17 as `kani-doraku-crab-restaurant-kyoto-cost`, 839 words,
  topic `en/kyoto`. No AL_Vault still photos exist for Kyoto, cover is
  a direct download of the video's own real YouTube thumbnail, video
  embedded in the body via a 16:9 youtube-nocookie iframe, the same
  pattern used for the Hiroshima post earlier today. No specific
  Klook/GYG listing found for Kani Doraku itself after a direct
  search, used a plain query-based `<AffiliateBox>` ("Planning a
  Kyoto food stop?") instead, the same generic-query pattern already
  established on this site (e.g. the Dotonbori free-walk post) rather
  than inventing a specific listing that doesn't exist. Zero uses of
  "actually" or "genuinely" in the published body (4 caught and cut
  across drafts). No `mark_photo_used` call, video-only source.
- **Purikura photo booths, what they cost and how the process
  actually works.** 02:00 UTC firing (2026-10-18, new day). Both
  priority sources exhausted again (same BLOCKED Ginza sumo idea, all
  three teamLab items still without real photos). Confirmed zero new
  AL_Vault uploads. Used the last remaining unused Kyoto video from
  the pool the prior Kani Doraku post surfaced: "89 | KYOTO, JAPAN,"
  filmed November 22 2022, also Lindsay's first time filming a vlog
  herself, a real first-timer family visit to a purikura photo booth.
  Confirmed via `grep` this wasn't covered anywhere on the site yet.
  Researched real current pricing (~400 yen per session, coins only
  at most machines, some newer machines take Suica/Pasmo, cross-
  referenced honestly against the existing kids-debit-card post's own
  gacha-machine coin-first finding rather than re-deriving it) and
  the real booth process (pose prompts, no retakes, in-camera beauty
  effects, touchscreen decoration, sticker-sheet or phone-QR output).
  Added real, multi-sourced history (invented by Atlus employee
  Sasaki Miho in 1994, launched with Sega as "Print Club" in February
  1995, a real TV tie-in boosting 1996 popularity, competing
  manufacturers SNK/Konami/Namco/Furyu) and one honestly-hedged
  cultural-practice detail (some shops' historical solo-male
  restriction, flagged as location-variable rather than universal,
  thinly sourced so stated carefully). Noted a real, dated correction
  too: a once well-known Shibuya purikura shop closed in 2025,
  flagged so a reader doesn't chase an outdated named recommendation.
  Rolled length tier 5 (deep dive, 1,300-1,600 words) and format 15
  (plain declarative) from CLAUDE.md's system, no reroll needed.
  Published 2026-10-18 as
  `purikura-photo-booth-japan-cost-how-it-works`, 1,053 words, landed
  short of the rolled tier 5 despite genuine expansions (in-camera
  effects, family group-size logistics, the cultural-practice note,
  more TV-tie-in detail), said so here rather than padding further
  with thinly-sourced decoration-process marketing copy that didn't
  meet the site's sourcing bar. Topic `en/kyoto`. No AL_Vault still
  photos exist for Kyoto, cover is a direct download of the video's
  own real YouTube thumbnail, embedded in the body via the same 16:9
  youtube-nocookie iframe pattern as the other recent video-sourced
  posts. No AffiliateBox, no real bookable purikura listing exists,
  consistent with the site's own rule to skip entirely rather than
  force one. Zero uses of "actually" or "genuinely" in the published
  body (4 caught and cut across drafts). No `mark_photo_used` call,
  video-only source.
- **Hiroshima Peace Memorial Museum admission, 200 yen on top of the
  free park.** 08:00 UTC firing (2026-10-18). Both priority sources
  exhausted again (same BLOCKED Ginza sumo idea, all three teamLab
  items still without real photos). Confirmed zero new AL_Vault
  uploads. Used the last remaining unused Hiroshima video from the
  pool the Dreamination post surfaced two days ago: "91 | 80 YEARS
  AFTER THE BOMB - HIROSHIMA," filmed November 26 2022, the family's
  own real visit to the Peace Memorial Park and Museum, made as a
  deliberate standalone piece per its own description rather than
  folded into the day's regular travel vlog (the same day's lighter
  content, crane games and a yakitori dinner, went into a separate
  video the family chose to keep apart). Treated this one with real
  care given the subject matter, factual and respectful rather than
  the site's usual "worth it" framing applied casually. Caught a real
  problem before publishing: the video's own YouTube thumbnail (the
  default cover-photo source for this video-only pool) used bold
  clickbait-style text and a crosshair graphic over a photo of the
  A-Bomb Dome, tonally wrong for this subject. Switched the cover to
  a real, appropriately licensed Wikimedia Commons photo instead (Dan
  Smith's "A-Bomb Dome.jpg," CC BY-SA 2.5, citizens walking past the
  Dome on their way to an August 6 2004 memorial ceremony), downloaded
  into `src/assets/covers/` (not `public/reference/`, confirmed via
  `src/content.config.ts` that the frontmatter `cover` field needs
  Astro's `image()` pipeline, a relative src/assets import, not a
  public/ string path), also placed in the body as its own attributed
  figure per CLAUDE.md's citation rule rather than only in frontmatter
  alt text. Researched real, current admission tiers (Museum 200 yen
  adult, 100 yen high school, free junior high and under, 400 yen
  optional audio guide, a trialed 500 yen premium ticket during the
  August anniversary period; Park and Dome free, 24/7) and real,
  multi-sourced history: the Main Building designed by Kenzo Tange
  (also the Peace Flame's designer, a real cross-reference to the
  Dreamination post), completed 1955, a nationally important cultural
  property since 2006, pilotis design symbolizing rising from the
  ashes; a major renovation starting the early 2010s, East Building
  reopening 2017; the Dome's real 1996 UNESCO World Heritage listing,
  including the real historical disagreement (China's and the US's
  documented reservations) stated factually rather than omitted.
  Rolled length tier 5 (deep dive, 1,300-1,600 words) and format 3
  (question title, verdict at the end) from CLAUDE.md's system, no
  reroll needed, judged the question framing respectful rather than
  flippant since it's a real, common practical question. Published
  2026-10-18 as `hiroshima-peace-memorial-museum-admission-cost`,
  1,042 words, landed short of the rolled tier 5, said so here rather
  than padding a sensitive topic just to hit a number. Topic
  `en/hiroshima`. No AffiliateBox or Klook/GYG content anywhere on
  this page, a deliberate choice given the subject matter rather than
  an oversight. Zero uses of "actually" or "genuinely" in the
  published body (5 caught and cut across drafts). No
  `mark_photo_used` call, cover sourced from Wikimedia Commons, not
  AL_Vault.
- **The otoshi charge, Japan's near-universal izakaya surprise fee,
  via the last unused Hiroshima video.** 14:00 UTC firing
  (2026-10-18). Both priority sources exhausted again (same BLOCKED
  Ginza sumo idea, all three teamLab items still without real
  photos). Confirmed zero new AL_Vault uploads. Used the final
  remaining unused video in Hiroshima's pool: "92 | YAKITORI IZAKAYA
  IN HIROSHIMA, JAPAN," filmed the same November 26 2022 evening as
  the Peace Memorial visit, the lighter second half of that day
  (crane games, Christmas shopping, dinner) the family deliberately
  kept separate from the memorial footage, continuing that same
  honest split here rather than blending tones. No receipt or named
  restaurant in the video, so rather than guess a number, researched
  and used real otoshi mechanics (a near-universal, rarely-explained
  Japanese izakaya appetizer charge, 300-500 yen per person, up to
  1,000 yen at nicer spots, billed whether eaten or not, tied to
  Japan's no-tipping culture) as the genuine "catches people out"
  hook, plus honestly-hedged third-party-estimate Hiroshima yakitori
  izakaya pricing (2,000-5,000 yen per person across tiers, an 88
  yen/skewer budget chain option). Cross-referenced the existing
  Osaka izakaya-vs-yakiniku post's real skewer/beer pricing (100-300
  yen/skewer, Torikizoku's flat 390 yen, 500-800 yen draft beer)
  honestly, including correcting an early draft's unsupported claim
  that otoshi varies by city, that post simply never addressed
  otoshi at all, not evidence it doesn't apply there. Also
  cross-referenced real UFO catcher/crane game pricing (~100 yen)
  already established in the purikura and kids-debit-card posts
  rather than re-deriving it. Rolled length tier 6 (extended feature,
  1,600-2,000 words) and format 9 (heads-up/warning framing) from
  CLAUDE.md's system, no reroll needed, a real, well-documented trap
  existed (otoshi). Published 2026-10-18 as
  `izakaya-otoshi-charge-hiroshima-yakitori-cost`, 806 words, landed
  well short of the rolled tier 6, the real material (no receipt, no
  named restaurant, otoshi fully explained, cross-references used up)
  genuinely capped out around tier 3, said so here rather than
  padding a thin night out into a feature-length piece. Topic
  `en/hiroshima`. Checked this video's own YouTube thumbnail before
  using it as the cover (learned from the Peace Memorial post earlier
  today to check tone first), confirmed this one's a normal cheerful
  food-vlog style with no tonal mismatch, used it directly. No
  AffiliateBox, consistent with the existing Osaka izakaya post also
  carrying none, a casual dinner isn't Klook/GYG bookable. Zero uses
  of "actually" or "genuinely" in the published body (1 caught and
  cut from the first draft). No `mark_photo_used` call, video-only
  source.
- **A Kobe beef day trip where the steak itself was the low point.**
  20:00 UTC firing (2026-10-18). Both priority sources exhausted
  again (same BLOCKED Ginza sumo idea, all three teamLab items still
  without real photos). Confirmed zero new AL_Vault uploads, and
  found Kobe completely unexplored (0 photos, 1 video), a brand-new
  destination for the site. The video itself, "150 | DAY TRIP TO
  KOBE JAPAN," already carried a real, honest disappointment hook in
  its own description (the beef not living up to the hype), used
  directly rather than invented. Created `src/data/topics/en/kobe.json`
  (order 17), the first Kobe content on the site. Checked the video's
  own thumbnail for tone before using it as cover (a normal "STEAK
  FAIL" food-vlog style, confirmed fine). Researched real Kobe beef
  certification rules (Tajima-strain Japanese Black cattle, Hyogo
  Prefecture, 10-digit traceable animal ID, official certification
  seal) and real Kobe-restaurant pricing (12,000-17,000 yen lunch
  courses, dinner courses averaging 20,000+ yen, one real account of
  a family topping 100,000 yen; 9,900-16,500 yen by the cut). Added
  real Nankinmachi/Kobe Chinatown history (founded 1868 when Chinese
  traders, many from Guangdong and Fujian, settled near the newly
  opened port; rebuilt after WWII and again after the 1995 Great
  Hanshin earthquake) and real Osaka-Kobe transit detail (JR Kobe
  Line Shinkaisoku, ~20-25 min, 410 yen; cheaper Hanshin/Hankyu
  alternatives at 320 yen, ~30 min). Found a genuine, previously
  undocumented Viator affiliate link in the video's own description
  (`pid=P00074464&mcid=42383`) and corrected `docs/affiliates-reference.md`'s
  stale Viator entry (it previously said no link existed) rather than
  using it once and letting the doc go stale. Rolled length tier 2
  (600-800 words) and format 5 (narrative-first, cost as payoff) from
  CLAUDE.md's system, no reroll needed. Published 2026-10-18 as
  `kobe-beef-day-trip-steak-not-worth-hype`, 713 words, within the
  rolled tier. Topic `en/kobe`. Viator link verified in the built
  HTML. Zero uses of "actually" or "genuinely" in the published body
  (4 caught and cut across drafts). No `mark_photo_used` call,
  video-only source.
