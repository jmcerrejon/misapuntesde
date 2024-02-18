---
id: 64
title: OpenMSX compiled for the Raspberry Pi!
author: Jose Cerrejon
icon: pen-to-square
date: 2013-01-28 14:40:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# OpenMSX compiled for the Raspberry Pi!

![GameMaster](/images/msx_GameMaster.jpg)

Do you like the news about emulators? I love them. Always try the emulator and after 2 minutes I'm bored. True story.

I've had several computers in my life, but my favorite is the *MSX*.

- - -
Now I have the opportunity to play *Athletic Land* on my RasPi.

As argument in the [forum](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=78&t=31277) the user who has decided to compile, it works well with the 900 Mhz configuration. If you want better, press *F10* to open the console and type *"set scanline 0"*

The *BIOS* should go into *"/home/pi/.openMSX/share/systemroms/"*, and it is recommended that you have at least *msx2.rom* and *ms2ext.rom*

You can add it to *EmulationStation*. Adding the file *es_systems.cfg* following:

```bash
NAME=MSX/MSX2
PATH=/path/to/roms
EXTENSION=.rom .ROM .mx2 .MX2 .mx1 .MX1
COMMAND=openmsx -cart %ROM%
```

OpenMSX emulator: [Mediafire](http://www.mediafire.com/?ka48s8kx6ffmn97). You can get the new version 0.10 [here](/post.php?id=382).

BIOS: [fms.komkon.org](http://fms.komkon.org/fMSX/)

![msx_AtleticLand](/images/msx_AtleticLand.jpg)

Athletic Land: [ROM](http://www.romnation.net/srv/download/rom/26183/msx1/Athletic-Land-1984-Konami-J.html)