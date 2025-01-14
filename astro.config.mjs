import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare(),
  output: "server",
  integrations: [tailwind()],

  image: {
    domains: [""],
  }
});