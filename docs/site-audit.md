# Saturday site audit

A second, separate weekly routine (its own trigger), added 2026-10-29 at
the site owner's request: "take a step back and look at the whole site...
just to make the site overall better." It runs alongside, not instead of,
that day's Day Trip Saturday post from the daily routine. Goal in the
owner's own words: rank for Google search and AI search (ChatGPT,
Perplexity, Claude, and similar answer engines that cite sources), and
genuinely answer the real questions people have about traveling to Japan.

## Scope

Everything that isn't an individual blog post, since posts are the daily
routine's job:

- `/legal/`, `/privacy/`, `/terms/`, `/about/`, `/contact/` (copy lives in
  `src/i18n/ui/en/pages.ts`'s `legal`/`privacy`/`terms`/`about`/`contact`
  keys, and `src/config/legalData.json.ts` for privacy/terms specifically)
- Home page (`src/pages/[...locale]/index.astro`)
- Topic index and individual topic pages (`src/pages/[...locale]/topics/`,
  descriptions in `src/data/topics/en/*.json`)
- Authors index and author pages (`src/pages/[...locale]/authors/`)
- Header/nav (`src/components/Sections/Global/Navbar.astro`) and footer
  (`src/components/Sections/Global/Footer.astro`)
- Technical SEO/AI-search surface: `src/pages/robots.txt.ts`,
  `src/pages/llms.txt.ts`, `src/layouts/BaseHead.astro` (meta/OG/canonical),
  `src/js/schema.ts` (structured data), `sitemap-index.xml` (generated)
- Cross-linking between posts, and from these pages into posts
- `docs/search-console/<date>/`, real Google Search Console exports the
  site owner uploads periodically: real queries, real page positions,
  real CTR. Check the most recent dated folder's `analysis.md` for
  findings, and ground any ranking/CTR claim in that real data rather
  than guessing. If a fresher export shows up as an uploaded file in
  the firing that triggers this routine, save it there and analyze it
  before relying on an older one.

## What "better" actually means here

Not cosmetic churn for its own sake. Look for real gaps and fix them:

- A page's copy that's gone stale or inaccurate (see the 2026-10-29 seed
  item below for a live example).
- A real, common question a Japan-bound traveler would ask that no page
  currently answers plainly, answer it in prose on the page it belongs on.
  An `FAQPage` JSON-LD block (see `src/js/schema.ts` for the existing
  pattern) is fair game where a page's content is genuinely a list of
  Q&A, that's also a real AI-search surface, those engines quote
  structured FAQ content directly.
- Weak or generic topic descriptions that don't actually tell a reader or
  a crawler what's in that topic (`src/data/topics/en/*.json`).
- Header/footer links that bury something useful or promote something
  thin, real navigation decisions based on what the site actually has
  now, not what it had when the nav was first built.
- Broken internal links, stale dates, a `description` that's drifted from
  what the page now says.

Same honesty rules as every other routine on this site: never invent a
statistic, a review, a fake testimonial, or a legal/business fact (an
address, a registration detail, a policy term) that hasn't actually been
confirmed. If a legal or policy page seems to need a real fact only the
site owner can supply, say so in the log below rather than inventing a
placeholder.

## Process

1. Read this file's "Log" section first, pick up from the most recent
   entry rather than re-auditing everything from scratch every week. The
   scope above is broad on purpose, a single Saturday doesn't need to
   touch all of it, rotate toward whatever's weakest or least recently
   reviewed.
2. Make the actual changes (copy, structured data, nav, whatever the
   finding calls for). This routine has the same full autonomy as the
   daily post routine, no review step.
3. `pnpm build` and `pnpm check` must both be clean, same as any other
   change to this repo. Run `node scripts/house.mjs` too if any `.md` or
   `.json` file changed.
4. Commit straight to `main` (one commit per logical change is fine,
   doesn't need to be a single giant commit) and push.
5. Append a log entry below: what was reviewed, what changed and why,
   and anything flagged for the site owner rather than fixed
   autonomously. Move older entries to a numbered archive file once this
   one nears the house-lint 400-line cap, same pattern as
   `docs/blog-ideas.md`.

## Log

The 2026-10-29/10-30 seed-item entries that used to open this log were
moved to `docs/site-audit-archive-1.md` (2026-11-28) to stay under the
house-lint 400-line cap; all three were already resolved in the first
firing below.

- **First real firing, 2026-10-31.** Worked all three queued seed items
  above. (1) Fixed `/legal/`'s affiliate disclosure to name Hotels.com,
  Viator, Amazon Associates, and the telecom affiliates alongside
  Klook/GYG/Expedia, and softened "based on our own trips" to just
  "we'd genuinely recommend," no longer accurate now that some columns
  are honestly researched rather than visited. (2) Wired up
  `faqPage()`: added an optional `faq` array to the posts content
  schema (`src/content.config.ts`), rendered it in
  `src/pages/[...locale]/blog/[id].astro` scoped so the schema only
  ever appears when a post has a matching visible section, confirmed
  via `grep` on the built HTML that it renders only on the one post
  that opts in. First real use:
  `travel-insurance-japan-trip-cost.mdx` got a visible "Quick answers"
  section near the top with four genuine Q&A pairs pulled from facts
  already in the post, also the post the Search Console data flagged
  as the strongest ranking gap (real demand, near-zero position),
  worth checking the next export for movement. (3) Fixed the optician
  post's crutch-word title. While checking its sibling in the
  zero-click finding, `kappabashi-knife-shop-price-cheap-vs-splurge-
  cost`, for the same issue, found its title and description already
  clean, left it alone rather than change something that wasn't
  broken, per this routine's own "not cosmetic churn" rule.

  Found a real, separate, bigger pattern while in the topic files:
  `grep` across `src/data/topics/en/*.json` turned up "actually" in 7
  of 20 descriptions, which render as both the visible topic-page lede
  AND the page's meta description (confirmed in
  `src/pages/[...locale]/topics/[topic]/[...page].astro`), a real
  site-wide house-style violation, not isolated to posts. Fixed all 7
  (day-trips, deals, hiroshima, museums, osaka, shopping, transit).
  Also found and fixed the About page's closing paragraph, which used
  "actually" three times in one sentence.

  **Flagged, not changed:** the home page hero title,
  `"Can we actually afford this trip?"` (`src/i18n/ui/en/pages.ts`,
  `home.heroTitle`), also uses the word. Left it alone deliberately,
  it's the single highest-visibility line on the site and arguably a
  different register, a deliberate rhetorical hook tied to the site's
  own name, not prose filler reaching for "actually" to signal
  surprise the way the house rule targets. A voice call this routine
  shouldn't make unilaterally; flagging for the site owner rather than
  guessing.

  All changes: `pnpm build`/`pnpm check` clean, `node scripts/house.mjs`
  clean, `pnpm test` clean (touched `content.config.ts` and the blog
  template). Pushed across three commits.
- **Second real firing, 2026-11-07.** Checked `docs/search-console/`
  first for a fresher export, none since 2026-10-30, nothing new to
  analyze from that source this week. Checked `src/pages/robots.txt.ts`
  and `src/pages/llms.txt.ts`, both fully dynamic (robots.txt derives
  its sitemap URL from site config, llms.txt pulls topics/posts live
  from content collections), confirmed no staleness risk there, no
  changes needed. Ran a sitewide internal-link check (every `/blog/
  <slug>/` reference in every post's body against the real set of
  published slugs): zero broken links found.

  Continued the "actually"/"genuinely" sweep from the first firing,
  this time at title/description scope rather than just topic
  descriptions: a `grep` across every post's frontmatter turned up a
  much bigger pattern than last week's, 27 published posts using
  "Actually" as a literal repeated title template ("What X Actually
  Costs," "Is X Actually Worth It," etc.), clearly a pre-dates-the-
  house-rule content pattern from the site's early buildout rather
  than isolated slips. Fixed all 27 (titles and/or descriptions,
  exact list in the commit), preserving every real fact and number,
  only removing the filler word, confirmed via a second `grep` pass
  (zero remaining) and a built-HTML `<title>` check. Also found the
  same word in the `esim-vs-sim-vs-pocket-wifi-japan` post's title,
  description, and closing line while reviewing it for FAQ potential,
  fixed there too. Did not touch the home hero title, same reasoning
  as the first firing's flag still holds.

  **Flagged, not actioned this firing:** a `grep` for "actually"/
  "genuinely" in post *bodies* (not just frontmatter) found 38 posts
  with at least one instance, a real, larger tail of the same pattern.
  Didn't attempt all 38 in one sitting, body-prose fixes need real
  per-sentence judgment rather than a safe mechanical string swap the
  way the title/description fixes were. Worth the next firing's first
  pass, or splitting across a few firings rather than rushing it.

  Wired up `faqPage()` on two more posts with genuine, naturally-
  occurring Q&A content (now 3 total, up from the 1 from the first
  firing): `japan-plug-adapter-voltage-converter-guide` (do-I-need-an-
  adapter is the post's entire premise) and
  `esim-vs-sim-vs-pocket-wifi-japan` (eSIM-vs-SIM-vs-pocket-wifi is a
  real, common traveler question this post already answers in full).
  Both got a frontmatter `faq` array and a matching visible "Quick
  answers" section, every answer restating a fact already stated
  elsewhere in that same post, nothing invented. Confirmed via `grep`
  on the built HTML that `FAQPage` JSON-LD renders only on the three
  opted-in posts.

  All changes: `pnpm build`/`pnpm check`/`node scripts/house.mjs`/
  `pnpm test` all clean. Pushed in one commit (29 files: 27 title/
  description fixes, 2 FAQ wire-ups).
- **Off-cycle fix, 2026-11-08, prompted directly by the site owner.**
  The owner spot-checked `zenni-glasses-before-trip-vs-japan-optician`
  and found the real Zenni affiliate link effectively invisible: a
  single word of plain inline text buried in a late section, no
  Button, no disclosure sentence anywhere on the page. Grepped every
  post for every known real affiliate domain
  (`pxf.io`/`awin1.com`/`sjv.io`/`tkqlhce.com`/`withfaye.com`/
  `share.greenlight.com`/`get.travelspend.app`/etc.) against whether
  the same file contains the word "affiliate" or uses the `Button`
  component, to find every other instance of the same pattern rather
  than just fixing the one reported. Found three more real links with
  the same problem: Wayb's link in
  `japan-child-car-seat-law-taxi-rental-car` (no disclosure at all),
  TravelSpend's link in `travelspend-app-tracking-japan-trip-costs`
  (no disclosure), and Greenlight's link in
  `kids-debit-card-japan-cash-still-needed` (had a disclosure sentence
  already, still just plain text, no Button). Fixed all four the same
  way: a prominent `Button` component matching the site's dominant
  CTA pattern, plus the standard disclosure sentence linking to
  `/legal/`. Also added a real cross-link from the car-seat post to
  the existing `wayb-pico-travel-car-seat-cost-review` post (the
  family's own real four-year-use writeup of the exact product being
  linked). Left `travel-insurance-japan-trip-cost`'s three insurance
  links (SafetyWing/World Nomads/Faye) as plain neutral inline text,
  that's deliberate per this site's own insurance rule (never write
  copy that recommends one policy over another, link neutrally), not
  the same bug. `pnpm build`/`pnpm check`/`node scripts/house.mjs`
  clean, confirmed all four links and disclosures resolve in the
  built HTML. Worth a standing check in future Saturday firings: any
  new post with a real affiliate link should get the Button+disclosure
  treatment by default, this is the second time a post has shipped
  without it (the first was presumably from before that pattern was
  established as the house default).
- **Off-cycle design and technical SEO pass, 2026-11-10, at the site
  owner's request** ("make this site look good... for usability and
  SEO"). Technical SEO, none of it touched by earlier firings:
  paginated archive and topic pages (`/blog/2/`, `/topics/x/2/`) were
  `noindex, nofollow`, which also told crawlers not to follow links to
  older posts; now indexable with a per-page description. Topic pages
  got a real `<title>` (new optional `seoTitle` in each topic JSON,
  e.g. "Tokyo Prices: What Things Cost" instead of "Posts filed under
  Tokyo"), a `CollectionPage`/`ItemList` JSON-LD block, and a share card
  cropped from the topic's newest cover. Archive and topics index got
  search titles too. Posts: `BlogPosting` (was `Article`) with
  `dateModified`, `articleSection`, `keywords`, publisher URL and logo,
  author `sameAs` profiles; breadcrumb now Home, topic, post; `article:*`
  meta tags; a 1.91:1 share crop of the cover with real
  `og:image:width/height` (portrait covers were being cropped badly in
  iMessage/Slack); `<title>` drops the site-name suffix when it would
  push past ~62 characters. The section share cards in `public/og/` were
  generated but never used, now wired by URL section in `BaseHead`.
  Sitemap gets `<lastmod>` from each post's frontmatter
  (`astro.config.mjs`). Usability: tall in-body photos capped at 80svh
  (whole frame, no crop), post cover gets `fetchpriority="high"`.
  Internal link check over all built HTML: zero broken.
- **2026-11-10, owner request:** `/legal/`, `/privacy/` and `/terms/`
  merged into one plain-English page at `/legal/` ("Privacy, terms and
  affiliate links"; copy in `src/i18n/ui/en/pages.ts` under `legal`).
  The old privacy page had gone untrue (it promised no tracking cookies
  and mentioned an email list, but the Impact and Partnerize scripts in
  `BaseHead.astro` run on every page and there is no list); the new copy
  names both networks and carries the Amazon Associates line. `/privacy/`
  and `/terms/` redirect (`public/_redirects` plus Astro `redirects`).
- **Third firing, 2026-11-14:** Finished the body-prose "actually"/
  "genuinely" crutch-word cleanup flagged as the prior firing's top
  priority (38 posts). All 38 fixed this time, zero remaining anywhere
  in `src/data/posts/en/*.mdx` (full-corpus grep confirmed after
  editing, not just the flagged list). Each fix removed the word or
  swapped in a plain alternative ("really," "real," or just dropping
  it) without changing any fact, price, or claim; `actual`/`genuine`
  (the adjectives, not the flagged words) were left alone throughout.
  Also spot-checked `src/data/homePage.ts` (added 2026-11-12) against
  its four source posts: `WHAT_WE_SPENT`'s 8 line items and total match
  the Ueno/Ameyoko post's own table, the Skytree verdict line restates
  that post's real conclusion, and the $401.34 figure matches the
  $300-budget post exactly. No changes needed there. `pnpm build`,
  `pnpm check`, and `node scripts/house.mjs` all clean.
  If a script, form or newsletter is ever added, update that page.
- **2026-11-16, owner request, November 2026 core update check** (rollout
  began 2026-11-10, up to two weeks). Fixed: 21 hand-written affiliate links
  in post prose (telecom, Viator, insurance, two klookRedirect links) had no
  `rel="sponsored"`, a Google link-spam policy issue. `scripts/sponsoredLinks.mjs`
  (Astro integration, runs after build) now adds it to every partner/tracking
  host in the built HTML, so future posts can't miss it; add a host to its
  list when a new partner is added. Clean: robots, canonicals, one H1 per page,
  no duplicate titles/descriptions, BlogPosting schema, redirects 301. Watch:
  144 posts went out in Sep/Oct 2026 (the old 4x/day cadence), the pattern
  Google's scaled-content policy targets; 1/day is the right call. AI-use
  disclosure added same day at the owner's request: About "How we make this
  site" (#how-we-make-it) and a Legal "How we use AI" section; Authors lede
  no longer says the whole family writes it. SC export 2026-11-16 saved. Compare Search Console a week
  after the rollout ends, not before.
- **2026-11-21, "real"/"really" sweep, title/description layer:** Found
  the absolute "real"/"really" ban (post body copy) had never been
  swept against non-post site copy or post title/description fields.
  `grep -rli "\breal\b\|\breally\b"` against `src/data/topics/en/*.json`,
  `src/i18n/ui/en/pages.ts`, `src/data/homePage.ts`,
  `src/data/authors/en/the-clarksons.json`, and
  `src/components/Sections/Home/WhatWeSpent.astro` turned up hits in
  every one of them. Fixed: 13 topic JSON files (`description`/
  `seoTitle`), 6 strings in `pages.ts` (home meta title/description/hero
  title, about page story and "how it's made" lines, Harper's bio
  line), the `WORTH_IT` Disney-vs-USJ verdict line in `homePage.ts`, the
  author bio in `the-clarksons.json`, and the rendered "Real days from
  our own budget tracking" paragraph in `WhatWeSpent.astro` (its two JS
  comments left alone, not reader-facing). `home.heroTitle` ("Real Japan
  prices from a family of five") got no carve-out despite a prior
  firing giving its "actually" version one: the "real" rule has no
  stated exception, and this was exactly the trust-signaling phrasing
  the owner was angriest about.
  Then checked the post corpus itself: 157 of the 227 post files had
  "real"/"really" somewhere, 143 of those specifically in `title:` or
  `description:` frontmatter (1,228 total instances site-wide, body
  prose included). Scoped today's fix to title/description only,
  mirroring how the "actually"/"genuinely" sweep was staged across
  three separate firings rather than rushed in one sitting. Fixed all
  165 hits across the 143 files (some files had it in both fields),
  every fix removing the word cleanly or swapping in "current,"
  "actual," "genuine," or nothing, with no fact, price, or date
  changed. Three files have "real" in the post's URL slug itself
  (`tokyo-skytree-real-visit-both-decks-worth-it`,
  `zauo-tokyo-december-2022-real-visit`,
  `ramen-shop-osaka-ordering-etiquette-real-cost`); left the slugs
  untouched to avoid breaking live URLs, fixed only their prose.
  Full-corpus grep after editing confirmed zero remaining "real"/
  "really" hits in any post's title or description field. `pnpm
  build`, `pnpm check`, and `node scripts/house.mjs` all clean.
  **Top priority for the next firing(s):** the body-prose tail across
  the post corpus is much larger than the title/description layer was
  (1,228 total instances minus the 165 just fixed), so expect this to
  take more than one more weekly firing, same as "actually" did.
- **2026-11-27, owner request: SEO for discount/coupon-code queries,
  off-cycle (not the Saturday routine).** Owner asked directly to rank
  for "holafly discount code" and "teamLab coupon code"-type searches,
  and to factor in Google's December 2026 core update (preannounced
  2026-11-24, before rollout even started, a first for Google per
  multiple outlets; focus stated as longer/complex queries and
  personalized results, no exact rollout date given). Pulled Google's
  own evergreen core-update guidance directly
  (developers.google.com/search/updates/core-updates and the linked
  helpful-content self-assessment questions) rather than acting on
  update-specific speculation, since Google's own practical advice
  ("don't make quick-fix changes," "most sites don't need to worry")
  applies regardless of which specific update is rolling out.
  Confirmed `holafly-discount-code.mdx` already targets its query well
  (title/description/FAQ schema all already correct, no change
  needed). Found a real gap: none of the 5 teamLab posts or the
  canonical `klook-discount-code-adamandlindsklook.mdx` post had
  "coupon code" phrasing or an FAQ block, despite that page already
  substantively answering the "is there a teamLab coupon code"
  question in its own body. Rather than create new thin pages for
  each attraction (the exact "mass-produced," "many thin pages"
  pattern Google's own guidance warns against), strengthened the one
  existing canonical page: added "teamLab" to its title, "coupon"
  to its description, and a 5-entry FAQ block (verified every answer
  against content already in the post body, no new facts), confirmed
  the `FAQPage` JSON-LD renders correctly in the built HTML. Cross-
  linked all 5 teamLab posts back to it with "teamLab coupon code"
  anchor text, a genuine, non-duplicate internal-linking improvement.
  While in those 5 files anyway, caught and fixed leftover body-prose
  "real"/"really" instances the title/description-only sweep above
  had missed (teamLab Botanical Garden Osaka, Forest Fukuoka, Future
  Park Okinawa, Borderless), consistent with this doc's own flagged
  body-prose backlog. `pnpm build`, `pnpm check`, `node scripts/
  house.mjs` all clean.
- **2026-11-28: the body-prose real/really backlog flagged above is no
  longer just manual-review debt, it's now a tracked, automated gate.**
  Trigger: a capitalized "Real" in a published title (Himeji Castle
  day-trip post) slipped past manual pre-publish review because the
  `grep` used wasn't case-insensitive; the site owner flagged it and
  asked for it in house-lint directly. Two findings while building the
  fix: (1) `scripts/house.mjs`'s `LINTABLE` extension list never
  included `.mdx` at all, so every blog post had been invisible to the
  linter since it was written, zero posts ever actually checked for
  the 400-line cap, em-dashes, or anything else it enforces; fixing
  that surfaced two live em-dash violations nobody had caught
  (`hotel-granvia-kyoto-station-stay-spotlight.mdx`,
  `nihon-minkaen-free-activities-vs-paid-extras-kawasaki.mdx`), both
  fixed. (2) A full case-insensitive corpus scan found `real`/`really`
  in 149 of 176 live posts (85%), confirming this was always a much
  bigger backlog than the "flag opportunistically while editing for
  something else" pace this doc had been running at. Added two new
  house.mjs rules scoped to `src/data/posts/**/*.mdx`: zero
  `real`/`really` (case-insensitive) and zero `'s own` (the specific
  disclaiming pattern, not the word "own" alone, which has legitimate
  uses: the verb "to own," "on its own," contrastive "your own X").
  The 149-file backlog is grandfathered in `scripts/
  real-debt-2026-11-28.json` so the build doesn't break today; every
  file removed from that list must be re-verified clean by the script
  itself. The one live `'s own` instance found
  (`street-kart-asakusa-costume-license-cost.mdx`) was fixed on the
  spot, no grandfathering needed for that rule. **Next priority: work
  down the 149-file real-debt list**, a few files at a time or via a
  dedicated background sweep (same pattern as the 2026-11-25 "own"
  sweep), removing each from the JSON list only once `node
  scripts/house.mjs` confirms it clean.
