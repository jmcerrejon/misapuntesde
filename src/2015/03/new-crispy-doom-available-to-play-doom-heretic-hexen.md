---
id: 531
title: New Crispy Doom available to play Doom, Heretic & Hexen
description: New Crispy Doom available to play Doom, Heretic & Hexen
author: Jose Cerrejon
icon: pen-to-square
date: 2015-03-14 08:00:00
prev: /
next: false
category:
  - Raspberry PI
  - ODROID
tag:
  - Raspberry PI
  - ODROID
---

# New Crispy Doom available to play Doom, Heretic & Hexen

![doom_heretic_hexen](/images/2015/03/doom_heretic_hexen.png)

Happy [Pi](http://en.wikipedia.org/wiki/Pi_Day) day!

I spend all week improving my [PiKISS](https://github.com/jmcerrejon/PiKISS) project, and I noticed that the installed version of *Crispy Doom* is quite obsolete. A few days ago, has come a new version and I compile it to update my script, but that's not all...

- - -
![crispy_01](/images/2015/03/crispy_script_01.png)

The time now is 8 in the morning here, I take from 3 awake, and more of a headache it has taken me to improve this script (Only tested on *Raspbian*). Features:

* Install dependencies

* Install the latest version of Crispy Doom 2.3, if not already installed

* You can download the shareware or commercial versions of Doom, Heretic, Hexen and/or Strife

* To play, simply type doom, heretic, hexen or strife or from the Desktop, choose Games and click on the game you want to play.

* Compatible with Raspberry Pi 1,2 & ODROID-C1

Known bugs:

* The Shareware Hexen and Strife versions does not work. I'll try to find another version that works.

* On ODROID, maybe you must to play inside the desktop environment.

![crispy_02](/images/2015/03/crispy_script_02.png)

If you want to install, go to the project on [GitHub](https://github.com/jmcerrejon/PiKISS) or download the .deb file you can find at the end of the post.

Remember if you have problems when run the game on the Pi, it's because you have not installed the patch for *SDL*. You should also run the following:

```bash
wget http://malus.exotica.org.uk/~buzz/pi/sdl/sdl1/deb/rpi1/libsdl1.2debian_1.2.15-8rpi_armhf.deb
sudo dpkg -i libsdl1.2debian_1.2.15-8rpi_armhf.deb
rm libsdl1.2debian_1.2.15-8rpi_armhf.deb
```

Well. It's time to sleep for me...zzZZ

Download Raspberry Pi: [crispy-doom_2.3_armhf.deb](/res/crispy-doom_2.3_armhf.deb)

Download ODROID-C1: [crispy-doom-ODROID_2.3_armhf.deb](/res/crispy-doom-ODROID_2.3_armhf.deb)