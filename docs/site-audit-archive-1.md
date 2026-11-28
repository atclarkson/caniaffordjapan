# Saturday site audit log archive 1

Older `docs/site-audit.md` "Log" entries, moved here to stay under the
house-lint 400-line cap, provenance only. See `docs/site-audit.md` for
current scope/process and the active log.

## Log (archived)

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
