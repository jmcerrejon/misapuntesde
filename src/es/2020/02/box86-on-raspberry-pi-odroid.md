---
id: 921
title: Box86 en Raspberry Pi y ODROID
description: Box86 en Raspberry Pi y ODROID
author: Jose Cerrejon
icon: pen-to-square
date: 2020-02-14 17:23:29
prev: /es/
next: false
category:
  - Raspberry PI
  - ODROID
tag:
  - Raspberry PI
  - ODROID
---

# Box86 en Raspberry Pi y ODROID

![bard_tales_rpi_box86](/images/2020/02/bard_tales_rpi_box86.png)

No me deja de sorprender el canal de nuestro conocido *youtuber* [PI LAB](https://www.youtube.com/channel/UCgfQjdc5RceRlTGfuthBs7g). Lleva presentando hace varios meses vídeos de *Box86*, un entorno basado en *x86* para ejecutar sobretodo videojuegos con la mínima emulación posible. En palabras de su creador, *qemu por ejemplo necesita un chroot x86 completo para ejecutarse, y todo es emulado (por lo que se obtiene una alta compatibilidad genérica, pero hay que emularlo todo, y acceder al hardware puede ser complicado). Con Box86, se emula el mínimo. La compatibilidad puede ser menor, pero muchas cosas se ejecutan de forma nativa, lo que lleva a un cierto aumento de la velocidad. Y no necesitas un chroot completo, solo un puñado de librerías x86 para ejecutar cosas.*

- - -
Este *Usermode X86 Emulator* fue desarrollado principalmente para la consola *Pandora*, pero al estar basada en *ARM*, se ha ampliado su soporte a otras placas como *Orange Pi, ODROID o Raspberry Pi*. El secreto para que vaya tan rápido es que la mayoría de los juegos usan las mismas librerías que en este caso no son emuladas, como *OpenGL* o *SDL*. Digamos que es como el software *Exagear* del que he hablado varias veces pero bastante mas avanzado, y *Open Source*. Os remito al post donde conseguiréis más detalles abajo.

Enlace: Foro: [pyra-handheld.com](https://pyra-handheld.com/boards/threads/box86-linux-userspace-x86-emulator.83577/)

GitHub: [github.com > ptitSeb > box86](https://github.com/ptitSeb/box86)