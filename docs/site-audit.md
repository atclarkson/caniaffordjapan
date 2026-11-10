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

- **Seed item, 2026-10-29 (not yet actioned):** `/legal/`'s "Affiliate
  disclosure" section (`src/i18n/ui/en/pages.ts`, `legal.sections`) names
  only Klook, GetYourGuide, and Expedia. It's gone stale: Hotels.com
  (added 2026-10-26), Amazon Associates (in use since the packing cubes
  post), and the telecom affiliates (`src/data/telecomAffiliates.ts`)
  are all live now and uncredited there. Real, concrete first item for
  the first Saturday firing.
- **Seed item, 2026-10-29 (not yet actioned):** `src/js/schema.ts`
  already has a working `faqPage()` JSON-LD builder, confirmed via
  `grep` that nothing on the site actually calls it. A real, ready AI
  search surface sitting unused. Worth identifying which page(s) have
  genuine, naturally-occurring Q&A content (the weekly calendar columns,
  a "how does this site work" angle for about/home, or a cluster of real
  traveler questions this site's posts already answer piecemeal) and
  wiring it up rather than inventing questions nobody asks just to fill
  the schema.
- **Seed item, 2026-10-30 (not yet actioned), real Search Console data,
  now a real 28-day pull:** site owner first uploaded a 7-day export by
  mistake, then the real 28-day one, both saved to
  `docs/search-console/2026-10-30/` (7-day superseded, kept in that
  folder's `7-day-initial/` for reference only). Full writeup in
  `analysis.md`. Confirmed, confident finding: nine real "travel
  insurance japan" query variants, 93 combined impressions over the
  month, zero clicks, positions 26 to 94;
  `travel-insurance-japan-trip-cost.mdx` itself sits at position 39 on
  101 impressions with zero clicks. Real, sustained demand this post
  isn't capturing. Second confirmed finding (the larger sample moved
  this from "watch" to "act"): 8 posts rank position <10 with 20+
  impressions and still zero clicks for the month, led by
  `japan-optician-eye-exam-glasses-cost` (132 impr, pos 7.22) and
  `kappabashi-knife-shop-price-cheap-vs-splurge-cost` (103 impr, pos
  7.38), a real anomaly at that sample size, not noise. The optician
  post's title also breaks house style ("Actually"), a reasonable
  first real test: fix the title, compare CTR on the next export.
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
