import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
/**
 * @import { Config } from '@sveltejs/kit';
 */

/**
 * @satisfies {Config}
 */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      platformProxy: {
        persist: { path: "./.wrangler/v3" },
      },
    }),
    alias: {
      $src: "./src",
    },
  },
  vitePlugin: {},
};

export default config;
