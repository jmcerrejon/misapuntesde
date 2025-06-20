---
id: 363
title: Raspbian minimal. ¿Cuál es tu elección? (II Parte)
description: Raspbian minimal. ¿Cuál es tu elección? (II Parte)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-02-10 12:05:09
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/02/startrek.jpg
---

# Raspbian minimal: ¿Cuál es tu elección? (II Parte)

![raspberrypi](/images/2014/02/startrek.jpg)

Continuamos explorando nuevas distros, nuevos sabores, hasta alcanzar lugares donde nadie ha podido llegar...

---

Recuerda que ya escribí la primera parte que puedes leer en [este artículo](/post.php?id=349). Ahora es el turno de dos nuevos sistemas operativos muy interesantes: _pipaOS_ and _PiBang Linux_.

###  pipaOS es una distribución _Debian_ basada en _Raspian_ para la _Raspberry Pi_.

**Descarga pipaOS:** [512MB](https://pipaos.mitako.eu/download/pipaos-2.6-tiny500mb.img.gz) | [1GB](https://pipaos.mitako.eu/download/pipaos-2.6-small1gb.img.gz)

**Último fichero actualizado en Mayo, 2014.**

**Login:** _sysop_ | **Password:** _posys_

<a title="Algunos comandos útiles" rel="lightbox" href="/images/2014/02/pipaOS.jpg">
<img width="324" src="/images/2014/02/pipaOS_min.jpg">
</a>

**Info:**

-   Sistema basado en la distro Raspbian ArmHF completamente funcionar

-   Kernel version 3.12.18

-   Tamaño compacto para tarjetas SD de 512MB/1GB

-   Soporte de los dongles usb WIFI más populares

-   Rápido: Pantalla de login en 10 segundos y 20 para la asociación wireless

-   Sincronización de la hora con servidores NTP

-   Sistema personalizado: Conecta la tarjeta SD y edita los ficheros de configuración

-   Administradores pueden hacer chroot desde un sistema Linux, emulador QEMU incluído

-   Tolerancia a fallos: Usa ext4 sin journal

-   Asociación automática de redes inalámbricas abiertas

-   SSH activado: sysop con privilegios de root

-   USB tethering: Conecta un móvil Android/iPhone a través de pipaOS

-   Soporte de tranmisión FM

-   Python 2.7.3

-   Librerías Python GPIO

-   HostAP Listo para convertir tu RaspberryPI en un punto de acceso inalámbrico

-   Viene con dnsmask para obtener un servidor DHCP ligero

**Notas:** Ya escribí un artículo de pipaOS que puedes leer [aquí](/post.php?id=289). Sin entorno de escritorio. _raspistill_ y _raspivid_ listo para usar. Falta _raspi-config_. Es muy rápida. SSH activado por defecto. **RECOMENDADO**.

### PiBang Linux. Openbox Linux distro for the Raspberry Pi

**Descarga:** [sourceforge.net](https://sourceforge.net/projects/pibang/files/?source=navbar)

**Último fichero actualizado:** _pibang-server-systemd-20131119.img.zip (557.9 MB)_

**Login:** Debes crearlo con **raspi-setup**

<a title="PiBang Linux Desktop" rel="lightbox" href="/images/2014/02/pibang.jpg">
<img width="324" src="/images/2014/02/pibang_min.jpg">
</a>

**Info:**

-   No especificada en la web. Lee las notas.

**Notas:** Inspirada en _Crunchbang Linux_. El autor tiene tres versiones: server, openbox e [i3](https://i3wm.org). Hace tiempo que no se actualiza. Usa SystemD. Tiene su propio repositorio independiente y un [foro](https://pibanglinux.org/forums) donde participar.

### Conclusión

Estas cuatro distribuciones son para mí a día de hoy las mejores para conseguir una versión de Raspbian con un mínimo de paquetes disponibles instalados. Como he dicho, me gusta _pipaOS_ porque es la más ligera que he testeado y bastante rápida.

Espero que os haya gustado esta serie de artículos.

Conoces alguna otra distribución minimal para la Raspberry Pi?…
