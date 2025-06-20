---
id: 527
title: NetBSD y Ubuntu Mate para la Raspberry Pi
description: NetBSD y Ubuntu Mate para la Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2015-03-10 11:10:00
prev: /es/
next: false
category:
    - Raspberry PI
    - ODROID
tag:
    - Raspberry PI
    - ODROID
image: /images/2015/03/ubuntu_mate.png
---

# NetBSD y Ubuntu Mate para la Raspberry Pi

![Ubuntu MATE](/images/2015/03/ubuntu_mate.png)

A la RasPi le crecen los hijos, y ahora que estamos con ARMv7 parece que muchas distribuciones se están pensando hacer un port y no sólo para nuestra placa favorita...

---

En el caso de _NetBSD_, el port viene tanto para la RasPi como para la C1. En el caso de la _Raspberry Pi_, funciona tanto en la 1 como en la 2, aunque no está optimizada para esta última. En [éste enlace](https://nyftp.netbsd.org/pub/NetBSD-daily/netbsd-7/) podrás encontrar las últimas versiones estables. Lo curioso es que han optimizado el sistema operativo para usar la _GPU_ con el soporte a _omxplayer, OpenGL ES, Quake 3 o RetroArch_. Se merece una oportunidad.

Con NetBSD para _ODROID-C1_ es todo más artesano y casi debemos montarnos la imagen por nosotros mismos. Al menos, es un comienzo.

_Ubuntu MATE 15.04 para Raspberry Pi 2_ está basado en la imagen para ARM de _Ubuntu_ (nada de Snappy Core) y aún es una versión muy temprana, aunque los fans de esta distribución verán más avances a lo largo del mes. Espero que pronto le den soporte a la GPU para poder reproducir vídeos.

La comunidad de [CentOS](https://seven.centos.org/2015/03/centos-linux-7-and-arm/) no se queda atrás, y un usuario ya está creando una imagen para la _Pi2_ y _ODROID-C1_ que veremos más pronto que tarde.

NetBSD para Raspberry Pi: [wiki.netbsd.org](https://wiki.netbsd.org/ports/evbarm/raspberry_pi/)

NetBSD para ODROID-C1: [wiki.netbsd.org](https://wiki.netbsd.org/ports/evbarm/odroid-c1/)

Ubuntu MATE 15.04 para Raspberry Pi 2: [ubuntu-mate.community](https://ubuntu-mate.community/t/ubuntu-mate-15-04-for-raspberry-pi-2/517/9)
