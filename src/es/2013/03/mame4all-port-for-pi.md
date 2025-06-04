---
id: 92
title: Port del MAME4ALL para la RasPi
description: Port del MAME4ALL para la RasPi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-03-06 13:52:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/mame.jpg
---

# Port del MAME4ALL para la RasPi

![mame4all](/images/mame.jpg)

A veces pienso que lo único que me interesa de la RasPi son los emuladores, pero es que veo el *Frogger* en la *Raspberry* y me entra una nostálgia :_)

- - -
Esta vez tenemos una versión antigua, la v0.37b5, pero los juegos corren al 100% según comenta. Optimizada para la RasPi, utiliza *gráficos dispmanx, dispositivos de entrada con SDL y sonido ALSA.* Funciona en el entorno gráfico y en consola (línea de comandos).

Aún no tiene soporte para Joystick, pero está en ello.

Su desarrollador recomienda la siguiente configuración en el fichero *config.txt* (testeado en un modelo B de 512 MB)

```bash

arm_freq=950
core_freq=350
sdram_freq=500
gpu_mem=64

```

Enlace: [Descarga desde la Pi Store](http://store.raspberrypi.com/projects/mame4all_pi)

Enlace: [Noticias, configuración, información sobre el emula](https://code.google.com/p/mame4all-pi/)

Enlace: [Útil hilo sobre errores con AdvMAME](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=78&t=14645)

Enlace: [ROMS-que-debes-borrar-en-24-horas](http://www.romnation.net)