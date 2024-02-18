import { navbar } from "vuepress-theme-hope";

export const esNavbar = navbar([
  "/es",
  {
    text: "PiKISS",
    icon: "kiss",
    link: "/es/2014/05/pikiss-for-raspberry-pi-a-bunch-of-scripts-with-menu-to-make-your-life-easier",
  },
  {
    text: "Sobre mí",
    icon: "book",
    prefix: "/es/about_me",
    children: [
      { text: "Mi historia", icon: "pen-to-square", link: "/es/about_me/story" },
      { text: "Currículum Vitae (pdf)", icon: "file-pdf", link: "/about_me/pdf_links" },
      { text: "Portfolio (pdf)", icon: "file-pdf", link: "/about_me/pdf_links" },
    ],
  },
]);
