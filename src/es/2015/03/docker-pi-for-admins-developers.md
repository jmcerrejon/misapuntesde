---
id: 528
title: Docker-Pi para admins y developers
description: Docker-Pi para admins y developers
author: Jose Cerrejon
icon: pen-to-square
date: 2015-03-11 09:10:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2015/03/docker-logo.png
---

# Docker-Pi para admins y developers

![Docker Logo](/images/2015/03/docker-logo.png)

Como desarrollador, no me queda otra que estar a la última en cuanto a tecnologías, metodologías y nuevos sistemas que hagan mi día a día más fácil de llevar. Uso _Vagrant_ y quiero cambiar a [Docker](https://www.docker.com/whatisdocker/), que es una de esas tecnologías a las que le quiero prestar más atención. ¿Merece la pena?

---

Para el que no lo conozca, **Vagrant** permiten crearte un entorno virtual separado de tu sistema operativo principal. El objetivo es que todos los desarrolladores de un proyecto trabajen sobre una base y luego no haya problemas al lanzar las releases en el equipo de producción, por ejemplo.

_Vagrant_ usa _VirtualBox_. Con unos cuantos comandos, tienes un **sistema operativo virtualizado y listo para desarrollar**.

**Docker** es más de lo mísmo, pero no necesitas crear un equipo virtual completo. Se vale de un pequeño **engine con un cliente y un servidor**, y comparte el kernel de tu sistema operativo principal, siendo más eficiente.

_Govinda Fichtner_ ha creado un sistema operativo basado en _Raspbian_ para la **Raspberry Pi con Docker 1.5.0 y kernel 3.18.8**, así no tendrás que instalar nada. Tiene soporte para el sistema de archivos _OverlayFS_, que en teoría barre a otras alternativas como _lvm o btrfs_. Las imágenes para prepararte una máquina con _Java, Python o Node.js_ entre otros, deben ser compatibles con _ARM_, pero esto ya lo habían pensado y han creado varios repositorios adaptados a los procesadores _ARM_ que podrás encontrar en [éste](https://registry.hub.docker.com/search?q=hypriot&searchfield=) enlace.

Enlace: [blog.hypriot.com](https://blog.hypriot.com/heavily-armed-after-major-upgrade-raspberry-pi-with-docker-1-dot-5-0)

Imagen en descarga directa (~347MB): [Docker-Pi](https://assets.hypriot.com/hypriot-rpi-20150301-140537.img.zip)
