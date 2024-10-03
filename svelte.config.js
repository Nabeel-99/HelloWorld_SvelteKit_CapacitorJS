import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build', // The directory to output the HTML files
			assets: 'build', // The directory to output static assets
			fallback: 'index.html' // No fallback for SPA routing
		})
	},
	preprocess: vitePreprocess() //This means you can use TypeScript, SCSS, or other preprocessors in your Svelte components.
};

export default config;
