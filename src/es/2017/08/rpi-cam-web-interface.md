---
id: 826
title: RPi Cam Web Interface
author: Jose Cerrejon
icon: pen-to-square
date: 2017-08-24 12:20:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# RPi Cam Web Interface

![surveillance](/images/2017/08/surveilance.jpg)

Muy buen proyecto para los que tengan la *Raspi-Cam* y no quieran quebraderos de cabeza a la hora de mostrarla en una interface web. A mí me ha servido como sistema de vigilancia durante unos días. Tiene muchas opciones para hacer timelapse, motion capture, etc...

Una observación. Para elimiar el led rojo, edita el fichero */boot/config.txt* y añade al final:

```bash
disable_camera_led=1
```

Enlace: [elinux.org](http://elinux.org/RPi-Cam-Web-Interface)

Enlace: [github.com > silvanmelchior/RPi_Cam_Web_Interface](https://github.com/silvanmelchior/RPi_Cam_Web_Interface)

Enlace: [sitepoint.com](https://www.sitepoint.com/streaming-a-raspberry-pi-camera-into-vr-with-javascript/)