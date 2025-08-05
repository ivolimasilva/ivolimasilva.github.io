import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
	vite: { plugins: [tailwindcss()] },
	output: 'server',
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
		imageService: 'cloudflare',
	}),
});
