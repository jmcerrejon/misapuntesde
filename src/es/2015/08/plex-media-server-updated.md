---
id: 612
title: Nueva versión de Plex Media Server
description: Nueva versión de Plex Media Server
author: Jose Cerrejon
icon: pen-to-square
date: 2015-08-31 12:00:00
prev: /es/
next: false
category:
  - Raspberry PI
  - ODROID
tag:
  - Raspberry PI
  - ODROID
image: /images/2015/08/plex_logo.png
---

# Nueva versión de Plex Media Server

![Plex](/images/2015/08/plex_logo.png)

Es la primera vez que tengo perfectamente ordenado y catalogado mi colección de <del>pelis, series y música</del> vídeos caseros. *Plex* se ha convertido en la solución para ver cómodamente desde cualquier dispositivo de mi casa, el contenido que almaceno con un entorno visual muy impactante y útil. Hace poco se ha actualizado, y estas son sus novedades:

- - -
* Versión 0.9.12.11.1406

* Corregido el agente de medios locales que no se iniciaba correctamente

* Corregido un posible fallo al actualizar las bibliotecas de música premium

* Corregido un problema que causaba remuxing y conversión de audio en algunas plataformas ARMv7 y PPC

Para actualizarlo, ya sea en una *Raspberry Pi* o en una *ODROID*, deberás hacerlo manualmente en caso de usar un sistema *Debian*. Puede valerte los tutoriales de mi compañero de afición *manuti* de [raspberryparatorpes.net](http://raspberryparatorpes.net/instalacion/arreglar-error-plex-server-%C2%9D-server-is-not-powerful-enough/). Para *Arch Linux* tan sólo necesitamos ejecutar: **pacman -Syu**