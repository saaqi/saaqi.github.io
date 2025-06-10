import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import path from 'path';

const bootstrap = 'node_modules/bootstrap';
const IN_PRODUCTION = process.env.NODE_ENV === 'production';
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';

export default defineConfig({
	plugins: [
		enhancedImages(), // must come before the SvelteKit plugin
		sveltekit()
	],

	resolve: {
		alias: {
			$assets: path.resolve('./src/assets'),
			$components: path.resolve('./src/components'),
			$data: path.resolve('./src/data'),
			$functions: path.resolve('./src/functions'),
			$sections: path.resolve('./src/sections'),
			$styles: path.resolve('./src/styles'),
			$lib: path.resolve('./src/lib')
		}
	},

	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern'
			}
		},
		postcss: {
			plugins: IN_PRODUCTION
				? [
						purgeCSSPlugin({
							content: [
								'./src/app.html',
								'./src/**/*.js',
								'./src/**/*.svelte',
								`${bootstrap}/js/dist/modal.js`
							],
							safelist: [/svelte-/, /modal-/],
							defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
							keyframes: true,
							variables: true
						}),
						cssnano({
							preset: ['default', { discardComments: { removeAll: true } }]
						}),
						autoprefixer()
					]
				: []
		}
	},

	server: {
		port: 3000
	},

	build: {
		emptyOutDir: true,
		minify: 'terser',
		terserOptions: {
			format: {
				comments: false
			}
		}
	}
});
