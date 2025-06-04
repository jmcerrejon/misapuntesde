---
id: 481
title: Lakka. Distro para emuladores retro basado en OpenELEC
description: Lakka. Distro para emuladores retro basado en OpenELEC
author: Jose Cerrejon
icon: pen-to-square
date: 2014-11-12 09:00:00
prev: /es/
next: false
category:
  - Raspberry PI
  - Banana Pi
tag:
  - Raspberry PI
  - Banana Pi
image: /images/2014/11/lakka.png
---

# Lakka: Distro para emuladores retro basado en OpenELEC

![Lakka](/images/2014/11/lakka.png)

Tras la fiebre inicial de la noticia sobre una nueva *Raspberry Pi A+*, se me ha ocurrido ya algo para poder usarla: Emuladores.

Curiosamente he encontrado esta distro en foros de la *Banana Pi* y aunque ofrece soporte experimental para ésta, el que tiene para la *Raspberry Pi* es completo y estable. 

¿Pero qué nos ofrece esta distro que no lo hagan ya otras como *RetroPie o PiPlay*?. ¡Vamos a verlo!...

- - -
<iframe width="560" height="315" src="//www.youtube.com/embed/bnJQa1J_v5s" frameborder="0" allowfullscreen></iframe>

Como he mencionado, su autor ha cogido el *core* de *OpenELEC* sin la parte de *Media Center* y ha creado un menú muy elegante para *RetroArch* muy parecido a los de la *PS3* como podéis ver en el vídeo arriba.

Al estar basado en *RetroArch* podremos jugar a emuladores de *NES, SNES, Sega Genesis o PSX* entre otros, pero su desarrollador promete un sistema rápido con las siguientes características:

* Basado en RetroArch y OpenELEC

* Distro en 85 Mb con acceso de sólo lectura

* Sistema de actualización no basado en paquete, sino en todo el sistema de ficheros y Kernel.

* Open source

* Menú amigable

* Rebobinado de partida, hotplug hoypad, video streaming, capturas de pantalla, pausar juegos, guardar partidas,...

Actualmente está depurando el *front-end* y no solo estará disponible para la *Raspberry Pi*, sino que dará soporte a *Banana Pi, Cubix-i o Cubietruck entre otros*.

Si quires puedes probar una estable, pero dispones de las versiones diarias para distintos dispositivos en el enlace que dejo al final del post. 

### [ Log de pruebas iniciales]

* He testeado una versión de desarrollo que puedes descargar [aquí](http://sources.lakka.tv/nightly/Lakka-RPi.arm-devel-20141105152307-r19688-g50ca5b9.img.gz).

* Overclock *High* pero me da que va a funcionar bien sin tocar este parámetro en el *config.txt*

* En el primer arranque, redimensiona la SD para aprovechar la máxima capacidad.

* Tarda unos **13 segundos en arrancar**.

* El menú se mueve con suavidad.

* Viene con *SSH* activado por defecto (root@root).

* Añadido al *config.txt, hdmi_drive=2* para conseguir audio a través del *HDMI*.

* Para copiar las *ROMS* utiliza *Samba*, por lo que tendrás que echar mano de otro equipo en la red. Los he copiado todos sin subdirectorios y se ordenan solos según la extensión de la *ROM* (*.nes* aparece bajo el menú de  *Nintendo*, etc...)

* He conectado un mando cableado de la *XBox-360* y me la ha reconocido sin problemas en apenas **2 segundos**.

* Emuladores probados y funcionando a la perfección: FBA (Cadillac & Dinnosaurs), SNES (Kirby Superstar audio regular pero es uno de los pesos pesados de la *Famicon*, Super Mario Bros perfecto), Genesis (Sonic 3), NES (Super Mario Bros 3).


¡A jugar!

Enlace: [lakka.tv](http://www.lakka.tv/doc/Home/)

Enlace: [GitHub.com > lakkatvyou](https://github.com/lakkatv/Lakka)

FAQ: [GitHub.com > FAQ](https://github.com/lakkatv/Lakka/wiki/FAQ)

Nightly builds: [sources.lakka.tv](http://sources.lakka.tv/nightly/?C=M;O=D)