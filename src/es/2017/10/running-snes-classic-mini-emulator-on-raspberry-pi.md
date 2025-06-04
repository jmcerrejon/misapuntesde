---
id: 840
title: Jugando con el emulador de la SNES Classic Mini en una Raspberry Pi
description: Jugando con el emulador de la SNES Classic Mini en una Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-10-07 05:25:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2017/10/snes_classic.png
---

# Jugando con el emulador de la SNES Classic Mini en una Raspberry Pi

![snes_classic](/images/2017/10/snes_classic.png)

Me lo veía venir. Resulta que el emulador que viene instalado en las famosas consolas *Nintendo y SNES Classic Mini*, **se pueden ejecutar en una Raspberry Pi** debido a que comparten similitudes en su hardware. ¿Tienes una de éstas y quieres saber más?...

- - -
No vas a necesitar mucho para poder dumpear el *kernel* y todo viene explicado en el enlace que pongo al final. Con respecto a tu Raspberry Pi (también podría valer otra placa basada en *ARM*), necesitas el emulador llamado *canoe-shvc* (cuando encuentre el enlace de descarga lo pondré aquí), las *ROMs* de los juegos que tienen extensión *.sfrom* ([aquí](https://gist.github.com/anpage/4834433944a2875ee6d4cbb5786c6bf7) tienes un script en *Python* para convertirlos) e instalar unas cuantas dependencias y comandos, todos desde *Raspbian Stretch*:

```bash
sudo apt install -y libsdl2-dev
sudo ln -s /opt/vc/lib/libbrcmGLESv2.so /usr/lib/libMali.so
sudo ln -s /opt/vc/lib/libbrcmGLESv2.so /usr/lib/libGLESv1_CM.so
```

Ahora editamos el fichero */boot/config.txt* y añadimos:

```bash
hdmi_group=2
hdmi_mode=85
```

Crea un fichero *run.sh* y podrás ejecutar cualquier juego con *./run.sh game.sfrom*:

```bash
#!/bin/bash
fbset -vyres 1440
./canoe-shvc -filter 3 -rom "$1"
fbset -vyres 720
xrefresh
```

Enlace: [board.byuu.org](https://board.byuu.org/viewtopic.php?f=16&t=1823)

Enlace: [github.com > A detailed guide to installing games on the SNES Classic by DNA64.](https://github.com/DNA64/SuperHakchi/)

Enlace: [github.com > Tool that allows you to add more games to your NES/SNES Classic Mini](https://github.com/ClusterM/hakchi2)