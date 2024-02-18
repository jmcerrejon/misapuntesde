---
id: 917
title: Initial Turbo en Raspberry Pi para acelerar tiempos de arranque
author: Jose Cerrejon
icon: pen-to-square
date: 2019-10-30 16:20:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Initial Turbo en Raspberry Pi para acelerar tiempos de arranque

![Rasppi-config](/images/2019/10/raspi-config.png)

Lo leía en una actualización de mi distro favorita *DietPi* y no conocía esta opción.

Resulta que si añades al */boot/config.txt* la siguiente opción:

```bash
initial_turbo=20
```

forzará la *CPU* a una frecuencia más alta en el arranque **durante unos segundos** para mejorar el tiempo que tarda en arrancar. Se puede ajustar en *dietpi-config > Performance Options > ARM Initial Turbo* si lo prefieres.

Te aconsejo leer el siguiente enlace, sobretodo si usas algún tipo de *overclock*.

Más info: [github.com > raspberrypi/firmware](https://github.com/raspberrypi/firmware/issues/1005)