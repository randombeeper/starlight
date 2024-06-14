import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: 'https://randombeeper.github.io/',
	base: 'purple-pulsar',
	trailingSlash: 'never',
	integrations: [
		starlight({
			title: 'James Astro Testing',
			social: {
				github: 'https://randombeeper.github.io',
				discord: 'https://alg.li/discord',
			},
			pagefind:false,
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [
				starlightDocSearch({
				  appId: 'FHAKRV7GHA',
				  apiKey: '26a8eedb0937f39c55c689e3ea6f6d68',
				  indexName: 'randombeeperio',
				}),
			  ],
		}),
		sitemap()
	],
});
