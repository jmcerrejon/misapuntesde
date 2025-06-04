---
id: 285
title: Mupen64Plus - N64 Emulator for the Pi
description: Mupen64Plus - N64 Emulator for the Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-10-04 09:20:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/N64.jpg
---

# Mupen64Plus - N64 Emulator for the Pi

![Nintendo 64](/images/N64.jpg)

Not long ago we discussed the possibility of emulating the *Nintendo 64* in our *Raspberry Pi*.

Many thought it was not possible, but a user began to rewrite the code to be executed on the *GPU* directly thanks to *OpenGL ES 2.0* and now we can see ourselves the result...

- - -
We have a repository on *Github* with *Mupen64Plus* emulator source code. If you want to try before you will have to solve the following dependencies:

```bash
sudo apt-get install libsdl1.2-dev
```

Now clone the repository with:

```bash
git clone https://github.com/ricrpi/mupen64plus-rpi
```

Enter into the directory and run: **./m64p_build.sh**

With the compiled binary, we search a ROM and put it in the Pi and run: **./mupen64plus /home/pi/mario.n64**. If you haven't got any available, you can try a demo with: **./mupen64plus m64p_test_rom.v64**

If you are interested in binaries, You can access an alpha released [here](/post.php?id=297)

Forum: [Raspberrypi.org - Mupen64Plus - N64 Emulator for the Pi](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=78&t=6761)

Help: [raspberrypi.org > WIP: Playable Nintendo 64 Emulator Available](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=78&t=58395)

**UPDATE**: The sound is choppy at 32000 Hz, and the speed is usually between 25-50 fps. Honestly impressed.

EXTRA!:

<a href="http://www.romnation.net/srv/download/rom/58836/n64/Super-Mario-64.html">![SuperMario 64](/images/2013/10/SuperMario64.jpg "Download and play Super Mario 64!")</a>