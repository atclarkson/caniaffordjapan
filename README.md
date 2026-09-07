# Can I Afford Japan?

A family travel blog answering the question everyone asks before a Japan
trip: what does this actually cost? Real photos, real prices, from the
Clarkson family's own trips.

Built on [Reef](https://github.com/alohapixelcom-hash/reef), a free,
MIT licensed Astro blog theme by Aloha Pixel, then rebranded and stripped
down to English only for this site. See `NOTICE.md` and `THIRD-PARTY.md` for
what that license covers.

## Stack

- [Astro](https://astro.build) 7, static output, content collections for
  posts, authors, and topics under `src/data/`.
- Tailwind CSS 4, MDX for posts that embed a component (like the affiliate
  booking box).
- pnpm, pinned in `package.json` via `packageManager`. Use pnpm, not npm,
  the lockfile and the native build steps (sharp, esbuild) depend on it.
- Hosted on **Cloudflare Workers** (static assets), auto deploying on every
  push to `main`.

## Local development

```
pnpm install
pnpm dev
```

## Deploying

This repo is connected to Cloudflare Workers Builds already. One thing to
check in the Cloudflare dashboard: the project's build command needs to be
`pnpm build`, not `npm run build` (it may have been set to the npm version
before this repo switched to pnpm). Deploy command stays `npx wrangler
deploy`, it reads `wrangler.jsonc` at the repo root, which points at the
static `dist/` output.

Once `caniaffordjapan.com` is registered, add it under the Workers
project's custom domains. If the domain's nameservers are on Cloudflare,
that's a couple of clicks; otherwise Cloudflare gives you a CNAME to add at
your registrar.

After that, every push to `main`, including the daily automated posts,
deploys automatically.

## Affiliate links

`src/data/affiliates.ts` centralizes the Klook and GetYourGuide link
formulas (both build a real tracked link from any search query) and
Expedia's account storefront fallback (Expedia's affiliate tool hands out
one off deep links per search, there's no query based formula for it). A
post can override any of these per provider, see `AffiliateBox`'s
`overrides` prop and CLAUDE.md's "Affiliate links" section.

To add or rotate a partner ID, edit the constants at the top of
`src/data/affiliates.ts`. To add a widget for a new city (currently only
Tokyo is wired up, in `BookingWidgets.astro`), get a fresh widget snippet
from that partner's dashboard, don't reuse Tokyo's location id.

## Content

See `CLAUDE.md` for the full content and style guide, it's what drives the
daily automated post. See `AGENTS.md` for the theme's own engineering
conventions if you're changing layout or components rather than writing a
post.
