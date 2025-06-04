---
id: 831
title: Cambiar la dirección MAC de tu Raspberry Pi
description: Cambiar la dirección MAC de tu Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-09-09 13:00:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2017/09/rpi-spoof-mac-address.png
---

# Cambiar la dirección MAC de tu Raspberry Pi

![rpi-spoof-mac-address](/images/2017/09/rpi-spoof-mac-address.png)

Como sabéis, la dirección *MAC (Media Access Control)* es el identificador único de un interface de red. 

En cualquier ordenador personal con *Linux*, puede alterarse de forma temporal con los siguientes comandos:

```bash
# ifconfig eth0 down
# ifconfig eth0 hw ether 02:01:02:03:04:08
# ifconfig eth0 up
```
### ###  Cambiar MAC con el comando ifconfig

He leído en el blog de O'Brien una manera de cambiarlo de forma semi-permanente en tu Raspberry Pi. Basta con que añadas al fichero */boot/cmdline.txt* la siguiente línea al final:

```bash
smsc95xx.macaddr=xx:xx:xx:xx:xx:xx
```

Donde sustituiremos *xx:xx:xx:xx:xx:xx* por la nueva dirección *MAC* que deseemos.

Enlace: [obrienlabs.net > Raspberry Pi – How to spoof MAC address](https://obrienlabs.net/raspberry-pi-spoof-mac-address/)