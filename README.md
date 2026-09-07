# Can I Afford Japan?

A lightweight blog (Astro, static output) answering the question everyone
asks before a Japan trip: what does this actually cost? Real photos, real
prices, from the Clarkson family's own trips.

## Stack

- [Astro](https://astro.build) — static site generator, content collections
  for posts (`src/content/posts/*.md` / `*.mdx`).
- Hosted on **Cloudflare Pages**, auto-deploying on every push to `main`.
- No backend, no database — just markdown + images.

## Local development

```
npm install
npm run dev
```

## Deploying (one-time setup)

This repo isn't connected to Cloudflare Pages yet. To connect it:

1. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect
   to Git**, pick `atclarkson/caniaffordjapan`.
2. Build settings: framework preset **Astro**, build command `npm run
   build`, output directory `dist`.
3. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.
4. **Custom domain**: once `caniaffordjapan.com` is registered, add it under
   the Pages project's **Custom domains** tab. If the domain's nameservers
   are on Cloudflare, this is a couple of clicks; otherwise Cloudflare will
   give you a CNAME to add at your registrar.

After that, every push to `main` (including the daily automated posts)
deploys automatically — nothing else to do.

## Affiliate links

`src/data/affiliates.ts` centralizes the Klook / GetYourGuide / Expedia link
logic. Right now `pending: true` on each provider, so links go straight to
the provider's site with no tracking — no partner IDs exist yet. Once you
have affiliate/partner accounts with each:

1. Update `src/data/affiliates.ts` with the real tracking link format.
2. Set `pending: false` for that provider.
3. Add the site as a media property in whatever affiliate network each
   program runs on (e.g. this account already has an Impact.com account —
   worth checking if any of the three run through it before signing up
   separately).

## Content

See `CLAUDE.md` for the full content/style guide — it's what drives the
daily automated post.
