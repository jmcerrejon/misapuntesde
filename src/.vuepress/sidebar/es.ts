import { sidebar } from "vuepress-theme-hope";

// Sidebar específico para la versión española del sitio.
// Ajusta o amplía las secciones según tu necesidad real.
export const esSidebar = sidebar({
  "/es/": [
    "",
    {
      text: "Años",
      icon: "book",
      children: [
        {
          text: "2013",
          link: "/es/2013/",
        },
        {
          text: "2014",
          link: "/es/2014/",
        },
        {
          text: "2015",
          link: "/es/2015/",
        },
        {
          text: "2016",
          link: "/es/2016/",
        },
        {
          text: "2017",
          link: "/es/2017/",
        },
        {
          text: "2018",
          link: "/es/2018/",
        },
        {
          text: "2019",
          link: "/es/2019/",
        },
        {
          text: "2020",
          link: "/es/2020/",
        },
        {
          text: "2021",
          link: "/es/2021/",
        },
        {
          text: "2024",
          link: "/es/2024/",
        },
        {
          text: "2025",
          link: "/es/2025/",
        },
      ],
    },
    {
      text: "Sobre mí",
      icon: "user",
      link: "/es/about_me/story.html",
    },
  ],
});
