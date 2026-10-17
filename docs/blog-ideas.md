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
- **Japan's child car seat law, taxis vs rental cars.** 20:00 UTC
  firing (2026-10-15). Both priority sources exhausted again (same
  BLOCKED Ginza sumo idea), a quick `get_destinations` check found
  zero new uploads since the prior firing (Osaka still at 133).
  Checked `docs/affiliates-reference.md` again for another real,
  not-yet-covered, on-topic affiliate: Wayb (travel car seats, 10%
  commission, no customer code, generic Awin link, no specific
  product deep-link given so used the account link as-is rather than
  inventing one). Researched Japan's real Road Traffic Act child seat
  requirement (Article 71-3, Paragraph 4, under-6 threshold, National
  Police Agency enforced) and the real, specifically-named taxi
  exemption (practical reasoning: a taxi can't carry a correctly
  sized seat for every possible passenger) before committing, this
  wasn't covered by any existing post (`grep` for "car seat" only
  matched an unrelated street-kart post in passing). Found a real,
  official rental-car price point directly from Toyota Rent a Car's
  own English site (1,650 yen child/infant seat, 1,100 yen booster,
  one-time option fee) rather than relying on a secondary listing
  that gave a conflicting, likely-outdated 550 yen figure. Honestly
  flagged a single-source, unconfirmed 1-point license-deduction
  penalty detail as unverified rather than stating it as fact. Rolled
  length tier 1 (quick hit, 450-600 words) and format 15 (plain
  declarative) from CLAUDE.md's system, no reroll needed. Published
  2026-10-15 as `japan-child-car-seat-law-taxi-rental-car`, 508
  words, topic `en/unexpected-costs`. Reused a real, already-used
  Tokyo taxi photo ("Tokyo Taxi Goodbye Before Taiwan," the whole
  family riding with no car seats visible) as the cover, a direct,
  honest illustration of the taxi exemption itself rather than a
  generic stock-style choice. No Klook/GYG, nothing on this page is
  Klook/GYG bookable, the Wayb link is the only affiliate content.
  Zero uses of "actually" or "genuinely" in the published body (2
  caught and cut from the first draft).
- **Zenni before the trip vs. a walk-in optician once you land.**
  02:00 UTC firing (2026-10-16). Both priority sources exhausted
  again (same BLOCKED Ginza sumo idea, all three teamLab items still
  without real photos). Confirmed zero new AL_Vault uploads since the
  last firing (all destination pools unchanged from the prior
  entry's counts). Per the loosened routine, didn't re-exhaust every
  pool again, pivoted straight to a non-AL_Vault angle sourced from
  `docs/affiliates-reference.md`: Zenni (glasses), link only, no
  stated code or commission in that doc, so no discount or commission
  percentage was claimed anywhere in the post. Confirmed via a grep
  of existing posts that the gap was real: the existing
  `japan-optician-eye-exam-glasses-cost` post only covers in-Japan
  walk-in chains (JINS/Zoff/OWNDAYS), nothing about ordering glasses
  before the trip. Researched Zenni's real pricing, shipping tiers,
  PD self-measurement requirement, and 30-day return policy via web
  search (a September 2026 review was the most current source found,
  older reviews flagged and weighted less). Did not fabricate
  firsthand Zenni use, the post says plainly the family hasn't
  ordered from Zenni themselves and cites independent reviews rather
  than claiming personal experience, consistent with how the Wayb
  mention in the car seat post was handled. Rolled length tier 5
  (deep dive, 1,300-1,600 words) and format 11 (time/season-anchored)
  from CLAUDE.md's system; format 11 didn't fit, a logistics
  comparison post has no single "that day" scene to open with,
  rerolled once per CLAUDE.md's allowance and landed on format 8
  (itemized breakdown), a genuine fit for a line-by-line cost
  comparison. Published 2026-10-16 as
  `zenni-glasses-before-trip-vs-japan-optician`, 1,127 words, landed
  short of the rolled tier 5 (closer to tier 4), said so here rather
  than padding further once the real, itemizable material (pricing,
  shipping, PD measurement, returns, ordering steps, the quality
  tradeoff flagged by reviews) was used up. Topic
  `en/unexpected-costs`. Reused a real, previously unused photo
  ("Lily Finds Her Look in Osaka," April 20 2026, Kakudacho, Osaka,
  `used_in_count: 0`) as the cover, a different date and location
  from the existing optician post's own cover (April 8 2026, Abeno
  Ward), confirmed via full photo records before using either. No
  Klook/GYG, the Zenni link is the only affiliate content, used
  neutrally with no invented discount code or percentage. Zero uses
  of "actually" or "genuinely" in the published body (4 caught and
  cut across drafts).
- **REMOVED: The Unicorn Gundam statue at DiverCity Tokyo.** Published
  2026-10-16 (08:00 UTC firing) as `unicorn-gundam-divercity-tokyo-free-gone`,
  then deleted the same day on the site owner's direct instruction: a
  post about a statue that's already gone doesn't help anyone planning
  a trip, wrong call to publish it even though every fact in it was
  real and sourced. Don't pick this topic again. The source photo
  (`17e8ee36`, Koto, November 2023) is still real and unused in
  AL_Vault if a genuinely useful angle on it ever comes up, but "a
  thing that used to be free and isn't there anymore" isn't one.
- **Booking shinkansen tickets: JR Pass vs. Klook vs. 12Go vs. the
  station machine.** 14:00 UTC firing (2026-10-16). Both priority
  sources exhausted again (same BLOCKED Ginza sumo idea, all three
  teamLab items still without real photos). The site owner removed
  the previous firing's Gundam post as useless trivia and said stop
  over-disclaiming; applied that directly to topic selection this
  time, picked something with real planning value instead of "a real
  photo exists." Used the 12Go transit affiliate material wired in
  earlier today (`transitAffiliates.ts`) and the real second Klook
  account for JR/shinkansen content (`klookJrRedirect`, confirmed by
  the site owner as genuinely theirs, not a mismatch). No AL_Vault
  photo of the shinkansen itself exists (checked `search_photos text:
  "shinkansen"`, zero results, and "bullet train", also zero), so the
  post is honest about that: cover is a real, previously unused
  family photo of a regional train (`69dc6150`, "Laughing Through the
  Hakone Local Train," Tonosawa, November 21 2023), captioned
  accurately as the Hakone Tozan Line, not the shinkansen, used to
  illustrate real Japan train travel while the booking-channel content
  itself is general and well-sourced rather than a first-person "we
  rode it" account. Researched real current numbers via web search:
  JR nationwide pass prices after the October 1 2026 increase (7-day
  53,000 yen, 14-day 84,000, 21-day 105,000), a real Tokyo-Osaka
  Nozomi reserved fare (~14,720 yen one-way), and fetched Klook's own
  shinkansen page directly for real listed fares (Tokyo-Osaka $87.79,
  Tokyo-Kyoto $84.29), reserved-seat fee structure, QR-code delivery
  process, and oversized-luggage reservation rule. Rolled length tier
  4 (long, 1,000-1,300 words) and format 2 (free-vs-paid split) from
  CLAUDE.md's system; format 2 didn't fit, nothing on this page is
  free, all four booking channels are paid, rerolled once per
  CLAUDE.md's allowance and landed on format 14 (direct address),
  used honestly as "here's where the real savings are" speaking
  straight to someone about to book. Published 2026-10-16 as
  `booking-shinkansen-tickets-japan-cheapest-way`, 1,012 words, topic
  `en/transit`. Added a genuine family-of-five cost comparison (JR
  Pass vs. point-to-point for 2 adults + 3 kids on a 3-leg loop) and a
  booking-lead-time section as real expansions rather than padding.
  Full `<AffiliateBox>` (Klook only, via the JR-specific account) plus
  `<KlookCodeBox>` since Japan Shinkansen tickets are on the real 1%
  "selected things to do and mobility" tier in `klookCode.ts`, both
  verified present in the built HTML along with the real 12Go link
  and its standing + promo codes. Zero uses of "actually" or
  "genuinely" in the published body (4 caught and cut across drafts),
  also checked the title itself for the word before finalizing.
- **The Yokohama Red Brick Warehouse Christmas Market, the paid core
  behind the existing post's "free" waterfront sign.** 20:00 UTC
  firing (2026-10-16). Both priority sources exhausted again (same
  BLOCKED Ginza sumo idea, all three teamLab items still without real
  photos). Checked AL_Vault for new uploads, none since the last
  firing. Explored smaller unmined pools (Ota, Chiba, Yokohama) per
  the loosened routine and found a real, previously unused photo in
  Yokohama's pool (`5d30a1e6`, "Selfie at the Yokohama Christmas
  Market Sign," November 24 2023, `used_in_count: 0`) whose own
  `notes_for_ai` field directly confirmed real firsthand context the
  AI-generated title/alt_text alone hadn't captured: "When we went to
  the christmas market in yokohama with my parents and the girls."
  Checked the existing `yokohama-cup-noodles-museum-sankeien-garden-cost`
  post (same waterfront sign, a different but nearly identical photo,
  `d23ff281`, same Nov 24 2023 evening) and confirmed it mischaracterized
  the moment as a generic "free bonus" sign stop, never naming the real
  Christmas market context, the same kind of undersell the Zauo/izakaya
  correction caught earlier this session. Corrected that post with one
  added sentence naming the market and cross-referencing this one,
  consistent with the site's established correction pattern. Researched
  real current 2026 market facts via web search (admission tiers 500 to
  1,000 yen general, 2,000 to 2,500 yen Priority, 4,500 to 5,000 yen
  Priority-plus-mug; free-entry age/date conditions; Nov 20-Dec 25
  dates; hours; the free illuminated zone vs. paid core distinction)
  and real warehouse history (built 1911/1913, survived the 1923
  earthquake via reinforced brickwork, closed 1989, reopened 2002).
  No Klook or GYG listing found for this specific event after two
  targeted searches, skipped AffiliateBox entirely per CLAUDE.md's
  rule rather than force a mismatched link; the companion post still
  carries the real Cup Noodles/Sankeien Klook links. Rolled length
  tier 6 (extended feature, 1,600-2,000 words) and format 9
  (heads-up/warning framing) from CLAUDE.md's system, no reroll
  needed, a real trap existed (assuming the whole lit-up area is free
  when a paid core sits inside it, the same mistake the existing post
  itself made). Published 2026-10-16 as
  `yokohama-christmas-market-red-brick-warehouse-cost`, 1,451 words,
  landed short of the rolled tier 6 despite real expansions (the
  Priority-vs-General tradeoff, the free zone's own content, warehouse
  history, a stacked full-day cost total with the companion post,
  group-logistics tips), said so here rather than padding further once
  the real material was used up. Topic `en/day-trips`. Zero uses of
  "actually" or "genuinely" in the published body (6 caught and cut
  across drafts, including two introduced during the expansion pass).
- **Travel insurance for a Japan trip, real SafetyWing/World Nomads
  pricing plus a real claim story.** 02:00 UTC firing (2026-10-17,
  new day). Both priority sources exhausted again (same BLOCKED Ginza
  sumo idea, all three teamLab items still without real photos).
  Confirmed zero new AL_Vault uploads. Mined several remaining small,
  unexplored pools (Bunkyo, Chiyoda, Sakai, Uji, Edogawa, Shinagawa,
  Matsudo, Ichikawa, Narashino) and found nothing new, every pool was
  either overflow from an already-covered visit (Tokyo Dome, Sakai
  teppanyaki, Nintendo Museum Uji) or too thin on its own (single
  photos, generic transit shots). One genuine catch along the way: a
  Uji photo AI-titled "Getting Our Miis at Super Nintendo World
  Japan" (`fbdb69e7`) is actually the Nintendo Museum, confirmed via
  its Oguracho/Uji geolocation and matching timestamp cluster with
  the museum's other photos, Super Nintendo World is a different
  attraction at USJ in Osaka entirely, a mislabeling worth remembering
  if this photo comes up again, though not itself a new post since
  the Nintendo Museum is already covered. Pivoted to a non-AL_Vault
  angle per the loosened routine: a real, previously uncovered
  affiliate category (insurance, from `docs/affiliates-reference.md`,
  Faye/SafetyWing/World Nomads, all three link-only with no stated
  commission in that doc). Found that the family's own sister site
  (blog.adamandlinds.com, redirects to adamandlinds.com) already has
  a real, detailed SafetyWing vs. World Nomads comparison for
  worldschooling families; fetched it directly (the direct URL
  404'd twice, the working one needed a `/blog/` path segment, same
  stale-URL pattern as the TravelSpend post's source article) for
  real pricing (SafetyWing Essential $56.28/4 weeks per adult 10-39,
  up to 2 kids under 10 free per adult on a group policy; SafetyWing
  Complete ~$150.50/month adult, $99.50/month per kid, 12-month
  minimum; World Nomads real example quotes, $154.61-294.92 for one
  adult on a 28-day multi-country trip) and a real claim story
  (Harper broke her arm in Vienna, bill under $300, reimbursed within
  a week), used honestly as a real claim example while being clear
  Vienna isn't Japan. Mirrored that source's own disclaimer language
  ("information only, not a recommendation") to match the site
  owner's own stated rule in `affiliates-reference.md` ("we can't
  recommend insurance"). Researched real, separately-sourced Japan ER
  cost context (300,000-500,000 yen uninsured estimate, flagged as a
  single unsourced industry figure; 100,000-150,000 yen hospital
  deposit range; free ambulance calls regardless of insurance
  status) and real entry-requirement facts (no insurance required for
  a standard tourist visa, mandatory for long-stay/digital nomad
  visas, a single-sourced and clearly flagged claim about Japan
  screening for unpaid medical debt since April 2026). Rolled length
  tier 3 (standard, 800-1,000 words) and format 8 (itemized
  breakdown) from CLAUDE.md's system, no reroll needed, a genuine fit
  for line-by-line real pricing. Published 2026-10-17 as
  `travel-insurance-japan-trip-cost`, 892 words, topic
  `en/unexpected-costs`. Reused a real, previously unused Narita
  Airport photo (`e6e1ee93`, same moment as the already-used one in
  the TravelSpend post, a different angle) as the cover. No
  Klook/GYG, insurance isn't Klook/GYG bookable, all three insurance
  links used neutrally with the required disclaimer, no invented
  commission or discount terms for any of the three. Zero uses of
  "actually" or "genuinely" in the published body (5 caught and cut
  across drafts).
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
