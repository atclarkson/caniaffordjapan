import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://caniaffordjapan.com';
  const posts = await getCollection('posts');

  const staticPaths = ['/', '/about/', '/disclosure/'];
  const postPaths = posts.map((post) => `/posts/${post.slug}/`);
  const urls = [...staticPaths, ...postPaths];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${base}${path}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
