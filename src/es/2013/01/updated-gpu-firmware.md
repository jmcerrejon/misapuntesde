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

Archivos: [MJPEG](https://www.dvxuser.com/V6/showthread.php?170183-Untouched-Motion-JPEG-720-30P-Sample) |
[vp8](https://ie.microsoft.com/testdrive/graphics/videoformatsupport/big_buck_bunny_trailer_480p.webm) |
[ogg](https://video.blendertestbuilds.de/download.php?file=download.blender.org/peach/trailer_400p.ogg) | [VP6](https://media.iguane.org/grand-angle/blog/mediafiles/trailer_VP6.flv)
