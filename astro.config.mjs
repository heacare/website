import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      // Importing Chakra UI with the default settings currently fails. To
      // work around this, we can either import the modules as CommonJS:
      format: "cjs",
      // Or we can concatenate all the dependencies into the file used for
      // SSR (except for React, for an obscure reason):
      //noExternal: true,
      //external: ['react'],
      // However, the latter breaks the development server.
    },
  },
});
