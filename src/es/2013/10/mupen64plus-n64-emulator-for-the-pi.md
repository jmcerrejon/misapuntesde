---
id: 285
title: Mupen64Plus - Emulador de N64 para la Raspberry Pi
description: Mupen64Plus - Emulador de N64 para la Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-10-04 09:20:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Mupen64Plus - Emulador de N64 para la Raspberry Pi

![Nintendo 64](/images/N64.jpg)

No hace mucho comentábamos la posibilidad de emular la *Nintendo 64* en nuestra *Raspberry Pi*. 

Muchos pensaban que no era posible, pero se comenzó a reescribir el código para que se ejecutara directamenten en la *GPU* gracias a *OpenGL ES 2.0* y ya podemos ver los avances nosotros mismos...

- - -
Tenemos un repositorio en Github con el código fuente del emulador *Mupen64Plus*. Si queréis probarlo antes tendréis que resolver las siguientes dependencias:

```bash
sudo apt-get install libsdl1.2-dev
```

Ahora clonaremos el repositorio con:

```bash
git clone https://github.com/ricrpi/mupen64plus-rpi
```

Entramos en el directorio y ejecutamos **./m64p_build.sh**

Ya con el binario compilado, buscamos una ROM, la metemos en la RasPi y la ejecutamos: **./mupen64plus mario.n64**. Si no tienes ninguna disponible, puede probar una demo que ya viene: **./mupen64plus m64p_test_rom.v64**

Si le interesa los binarios a alguien, puedes acceder a una alpha pulsando [aqui](/post.php?id=297)

Aunque el sonido es entrecortado a 32000 Hz y la velocidad suele oscilar entre 25-50 fps, no deja de impresionar.

Foro: [Raspberrypi.org - Mupen64Plus - N64 Emulator for the Pi](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=78&t=6761)

Ayuda: [raspberrypi.org > WIP: Playable Nintendo 64 Emulator Available](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=78&t=58395)

¡EXTRA!:

<a href="http://www.romnation.net/srv/download/rom/58836/n64/Super-Mario-64.html">![SuperMario 64](/images/2013/10/SuperMario64.jpg "¡Descarga y juega Super Mario 64!")</a>

![mario]()