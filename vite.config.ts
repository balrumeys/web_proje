import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitest/config";
//import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default {
  meta: {
    title: "Nuxt3 PWA",
    charset: "utf-8",
    meta: [{ name: "theme-color", content: "#ffdd67" }],
    link: [
      { hid: "icon", rel: "icon", type: "image/png", href: "/logo_x32.png" },
      {
        hid: "apple-touch-icon",
        rel: "apple-touch-icon",
        href: "/logo_x180.png",
      },
      { rel: "manifest", href: "/manifest.json" },
    ],
  },
  plugins: [vue(), VitePWA({ registerType: "autoUpdate" })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
};
