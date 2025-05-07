import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: 'https://randombeeper.github.io/',
	base: 'starlight',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'James Astro Testing',
			social: {
				github: 'https://randombeeper.github.io',
				discord: 'https://alg.li/discord',
			},
			editLink: {
				baseUrl: 'https://github.com/randombeeper/starlight/',
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
				  appId: 'beta9SC6XUPSJQ',
				  apiKey: 'f97078b3e762a080bb540b440a628eeb',
				  indexName: 'mycrawler',
				}),
			  ],
		}),
		sitemap()
	],
});
