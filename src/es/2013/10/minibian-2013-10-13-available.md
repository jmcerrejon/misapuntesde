---
id: 293
title: Disponible Minibian 2013-10-13
description: Disponible Minibian 2013-10-13
author: Jose Cerrejon
icon: pen-to-square
date: 2013-10-16 18:36:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/raspflash.jpg
---

# Disponible Minibian 2013-10-13

![Minibian](/images/raspflash.jpg)

Nueva versión actualizada de la anterior aparecida hace tres meses de la que nos [hicimos eco](/post.php?id=216). Pocos cambios a destacar salvo la actualización al _kernel 3.6.11+ #538_ y las actualizaciones pertienentes de su hermana mayor. Como características a tener en cuenta, yo destacaría:

---

-   Rápido arranque

-   Cabe en una tarjeta SD de 1 Gb

-   Sistema de ficheros ext4 con swap desactivado

-   sshd activado por defecto

-   IPV6

Recordamos que el usuario es **root** y el password **raspberry**. _raspi-config_ no viene instalado por defecto, pero se puede solucionar con _apt-get install raspi-config_

Como apunte personal, esta versión es más rápida que la anterior y nos libra de tener instalado muchos paquetes que apenas usamos ¿Alguien ha dicho entorno de escritorio?

Enlace: [features](https://minibianpi.wordpress.com/features/)

Descarga: [2013-10-13-wheezy-minibian.tar.gz (189 MB)](https://sourceforge.net/projects/minibian/files/2013-10-13-wheezy-minibian.tar.gz/download)
