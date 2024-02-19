---
id: 458
title: Lessbian. Raspbian Jessie para servidores
author: Jose Cerrejon
icon: pen-to-square
date: 2014-09-22 07:45:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Lessbian: Raspbian Jessie para servidores

![lessbian](/images/2014/09/lessbian.png)

Todos estamos esperando el salto de Wheezy a Jessie en la rama oficial de Raspbian para obtener así los últimos paquetes de nuestras aplicaciones, tanto para servidor como para uso personal.

Hoy he encontrado este sistema operativo preparado para servidor, pero que puede dar mucho de sí para cualquier tarea...

- - -
*Lessbian es una distro simplificada de Rasbian con los repositorios de Jessie que contiene el número mínimo de paquetes útiles para crear un Servidor sin complicaciones.*

*Esta es una distro especializado para desarrolladores experimentados y expertos en seguridad que quieren un sistema de base de trabajo para configurar de acuerdo a sus necesidades.*

*Contiene las últimas versiones de hostapd, dnsmasq, kismet, aircrack-ng, tor, reaver, nmap, etc*

Viene con varios kernels dependiendo de la versión que descargues. Tenemos tres:

* *lessbian 11/09/2014 Jessie* **con systemd** y *root* montada en modo sólo lectura (root password: *raspberry*), tiene partición *XFS* separada para */var*.

* *lessbian 09/16/2014 Jessie* **sin systemd**, y tiene */var/spool* montado en la partición XFS extendida (contraseña de root es *lessbian*). Administración de energía inalámbrica está desactivada por defecto a nivel de kernel.

* *lessbian-tiny-18/09/2014*: Imagen mínima con *kernel 3.16 y wifi*

Enlace: [sourceforge.net > lessbian](http://sourceforge.net/projects/lessbian/)

Foro: [raspberrypi.org](http://www.raspberrypi.org/forums/viewtopic.php?f=66&t=86844)