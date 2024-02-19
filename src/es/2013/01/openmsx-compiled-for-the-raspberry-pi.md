---
id: 64
title: OpenMSX para Raspberry Pi!
author: Jose Cerrejon
icon: pen-to-square
date: 2013-01-28 14:40:00
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# OpenMSX para Raspberry Pi!

![GameMaster](/images/msx_GameMaster.jpg)

¿A que os gustan las noticias sobre emuladores? A mi me encantan. Luego soy de los que prueban el emulador y a los 2 minutos se aburre. Verdad verdadera.

He tenido varios ordenadores en mi vida, pero al que más cariño le tengo es al *MSX*.

- - -
Ahora tengo la oportunidad de jugar al *Athletic Land* en mi RasPI, y esto si que no me lo pierdo.

Según comenta en el [foro](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=78&t=31277) el usuario que se ha decidido a compilarlo, funciona bien con la RasPi a 900 Mhz. Si quieres que vaya mejor, pulsa *F10* para abrir la consola y escribe "set scanline 0"

La *BIOS* debe ir en *"/home/pi/.openMSX/share/systemroms/"*, y se recomienda que tengas como mínimo *msx2.rom* y *ms2ext.rom*

Puedes agregarlo al *EmulationStation*. Añades al fichero *es_systems.cfg* lo siguiente:
```bash
NAME=MSX/MSX2
PATH=/path/to/roms
EXTENSION=.rom .ROM .mx2 .MX2 .mx1 .MX1
COMMAND=openmsx -cart %ROM%
```

Emulador OpenMSX: [Mediafire](http://www.mediafire.com/?ka48s8kx6ffmn97). Puedes conseguir la nueva versión 0.10 [aquí](/post.php?id=382).

BIOS: [fms.komkon.org](http://fms.komkon.org/fMSX/)

![msx_AtleticLand](/images/msx_AtleticLand.jpg)

Athletic Land: [ROM](http://www.romnation.net/srv/download/rom/26183/msx1/Athletic-Land-1984-Konami-J.html)