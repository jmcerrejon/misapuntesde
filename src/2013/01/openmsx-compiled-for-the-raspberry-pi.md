---
id: 64
title: OpenMSX compiled for the Raspberry Pi!
description: OpenMSX compiled for the Raspberry Pi!
author: Jose Cerrejon
icon: pen-to-square
date: 2013-01-28 14:40:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/msx_GameMaster.jpg
---

# OpenMSX compiled for the Raspberry Pi!

![GameMaster](/images/msx_GameMaster.jpg)

Do you like the news about emulators? I love them. Always try the emulator and after 2 minutes I'm bored. True story.

I've had several computers in my life, but my favorite is the _MSX_.

---

Now I have the opportunity to play _Athletic Land_ on my RasPi.

As argument in the [forum](https://www.raspberrypi.org/phpBB3/viewtopic.php?f=78&t=31277) the user who has decided to compile, it works well with the 900 Mhz configuration. If you want better, press _F10_ to open the console and type _"set scanline 0"_

The _BIOS_ should go into _"/home/pi/.openMSX/share/systemroms/"_, and it is recommended that you have at least _msx2.rom_ and _ms2ext.rom_

You can add it to _EmulationStation_. Adding the file _es_systems.cfg_ following:

```bash
NAME=MSX/MSX2
PATH=/path/to/roms
EXTENSION=.rom .ROM .mx2 .MX2 .mx1 .MX1
COMMAND=openmsx -cart %ROM%
```

OpenMSX emulator: [Mediafire](https://www.mediafire.com/?ka48s8kx6ffmn97). You can get the new version 0.10 [here](/post.php?id=382).

BIOS: [fms.komkon.org](https://fms.komkon.org/fMSX/)

![msx_AtleticLand](/images/msx_AtleticLand.jpg)

Athletic Land: [ROM](https://www.romnation.net/srv/download/rom/26183/msx1/Athletic-Land-1984-Konami-J.html)
