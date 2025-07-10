import fs from 'fs';
import path from 'path';
import { appData } from '$lib';

function getStaticRoutes(dir = '.svelte-kit/types/src/routes') {
	const routes: string[] = [];

	function walk(currentPath: string) {
		const entries = fs.readdirSync(currentPath, { withFileTypes: true });

		for (const entry of entries) {
			const entryPath = path.join(currentPath, entry.name);

			if (entry.isDirectory()) {
				walk(entryPath);
			} else if (entry.isFile() && entry.name.endsWith('.d.ts')) {
				let route = path
					.relative(dir, entryPath)
					.replace(/\$types\.d\.ts$/, '')
					.replace(/\\/g, '/')
					.replace(/\/$/, '');

				if (!route.startsWith('/')) {
					route = '/' + route;
				}

				routes.push(route);
			}
		}
	}

	walk(dir);
	return routes;
}

function generateSitemap(routes: string[]) {
	const urls = routes
		.map((route: string) => {
			return `<url><loc>${appData.baseURL}${encodeURI(route)}</loc></url>`;
		})
		.join('\n' + '  ');

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml" xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0" xmlns:news="https://www.google.com/schemas/sitemap-news/0.9" xmlns:image="https://www.google.com/schemas/sitemap-image/1.1" xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
	${urls}
</urlset>`.trim();
}

const routes = getStaticRoutes();
const sitemap = generateSitemap(routes);
// console.log(sitemap);

fs.writeFileSync('static/sitemap.xml', sitemap);
console.log('✅ Sitemap generated.');
