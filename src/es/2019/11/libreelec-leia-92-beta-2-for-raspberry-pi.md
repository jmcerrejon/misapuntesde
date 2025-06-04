---
id: 918
title: LibreELEC (Leia) 9.2 Beta 2 para Raspberry Pi
description: LibreELEC (Leia) 9.2 Beta 2 para Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2019-11-07 13:15:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# LibreELEC (Leia) 9.2 Beta 2 para Raspberry Pi

![Kodi](/images/2019/10/kodi_bios.jpg)

Bueno, hace un par de semanas que apareció y quería comentarla. Le estaba siguiendo la pista debido a un error que impedía jugar al *DOSBox* en la Pi4 y **finalmente lo han resuelto**. Viene con *Kodi v18.4* y se espera que ya mismo aparezca una nueva distro con la versión 18.5.

- - -
Si tienes una *Raspberry 4*, no solo tendrás un buen puñado de mejoras y corrección de bugs, también han añadido una opción para actualizar el firmware, lo cual biene muy bien si no sueles entrar en *Raspbian* para actualizarlo y aprovecharte de las mejoras que se están haciendo sobretodo para bajar la temperatura de la CPU o la decodificación por hardware.

Por cierto, si tienes problemas para que se vea en tu pantalla, modifica el fichero */boot/config.txt* con los siguientes ajustes:

```bash
disable_overscan=1
# Enable audio (loads snd_bcm2835)
dtparam=audio=on
[pi4]
# Enable DRM VC4 V3D driver on top of the dispmanx display stack
dtoverlay=vc4-fkms-v3d
max_framebuffers=2
[all]
hdmi_ignore_edid=0xa5000080
gpu_mem=128
config_hdmi_boost=4
sdtv_disable_colourburst=1
```

Más info: [libreelec.tv](https://libreelec.tv)