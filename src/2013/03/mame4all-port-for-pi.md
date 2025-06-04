---
id: 92
title: MAME4ALL port for Pi
description: MAME4ALL port for Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-03-06 13:52:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/mame.jpg
---

# MAME4ALL port for Pi

![mame4all](/images/mame.jpg)

Sometimes I think the only thing that interests me from Raspi are emulators. I see _Frogger_ in the Pi and the nostalgia come to me :\_)

---

This time we have an old version (v0.37b5), but games are working at full speed. It's RasPi Optimized and uses _dispmanx graphics, SDL input and ALSA sound._ It works with X-Windows and console.

Still no joystick support, but work on it.

Recommends the following configuration in _config.txt_ file (tested on B model, 512 MB)

```bash

arm_freq=950
core_freq=350
sdram_freq=500
gpu_mem=64

```

Link: [Download from Pi Store](https://store.raspberrypi.com/projects/mame4all_pi)

Link: [news, source, additional information](https://code.google.com/p/mame4all-pi/)

Link: [AdvMAME issues, maybe usefull](https://www.raspberrypi.org/phpBB3/viewtopic.php?f=78&t=14645)

Link: [ROMS-you-must-delete-in-24-hours](https://www.romnation.net)
