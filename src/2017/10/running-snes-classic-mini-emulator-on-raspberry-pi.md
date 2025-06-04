---
id: 840
title: Running SNES Classic Mini Emulator on Raspberry Pi
description: Running SNES Classic Mini Emulator on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-10-07 05:25:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2017/10/snes_classic.png
---

# Running SNES Classic Mini Emulator on Raspberry Pi

![snes_classic](/images/2017/10/snes_classic.png)

I could see it coming. The emulator installed on the famous *Nintendo and SNES Classic Mini* consoles **can run on a Raspberry Pi** because they share similarities in their hardware. Do you have one of these and want to know more?...

- - -
You won't need much to dumpe the *kernel* and everything is explained in the link at the end. With respect to your *Raspberry Pi* (could also be worth another board based on *ARM*), you need the emulator called *canoe-shvc* (when I find the download link I'll put it here), *ROMs* of games with extension *.sfrom* ([here](https://gist.github.com/anpage/4834433944a2875ee6d4cbb5786c6bf7) you have a script in *Python* to convert it) and install a few dependencies and commands, all from *Raspbian Stretch*:

```bash
sudo apt install -y libsdl2-dev
sudo ln -s /opt/vc/lib/libbrcmGLESv2.so /usr/lib/libMali.so
sudo ln -s /opt/vc/lib/libbrcmGLESv2.so /usr/lib/libGLESv1_CM.so
```

Edit the file */boot/config.txt* and add:

```bash
hdmi_group=2
hdmi_mode=85
```

Make a file *run.sh* and you can play any game with *./run.sh game.sfrom*:

```bash
#!/bin/bash
fbset -vyres 1440
./canoe-shvc -filter 3 -rom "$1"
fbset -vyres 720
xrefresh
```

Link: [board.byuu.org](https://board.byuu.org/viewtopic.php?f=16&t=1823)

Link: [github.com > A detailed guide to installing games on the SNES Classic by DNA64.](https://github.com/DNA64/SuperHakchi/)

Link: [github.com > Tool that allows you to add more games to your NES/SNES Classic Mini](https://github.com/ClusterM/hakchi2)