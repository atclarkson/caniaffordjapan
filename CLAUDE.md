# caniaffordjapan.com

A lightweight Astro static blog answering "can I afford a trip to Japan?" with
real, priced-out posts from the Clarkson family's own trips. Hosted on
Cloudflare Pages, auto-deploys on push to `main`. No review step — the site
owner has approved fully autonomous daily publishing.

## Daily article routine

One new post per day about something affordable in Japan — a free attraction,
a cheap meal, a transit hack, a lodging comparison, a day-trip cost breakdown.

1. Check `src/content/posts/` for existing slugs/tags first so you don't
   repeat a topic already covered.
2. Pull real material from the AL_Vault MCP tools — never invent details or
   use stock photography:
   - `get_destinations` to see what cities/neighborhoods have unused content.
   - `search_photos` (view: "index" to browse cheaply, then "blog" on a
     shortlist for embeddable `large_url`/`small_url` + real `alt_text`/
     `ai_caption`) — prefer photos with `used_in_count: 0`.
   - `get_trip` and `get_journal_entries` for the surrounding timeline/story
     context (what else happened that day, what things cost).
3. After a post ships with vault photos, call `mark_photo_used` on each
   photo uuid so it isn't reused in a later post.

## Post format

- File: `src/content/posts/<kebab-case-slug>.mdx` (use `.mdx` if the post
  needs the `<AffiliateButtons />` component; plain `.md` is fine otherwise).
- Frontmatter fields (see `src/content/config.ts`): `title`, `description`
  (~150-160 chars, this is the meta description), `pubDate` (YYYY-MM-DD),
  `heroImage` (a vault `large_url`), `heroAlt` (the vault `alt_text`), `tags`.
- Lead with the practical answer (is it free? what does it cost?) before the
  story. Use real photos inline via `<figure><img .../><figcaption>...`.
  One H1 only (rendered by the layout from `title` — don't repeat it as a
  heading in the body); use `##` for sections.
- For two or more photos side by side, wrap them in `<div class="gallery">`
  with plain `<figure>` children (no inline `style` — the `.gallery` class in
  `src/styles/global.css` already handles the grid and mobile stacking).
- Include a rough cost table where it makes sense — a plain markdown table is
  fine, `.prose table` in global.css styles it automatically.

## Affiliate links

- `src/data/affiliates.ts` holds the base URL / query builder per provider
  (Klook, GetYourGuide, Expedia) and a `pending` flag.
- Until the site owner adds real partner/tracking IDs there, these stay
  plain, non-monetized search links — do not fabricate tracking params or
  claim compensation that doesn't exist yet.
- Use the `<AffiliateButtons heading="..." query="..." />` component (in an
  `.mdx` post) rather than hand-rolled `<a>` tags, so a future link-format
  change only has to happen in one place. It already links to `/disclosure`
  and marks itself as non-affiliate while `pending` is true.

## Style

- Second person, direct, numbers-first (yen and a rough USD conversion).
- No AI-sounding filler ("in today's fast-paced world", "let's dive in",
  forced "In conclusion" wrap-ups).
- Real people only: Adam, Lindsay, and their kids Lily, Cora, Harper.

## Publishing

- Commit straight to `main` — Cloudflare Pages auto-deploys it. No PR/review
  step for this repo.
- Commit message: `Add post: <title>`.
- Before publishing, sanity-check the post reads correctly — Markdown/MDX
  syntax, working image URLs, frontmatter matches the schema in
  `src/content/config.ts`.

## Local commands

```
npm install
npm run dev      # local preview
npm run build    # production build to dist/ — run this before pushing
                  # if you changed layouts/components, not just a post
```
