import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "PiKISS",
    icon: "kiss",
    link: "/2014/05/pikiss-for-raspberry-pi-a-bunch-of-scripts-with-menu-to-make-your-life-easier",
  },
  {
    text: "About me",
    icon: "book",
    prefix: "/about_me",
    children: [
      { text: "Story", icon: "pen-to-square", link: "/about_me/story" },
      { text: "CV/Resume (pdf)", icon: "file-pdf", link: "/about_me/pdf_links" },
      { text: "Portfolio (pdf)", icon: "file-pdf", link: "/about_me/pdf_links" },
    ],
  },
]);
