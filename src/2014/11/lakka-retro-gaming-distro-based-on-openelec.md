---
id: 481
title: Lakka. Retro-gaming distro based on OpenELEC
description: Lakka. Retro-gaming distro based on OpenELEC
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
image: /images/2014/11/lakka.png
---

# Lakka: Retro-gaming distro based on OpenELEC

![Lakka](/images/2014/11/lakka.png)

Interesting this distro found in the _Banana Pi_ forums and although provides experimental support, for _Raspberry Pi_ is complete and quite stable.

But what have this distro that don't offer others like _RetroPie_ or _PiPlay_?. Jump to the post and see!...

---

<iframe width="560" height="315" src="//www.youtube.com/embed/bnJQa1J_v5s" frameborder="0" allowfullscreen></iframe>

As mentioned, the author has taken the _OpenELEC core_, get rid of _Media Center_ features and created an elegant menu like _PS3_ as you can see in the video above.

It's based on _RetroArch_ and we can play emulators like _NES, SNES, Sega Genesis or PSX_ among others, but the developer promises a fast system with the following features:

-   Based on RetroArch and OpenELEC

-   85 Mb Distro with read-only access

-   Update system not based on package, but on the whole file system and kernel.

-   Open source

-   Friendly menu

-   Rewind, hotplug hoypad, video streaming, screenshot, pause games, save states,...

The team is currently debugging the _front-end_ and not just be available for the _Pi_ but will support _Banana Pi, Cubix-i or Cubietruck_ among others.

You can try stable version, but also provided daily versions for different devices on the link leave at the end of the post.

### [ Test Log]

-   I have tested a development version you can download [here](https://sources.lakka.tv/nightly/Lakka-RPi.arm-devel-20141105152307-r19688-g50ca5b9.img.gz).

-   Overclock to _High_ but It will work fine without modidy this parameter in the _config.txt_

-   On first boot, resizing SD to its maximum capacity.

-   It takes about **13 seconds to boot**.

-   The menu run smoothly.

-   Comes with _SSH_ enabled by default (root@root).

-   Added to _config.txt_, _hdmi_drive = 2_ to get audio through the _HDMI_ port.

-   To copy _ROMS_ it uses _Samba_, so you'll have to use another computer on the network. I have copied all without subdirectories and the menu show us sorted by the extension (_.nes_ roms appears below the _Nintendo_ menu, etc...)

-   I connected a wired _XBox-360_ control pad and It recognized in just **2 seconds**.

-   Tested and working perfectly: FBA (Cadillac & Dinnosaurs), SNES (Kirby Superstar with craps sounds but this game is heavyweights. Super Mario Bros work perfectly), Genesis (Sonic 3), NES (Super Mario Bros 3).

Enjoy!

Link: [lakka.tv](https://www.lakka.tv/doc/Home/)

Link: [GitHub.com > lakkatvyou](https://github.com/lakkatv/Lakka)

FAQ: [GitHub.com > FAQ](https://github.com/lakkatv/Lakka/wiki/FAQ)

Nightly builds: [sources.lakka.tv](https://sources.lakka.tv/nightly/?C=M;O=D)
