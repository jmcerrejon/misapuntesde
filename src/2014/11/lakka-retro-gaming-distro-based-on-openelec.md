---
id: 481
title: Lakka. Retro-gaming distro based on OpenELEC
author: Jose Cerrejon
icon: pen-to-square
date: 2014-11-12 09:00:00
prev: /
next: false
category:
  - Raspberry PI
  - Banana Pi
tag:
  - Raspberry PI
  - Banana Pi
---

# Lakka: Retro-gaming distro based on OpenELEC

![Lakka](/images/2014/11/lakka.png)

Interesting this distro found in the *Banana Pi* forums and although provides experimental support, for *Raspberry Pi* is complete and quite stable.

But what have this distro that don't offer others like *RetroPie* or *PiPlay*?. Jump to the post and see!...

- - -
<iframe width="560" height="315" src="//www.youtube.com/embed/bnJQa1J_v5s" frameborder="0" allowfullscreen></iframe>

As mentioned, the author has taken the *OpenELEC core*, get rid of *Media Center* features and created an elegant menu like *PS3* as you can see in the video above.

It's based on *RetroArch* and we can play emulators like *NES, SNES, Sega Genesis or PSX* among others, but the developer promises a fast system with the following features:

* Based on RetroArch and OpenELEC

* 85 Mb Distro with read-only access

* Update system not based on package, but on the whole file system and kernel.

* Open source

* Friendly menu

* Rewind, hotplug hoypad, video streaming, screenshot, pause games, save states,...

The team is currently debugging the *front-end* and not just be available for the *Pi* but will support *Banana Pi, Cubix-i or Cubietruck* among others.

You can try stable version, but also provided daily versions for different devices on the link leave at the end of the post.

### [ Test Log]

* I have tested a development version you can download [here](http://sources.lakka.tv/nightly/Lakka-RPi.arm-devel-20141105152307-r19688-g50ca5b9.img.gz).

* Overclock to *High* but It will work fine without modidy this parameter in the *config.txt*

* On first boot, resizing SD to its maximum capacity.

* It takes about **13 seconds to boot**.

* The menu run smoothly.

* Comes with *SSH* enabled by default (root@root).

* Added to *config.txt*, *hdmi_drive = 2* to get audio through the *HDMI* port.

* To copy *ROMS* it uses *Samba*, so you'll have to use another computer on the network. I have copied all without subdirectories and the menu show us sorted by the extension (*.nes* roms appears below the *Nintendo* menu, etc...)

* I connected a wired *XBox-360* control pad and It recognized in just **2 seconds**.

* Tested and working perfectly: FBA (Cadillac & Dinnosaurs), SNES (Kirby Superstar with craps sounds but this game is heavyweights. Super Mario Bros work perfectly), Genesis (Sonic 3), NES (Super Mario Bros 3).

Enjoy!

Link: [lakka.tv](http://www.lakka.tv/doc/Home/)

Link: [GitHub.com > lakkatvyou](https://github.com/lakkatv/Lakka)

FAQ: [GitHub.com > FAQ](https://github.com/lakkatv/Lakka/wiki/FAQ)

Nightly builds: [sources.lakka.tv](http://sources.lakka.tv/nightly/?C=M;O=D)