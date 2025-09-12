import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.ridwansukri.com',

  integrations: [
    tailwind(),
    sitemap({
      customPages: [
        'https://www.ridwansukri.com/resume',
        'https://www.ridwansukri.com/posts',
        'https://www.ridwansukri.com/projects',
        'https://www.ridwansukri.com/about'
      ],
      filter: (page) => !page.includes('/admin/'),
      changefreq: 'weekly',
      priority: 0.7
    })
  ],

  // SEO optimizations
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },

  // Performance optimizations  
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/js/[name].[hash].js',
          chunkFileNames: 'assets/js/[name].[hash].js',
          assetFileNames: 'assets/[ext]/[name].[hash].[ext]'
        }
      }
    }
  }
});