---
id: 64
title: OpenMSX para Raspberry Pi!
description: OpenMSX para Raspberry Pi!
author: Jose Cerrejon
icon: pen-to-square
date: 2013-01-28 14:40:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/msx_GameMaster.jpg
---

# OpenMSX para Raspberry Pi!

![GameMaster](/images/msx_GameMaster.jpg)

¿A que os gustan las noticias sobre emuladores? A mi me encantan. Luego soy de los que prueban el emulador y a los 2 minutos se aburre. Verdad verdadera.

He tenido varios ordenadores en mi vida, pero al que más cariño le tengo es al _MSX_.

---

Ahora tengo la oportunidad de jugar al _Athletic Land_ en mi RasPI, y esto si que no me lo pierdo.

Según comenta en el [foro](https://www.raspberrypi.org/phpBB3/viewtopic.php?f=78&t=31277) el usuario que se ha decidido a compilarlo, funciona bien con la RasPi a 900 Mhz. Si quieres que vaya mejor, pulsa _F10_ para abrir la consola y escribe "set scanline 0"

La _BIOS_ debe ir en _"/home/pi/.openMSX/share/systemroms/"_, y se recomienda que tengas como mínimo _msx2.rom_ y _ms2ext.rom_

Puedes agregarlo al _EmulationStation_. Añades al fichero _es_systems.cfg_ lo siguiente:

```bash
NAME=MSX/MSX2
PATH=/path/to/roms
EXTENSION=.rom .ROM .mx2 .MX2 .mx1 .MX1
COMMAND=openmsx -cart %ROM%
```

Emulador OpenMSX: [Mediafire](https://www.mediafire.com/?ka48s8kx6ffmn97). Puedes conseguir la nueva versión 0.10 [aquí](/post.php?id=382).

BIOS: [fms.komkon.org](https://fms.komkon.org/fMSX/)

![msx_AtleticLand](/images/msx_AtleticLand.jpg)

Athletic Land: [ROM](https://www.romnation.net/srv/download/rom/26183/msx1/Athletic-Land-1984-Konami-J.html)
