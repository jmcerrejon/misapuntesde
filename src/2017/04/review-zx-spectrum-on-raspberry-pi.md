---
id: 788
title: Review. ZX Spectrum on Raspberry Pi
description: Review. ZX Spectrum on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-04-27 09:40:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/spectrum_01.jpg
---

# Review: ZX Spectrum on Raspberry Pi

![Spectrum](/images/spectrum_01.jpg)

Reviewing _Twitter_, I've come across various news about _ZX Spectrum emulation on Raspberry Pi_, so I've wanted to review all the emulators we have available on this fantastic computer from the last century. Are you interested?... Of course!

---

### [ ZEsarUX ]

Supported systems: _ZX80, ZX81, ZX Spectrum, QL, Z88, Timex TS 2068, Sam Coupe, Pentagon 128, Chloe 140 SE, 280 SE, ZX-Uno, Prism, TBBlue/ZX Spectrum Next, Jupiter Ace, Amstrad CPC 464_ and **Sinclair QL**.

Others: Check out the change log [here](https://sourceforge.net/projects/zesarux/files/ZEsarUX-5.0/).

Last version: _5.0._ (21/04/w2017)

To install it, go to the download area of the web (check the link below), unzip the file and type _sudo ./install.sh_. Now you can execute it with _zesarux_. To access the _menu_, press _F5_.

The emulator runs inside a window (you can set full screen, too) and has many options to emulate (not just _Spectrum_). It's not as perfect and smooth as _Unreal Speccy Portable_, but maybe adjusting it will get a better emulation than the default settings.

Link: [sourceforge.net > zesarux](https://sourceforge.net/projects/zesarux/files/ZEsarUX-5.0/)

![Game Over](/images/2017/04/gover.jpg)

### [ Unreal Speccy Portable ]

Supported systems: _Z80 128K (Pentagon) AY/YM_.

Supported formats: _sna, z80, szx, rzx, tap, tzx, csw, trd, scl, fdi, zip_.

Others: _Beeper, Beta Disk, Tape, Kempston Joystick/Mouse, Snapshots, Replays_.

Last version: _0.0.69.1_ (04-09-2016)

It's my favorite _Spectrum_ emulator. It starts full screen and you can already feel that you have a real _Spectrum 128K_ in your hands again. Recommended. Very correct in the emulation and install it in a simple way with the following commands:

```bash
wget https://bitbucket.org/djdron/unrealspeccyp/downloads/unreal-speccy-portable_0.0.69.1_rpi_jessie.zip
unzip unreal* && cd usp*
./unreal_speccy_portable
```

I have to remember that you can install it from the script that I prepared for _PiKISS_ and that you have available in [this link](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/emus/speccy.sh). The Pi version is not the last available, but you can compile it if you want.

Link: [bitbucket.org > unrealspeccyp](https://bitbucket.org/djdron/unrealspeccyp/downloads/)

### [ ZXBaremulator ]

![zxbare](/images/2017/04/zxbare.jpg)

Supported systems: _Z80_.

Features:

-   Support all Raspberry Pi models (A, B, A+, B+, 2, 3, Zero).

-   Includes 55 classic 48K Spectrum games.

-   Precise Z80 emulation (undocumented opcodes, hidden WZ register, bits 3-5 from 'F' register).

-   Precise Spectrum 48k emulation (full border, real-time screen drawing without double buffer, contended memory, floating bus, hi-res color effects).

-   Kempston joystick emulation using a PS3 DualShock gamepad in USB mode (no Bluetooth supported).

-   Accelerated tape loading from virtual TZX tapes (when possible). Original tape loaders are preserved.

-   Beeper emulation using the PI PWM capabilities, present on 3.5mm socket (no HDMI sound, sigh!).

![ZXBare Menu](/images/2017/04/zxbare_menu.jpg)

_ZXBaremulator (a.k.a ZX Mini 35th anniversary edition)_ is the first complete _ZX Spectrum 48K_ bare-metal emulator for the _Raspberry Pi_ computers. This means that you record an image on the _microSD_ and play in a matter of seconds. It is an image of only 3MB and little you can burn with any software or unzip it on a _microSD with FAT32_. This last option is the one that has worked for me.

The system to load the games is a bit special. Once we have the _BASIC_ prompt:

-   Press F1 to access the menu.

-   Choose a game from the list with the function keys.

-   Press F1 again.

-   To write _LOAD ""_, we have to **press J** (_LOAD_), and then _CTRL + P twice_ for double commas.

-   Press ENTER and... get ready to play!

Link: [zxmini.speccy.org](https://zxmini.speccy.org/)

###  [ Fuse - the Free Unix Spectrum Emulator ]

![Fuse on Raspbian](/images/2017/04/fuse_emulator.jpg "Fuse on Raspbian")

Features:

-   Accurate 16K, 48K (including the NTSC variant), 128K, +2, +2A and +3 emulation.

-   Working +3e, SE, TC2048, TC2068, TS2068, Pentagon 128, Pentagon "512" (Pentagon 128 modified for extra memory), Pentagon 1024 and Scorpion ZS 256 emulation.

-   Runs at true Speccy speed on any computer you're likely to try it on.

-   Support for loading from .tzx files, including accelerated loading.

-   Kempston joystick emulation.

-   Emulation of the various printers you could attach to the Spectrum.

-   Support for the RZX input recording file format, including 'competition mode'.

-   Emulation of the Currah μSource, DivIDE, Fuller audio box, Interface 1, Kempston mouse, SpecDrum, Spectrum +3e, ZXATASP and ZXCF interfaces.

-   Emulation of the Beta 128, +D, Didaktik 80/40, DISCiPLE and Opus Discovery interfaces.

-   Emulation of the Spectranet and SpeccyBoot interfaces.

-   Support for the Recreated ZX Spectrum Bluetooth keyboard.

Last version: 1.1.1

[FUSE](https://fuse-emulator.sourceforge.net/) is an alternative that I almost forgot. To install the package, just type:

```bash
sudo apt-get install -y fuse-emulator-common
```

A window with many options will appear. The first thing to do is load the system you need in _Machine > Select... (F9)_. I usually choose _Spectrum 128K_. Now we proceed to load a ROM with _File > Open (F3)_. **We must to write LOAD ""** and press _ENTER_. The emulation is very good, you can make captures, record video, etc.

### [ Closing words ]

In the meantime I'm listening [this music](https://www.youtube.com/watch?v=D-8N1flZw-Y), I've been testing emulator after emulator and I realize how easy it is to enjoy great jewels from the past or even [develop video games](https://www.mojontwins.com/juegos_mojonos/la-churrera-english/) for these platforms with no effort thanks to _The Mojon Twins_. My recommendation remains: **Unreal Speccy Portable**, with which I have been delighted for years. Perfect emulation, full-screen booting and easy-to-access options menu with many options. What's yours?. I read you in the comments.

### [ Bonus ]

Link: [webdiis.unizar.es > Zx Spectrum Games Screenshot Catalog.pdf (13MB)](<https://webdiis.unizar.es/asignaturas/videojuegos/Anexo/Ficheros%20presentacion/!!(Ebook)%20Zx%20Spectrum%20Games%20Screenshot%20Catalog%20(6000%20Color%20Screenshots%20Of%20Sinclair%20Zx%20Spectrum%20Games%20405%20Pages).pdf>)

Link: [worldofspectrum.org](https://www.worldofspectrum.org/)
