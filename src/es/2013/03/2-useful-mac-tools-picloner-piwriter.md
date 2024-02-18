---
id: 99
title: 2 herramientas útiles para Mac. PiCLoner y PiWriter
author: Jose Cerrejon
icon: pen-to-square
date: 2013-03-12 08:30:00
prev: /
next: false
category:
  - Raspberry PI
  - Apple
tag:
  - Raspberry PI
  - Apple
---

# 2 herramientas útiles para Mac: PiCLoner y PiWriter

![pipi](/images/piclonerwriter.jpg)

Os traigo dos aplicaciones en *Mac* para crear una copia de seguridad de vuestra tarjeta SD *(PiCloner)* y otra que actúa como interface para copiar el sistema operativo desde el fichero *.img* a la *SD (PiWriter).*

Y ya que no está de más, os recuerdo la manera correcta de hacer lo mismo que *PiWriter* en la *Termina* de *Mac.*:

```bash

Observa que la N en los comandos pertenece a la tarjeta SD
$ diskutil list
$ sudo diskutil unmountDisk /dev/diskN
$ date +'Comienzo: %H:%M:%S' && sudo dd if=myImage.img bs=1m of=/dev/rdiskN
$ diskutil eject /dev/diskN

```

Enlace: [PiCloner](http://sourceforge.net/projects/picloner/)

Enlace: [PiWriter](http://sourceforge.net/projects/piwriter/)