---
id: 425
title: uae4all2. Binaries available!
description: uae4all2. Binaries available!
author: Jose Cerrejon
icon: pen-to-square
date: 2014-07-02 08:33:32
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# uae4all2: Binaries available!

![uae4all2 menu](/images/2014/07/uae4all2.jpg)

As I said [recently](/post.php?id=421), soon we are going to have a new *Amiga* emulator on scene.

A user already has ventured to compile the new emulator and we have available binaries at last. Shall we try?

- - -
To give work, unzip the file at the end of the post and be sure to install the necessary dependencies: 

```bash
sudo apt-get install -y libsdl1.2debian libsdl-image1.2 libsdl-ttf2.0-0 libguichan-0.8.1-1 libguichan-sdl-0.8.1-1
```

The emulator runs with **./amiga**. It is advisable to move around the menu with the arrow keys on the keyboard for now.

You need to get ROMs and copy it in the *kickstarts* dir. I remember what emulates each:

* kick13.rom = Amiga A500

* kick20.rom = Amiga A500+/A600

* kick31.rom = CD32

Problems about this uae4all2 version:

* No change DriveSpeed 1x.

* Custom Config does not work yet.

Environmental control (GUI):

* "Esc" resets / loads a disk

* "Ctrl" back in the game

* "Arrow keys / tab / enter" menu navigation

In Game:

* "Ctrl" returns to the menu

* "Alt" switch input (joystick / mouse / stylus?)

* "Home / end / pg up / PgDown" for fire buttons, etc..

Of course, you have ready the script in the [PiKISS](/post.php?id=409) project, including kickstart files *(ROMs)* and a game called...

![Turrican](/images/2014/07/turrican.png)

Link: [Raspberry Pi > uae4all2 (Amiga emulator)](http://www.raspberrypi.org/forums/viewtopic.php?f=78&t=80602)

Download: [uae4all2-2.3.5.3rpi.tgz](ftp://researchlab.spdns.de/rpi/uae4all2/uae4all2-2.3.5.3rpi.tgz)

Readme: [readme.txt](ftp://researchlab.spdns.de/rpi/uae4all2/readme.txt)
