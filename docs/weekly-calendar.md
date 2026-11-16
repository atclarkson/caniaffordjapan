# Weekly calendar

The site owner's own call, 2026-10-26: one post a day instead of 4x/day,
each day a different column so the site reads as a real weekly publication
rather than the same template with the city swapped. Referenced from
`CLAUDE.md` "Weekly calendar", read this before writing the day's post.

Each day runs a different column. The point is variety the reader can
recognize, not just a random topic generator, so stay inside the column's
own lane rather than treating the name as a loose suggestion.

| Day | Column | What it is | Real source |
|---|---|---|---|
| Mon | Stay Spotlight | A hotel, ryokan, or unique stay in Japan. | Hotels.com, Expedia, or Klook stays; topic `en/hotels-stays` |
| Tue | Quick Tip Tuesday | One practical tip: packing, connectivity, logistics. | Telecom affiliates, Amazon, real gear |
| Wed | Klook Wednesday | One bookable Klook activity. | Klook, `<KlookCodeBox>` always |
| Thu | Throwback Thursday | A real place from the family's own trip archive, OR a real full day's cost with receipt (see below). | AL_Vault (the original model), Travel Spend exports for the cost-day format |
| Fri | Food Friday | A dish, chain, or food spot. | AL_Vault when it exists, researched otherwise |
| Sat | Day Trip Saturday | A day trip from Tokyo, Osaka, or Kyoto. | Viator, GetYourGuide, Klook |
| Sun | Gear Up Sunday | A packing list or travel gear roundup. | Amazon, Wayb, Zenni, Greenlight, Travel Spend (see `docs/affiliates-reference.md`) |

## The honesty rule

**For Mon/Wed/Sat/Sun (and Fri when there's no real trip to draw on): you
do not need to have personally stayed, booked, or visited the thing to
write about it, and you do not need to disclaim that you haven't.** What
you may never do is write as if you have. No "we stayed here," "we did
this," "our go-to," or an invented personal anecdote for something nobody
in the family has actually experienced, that's a lie, not a style choice.
Write in the honest researched-recommendation register instead: what it
is, what it real-world costs right now, what it offers, sourced from the
provider's own listing, official site, or genuine web research, exactly
the same standard of "never invent a fact" the site has always held, just
without the first-person visit. If the family actually has done the thing
(check `src/data/posts/en/` and AL_Vault first), say so and write the real
account instead, a real visit always beats a researched one and should be
used when it's genuinely there.

**Never open a researched post with the disclaimer itself** (site owner's
direct correction, 2026-11-16, after a draft opened "We haven't stayed
here ourselves, but..."). "You do not need to disclaim that you haven't"
above means exactly that, not "disclaim it immediately and prominently
instead of inventing a visit." Lead with the real, useful fact (the
price, the location, what it offers) the same way a real-visit post
would. If the researched nature of the post needs acknowledging at all,
a single understated mention well past the opening, if it comes up
naturally, is the most it should ever get, not a recurring refrain
through the piece.

Thu (Throwback Thursday) keeps the original model exactly as before: real
AL_Vault photos or video, a real family visit, first person, no exceptions.
Fri (Food Friday) is a swing day, real family food content when AL_Vault
has it, honestly researched when it doesn't (same honesty rule above
applies when it swings to researched).

### Throwback Thursday's second format: a real day's cost, with receipt

Added 2026-11-16, site owner's own call, folded into the daily rotation
rather than run separately. Same real-visit standard as every other
Throwback Thursday, just sourced from the family's real Travel Spend app
exports (CSV files the owner uploads to a Drive folder, path to be
confirmed, check for one named along the lines of "Travel Spend Exports")
instead of, or alongside, AL_Vault. Use this format for a given day only
when all of these hold:

- The export actually has line items for that calendar date. **Not every
  day in an export is complete** (the owner's own words), a date with
  nothing logged, or only a stray item or two, isn't "a cheap day," it's
  an incomplete record, skip it rather than publish a misleadingly low
  total.
- AL_Vault has real photos or video from that same real date, so the post
  isn't numbers alone, pull them the same way Throwback Thursday always
  has.
- The day isn't already fully covered by an existing post under a
  different angle (check `src/data/posts/en/` and `docs/blog-ideas.md`
  first, the same guard every Thursday already uses). A day that heavily
  overlaps an already-published single-attraction post (say, a baseball
  game day already covered by its own dedicated post) is a weak pick,
  even if the receipt itself is real, pick a day that isn't mostly a
  rehash.

Building the post:

- A lump-sum charge that spans more than one night (`numberOfDays` > 1 in
  the export, almost always the lodging line) gets divided by that many
  nights before it goes in the receipt as "one night," never dropped on a
  single day whole. Note the division in the post if it's not obvious
  from the number alone.
- Personal or medical details in an export's free-text notes (a kid's
  name next to a medical or hygiene item) get folded into a generic
  category line in the post ("pharmacy," "snacks"), never quoted or
  attributed to a specific child by name. The dollar amount is still real
  and still counted, only the private detail is dropped.
- Render the day's total with `<Receipt>` (`@components/Post/Receipt.astro`),
  the same component the home page's "What we spent" section uses, real
  figures only, grouped the way the export's own categories naturally
  group (food, activities, transit, etc.), never invented or rounded
  past what the export states.
- Topic `en/daily-costs`, not `en/tokyo`/`en/osaka`, even though the post
  is also about a specific city, the cost-breakdown angle is the more
  specific theme per the "Topics" rule in `CLAUDE.md`.
- A real Klook link for anything bookable that shows up in the day
  (an activity, a ticket), a real Hotels.com/Expedia link if a hotel
  night is in the mix, same sourcing standard as any other post, never a
  guessed URL.
- A short real note near the end on the Travel Spend app itself (code
  `ADAMANDLINDS`, see `docs/affiliates-reference.md`'s Finance section),
  the same way other posts close with the relevant affiliate, not forced
  in if the day's content doesn't naturally lead there.

## This is a framework, not a script

Day to day judgment calls (a real breaking lead that doesn't fit the day's
column, a column that's run dry on fresh real material for a week) are
fine to make case by case, the way any editorial decision on this site is,
just don't quietly drop a column for weeks without a reason worth noting
in `docs/blog-ideas.md`.

## Affiliate sources per column, real links only

- **Stay Spotlight (Mon):** `hotelsRedirect()` / `expediaRedirect()` in
  `src/data/affiliates.ts` for a specific real hotel page, or Klook if the
  stay is Klook-bookable (some ryokan/unique-stay experiences are). See
  `CLAUDE.md` "Affiliate links" for the exact usage pattern.
- **Klook Wednesday (Wed):** `klookRedirect()` for a real activity page,
  `<KlookCodeBox>` always. `docs/klook-priority-activities.md` has a
  standing backlog, including items unblocked specifically by this column
  (see that doc's 2026-10-26 note).
- **Day Trip Saturday (Sat):** Viator (`docs/affiliates-reference.md` has
  real destination-specific links for Kobe, Yokohama, and Sanrio Puroland,
  worth checking before the generic city page), GetYourGuide, or Klook.
  `expediaRedirect()` also works for a real Expedia "things to do" page, a
  real example is already on file: a Mt Fuji and Hakone 1-day tour by
  bullet train, `https://www.expedia.com/things-to-do/mt-fuji-and-hakone-1-day-tour-return-by-bullet-train.a2457971.activity-details`.
- **Gear Up Sunday (Sun):** `docs/affiliates-reference.md`'s Shopping,
  Tech, and Finance sections, real links for Amazon, Wayb, Zenni,
  Greenlight, and Travel Spend.
- **Quick Tip Tuesday (Tue):** whatever's genuinely relevant to the tip,
  most often `src/data/telecomAffiliates.ts` for connectivity topics or
  Amazon for a physical product.
- **Throwback Thursday, daily-cost format:** `klookRedirect()` for
  anything bookable in the day, `hotelsRedirect()`/`expediaRedirect()`
  for a hotel night in the mix, and the Travel Spend app itself (code
  `ADAMANDLINDS`, `docs/affiliates-reference.md` Finance section) in a
  closing note.
