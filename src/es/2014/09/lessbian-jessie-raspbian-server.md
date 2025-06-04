---
id: 458
title: Lessbian. Raspbian Jessie para servidores
description: Lessbian. Raspbian Jessie para servidores
author: Jose Cerrejon
icon: pen-to-square
date: 2014-09-22 07:45:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/09/lessbian.png
---

# Lessbian: Raspbian Jessie para servidores

![lessbian](/images/2014/09/lessbian.png)

Todos estamos esperando el salto de Wheezy a Jessie en la rama oficial de Raspbian para obtener así los últimos paquetes de nuestras aplicaciones, tanto para servidor como para uso personal.

Hoy he encontrado este sistema operativo preparado para servidor, pero que puede dar mucho de sí para cualquier tarea...

---

_Lessbian es una distro simplificada de Rasbian con los repositorios de Jessie que contiene el número mínimo de paquetes útiles para crear un Servidor sin complicaciones._

_Esta es una distro especializado para desarrolladores experimentados y expertos en seguridad que quieren un sistema de base de trabajo para configurar de acuerdo a sus necesidades._

_Contiene las últimas versiones de hostapd, dnsmasq, kismet, aircrack-ng, tor, reaver, nmap, etc_

Viene con varios kernels dependiendo de la versión que descargues. Tenemos tres:

-   _lessbian 11/09/2014 Jessie_ **con systemd** y _root_ montada en modo sólo lectura (root password: _raspberry_), tiene partición _XFS_ separada para _/var_.

-   _lessbian 09/16/2014 Jessie_ **sin systemd**, y tiene _/var/spool_ montado en la partición XFS extendida (contraseña de root es _lessbian_). Administración de energía inalámbrica está desactivada por defecto a nivel de kernel.

-   _lessbian-tiny-18/09/2014_: Imagen mínima con _kernel 3.16 y wifi_

Enlace: [sourceforge.net > lessbian](https://sourceforge.net/projects/lessbian/)

Foro: [raspberrypi.org](https://www.raspberrypi.org/forums/viewtopic.php?f=66&t=86844)
