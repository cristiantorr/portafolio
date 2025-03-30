// @ts-check

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
/* import robotsTxt from "astro-robots-txt"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://porfolio.dev/'
})
 */
// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
});
