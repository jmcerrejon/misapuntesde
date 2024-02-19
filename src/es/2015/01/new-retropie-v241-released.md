---
id: 505
title: Nueva versión de RetroPie V2.4.1 disponible
author: Jose Cerrejon
icon: pen-to-square
date: 2015-01-12 10:00:00
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Nueva versión de RetroPie V2.4.1 disponible

![RetroPie](/images/RetroPie_02.jpg)

**POST ACTUALIZADO**

Hacía tiempo que no teníamos noticia de *Petrockblock* y hoy nos presenta una nueva versión en estado beta de la distro por excelencia para jugadores amantes de lo retro. Esta vez nos encontramos con una versión muy recortada de *Raspbian* (comprimida, 610 MB frente a los 1.2 GB de la versión anterior) en el que ha eliminado mucho del software preinstalado. Os pongo a continuación algunas de las características de esta versión...

- - -

* Correción de bugs menores

* Actualizado RetroPie-Setup Script

* Actualizado todos los componentes, por ejemplo, RetroArch soporta ficheros ZIP de forma nativa

* Dispmanx puede ser activado o desactivado en cada emulador individualmente

* El modo de pantalla puede ser configurado de forma individual

* Añadido emulador de Atari Lynx 

* Añadido Darkplaces Quake (experimental)

* Añadido Minecraft-Pi (experimental)

* Añadido emulador OpenMSX (experimental)

* Integración avanzada de ScummVM

* Versión recortada del sistema operativo Raspbian

* Reorganización de los binarios

### [ Comentarios sobre esta versión ]

Lo primero es que se nota la versión de *Raspbian* más optimizada para juegos. El arranque muy rápido y la detección del *Control Pad XBOX360* lo ha hecho sin problema alguno. 

Vemos pocas opciones en el menú:

* PORTS: Doom, Duke Nukem y Quaque 3 (todos sharewares, pero funcionan sin tener que buscarte los .wad)

* Macintosh: No me ha funcionado, tal vez necesite la ROM o BIOS para que funcione.

* IBM: DosBox (Yo hubiera preferido rpix86). Para salir, escribe EXIT y pulsa ENTER.

* Apple II: Pantalla en negro y toca reiniciar la distro. 

* ScummVM (ver 1.7.0, 3 Enero 2015): Perfecto. 

![Carpeta roms con los sitemas soportados](/images/2015/01/retropie_roms.png "Carpeta roms con los sitemas soportados")

Recordemos que para ver los demás emuladores, necesitamos meter a través de *SAMBA* algúna *ROM* dentro de la carpeta */roms*. Yo he probado varias y funcionan todas a la perfección y me han reconocido el joypad sin tener que configurarlo previamente. Recordemos que para salir de cada emulador, debemos pulsar la combinación de teclas **SELECT+START**.

Lo que me ha gustado son los cambios de resolución en cada emulador para aprovechar tu pantalla al máximo.

En general, va progresando a pasos agigantados y creo que se convertirá de facto, en el sistema preferido para muchos jugones.

Enlace: [RetroPie > RetroPie SD-Card Image V2.4.1, BETA (610 MB - 2GB descomprimida)](http://blog.petrockblock.com/download/retropie-sd-card-image-v2-4-small-beta/)