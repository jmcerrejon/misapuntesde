import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, esNavbar } from "./navbar/index.js";
import { BITCOIN, PATREON } from "./logo.js";
// import { enSidebar, esSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://misapuntesde.com",
  // hostname: "http://localhost:8080", // For test purpose: check xml feed,etc.
  author: {
    name: "Jose Cerrejon",
    url: "https://github.com/jmcerrejon",
    email: "ulysess@gmail.com",
  },
  editLink: false,
  hotReload: false,
  license: "<br>Designed with ♥️ using VuePress 2 | <a href=https://creativecommons.org/licenses/by-nc-sa/4.0/ target=_blank>CC BY-NC-SA 4.0</a>",
  iconAssets: "https://kit.fontawesome.com/88116225ce.js",
  logo: "/images/logos/avatar_memoji.png",
  repo: "https://github.com/jmcerrejon/misapuntesde",
  docsDir: "src",
  blog: {
    medias: {
      Discord: "https://discord.com/invite/Y7WFeC5",
      Email: "mailto:ulysess@gmail.com",
      GitHub: "https://github.com/jmcerrejon",
      Linkedin: "https://www.linkedin.com/in/jmcerrejon",
      Rss: "https://misapuntesde.com/rss.xml",
      Twitter: "https://x.com/ulysess10",
      Youtube: "https://www.youtube.com/c/josecerrejonpi",
      // Bitcoin: ["https://mister-hope.com", BITCOIN],
      Patreon: ["https://www.patreon.com/cerrejon", PATREON],
    },
  },
  locales: {
    "/": {
      navbar: enNavbar,
      sidebar: false, // sidebar: enSidebar,
      footer: 'This blog DO NOT use cookies to improve your experience.',
      displayFooter: true,
      blog: {
        description: "Project Manager & Full Stack Developer",
        intro: "/about_me/story.html",
      },
      // metaLocales: {},
    },

    "/es/": {
      navbar: esNavbar,
      sidebar: false, // sidebar: esSidebar,
      footer: 'Este blog NO usa cookies para mejorar tu experiencia.',
      displayFooter: true,
      blog: {
        description: "Desarrollador Full Stack & Project Manager",
        intro: "/es/about_me/story.html",
      },
      // metaLocales: {},
    },
  },

  plugins: {
    blog: true,

    feed: {
      rss: true,
    },

    search: {
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/es/': {
          placeholder: 'Buscar',
        },
      },
    },

    prismjs: {
      light: "ateliersulphurpool-light", // favorites: ateliersulphurpool-light, material-light
      dark: "atom-dark" // favorites: night-owl, coldark-dark, shades-of-purple, dracula, z-touch, holi
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    redirect: {
      defaultBehavior: "homepage",
      localeConfig: {
        "/en/": ["en-US", "en-UK", "en"],
        "/es/": ["es-AR", "es-BO", "es-CL", "es-CO", "es-CR", "es-DO", "es-EC", "es-SV", "es-GT", "es-HN", "es-MX", "es-NI", "es-PA", "es-PE", "es-PR", "es-PY", "es-ES", "es-UY", "es-VE", "es"],
      },
    },

    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: false,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // autoCatalog: false,
    // install @waline/client before enabling it
    // WARNING: This is a test server for demo only.
    // You should create and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
    // install vuepress-plugin-pwa2 and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
