import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // Enable Solid to support Solid JSX components.
  integrations: [solid(), tailwind()],
  output: "server",
  adapter: vercel()
});