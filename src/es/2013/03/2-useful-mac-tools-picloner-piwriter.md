---
id: 99
title: 2 herramientas útiles para Mac. PiCLoner y PiWriter
description: 2 herramientas útiles para Mac. PiCLoner y PiWriter
author: Jose Cerrejon
icon: pen-to-square
date: 2013-03-12 08:30:00
prev: /es/
next: false
category:
    - Raspberry PI
    - Apple
tag:
    - Raspberry PI
    - Apple
image: /images/piclonerwriter.jpg
---

# 2 herramientas útiles para Mac: PiCLoner y PiWriter

![pipi](/images/piclonerwriter.jpg)

Os traigo dos aplicaciones en _Mac_ para crear una copia de seguridad de vuestra tarjeta SD _(PiCloner)_ y otra que actúa como interface para copiar el sistema operativo desde el fichero _.img_ a la _SD (PiWriter)._

Y ya que no está de más, os recuerdo la manera correcta de hacer lo mismo que _PiWriter_ en la _Termina_ de _Mac._:

```bash

Observa que la N en los comandos pertenece a la tarjeta SD
$ diskutil list
$ sudo diskutil unmountDisk /dev/diskN
$ date +'Comienzo: %H:%M:%S' && sudo dd if=myImage.img bs=1m of=/dev/rdiskN
$ diskutil eject /dev/diskN

```

Enlace: [PiCloner](https://sourceforge.net/projects/picloner/)

Enlace: [PiWriter](https://sourceforge.net/projects/piwriter/)
