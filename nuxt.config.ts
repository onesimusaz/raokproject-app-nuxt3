import { config } from "dotenv";
import { existsSync } from "fs";

// Load .env first (if it exists)
if (existsSync(".env")) {
  config({ path: ".env" });
}

// Load .env.local and override any existing values
if (existsSync(".env.local")) {
  config({ path: ".env.local", override: true });
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/scss/style.scss"],
  devServer: {
    port: 3040,
  },
  vite: {
    server: {
      hmr: {
        port: 24679, // Use a different port for WebSocket to avoid conflicts
      },
    },
    resolve: {
      alias: {
        "vue-easy-lightbox":
          "vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js",
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";',
          api: "modern-compiler",
          silenceDeprecations: ["import"],
        },
      },
    },
  },
  plugins: ["@/plugins/aos"],
});
