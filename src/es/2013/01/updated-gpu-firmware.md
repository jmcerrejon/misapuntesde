---
id: 62
title: Actualización firmware de la GPU
description: Actualización firmware de la GPU
author: Jose Cerrejon
icon: pen-to-square
date: 2013-01-26 07:30:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/r_pi.jpg
og_image: /images/r_pi.jpg
---

# Actualización firmware de la GPU

![raspi](/images/r_pi.jpg)

La última actualización de firmware ha añadido el fichero _start_x.elf_, que incluye los codecs extra (gratis): MJPEG, VP6, VP8, Ogg Theora, y de audio: Ogg Vorbis. MJPEG también ha sido añadido.

Ojo, aún es experimental, pero te enseño a probarlo.

---

Para usar _start_x.elf_, actualiza con _rpi-update_, y añade al fichero config.txt

```bash
start_file=start_x.elf
fixup_file=fixup_x.elf
```

¿Quieres testearlo ahora?

Archivos: MJPEG |
vp8 |
ogg | VP6
