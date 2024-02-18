import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  pagePatterns: ["**/*.md", "!**/*.php", "!.vuepress", "!node_modules"],
  locales: {
    "/": {
      lang: "en-US",
      title: "My Notes about...",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/es/": {
      lang: "es-ES",
      title: "Mis apuntes de...",
      description: "Aqui encuentras",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
