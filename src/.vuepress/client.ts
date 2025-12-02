import { defineClientConfig } from "vuepress/client";
import Banner from "./components/Banner.vue";

export default defineClientConfig({
  enhance: ({ app, router }) => {
    app.component("Banner", Banner);

    // Solo ejecutar en cliente para evitar errores SSR
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      router.afterEach((to) => {
        if (!to.path.startsWith("/es/")) return;

        const schedule = (fn: () => void) => {
          if (typeof window.requestAnimationFrame === "function") {
            window.requestAnimationFrame(fn);
          } else {
            setTimeout(fn, 0);
          }
        };

        schedule(() => {
          if (document.getElementById("mundo-arcade-logo")) return;

          const infoDiv = document.querySelector<HTMLDivElement>(".vp-blog-infos");
          if (infoDiv) {
            const wrapper = document.createElement("div");
            wrapper.id = "mundo-arcade-logo";
            wrapper.className = "mundo-arcade-logo";
            const link = document.createElement("a");
            link.href = "https://mundoarcadesevilla.com/";
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            const img = document.createElement("img");
            img.src = "/images/partners/mundoarcadesevilla.jpg";
            img.onerror = () => { img.src = "/images/logos/avatar_memoji.png"; };
            img.alt = "Mundo Arcade Sevilla";
            img.style.maxWidth = "220px";
            img.style.display = "block";
            img.style.margin = "12px auto";
            link.appendChild(img);
            wrapper.appendChild(link);
            infoDiv.parentNode?.insertBefore(wrapper, infoDiv.nextSibling);
          }
        });
      });
    }
  },
});

if (typeof document !== 'undefined') {
  const styleId = 'mundo-arcade-style';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .mundo-arcade-logo {
        text-align: center;
        padding: 8px 0;
      }
      .mundo-arcade-logo img {
        image-rendering: pixelated;
      }
    `;
    document.head.appendChild(style);
  }
}