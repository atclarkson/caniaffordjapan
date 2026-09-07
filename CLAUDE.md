# caniaffordjapan.com

A family travel blog on the Reef Astro theme (English only), answering "what
does this actually cost in Japan?" with real, priced out posts from the
Clarkson family's own trips. Hosted on Cloudflare Workers (static assets),
auto deploying on push to `main`. No review step: the site owner has
approved fully autonomous daily publishing.

Stack: Astro 7, Tailwind 4, MDX, pnpm (pinned via `packageManager` in
package.json, use pnpm, not npm). Node >= 22.18.

Known gap: the About page's phone mockup (`pnpm poster`) has no image right
now, it renders nothing rather than a broken image, which is fine. It needs
a real Playwright Chromium install to regenerate (`pnpm exec playwright
install chromium` then `pnpm build && pnpm poster`), not urgent for the
daily post routine.

## Daily article routine

One new post per day about something affordable in Japan: a free attraction,
a cheap meal, a transit hack, a lodging comparison, a day trip cost
breakdown.

1. Check `src/data/posts/en/` for existing slugs and topics so you don't
   repeat one already covered.
2. Pull real material from the AL_Vault MCP tools, never invent details or
   use stock photography:
   - `get_destinations` to see what cities and neighborhoods have unused
     content.
   - `search_photos` (view "index" to browse cheaply, then "blog" on a
     shortlist for embeddable `large_url` plus real `alt_text` and
     `ai_caption`). Prefer photos with `used_in_count: 0`.
   - `get_trip` and `get_journal_entries` for the surrounding timeline and
     story context: what else happened that day, what things cost.
3. Pick or create a topic (see "Topics" below) and confirm the author stays
   `en/the-clarksons` unless the site owner has added someone else.
4. Write the post (see "Post format" below).
5. Download the cover photo locally (see "Images" below). This is required:
   the build fails without it.
6. Run `pnpm install` if needed, then `pnpm build` and `pnpm check`. Both
   must be clean before you commit.
7. Call `mark_photo_used` on every vault photo uuid you used (cover and any
   in body photos), with `post_slug` set to the new post's slug.
8. Commit straight to `main` (message: `Add post: <title>`) and push. No PR,
   no review step. Cloudflare auto deploys on push.

If you hit something you can't resolve alone (the build is broken by
something other than your own change, or you genuinely can't find any new
unused material), stop and leave a clear note rather than pushing something
broken or duplicating a covered topic.

## Post format

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
- Lead with the practical answer (is it free, what does it cost) before the
  story. Use one H1 only (the layout renders `title`, don't repeat it as a
  heading in the body); use `##` for sections.
- A markdown table works fine for a cost breakdown, the theme's prose
  styles handle it.
- For a single photo, a plain `<figure><img src="..." alt="..." /><figcaption>...</figcaption></figure>`
  works. For two or more side by side, wrap them in
  `<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">` with plain
  `<figure>` children (mobile first: one column by default, two from the
  `sm` breakpoint up). In body photos can stay on the AL_Vault CDN
  (`large_url`), they don't need to be downloaded like the cover does.

## Topics

One topic per post, chosen from `src/data/topics/en/`: `tokyo`, `osaka`,
`free-attractions`, `budget-food`, `day-trips`, `transit`. Add a new topic
JSON file there only if a post genuinely doesn't fit any existing one
(fields: `name`, `description`, `accent` which must be one of `coral`,
`reef`, or `ink`, and `order`).

## Affiliate links

- `src/data/affiliates.ts` holds the base URL and query builder per provider
  (Klook, GetYourGuide, Expedia) and a `pending` flag.
- Until the site owner adds real partner or tracking IDs there, these stay
  plain, non monetized search links. Do not fabricate tracking params or
  claim compensation that doesn't exist yet.
- Use `<AffiliateBox heading="..." query="..." />` (import from
  `@components/Post/AffiliateBox.astro`, only works in `.mdx` posts) rather
  than hand rolled links, so a future link format change only has to happen
  in one place. It already marks itself as non affiliate while `pending` is
  true and links to `/legal/`, which carries the disclosure section.

## Images

- Cover (required, must be a local file for Astro's image optimizer):
  ```
  curl -sS -o src/assets/covers/<slug>.jpg "<vault large_url>"
  ```
  then reference it in frontmatter as `../../../assets/covers/<slug>.jpg`.
- Author avatars, if a new author is ever added, go in
  `src/assets/authors/<slug>.jpg` the same way.
- In body gallery photos can stay remote (the vault CDN), no download
  needed for those.

## Style

- Second person, direct, numbers first (yen and a rough USD conversion).
- No AI sounding filler ("in today's fast paced world", "let's dive in",
  forced "in conclusion" wrap ups).
- Real people only: Adam, Lindsay, and their kids Lily, Cora, Harper.
- No em dashes or en dashes anywhere, in code or in post copy. Plain
  hyphens, commas, or periods instead. `pnpm lint:house` enforces this
  repo wide and will fail the check otherwise.

## Local commands

```
pnpm install
pnpm dev        # local preview
pnpm build      # production build to dist/, must pass before pushing
pnpm check      # astro check, must be 0 errors before pushing
pnpm test       # fast selfchecks, quick to run, worth it after touching src/js
pnpm lint:house # the theme's own house style rules
```
