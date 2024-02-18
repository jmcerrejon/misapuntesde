---
id: 442
title: Amiga UAE4ALL 0.3 rc4 emulator for Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-08-14 10:30:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Amiga UAE4ALL 0.3 rc4 emulator for Raspberry Pi

![Amiga 500](/images/Amiga-A500.jpg)

User *Chips* bring to us a new version of the *Amiga* emulator. Details below ...

- - -
Only two dependences:

```bash
sudo apt-get install -y libsdl1.2-dev libsdl-mixer1.2-dev
```

This is the **best Amiga emulator** I've never seen.

New in V0.4:

* Now joystick can be used to go back from emulation mode to menu. If you have a joystick with more than 4 buttons, any button except the four first one will trigger the main menu.

* Now Amiga Vsync is synchronized with Raspberry Pi one. It enables perfectly smooth emulation. Since emulated Amiga is Pal, ensure to set Raspberry Pi to 50Hz display mode otherwise graphics jitter will occurs.

* Since Vsync management is completely rewritten, Auto frame skip is less effective than in previous version. However it looks like enough for Raspberry Pi (especially with cyclone core).

* Improved double buffering: CPU is no more blocked on Vsync waiting.

* Menu can be driven using Joystick.

As always, you can download with the rom and a game from the [PiKISS](https://github.com/jmcerrejon/PiKISS) project.

Forum: [raspberrypi.org > Full speed Amiga emulator ( UAE )](http://www.raspberrypi.org/forums/viewtopic.php?t=17928)