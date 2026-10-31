// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  experimental: { appManifest: false },
  // Pages not linked from the home page must be listed to be prerendered.
  nitro: { prerender: { routes: ["/voy/privacy", "/voy/terms"] } },
  modules: ["nuxt-icon", "@nuxt/image"],
  compatibilityDate: "2024-12-18",
});
