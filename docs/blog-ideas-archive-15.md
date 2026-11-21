# Blog article ideas, archive (part 15)

Older "Done" entries moved out of `docs/blog-ideas.md` (via
`docs/blog-ideas-archive-14.md`) to keep files under the house-lint 400-line
cap. This continues straight on from `docs/blog-ideas-archive-14.md`
(chronological, oldest first within each file). Nothing here is deleted,
just relocated. See `docs/blog-ideas.md` for the current backlog and the
more recent entries. When this file nears 400 lines too, start
`blog-ideas-archive-16.md` rather than growing this one past the cap.
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
