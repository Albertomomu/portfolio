import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://albertomoreno.dev",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    routing: {
        prefixDefaultLocale: false
    }
  }
});