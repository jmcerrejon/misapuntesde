---
id: 123
title: ¡Publicado rpix86 v0.04!
description: ¡Publicado rpix86 v0.04!
author: Jose Cerrejon
icon: pen-to-square
date: 2013-04-04 10:00:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/rpix86_01.jpg
---

# ¡Publicado rpix86 v0.04!

![rpix86](/images/rpix86_01.jpg)

Ya tenemos una nueva versión de nuestro emulador de _MS-DOS_ favorito.

Me gustaría decirle una cosa a Patrick después de las críticas debido a la supuesta copia de algunas rutinas extraídas de Dosbox...

---

Este blog fue el primero en ponerse en contacto con Patrick y sacar la noticia de que estaba desarrollando _rpix86_. Siempre nos había ilusionado un emulador de MS-DOS tan digno como el que tiene en otras plataformas, y en cada nueva versión siempre hemos proclamado el buen hacer de este chico.

Tal vez no te hayamos generado tantas visitas como otros blogs debido a que este modesto blog es bastante específico y saco las noticias que otros no sacan o lo hacen tarde. Pero seguiremos publicando noticias sobre ella y aportando ideas para que todos podamos rememorar esas viejas glorias del x86.

Bueno, hablemos del emulador. Esta vez las mejoras se han enfocado en:

-   Añadido soporte para el modo de texto 80x50. Es utilizado por algunos de mis programas _MIDI_, y también por el juego _Little Big Adventure_.

-   Añadido soporte para joysticks analógicos (USB y pedales). Como en los viejos tiempos de DOS, hasta 4 botones y 4 canales analógicos son compatibles.

-   Añadida la emulación de _Roland MPU-401 MIDI_ en modo "UART". Todos los comandos MIDI se envían a _/dev/midi1_, así que si tienes un sintetizador general _MIDI_ conectado al RPI utilizando un dongle _USB MIDI_, ahora debería obtener música _MIDI_ adecuado de sus juegos de _DOS._

-   Despojado la información de símbolos de depuración del ejecutable, ha hecho disminuir el tamaño de rpix86 a menos de la mitad de lo que era.

De nuevo, ¡Gracias Patrick!

![smiley](/css/sm/smiling.png)

Descarga: [PiStore](https://store.raspberrypi.com/projects/rpix86) | [rpix86 blog](https://rpix86.patrickaalto.com/rdown.html)

Enlace: [foro](https://www.raspberrypi.org/phpBB3/viewtopic.php?f=78&t=32934)

Enlace: [Lista de apps compatibles dsx86](https://dsx86compatibility.pbworks.com/w/page/26738915/Compatibility%20List)

¡EXTRA!:

<a href="/res/jill-of-the-jungle-the-complete-trilogy.zip">![jill](/images/jill_trilogy.jpg "Descarga y juega Jill Of The Jungle Trilogy!")</a>
