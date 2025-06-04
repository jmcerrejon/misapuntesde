---
id: 81
title: Mostrar la temperatura de tu RasPi
description: Mostrar la temperatura de tu RasPi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-02-25 14:15:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Mostrar la temperatura de tu RasPi

![RasPi](/images/RaspberryPiHot.png)

Acabo de encontrar un script para mostrar la temperatura bajo terminal de tu RasPi. Si te interesa...

- - -

```bash
#!/bin/bash
# Script para mostrar la temperatura de la Raspberry Pi en terminal
# Se pueden ajustar los valores para mostrar colores a diferentes
# temperaturas.
# Por defecto:
#	40 grados o menos -> verde (32)
#	Entre 41 y 54 -> amarillo (33)
#	Superior o igual a 55 -> rojo (31)
# http://belinuxmyfriend.blogspot.com

mgrados='cat /sys/class/thermal/thermal_zone0/temp'
engrados='expr $mgrados / 1000'

if [ $engrados -le 40 ]; then
	echo -e "Temperatura CPU:\033[32m $engrados"
elif [ $engrados -gt 40 ] && [ $engrados -lt 55 ]; then
	echo -e "Temperatura CPU:\033[33m $engrados"
else
	echo -e "Temperatura CPU:\033[31m $engrados"
fi
```
