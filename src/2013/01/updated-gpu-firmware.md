---
id: 62
title: Updated GPU firmware
description: Updated GPU firmware
author: Jose Cerrejon
icon: pen-to-square
date: 2013-01-26 07:30:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/r_pi.jpg
---

# Updated GPU firmware

![raspi](/images/r_pi.jpg)

Latest firmware has added a _start_x.elf_ which includes extra (free) codecs: _MJPEG, VP6, VP8, Ogg Theora_, and audio codec: _Ogg Vorbis_. _MJPEG_ has also been added.

Note, this is experimental. I'll teach you to test it.

---

To use the _start_x.elf_, you should run rpi-update as usual, and add this to _config.txt_

```bash
start_file=start_x.elf
fixup_file=fixup_x.elf
```

Wanna test it now?

Files: [MJPEG](https://www.dvxuser.com/V6/showthread.php?170183-Untouched-Motion-JPEG-720-30P-Sample) |
[vp8](https://ie.microsoft.com/testdrive/graphics/videoformatsupport/big_buck_bunny_trailer_480p.webm) |
[ogg](https://video.blendertestbuilds.de/download.php?file=download.blender.org/peach/trailer_400p.ogg) | [VP6](https://media.iguane.org/grand-angle/blog/mediafiles/trailer_VP6.flv)
