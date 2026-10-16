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
