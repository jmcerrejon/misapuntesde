---
id: 383
title: SliTaz. Nueva distro para tu Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-04-01 07:26:49
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# SliTaz: Nueva distro para tu Raspberry Pi

![SliTaz](/images/2014/04/slitaz.jpg)

SliTaz se distribuye para la Raspberry Pi como una serie de ficheros cuyo tamaño **no llega a los 100 MB descomprimidos**, proporcionando un sistema rápido, robusto y elegante que trabaja exclusivamente en memoria.

- - -
Otra de las distribuciones que se pasa a dispositivos *ARM*. 

Es un sistema operativo que trabaja en memoria como es el caso de *PiCore* que ya vimos en artículos recientes [aquí](/post.php?id=361) y [aquí](/post.php?id=362) y que usa un sistema de ficheros initramfs/initrd. Lo increíble es que se cargará todo el sistema en tan sólo **20MB de la RAM disponible**.

Aún tiene una lista de [paquetes soportados](http://arm.slitaz.org/tools.cgi?pkgs) bastante escasa, pero su funcionalidad para ejercer de servidor aprovechando el potencial de la *Raspberry Pi* es indudable. Incluso puede ser generada con una herramienta propia y obtener un nuevo sabor de frambuesa :P

Necesitarás descomprimir el paquete base y crear en tu *SD* tres particiones: *boot, swap y root*. Luego ejecuta el *installer* y se copiarán los ficheros a la tarjeta de almacenamiento.

Aún no he logrado hacerlo funcionar por un problema de permisos, aunque espero hacerlo pronto y ofreceros un análisis más profundo.

Website: [SliTaz](http://arm.slitaz.org/rpi/)

Enlace: [Listado de algunas aplicaciones](http://arm.slitaz.org/codex/apps.html)
