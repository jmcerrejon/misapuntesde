import { defineClientConfig } from "vuepress/client";
import Banner from "./components/Banner.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("Banner", Banner);
  },
});