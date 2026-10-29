# caniaffordjapan.com

A family travel blog on the Reef Astro theme (English only), answering "what
does this actually cost in Japan?" with real, priced out posts. Most come
from the Clarkson family's own trips; the rest (hotels, bookable activities,
day trips, gear) are honestly researched rather than invented, see "Weekly
calendar" below. Hosted on Cloudflare Workers (static assets), auto
deploying on push to `main`. No review step: the site owner has approved
fully autonomous publishing.

Stack: Astro 7, Tailwind 4, MDX, pnpm (pinned via `packageManager` in
package.json, use pnpm, not npm). Node >= 22.18.

Known gap: the About page's phone mockup (`pnpm poster`) has no image,
renders nothing rather than a broken image, fine as is, needs a real
Playwright Chromium install to fix (`pnpm exec playwright install
chromium` then `pnpm build && pnpm poster`).

`public/og/*.png` (share cards for links pasted into iMessage, Slack,
etc.) come from `pnpm og`, checked in, and do NOT regenerate on `pnpm
build`. Edit `scripts/og.mjs`'s `PAGES` array and domain text if the
name/tagline/domain changes, run `pnpm og`, commit the PNGs, and open one
to confirm, "N images generated" prints even when the text is stale.

## Daily article routine

One new post per day (changed 2026-10-26 from the earlier 4x/day cadence,
the site owner's own call: fewer, better-researched posts, each day a
different column so the site doesn't repeat the same template). The daily
trigger fires once; that firing writes one complete post start to finish.

1. **Figure out which day of the week it is** (the trigger's own
   `<system-reminder>` states the current date, or run `date -u`). That
   decides which column runs today, see "Weekly calendar" below. The
   columns rotate Monday through Sunday and don't shift for holidays or
   skipped days, if a day gets missed just resume on the correct column
   for whatever day it actually is when the next firing runs, don't try to
   make up a missed day by doubling up. Then check `git log` or
   `src/data/posts/en/` for a post with today's date already published
   (`pubDate` matching today, or a same-day commit on `main`), the trigger
   can fire more than once on a day a post already went out manually or
   via an earlier run. If today's post already exists, stop, nothing more
   to do.
2. Check `src/data/posts/en/` for existing slugs and topics so today's
   post is genuinely new, not a repeat (including anything published
   earlier today). For Throwback Thursday or Food Friday, also check
   `docs/klook-priority-activities.md` and `docs/blog-ideas.md` as
   before, moving the idea used to blog-ideas.md's "Done" section once
   published. Skip anything BLOCKED there unless today's column is
   exactly what unblocks it, several teamLab ideas and the Ginza sumo
   lead are now fair game for Klook Wednesday specifically, see that
   doc's 2026-10-26 note.
3. Pull material appropriate to today's column (see "Weekly calendar"):
   real AL_Vault material for anything from the family's own trips,
   genuine web research plus the real Klook/Expedia/Hotels.com/telecom
   affiliate accounts for anything researched. Never invent a detail,
   a price, or a personal anecdote either way.
4. Pick or create a topic (see "Topics" below) and confirm the author stays
   `en/the-clarksons` unless the site owner has added someone else.
5. Write the post (see "Post format" and "Length" below).
6. Check whether a real affiliate link applies (see "Affiliate links"
   below) rather than skipping it by default, Klook/GYG/Expedia/Hotels.com/
   telecom, `<KlookCodeBox>` on every Klook link, no exceptions. This is
   how the site makes money. The cross-promo link-back to
   adamandlinds.com/YouTube/Instagram/TikTok is automatic, author bio in
   `src/data/authors/en/the-clarksons.json`, rendered by `PostFooter.astro`
   on every post, nothing to add per post.
7. Download the cover photo locally (see "Images" below, required). A
   real AL_Vault photo if one exists, otherwise a licensed Wikimedia
   Commons image or, when Commons has nothing, a credited booking-site
   listing photo.
8. Run `pnpm install` if needed, then `pnpm build` and `pnpm check`. Both
   must be clean before you commit.
9. Call `mark_photo_used` on every vault photo uuid you used (cover and any
   in body photos), with `post_slug` set to the new post's slug. Skip this
   step entirely for a researched post with no AL_Vault photo.
10. Commit straight to `main` (message: `Add post: <title>`) and push. No
    PR, no review step. Cloudflare auto deploys on push.

If you hit something you can't resolve alone (the build is broken by
something other than your own change, or a real, honest look turns up
nothing worth writing even once you've checked both AL_Vault and genuine
web research for today's column), stop and leave a clear note rather than
pushing something broken or duplicating a covered topic. That's a last
resort, not the default outcome of a normal firing.

## Weekly calendar

Each day runs a different column, full detail (the exact source to pull
from, the real affiliate links per column, the framework-not-script note)
lives in `docs/weekly-calendar.md`, read it before writing today's post.
Quick reference:

| Day | Column | Visit required? |
|---|---|---|
| Mon | Stay Spotlight | No |
| Tue | Quick Tip Tuesday | No |
| Wed | Klook Wednesday | No |
| Thu | Throwback Thursday | Yes, always, the original model |
| Fri | Food Friday | Real when AL_Vault has it, researched otherwise |
| Sat | Day Trip Saturday | No |
| Sun | Gear Up Sunday | No |

**The honesty rule for every "No" row above: you do not need to have
personally stayed, booked, or visited the thing to write about it, and you
do not need to disclaim that you haven't, but you may never write as if you
have.** No "we stayed here," "we did this," or an invented personal
anecdote, that's a lie, not a style choice. Write in the honest
researched-recommendation register instead, same "never invent a fact"
standard the site has always held, just without the first-person visit. A
real family visit always beats a researched one, check `src/data/posts/en/`
and AL_Vault first and use the real account when it's genuinely there. Full
rule and examples in `docs/weekly-calendar.md`.

## Saturday site audit

A second, separate weekly routine (own trigger), alongside that day's
Day Trip Saturday post, not instead of it. Goal: rank for Google and AI
search, genuinely answer real traveler questions about Japan. Full scope,
process, and the running log in `docs/site-audit.md`, read it first. Same
autonomy and build/check/lint discipline as a daily post, same
never-invent-a-fact rule, extended to legal/business facts: flag what
only the site owner can supply.

## Length

Every post defaulting to the same 700-1,100 word band reads as one long
post repeated 40 times, even when the topics differ. Roll for length
before drafting instead of assuming the usual target:

```
python3 -c "import random; print(random.randint(1,6))"
```

| # | Tier | Word count | Read time |
|---|---|---|---|
| 1 | Quick hit | 450-600 | ~2 min |
| 2 | Short | 600-800 | ~2-3 min |
| 3 | Standard | 800-1,000 | ~3-4 min |
| 4 | Long | 1,000-1,300 | ~4-5 min |
| 5 | Deep dive | 1,300-1,600 | ~5-6 min |
| 6 | Extended feature | 1,600-2,000 | ~6-8 min |

Note the tier you rolled in the `docs/blog-ideas.md` entry for that post
(e.g. "length tier 2") so future firings can see the actual spread rather
than guessing at it. A tier this material can't honestly support is a
signal to pick different material, not to pad: a single-attraction post
with one real photo and no second cost angle belongs at tier 1 or 2, not
stretched to tier 5. If the roll lands somewhere the real material can't
reach without inventing detail, restating the same fact, or adding filler
transitions, say so in the blog-ideas.md entry and land short instead.
Good ways to genuinely earn a longer tier when the material supports it,
not just stretch it: a real "getting there" section with transit times/
fares if there isn't one yet, a second real cost angle (what the whole
day cost, not just one ticket), more of the real story if AL_Vault has
journal entries or extra photos that didn't make the draft, or a closing
"was it worth it" section if there isn't one. A shorter post that's
fully honest beats a longer one that pads.

## Post format

Roll for a format before drafting the title or the outline, the same way
you now roll for length:

```
python3 -c "import random; print(random.randint(1,15))"
```

| # | Format |
|---|---|
| 1 | Price-first, no verb in the title: state the number directly ("Tokyo Tower: 1,500 Yen Up, Free From the Street"). Open the body with the one-line answer, no scene-setting first. |
| 2 | Free-vs-paid split: title frames the divide up front ("What's Free at X, and What Isn't"). Body structured as two clear halves. |
| 3 | Question title: "Is X Worth It?" / "Should You Book X?" Build to a verdict, don't give away the answer in paragraph one. |
| 4 | Myth-correction: lead with an outdated assumption you're correcting ("The [Old Thing] Isn't There Anymore"). Only use this one when there's a real, verified correction to make, never invent a myth to knock down. |
| 5 | Narrative-first, cost as payoff: title is a scene or moment, not a cost statement. Open with the story; the price info arrives a few paragraphs in, not the first line. |
| 6 | Head-to-head comparison: title pits two real options against each other ("X or Y: Which One's Worth Your Yen"). Parallel sections, one per option, then a verdict. |
| 7 | Artifact-driven: built around one real physical thing, a receipt, a ticket, a menu. Title names the artifact, not the venue ("What Our Bic Camera Receipt Shows"). |
| 8 | Itemized breakdown: title promises a list ("Everything We Paid For at X, Line by Line"). Body is a literal walkthrough, not prose-first. |
| 9 | Heads-up / warning framing: title flags a trap before it happens ("The One Thing That Catches People Out at X"). |
| 10 | Budget-tier framing: cheap version vs splurge version of the same thing, side by side. |
| 11 | Time or season anchored: title anchors to when it happened ("A Rainy Tuesday at X", "Cherry Blossom Season at X"). Open with the specific day, weather, or season, not a generic intro. |
| 12 | Family-logistics framing: centers the practical parenting angle ("Doing X With Three Kids Under 10"). |
| 13 | History-led: open with a real, surprising historical fact about the place, cost is the payoff in the second half. |
| 14 | Direct address: title speaks straight to the reader's situation ("Planning a Trip to X? Here's the Real Number"). |
| 15 | Plain declarative: flat, factual title, no hook at all ("X: Ticket Prices, Hours, and Getting There"). Let the content carry it. |

Note which number you rolled in the `docs/blog-ideas.md` entry for that
post. If the roll doesn't fit the material at all (format 4 with nothing
to correct, format 6 with only one real option to compare), it's fine to
reroll once and say so in that entry, but don't quietly default back to
whichever format was used last time just because it's comfortable. Across
a run of posts these should visibly differ from each other, not read as
the same "what does X actually cost" template with the city name swapped.

- "Actually" and "genuinely" are worn out on this site, not banned outright
  but treat them as crutch words: cut them by default, and if a draft
  reaches for either more than once, that's a signal to restructure the
  sentence rather than let it stand. State the number plainly, or frame it
  as a correction against what other guides say, instead of reaching for
  "actually" to signal surprise. Before drafting a title, skim the last 2
  or 3 published posts, if either word shows up in one of them, don't use
  it in this one's title.
- File: `src/data/posts/en/<kebab-case-slug>.mdx` if the post uses
  `<AffiliateBox>`, otherwise plain `.md` is fine.
- Frontmatter (see `src/content.config.ts` for the exact schema):
  - `title`, `description` (roughly 150 to 160 characters, this is the meta
    description)
  - `pubDate` (YYYY-MM-DD)
  - `author`: `en/the-clarksons` (a reference to `src/data/authors/en/`)
  - `topic`: one topic reference, e.g. `en/tokyo` (a reference to
    `src/data/topics/en/`, exactly one per post)
  - `tags`: an array of free text tags, as many as make sense
  - `cover`: a relative path to the downloaded cover image, e.g.
    `../../../assets/covers/<slug>.jpg`
  - `coverAlt`: real alt text describing the cover photo
  - `featured`: true for at most one post at a time (the one the homepage
    highlights); set the previous featured post back to false when you
    feature a new one
  - `draft`: false to publish
- Default to leading with the practical answer (is it free, what does it
  cost) before the story, unless the rolled format above calls for a
  different opening (narrative-first, history-led, and myth-correction all
  deliberately delay it). Use one H1 only (the layout renders `title`,
  don't repeat it as a heading in the body); use `##` for sections.
- A markdown table works fine for a cost breakdown, the theme's prose
  styles handle it.
- For a single photo, a plain `<figure><img src="..." alt="..." /><figcaption>...</figcaption></figure>`
  works. For two or more side by side, wrap them in
  `<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">` with plain
  `<figure>` children (mobile first: one column by default, two from the
  `sm` breakpoint up). In body photos can stay on the AL_Vault CDN
  (`large_url`), they don't need to be downloaded like the cover does.
- Real family photos come first, always. When a post would genuinely
  benefit from a reference image AL_Vault has nothing for (a product shot
  of a physical card, a specific object, something to illustrate rather
  than narrate), Wikimedia Commons is fair game as supplementary material.
  Query the MediaWiki API directly rather than trusting a search summary:
  `https://commons.wikimedia.org/w/api.php?action=query&titles=File:X.jpg&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=800&format=json`
  returns a `thumburl` on `thumb.wikimedia.org` (reliable) plus the
  `Artist`, `LicenseShortName`, and `UsageTerms` fields for attribution
  (full-res `upload.wikimedia.org` URLs guessed by hand tend to 429 or
  400). Download it into `public/reference/` and reference it as an
  absolute path (`/reference/<file>.jpg`), not the AL_Vault CDN. Caption
  it plainly: `Photo: <Artist>, <License>, via Wikimedia Commons` linking
  the file's Commons page. Cite it and move on, no disclaimer about not
  having taken the photo yourself.

## Topics

One topic per post, chosen from `src/data/topics/en/`: `tokyo`, `osaka`,
`kyoto`, `day-trips`, `theme-parks`, `teamlab`, `towers-observation-decks`,
`animals-wildlife`, `museums`, `shopping`, `free-attractions`,
`unexpected-costs`, `transit`, `deals`, `budget-food`, `fukuoka`,
`hiroshima`, `kobe`, `hotels-stays`, `travel-prep` (the last two added
2026-10-26/27 for Stay Spotlight/Quick Tip Tuesday).

Don't default to whichever broad geography topic (`tokyo`, `osaka`) is
closest just because it's familiar. Pick whatever topic describes the post
best, the same way `teamlab` and `towers-observation-decks` exist instead
of every teamLab or tower post sitting under `tokyo`. A specific
attraction type or a place outside Tokyo/Osaka that will plausibly get
more posts gets a new topic JSON file, the same way `kyoto` exists for
`nintendo-museum-uji` rather than folding into `day-trips`. Only reuse
`tokyo`/`osaka` for posts genuinely just "a thing in that city" with no
more specific theme to attach to. Fields: `name`, `description`, `accent`
(`coral`/`reef`/`ink`), `order` (fits its rough position, not always
appended last).

## Affiliate links

This is how the site makes money, the site owner has said so directly.
Default to including a real affiliate link and, if it links to Klook at
all, `<KlookCodeBox>`. Treat "does an affiliate link genuinely fit this
post" as a question you actively check for every post, not something you
skip by default. The only posts that should ship with no affiliate link
at all are ones where nothing on the page is genuinely bookable through
Klook, GetYourGuide, Expedia, or a telecom partner (a free shrine with no
paid add-on, a transit-card explainer, a restaurant bill), and even those
are worth a second look before assuming there's nothing: a free
attraction post can often still carry a relevant `<AffiliateBox>` for a
nearby paid activity or a general city search if one genuinely fits the
post's own topic, don't force an unrelated one in just to have a link.

Real affiliate accounts are wired up for Klook, GetYourGuide, Expedia, and
(added 2026-10-26 for Stay Spotlight Mondays) Hotels.com.
`src/data/affiliates.ts` holds the real link builders, do not edit the
partner IDs there without the site owner's say so.

- In an `.mdx` post, use `<AffiliateBox heading="..." query="..." />`
  (import from `@components/Post/AffiliateBox.astro`) rather than hand
  rolled links. It builds real Klook and GetYourGuide search links from
  `query` automatically and always shows the affiliate disclosure line.
- Expedia and Hotels.com (confirmed 2026-10-26 with real working examples)
  both have a genuine landing-page formula, same role `klookRedirect`
  plays for Klook: wrap any real expedia.com or hotels.com page you found
  via search (a specific hotel, a specific "things to do" activity, never
  a guessed URL) with `expediaRedirect(url)` / `hotelsRedirect(url)`
  (`src/data/affiliates.ts`) and pass it via `overrides`, e.g.
  `<AffiliateBox heading="..." query="..." providers={["hotels", "expedia"]} overrides={{ hotels: hotelsRedirect("..."), expedia: expediaRedirect("...") }} />`.
  Only the page's own property/activity id and slug matter, the rest of
  its query string (dates, session ids) doesn't need reproducing. This
  converts far better than the flat storefront fallback
  (`EXPEDIA_SHOP_URL`/`HOTELS_COM_URL`, used automatically with no
  override), save that for when a post has nothing specific to link to.
  `hotels` isn't in `AffiliateBox`'s default `providers` array, pass it
  explicitly.
- For a Tokyo focused post, `<BookingWidgets />` (same import path pattern,
  `@components/Post/BookingWidgets.astro`) embeds the real Klook and
  GetYourGuide widgets instead of plain buttons. It's currently hardcoded to
  Tokyo (GYG location id 193), there's no generic version. Don't reuse it
  for a post about another city without a real widget snippet for that
  city from the site owner first, a copy paste with the wrong location id
  would be wrong, not just suboptimal.
- Never fabricate a partner ID, tracking param, or deep link. If a post
  needs an Expedia link more specific than the storefront and no override
  was given, use the storefront fallback and say so in your summary rather
  than inventing a URL.
- When a post is about one specific Klook activity you have a real activity
  page URL for (like a row in a Klook affiliate export, see
  `docs/klook-priority-activities.md`), don't use `AffiliateBox`'s generic
  search link. Import `klookRedirect` from `@data/affiliates` and wrap the
  real activity page URL directly, `klookRedirect("https://www.klook.com/en-US/activity/...")`,
  it converts far better than a search results page.
- `<KlookCodeBox href={...} />` (`@components/Post/KlookCodeBox.astro`)
  shows the real ADAMANDLINDSKLOOK offers from `src/data/klookCode.ts`. Use
  it instead of typing out discount terms by hand, that file is the single
  source of truth so every post that cites it stays correct if terms
  change. `href` should be a real Klook link for that post's activity
  (`klookRedirect(...)` or `affiliates.klook.searchUrl(...)`), the code is
  typed at checkout, but the click-through still needs to carry our
  tracking. Never add an offer to `klookCode.ts` that isn't confirmed by
  the site owner from the actual dashboard, and drop an offer once its
  "redeem before" date has passed rather than leaving it to go stale.
- ALWAYS include `<KlookCodeBox>` on every post that links to Klook at
  all, not just posts about an activity on the 1% "selected things to
  do" tier. The site owner's own words: people search for
  "ADAMANDLINDSKLOOK" by name, so the code needs to show up everywhere
  Klook does. The two general tiers (10% off for a new Klook user, 3%
  off for an existing one) have no activity restriction, only a $50
  cart minimum, so they genuinely apply on top of a plain `AffiliateBox`
  or `BookingWidgets` Klook link too, not only on posts using
  `klookRedirect` for a specific activity. Say plainly when an activity
  isn't on the 1% list (don't imply it is), but still note the general
  tiers apply once the cart clears $50, that's true and it's exactly
  the gap a 2026-09-12 post first got wrong before being corrected.
  This does not extend to posts with no Klook link at all (an eSIM
  comparison, a restaurant bill, an arcade write-up), don't force one
  in where there's nothing to book through Klook in the first place.
- Google Drive "Brand Assets" folder (added 2026-10-28, growing): its
  Klook activities export has ready links with current pricing, use a
  row's link as-is, not `klookRedirect`. See `docs/klook-priority-activities.md`.
- Telecom affiliates (eSIM, physical SIM, pocket wifi: Airalo, Airhub,
  Holafly, Japan Wireless, Nomad, Simlocal, amigo eSIM, Sim Options,
  Ubigi) live in `src/data/telecomAffiliates.ts`. Same rule as Klook: no
  editing codes/links without the site owner's say so, no inventing a
  term that isn't in the file. No shared component yet, link to `.url`
  directly and quote `.terms` in prose. `docs/affiliates-reference.md`
  has the rest of the family's affiliate accounts, reference only mostly,
  except it's the real source for Gear Up Sunday and Day Trip Saturday,
  see `docs/weekly-calendar.md`. Same rule: quote real terms, never round
  a commission or invent a code it doesn't list.

## Images

- Cover (required, must be a local file for Astro's image optimizer):
  ```
  curl -sS -o src/assets/covers/<slug>.jpg "<vault large_url>"
  ```
  then reference it in frontmatter as `../../../assets/covers/<slug>.jpg`.
- Author avatars, if a new author is ever added, go in `src/assets/authors/<slug>.jpg` the same way.
- In body, gallery photos can stay remote (vault CDN, or a booking
  site's own CDN, e.g. Klook's `res.klook.com`), no download needed.
- For a researched no-visit-required post with no real AL_Vault photo
  (see "Weekly calendar"), prefer Wikimedia Commons first, same process
  as `ds-lite-mod-workshop-pixel-lab-akihabara.mdx` and
  `kimpton-shinjuku-tokyo-stay-spotlight.mdx` (Special:FilePath works
  when `action=query` rate-limits). A hotel's, operator's, or booking
  site's own marketing photo (a Klook listing's `Image URL` columns,
  see "Affiliate links") is a fine fallback when Commons has nothing
  (owner confirmed 2026-10-29); download the cover the same way as any
  other. Caption honestly either way, never implying it's ours or
  falsely CC licensed: "Photo via Klook's listing" or similar.

## Style

- Second person, direct, numbers first (yen and a rough USD conversion).
- No AI sounding filler ("in today's fast paced world", "let's dive in", forced "in conclusion" wrap ups).
- Real people only: Adam, Lindsay, and their kids Lily, Cora, Harper.
- No em dashes or en dashes anywhere, in code or in post copy. Plain hyphens, commas, or periods instead, `pnpm lint:house` enforces this repo wide.

## Local commands

```
pnpm install
pnpm dev        # local preview
pnpm build      # production build to dist/, must pass before pushing
pnpm check      # astro check, must be 0 errors before pushing
pnpm test       # fast selfchecks, quick to run, worth it after touching src/js
pnpm lint:house # the theme's own house style rules
```
