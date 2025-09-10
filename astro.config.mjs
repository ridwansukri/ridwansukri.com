import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://www.ridwansukri.com",
	integrations: [tailwind(), sitemap()],
	compressHTML: true,
	build: {
		inlineStylesheets: "auto",
	},
	vite: {
		build: {
			cssMinify: "lightningcss",
		},
		ssr: {
			external: ["svgo"],
		},
	},
});
