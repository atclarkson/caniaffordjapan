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
