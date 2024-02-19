---
id: 425
title: uae4all2. ¡Binarios ya disponibles!
author: Jose Cerrejon
icon: pen-to-square
date: 2014-07-02 08:33:32
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# uae4all2: ¡Binarios ya disponibles!

![uae4all2 menu](/images/2014/07/uae4all2.jpg)

Como os comentaba [hace poco](/post.php?id=421), íbamos a tener un nuevo emulador de *Amiga* en escena.

Pues bien, un usuario ya se ha aventurado a compilar el nuevo emulador y por fín tenemos disponible los binarios. ¿Lo probamos?

- - -
Para que os funcione, descomprimid el fichero al final del post y aseguraos de instalar las dependencias necesarias:

```bash
sudo apt-get install -y libsdl1.2debian libsdl-image1.2 libsdl-ttf2.0-0 libguichan-0.8.1-1 libguichan-sdl-0.8.1-1
```

El emulador se ejecuta con **./amiga**. Es recomendable moverse por el menú con las teclas de dirección del teclado por ahora.

Tendréis que conseguir las *ROMs* y copiarlas en la carpeta *kickstarts*. Os recuerdo qué emula cada una:

* kick13.rom = Amiga A500

* kick20.rom = Amiga A500+/A600

* kick31.rom = CD32

Problemas encontrados:

* No cambiar el drivespeed de 1x.

* Config personalizada no funciona aún.

Control del entorno (GUI):

* "esc" resets/loads un disco

* "ctrl" vuelve al juego

* "teclas de dirección/tab/enter" navegar por el menú

En el Juego:

* "ctrl" vuelve al menú

* "alt" cambia entrada (joystick/mouse/stylus?)

* "home/end/pgup/pgdown" para los botones de disparo, etc.

Sólo os toca trastear un poco con las opciones y cargar vuestro juego favorito.

En mis primeras impresiones, la velocidad una vez se empieza a jugar roza la perfección, pero el sonido aún no está conseguido.

Por supuesto, ya tenéis el script para instalarlo automáticamente en [PiKISS](/post.php?id=409), incluyendo la descarga de los ficheros *Kickstar (ROMs)* y de un juego poco conocido llamado...

![Turrican](/images/2014/07/turrican.png)

Enlace: [Foro Raspberry Pi > uae4all2 (Amiga emulator)](http://www.raspberrypi.org/forums/viewtopic.php?f=78&t=80602)

Descarga: [uae4all2-2.3.5.3rpi.tgz](ftp://researchlab.spdns.de/rpi/uae4all2/uae4all2-2.3.5.3rpi.tgz)

Readme: [readme.txt](ftp://researchlab.spdns.de/rpi/uae4all2/readme.txt)
