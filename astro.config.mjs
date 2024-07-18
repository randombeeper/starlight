import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: 'https://randombeeper.github.io/',
	base: 'starlight',
	trailingSlash: 'never',
	integrations: [
		starlight({
			title: 'James Astro Testing',
			social: {
				github: 'https://randombeeper.github.io',
				discord: 'https://alg.li/discord',
			},
			editLink: {
				baseUrl: 'https://github.com/randombeeper/starlight',
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
				  appId: '65LZQF719B',
				  apiKey: 'd1dafe2f4f14b43b068e484b39ddb2de',
				  indexName: 'randombeeperio',
				}),
			  ],
		}),
		sitemap()
	],
});
