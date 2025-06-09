import fs from 'fs';
import path from 'path';
import { data } from '/src/app.js'

const siteUrl = data.baseURL;

function getStaticRoutes() {
  const files = fs.readdirSync('.svelte-kit/output/prerendered/pages', { recursive: true });
  return files
    .filter((f) => f.endsWith('.html'))
    .map((f) => '/' + f.replace(/index\.html$/, '').replace(/\.html$/, ''));
}

export async function GET() {
  const routes = getStaticRoutes();

    const urls = routes.map(route => `
      <url>
        <loc>${siteUrl}${route}</loc>
      </url>`).join('');
  return new Response(
    `
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
      ${urls}
		</urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}
