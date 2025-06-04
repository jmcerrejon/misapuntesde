---
title: Como migré de PHP a Vuepress 2 (Parte I)
description: Como migré de PHP a Vuepress 2 (Parte I)
author: Jose Cerrejon
icon: fa-solid fa-code
date: 2024-02-19
prev: /es/
next: false
category:
    - DevOps
tags:
    - Developer
    - PHP
    - Vuepress
image: /images/2024/02/php_vue.jpg
---

# Como migré de PHP a Vuepress 2 (Parte I)

![Este es el único uso de IA que vas a ver en este artículo. Generado por DALL-E de OpenAI y modificado posteriormente.](/images/2024/02/php_vue.jpg "Este es el único uso de IA que vas a ver en este artículo. Generado por DALL-E de OpenAI y modificado posteriormente.")

Han pasado 3 años desde mi último post aquí. He estado ocupado con mi trabajo y otros proyectos. El nuevo enfoque que le quiero dar al blog va a ser un poco diferente. Menos _Raspberry Pi_ (contaré el porqué más adelante) y más técnico. Ya os iré hablando de ello en los próximos días.

Quiero compartir con vosotros una serie de artículos de cómo ha sido la experiencia de migrar un blog hecho en _PHP + MySQL_, a uno estático utilizando _Vuepress 2_.

---

## Antes y ahora

![Captura de mi blog hace dos días.](/images/misapuntesde_v1.5.png "Captura de mi blog hace dos días.")

Esta no es la primera vez que cambio de diseño. No recuerdo cuándo fue la última vez que lo hice, pero sí que fue un cambio radical (tengo que buscar una foto de la primera versión del blog). El cambio en su día lo hice principalmente para ser responsive (¡Cielos, aún las páginas no lo necesitaban tanto!), poder utilizar _markdown_ y meter algunos plug-in en _Javascript_ para hacer zoom en las imágenes y resalto de sintaxis en el código fuente que mostraba.

La tecnología en este aspecto, no ha cambiado mucho. Seguimos dependiendo de _Javascript_ en el lado cliente y lo usamos más de lo que a muchos haters de este lenguaje les gustaría (_¡JQuery_ ha entrado en Beta con la versión 4!).

Voy a poner todo mi esfuerzo en que tu visita al blog sea lo más agradable posible. Como puedes ver en tu bloqueador de anuncios, no tengo publicidad salvo en la página principal al final de la mejor tienda para _Raspberry Pi y otras placas_ que existe en España ([raspipc!](https://raspipc.es)). Sobre la publicidad, no me gusta y no quiero que te moleste. Si te gusta lo que lees, puedes invitarme a un [café](https://ko-fi.com/cerrejon) :coffee:. Ya está.

Como habéis visto en la captura del blog anterior, el diseño era muy simple y no lo cambié con el paso de los años. No me gusta cambiar por cambiar. Si algo funciona, no lo toques. Pero como puedes ver, dejaron de ir muchas cosas con las actualizaciones de PHP que me imponía el hosting, y no tenía tiempo de ir cambiando el código. Así que decidí cambiar de tecnología ahora que tengo tiempo. El blog sigue siendo funcional y accesible a través de la URL [https://misapuntesde.com/index.php](https://misapuntesde.com/index.php), pero seguro que muchas cosas no funcionarán como deben.

Las tecnologías que utilicé en la versión anterior fueron: _PHP, MySQL, HTML + CSS, JS,_ [jQuery](https://jquery.com), [prism](https://prismjs.com), [zepto](https://zeptojs.com), [picomodal](https://github.com/Nycto/PicoModal), [php-rss-writer](https://github.com/suin/php-rss-writer), [raintpl](https://github.com/feulf/raintpl3) como motor de templates en _PHP_ y [PHP Markdown](https://michelf.ca/projects/php-markdown/). La razón por la que elegí cada uno no lo sé, tal vez fue la mejor solución que se ajustaba a mis necesidades en ese momento.

Como veis si sois curiosos, algunas de las tecnologías que usaba en la versión anterior, están obsoletas y se han dejado de mantener. Era hora de pasar a algo más moderno. De lo que me siento más orgulloso, es de haber creado en su día un blog propio desde cero en cinco días, sin Frameworks, y que ha funcionado durante 10 años. No es que sea un gran logro, pero me siento orgulloso de ello. :smile:

## Vuepress 2

Aquí es donde entra _Vuepress 2_ en esta la nueva versión del blog, que utiliza _Vue 3 con Markdown_. Puedes usar _Javascript_ o _Typescript_ si lo prefieres. En un principio, me decanté por _Vitepress_, pero no tenía un buen sistema para crear blogs, y lo descarté sobretodo por la paginación, que no tiene cuando escribo estas palabras. Ahí es donde comencé a leer la documentación de _Vuepress 2_ y me convenció. No sé dónde leí la analogía de que _Vuepress_ es como [Laravel](https://laravel.com) y _Vitepress_ como su hermano pequeño [Lumen](https://lumen.laravel.com).

La documentación de Vuepress es muy buena, la comunidad está creciendo y permite crear un blog estático con un diseño moderno en nada de tiempo, que era lo que yo necesitaba. Como no se me da bien el _front-end_, me ha venido de perlas el theme que elegí y que tiene todo y más para lo que necesito: hablo del theme [Hope](https://theme-hope.vuejs.press).

Lo único que me da rabia, es que yo, siendo un desarrollador artesano que me gustaba hacer las cosas casi desde cero, he optado por usar un theme que te lo da prácticamente todo hecho. Pero es lo que necesitaba. No tengo tiempo para ponerme a hacer un diseño desde cero, y quiero centrarme en lo que mejor se me da: escribir y programar.

## TODO

![Trello TODO](/images/2024/02/todo-trello.png "Adoro Trello. ¿Tú no?")

Como veis, no ha sido un camino de rosas. He tenido que hacer un montón de cosas para que el blog esté como lo ves ahora. Y aún me queda mucho por hacer. Algunas de las cosas que tengo pendientes son:

-   Cambiar de hosting. Ahora estoy con _Ionos_ y no cambio porque tengo muchos ficheros que uso en [PiKISS](https://github.com/jmcerrejon/PiKISS/) y tendré que buscarle alojamiento. También quiero experimentar algo con _hostings_ gratuítos para contenido estático, tipo _Netlify_, _Vercel_ o _GitHub Pages_.
-   Añadir comentarios. Me gusta _Discus_ y creo que seguiré con él. He visto un _plug-in_ para _Vuepress_ que lo permite.
-   Contador de visitas. No me gusta, pero me gustaría saber si alguien lee lo que escribo.
-   Etc...

Por supuesto, si te gusta el desarrollo tanto como a mí, os iré comentando en sucesivos artículos lo que he hecho y como voy implementando estas nuevas funcionalidades y mejoras en el blog.

Bueno, ya va siendo hora de que os cuente cómo ha sido el proceso de migración, ¿no?. Pero, espera un momento... este artículo ya es demasiado largo. ¿Os parece bien que dejemos la parte técnica para sucesivos artículos?. Ah, ¿Que no?, ¿Que has venido para conocer todos los enigmas y todo el trabajo?. Pues vas a tener que aguantarte un poquito. :smile:

!Nos leemos en el próximo artículo!. :rocket:
