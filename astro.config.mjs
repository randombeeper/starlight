import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';

// https://astro.build/config
export default defineConfig({
	site: 'https://randombeeper.github.io/',
	base: 'purple-pulsar',
	plugins: [
        starlightDocSearch({
          appId: '82VLS1TU5K',
          apiKey: 'bfdc9eff848b16b6167efaa4a84d5e27',
          indexName: 'fontawesome',
        }),
      ],
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
