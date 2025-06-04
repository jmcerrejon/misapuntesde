---
id: 535
title: New PiSNES for Raspberry Pi
description: New PiSNES for Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2015-03-18 10:30:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2015/03/uwol_capture_01.png
---

# New PiSNES for Raspberry Pi

![Uwol](/images/2015/03/uwol_capture_01.png)

Yesterday I had a problem with the port of _Descent_ and I got in touch with his creator to fix it. Fortunately he solved and the _port_ works great now. As a bonus, the script that I prepared yesterday install the HD textures and sound tracks in _OGG_ format.

I also took the opportunity to update the script with a new _PiSNES_ version based on _snes9x_ with good news, and other not so good...

---

Starting with the not so good, I must say that at least for me, the port does not work in the _Raspberry Pi Model B_, but in the _Raspberry Pi 2_. Something curious because the SD card use in both boards is the same. I have already contacted the developer _Squid_ to fix it.

What good is that works great. The new features are:

-   Support for two players

-   Compatibility with _Xbox 360_ controller, among others

-   Now use GLES2 instead of Dispmanx for post processing on the GPU

You can now update _PiKISS_ with **git pull** and enjoy this update, or if you want to directly download the port, I leave the link below. By the way, I let you next game as a gift inside the script.

![winking](/css/sm/winking.png)

![Uwol cover](/images/2015/03/Uwol.png)

Download: [sourceforge.net/projects/pisnes/](https://sourceforge.net/projects/pisnes/)

Download: [PiKISS > Emus > PiSNES](https://github.com/jmcerrejon/PiKISS/raw/0b473e32e4466ecaee58ae28af461d84029b073b/scripts/emus/pisnes.sh)
