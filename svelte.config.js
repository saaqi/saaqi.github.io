import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: ''
		},
		alias: {
			$assets: 'src/assets',
			$components: 'src/components',
			$data: 'src/data',
			$functions: 'src/functions',
			$sections: 'src/sections',
			$styles: 'src/styles'
		}
	}
};

export default config;
