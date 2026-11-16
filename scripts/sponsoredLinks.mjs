// scripts/sponsoredLinks.mjs - Astro integration: marks every affiliate or
// partner link in the built HTML with rel="sponsored".
//
// Google's spam policies require paid/affiliate links to carry
// rel="sponsored" (or nofollow). The post components (AffiliateBox,
// AffiliateButton, KlookCodeBox) already do it, but hand-written links inside
// post prose (<a href={telecomAffiliates.x.url}>, markdown links, Viator
// links) did not. Running over the final HTML catches every source, including
// future posts, without touching each post. Added 2026-11-16.
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

/** Tracking redirect hosts and partner storefronts. Any subdomain matches. */
const HOSTS = [
  // tracking/redirect networks
  "sjv.io", "pxf.io", "prf.hn", "awin1.com", "tkqlhce.com", "i384100.net", "amzn.to", "affiliate.klook.com",
  // partners we earn from (a plain storefront link is still a commercial link)
  "klook.com", "getyourguide.com", "expedia.com", "hotels.com", "viator.com", "amazon.com",
  "holafly.com", "airalo.com", "getnomad.app", "simlocal.com", "ubigi.com", "japan-wireless.com",
  "airhub.app", "simoptions.com", "safetywing.com", "withfaye.com", "worldnomads.com",
  "nordvpn.net", "nordvpn.com", "expressvpn.com", "skyscanner.net", "12go.asia", "jrpass.com",
];

const isPartner = (href) => {
  let host;
  try { host = new URL(href).hostname.toLowerCase(); } catch { return false; }
  return HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
};

/** Adds sponsored (and noopener) to <a> tags pointing at partner hosts. */
export function markSponsored(html) {
  return html.replace(/<a\b[^>]*>/gi, (tag) => {
    const href = tag.match(/\shref="([^"]+)"/i)?.[1]?.replace(/&amp;/g, "&");
    if (!href || !/^https?:/i.test(href) || !isPartner(href)) return tag;
    const rel = tag.match(/\srel="([^"]*)"/i);
    const tokens = new Set((rel?.[1] ?? "").split(/\s+/).filter(Boolean));
    if (tokens.has("sponsored")) return tag;
    tokens.add("sponsored").add("noopener");
    const value = [...tokens].join(" ");
    return rel ? tag.replace(rel[0], ` rel="${value}"`) : tag.replace(/^<a\b/i, `<a rel="${value}"`);
  });
}

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return name.endsWith(".html") ? [path] : [];
  });
}

export default function sponsoredLinks() {
  return {
    name: "sponsored-links",
    hooks: {
      "astro:build:done": ({ dir, logger }) => {
        let changed = 0;
        for (const file of htmlFiles(fileURLToPath(dir))) {
          const before = readFileSync(file, "utf8");
          const after = markSponsored(before);
          if (after !== before) { writeFileSync(file, after); changed++; }
        }
        logger.info(`rel="sponsored" added to partner links in ${changed} page(s)`);
      },
    },
  };
}
