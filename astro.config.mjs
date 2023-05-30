import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          entryFileNames: "assets/entry.[hash].js",
          assetFileNames: "assets/asset.[hash][extname]",
        },
      },
    },
  },
});
