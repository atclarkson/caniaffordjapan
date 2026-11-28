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
