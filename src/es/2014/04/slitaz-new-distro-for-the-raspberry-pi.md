---
id: 383
title: SliTaz. Nueva distro para tu Raspberry Pi
description: SliTaz. Nueva distro para tu Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-04-01 07:26:49
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/04/slitaz.jpg
---

# SliTaz: Nueva distro para tu Raspberry Pi

![SliTaz](/images/2014/04/slitaz.jpg)

SliTaz se distribuye para la Raspberry Pi como una serie de ficheros cuyo tamaño **no llega a los 100 MB descomprimidos**, proporcionando un sistema rápido, robusto y elegante que trabaja exclusivamente en memoria.

---

Otra de las distribuciones que se pasa a dispositivos _ARM_.

Es un sistema operativo que trabaja en memoria como es el caso de _PiCore_ que ya vimos en artículos recientes [aquí](/post.php?id=361) y [aquí](/post.php?id=362) y que usa un sistema de ficheros initramfs/initrd. Lo increíble es que se cargará todo el sistema en tan sólo **20MB de la RAM disponible**.

Aún tiene una lista de [paquetes soportados](https://arm.slitaz.org/tools.cgi?pkgs) bastante escasa, pero su funcionalidad para ejercer de servidor aprovechando el potencial de la _Raspberry Pi_ es indudable. Incluso puede ser generada con una herramienta propia y obtener un nuevo sabor de frambuesa :P

Necesitarás descomprimir el paquete base y crear en tu _SD_ tres particiones: _boot, swap y root_. Luego ejecuta el _installer_ y se copiarán los ficheros a la tarjeta de almacenamiento.

Aún no he logrado hacerlo funcionar por un problema de permisos, aunque espero hacerlo pronto y ofreceros un análisis más profundo.

Website: [SliTaz](https://arm.slitaz.org/rpi/)

Enlace: [Listado de algunas aplicaciones](https://arm.slitaz.org/codex/apps.html)
