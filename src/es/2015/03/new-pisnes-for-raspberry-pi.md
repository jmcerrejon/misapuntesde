---
id: 535
title: Nuevo PiSNES para Raspberry Pi
description: Nuevo PiSNES para Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2015-03-18 10:30:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2015/03/uwol_capture_01.png
---

# Nuevo PiSNES para Raspberry Pi

![Uwol](/images/2015/03/uwol_capture_01.png)

Ayer tenía un problema con el port de _Descent_ y me puse en contacto con su creador para que lo corrigiera. Afortunadamente ya está solventado y el _port_ funciona muy bien. Como extra, el script que preparé ayer te instala las texturas de alta definición y las pistas de sonido en formato _OGG_.

Aproveché también para actualizar el emulador _PiSNES_ basado en _snes9x_ con una noticia buena, y otra no tan buena...

---

Empezando por la no tan buena, he de decir que por lo menos a mí, no me funciona la última versión en la _Raspberry Pi B_, pero sí en la _Raspberry Pi 2_. Algo curioso ya que la tarjeta SD que uso en ambas placas es la mísma. Ya me he puesto en contacto con su desarrollador _Squid_ para que lo mire.

Lo bueno, es que va de escándalo y un emulador que parecía que no avanzaba, le están añadiendo nuevas mejoras, entre las que se encuentran:

-   Soporte de dos jugadores

-   Compatibilidad con controladores de la _Xbox 360_, entre otros

-   Ahora usa GLES2 en vez de Dispmanx para el postprocesado en la GPU

Ya podéis actualizar _PiKISS_ con **git pull** y disfrutar de esta actualización, o si queréis descargar directamente el port, os dejo el enlace a continuación. Por cierto, el siguiente juego homebrew de regalo dentro del script.

![winking](/css/sm/winking.png)

![Uwol cover](/images/2015/03/Uwol.png)

Descarga: [sourceforge.net/projects/pisnes/](https://sourceforge.net/projects/pisnes/)

Descarga: [PiKISS > Emus > PiSNES](https://github.com/jmcerrejon/PiKISS/raw/0b473e32e4466ecaee58ae28af461d84029b073b/scripts/emus/pisnes.sh)
