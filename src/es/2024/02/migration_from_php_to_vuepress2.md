---
title: Como migré de PHP a Vuepress 2
author: Jose Cerrejon
icon: fa-solid fa-code
date: 2024-02-19
prev: /
next: false
category:
  - Developer
tags:
  - PHP
  - Vuepress
---

# Como migré de PHP a Vuepress 2

![Alt](/images/2024/02/php_vue.jpg "Este es el único uso de IA que vas a ver en este artículo. Generado por DALL-E de OpenAI y modificado posteriormente.")

Han pasado 3 años desde mi último post aquí. He estado ocupado con mi trabajo y otros proyectos. El nuevo enfoque que le quiero dar al blog va a ser un poco diferente. Menos _Raspberry Pi_ (ya os contaré porqué) y más técnico. Ya os iré hablando de ello en los próximos días.

Hoy quiero compartir con vosotros cómo ha sido la experiencia de migrar un blog hecho en _PHP + MySQL_, a uno estático utilizando _Vuepress 2_.

- - -
## Antes y ahora

![Captura de mi blog hace dos días.](/images/misapuntesde_v1.5.png "Captura de mi blog hace dos días.")

Esta no es la primera vez que cambio de diseño. No recuerdo cuando fue la última vez que lo hice, pero sí que fue un cambio radical (tengo que buscar una foto de la primera versión del blog). El cambio en su día lo hice principalmente para ser responsive (¡Cielos, aún las páginas no lo necesitaban tanto!) y poder meter algunos plug-in en _Javascript_ para hacer zoom en las imágenes y resalto de sintaxis en el código fuente que mostraba.

La tecnología en este aspecto no ha cambiado mucho. Seguimos dependiendo de _Javascript_ en el lado cliente y lo usamos más de lo que a muchos haters de este lenguaje les gustaría (_¡JQuery_ ha entrado en Beta con la versión 4!).

(En desarrollo...)
