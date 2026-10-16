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
- **The Wizarding World of Harry Potter at USJ, opening day to now.**
  14:00 UTC firing (2026-10-14). Both priority sources exhausted again
  (same BLOCKED Ginza sumo idea, all three teamLab items still without
  real photos, rechecked specifically against the new Osaka upload
  wave with `search_photos text: "teamLab"` and `"botanical"`, no
  match). AL_Vault fallback found a second real cluster inside the
  same new-upload wave that surfaced the Zauo correction earlier
  today: 8 previously unused photos from a full June 7 2023 morning
  and afternoon at USJ's Wizarding World of Harry Potter (Ollivander's
  wand shop, Hogsmeade village, Hogwarts Castle, the Forbidden Journey
  queue, plus one Mel's Drive-In night shot from elsewhere in the
  park), none overlapping any of this site's existing USJ posts (the
  birthday, ticket-comparison, and Express Pass posts all draw from a
  separate March 2026 visit instead, confirmed by comparing photo
  UUIDs directly). Rolled length tier 6 (extended feature, 1,600-2,000
  words) and format 13 (history-led) from CLAUDE.md's system, no
  reroll needed, a real opening-day history existed to lead with
  (Prime Minister Shinzo Abe at the July 15 2014 opening ceremony, a
  reported $500 million investment, confirmed independently via
  search rather than assumed). Published 2026-10-14 as
  `wizarding-world-harry-potter-usj-osaka-cost`, 1,630 words, topic
  `en/theme-parks`. Real pricing with honest date-hedging throughout:
  Butterbeer's 2014 launch price (500 yen paper cup, 1,000 yen
  souvenir mug) and a later premium metal mug (3,980-4,500 yen,
  sources disagree on the exact year and figure), an interactive wand
  at 5,500 yen including tax (confirmed current, not a separate
  ceremony fee on top), Three Broomsticks mains around 3,000 yen.
  Added real, verified detail not available from guessing: Flight of
  the Hippogriff's actual height rule (122cm standard, 92cm with a
  supervising companion, 16 riders per car, about 2 minutes), the
  real JR Yumesaki/Sakurajima Line route from Osaka Station (12
  minutes, 180 yen direct, or a same-platform transfer via Nishikujo),
  and the real July 2024 tenth-anniversary Hogwarts Castle Walk
  feature as a reason a return visit can differ from this one. Reused
  a real, already-verified Klook listing from this site's own earlier
  Disney-vs-USJ post (activity 168914, Have Fun in Kansai Premium,
  bundles USJ admission with a Harry Potter or Minions express pass)
  rather than inventing a new one, full AffiliateBox and KlookCodeBox,
  cross-referenced the existing Express Pass post's own wait-time math
  rather than re-deriving it. Zero uses of "actually" or "genuinely"
  in the published body (3 caught and cut from drafts).
- **PayPay Dome Fukuoka vs Tokyo Dome, our actual first baseball game
  in Japan.** 20:00 UTC firing (2026-10-14). Both priority sources
  exhausted again (same BLOCKED Ginza sumo idea; rechecked teamLab
  specifically, no change). AL_Vault fallback: `get_destinations`
  showed Fukuoka had grown from the priority doc's "1 photo and 2
  videos" note to a confirmed real lead, 1 new unused photo ("Asahi
  Beers at a Fukuoka Hawks Game," July 5 2023, just Adam and Lindsay,
  no kids) plus the same 2 existing vlogs (154 Fukuoka First
  Impressions, 155 First Baseball Game in Japan), confirming via
  `get_trip` this was a real visit, not a guess, and that the vlog
  title explicitly predates every Tokyo Dome post already on this
  site (all 3 draw from 2024-2025 visits). Rolled length tier 4 (long,
  1,000-1,300 words) and format 12 (family-logistics framing) from
  CLAUDE.md's system; format 12 didn't fit at all, the real material
  is an adults-only date night with no kids present, rerolled once
  per the site's own allowance and landed on format 6 (head-to-head
  comparison), which fit genuinely (PayPay Dome vs the site's own
  3 existing Tokyo Dome posts, a real comparison). No topic existed
  for Fukuoka yet (flagged as a to-do in the priority doc's own
  Fukuoka entry), added `src/data/topics/en/fukuoka.json` (order 4,
  right after the other city-geography topics). Published 2026-10-14
  as `paypay-dome-fukuoka-vs-tokyo-dome-baseball-cost`, 1,117 words,
  topic `en/fukuoka`. Cross-referenced the existing Yomiuri Giants
  post's own Tokyo Dome seat-tier pricing honestly rather than
  re-deriving it. Added real PayPay Dome history (opened 1993 as
  Fukuoka Dome, Japan's first retractable-roof stadium and the only
  one until Es Con Field Hokkaido in 2023, reported 76 billion yen
  build cost, Hawks moved from Osaka under Daiei, SoftBank bought the
  team in 2005), the real current "Mizuho PayPay Dome" sponsor name,
  and the Hawks' real championship record (12 Japan Series titles as
  of 2025, third-most in NPB history, a real 2017-2020 four-peat).
  Added real transit (Fukuoka City Subway Airport/Kuko Line to
  Tojinmachi Station, 10-12 minute walk from Exit 3, or game-day
  shuttle buses from Hakata Station). Honestly hedged 2026 ticket
  pricing as reseller figures rather than official, and said plainly
  there's no itemized receipt from the actual 2023 night. Found a
  real, independently corroborated Klook listing (activity 135264,
  4.9 stars, 371 reviews, 10K+ booked, confirmed across en-US and
  en-MY locale URLs), full AffiliateBox and KlookCodeBox. Zero uses
  of "actually" or "genuinely" in the published body (4 caught and
  cut from drafts, two added during a genuine length expansion from
  an initial 890-word draft).
- **A worldschool meetup day in Kawasaki, lunch to Nihon Minkaen to
  a real Worldschool Pop-Up Hub gathering.** 02:00 UTC firing
  (2026-10-15). Both priority sources exhausted again (same BLOCKED
  Ginza sumo idea, rechecked `search_photos text: "sumo"`, zero
  results). No new AL_Vault uploads since the prior firing (Osaka
  still at 133 photos, no pig cafe material yet). Re-scanned Osaka's
  full 133-photo pool for anything missed (confirmed the Little
  Mermaid statue photo would duplicate the existing Tempozan post,
  which already describes that exact statue in prose, skipped as a
  near-duplicate) before re-checking Kawasaki and Urayasu in full
  despite both being marked exhausted in an earlier segment of this
  routine's work. Urayasu confirmed still fully DisneySea/Disneyland
  overflow, re-exhausted. Kawasaki's remaining unused photos are
  mostly Nihon Minkaen overflow (already covered by 2 existing
  posts), but 2 of them stood out: a restaurant lunch at 13:07,
  earlier the same day as the museum visit (geolocated to Masugata
  7-chome, Kawasaki, not the museum's own soba restaurant per the
  existing posts' own "we didn't eat there that day" line, and not
  identifiable from the photo, so left unnamed and honestly
  estimated), and a friends-meetup photo at 15:27-15:28 whose own
  original filename ("Some friends, Lindsay, and Adam sitting
  together after meeting at a worldschool popup hub at Ikuta Ryokuchi
  Park in Kawasaki Japan November 3 2023.png") revealed a genuinely
  new angle neither existing Minkaen post touches: a real named
  community, the Worldschool Pop-Up Hub (run by the Carlson family),
  confirmed independently via search rather than taken on faith from
  the filename alone. Rolled length tier 3 (standard, 800-1,000
  words) and format 8 (itemized breakdown) from CLAUDE.md's system,
  no reroll needed, the day genuinely had 3 real line items to
  itemize. Published 2026-10-15 as
  `worldschool-popup-hub-kawasaki-day-cost`, 819 words, topic
  `en/unexpected-costs`. Cross-referenced both existing Nihon Minkaen
  posts' own 550 yen admission honestly rather than re-deriving it.
  Researched and clearly distinguished the real, informal, free
  Worldschool Pop-Up Hub (week-long city gatherings, Tokyo among past
  stops alongside Bangkok, Chiang Mai, Lisbon, Rome, Berlin, no
  central ticketing, found via the Carlsons' own site/blog/social
  channels) from a separate, unrelated paid product with a similar
  pitch, "World School Camp" (hotels, private transport, guided
  itineraries, a real fee), a genuine myth-correction-style detail
  worth getting right rather than conflating the two. No receipt for
  the unidentified lunch restaurant, used an honestly-hedged general
  Kawasaki casual-lunch price range instead of guessing a number.
  Checked for a genuine affiliate fit and found none, consistent with
  both existing Minkaen posts also carrying no AffiliateBox, nothing
  on this page is bookable (a municipal museum already priced
  elsewhere, an unidentified restaurant, a free informal meetup).
  Zero uses of "actually" or "genuinely" in the published body (1
  caught and cut from the first draft).
- **The TravelSpend budgeting app, our first non-AL_Vault-sourced
  post.** 14:00 UTC firing (2026-10-15). Both priority sources
  exhausted again (same BLOCKED Ginza sumo idea), and a quick
  `get_destinations` check found zero new uploads since the prior
  firing (Osaka still at 133). Per the site owner's own loosening of
  CLAUDE.md's routine earlier today (no longer required to work
  through every AL_Vault city before considering other options),
  checked `docs/affiliates-reference.md` for a real, on-topic,
  not-yet-covered affiliate category instead: Travel Spend, a budget
  tracking app, fit the site's own core premise ("what does this
  actually cost") better than any gear tangent would. Real terms from
  that doc (code ADAMANDLINDS, 50% off the annual plan, real URL
  https://get.travelspend.app/?o=adamandlinds), cross-checked against
  the family's own existing review on adamandlinds.com (fetched
  directly after a stale cached URL 404'd, found the live one via
  search) for accurate feature/pricing detail rather than guessing:
  manual entry only (no bank connection, a deliberate design choice,
  not a missing feature), free vs Premium split (cost splitting,
  analytics, multi-trip, cloud sync are Premium-only), and a real,
  specifically Japan-located anecdote, a two-week Tokyo stay with
  relatives where the split-cost feature tracked who owed whom.
  Rolled length tier 1 (quick hit, 450-600 words) and format 4
  (myth-correction) from CLAUDE.md's system, no reroll needed, a real
  correction existed (the obvious assumption is that a budget app
  auto-syncs with your bank like Mint or YNAB; TravelSpend
  deliberately doesn't). Published 2026-10-15 as
  `travelspend-app-tracking-japan-trip-costs`, 512 words, topic
  `en/deals`. Honestly hedged the $19.99/year figure as TravelSpend's
  own FAQ number with regional variance noted, per the source review's
  own inconsistency on exact pricing. Reused the same real Narita
  airport cover photo already used on the eSIM/pocket-wifi post
  (reuse across posts is fine per CLAUDE.md), no new AL_Vault photo
  needed since this post isn't sourced from a specific vault moment.
  No Klook/GYG link, this is a telecom-style miscellaneous affiliate
  (not in `telecomAffiliates.ts`, which only covers connectivity
  providers), linked directly per CLAUDE.md's pattern for affiliates
  with no shared component. Zero uses of "actually" or "genuinely" in
  the published body (3 caught and cut from drafts).
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
