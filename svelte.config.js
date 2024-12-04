import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {},
		appDir: '_app',
		csp: {
			directives: {
				'script-src': ['self'],
			},
			mode: 'auto',
			reportOnly: {
				'script-src': ['self'],
				'report-uri': ['/'],
			},
		},
		csrf: {
			checkOrigin: true,
		},
		embedded: false,
		env: {
			dir: '.',
			privatePrefix: 'PRIV_',
			publicPrefix: 'PUB_',
		},
		files: {
			appTemplate: 'index.html',
			assets: 'assets',
			errorTemplate: 'error.html',
			hooks: {
				client: 'hooks.client.ts',
				server: 'hooks.client.ts',
				universal: 'hooks.client.ts',
			},
			lib: 'lib',
			params: 'params',
			routes: 'routes',
			serviceWorker: 'service-worker.ts',
		},
		inlineStyleThreshold: 0,
		moduleExtensions: ['.ts'],
		outDir: '.svelte-kit',
		output: {
			preloadStrategy: 'modulepreload',
		},
		paths: {
			assets: '',
			base: '',
			relative: true,
		},
		prerender: {
			concurrency: 1,
			crawl: true,
			entries: '*',
			handleHttpError: 'fail',
			handleMissingId: 'fail',
			handleEntryGeneratorMismatch: 'fail',
			origin: 'http://sveltekit-prerender',
		},
		serviceWorker: {
			files: (filename) => !filename.startsWith('.'),
			register: true,
		},
		typescript: {
			config: (config) => config,
		},
		version: {
			name: undefined,
			pollInterval: 0,
		},
	},
}

export default config
