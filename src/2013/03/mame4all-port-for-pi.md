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
---

# MAME4ALL port for Pi

![mame4all](/images/mame.jpg)

Sometimes I think the only thing that interests me from Raspi are emulators. I see *Frogger* in the Pi and the nostalgia come to me :_)

- - -
This time we have an old version (v0.37b5), but games are working at full speed. It's RasPi Optimized and uses *dispmanx graphics, SDL input and ALSA sound.* It works with X-Windows and console.

Still no joystick support, but work on it.

Recommends the following configuration in *config.txt* file (tested on B model, 512 MB)


```bash

arm_freq=950
core_freq=350
sdram_freq=500
gpu_mem=64

```

Link: [Download from Pi Store](http://store.raspberrypi.com/projects/mame4all_pi)

Link: [news, source, additional information](https://code.google.com/p/mame4all-pi/)

Link: [AdvMAME issues, maybe usefull](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=78&t=14645)

Link: [ROMS-you-must-delete-in-24-hours](http://www.romnation.net)