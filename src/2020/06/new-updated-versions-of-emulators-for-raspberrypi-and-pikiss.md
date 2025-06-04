---
id: 934
title: New updated versions of emulators for RaspberryPi and PiKISS
description: New updated versions of emulators for RaspberryPi and PiKISS
author: Jose Cerrejon
icon: pen-to-square
date: 2020-06-19 16:46:25
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2020/06/doom_heretic.png
---

# New updated versions of emulators for RaspberryPi and PiKISS

![doom_heretic](/images/2020/06/doom_heretic.png)

**POST UPDATED:** Added *Snes9X, L'Abbaye des Morts, DOSBox-X, mGBA, Mednafen and ScummVM*.

I'm updating now that I have some time several emulators and scripts that are a bit outdated. It's a bit boring looking at all the scripts of the project, but once I have it and it's stable, I hope to increase the compatibility with *Raspberry Pi 4* and add some new ones. By the way, I'm slowly giving it support with [TwisterOS](https://raspbian-x.com/).

- - -
I leave you the links in case you want to try the binaries of some of them. As always, you will be able to run them all without problems, installing dependencies or whatever you need with [PiKISS](https://github.com/jmcerrejon/PiKISS), so you won't be overwhelmed.

###  [ Amstrad ]

![amstrad](/images/2020/06/amstrad.png)

* Download Caprice32 (Amstrad): [caprice32_4-60.tar.gz](/res/caprice32_4-60.tar.gz)

###  [ Doom + Heretic ]

![doom_heretic](/images/2020/06/doom_heretic.png)

* Download Crispy-Doom: [(Dropbox) crispy_5-8.0_armhf.deb](https://www.dropbox.com/s/xampebl70k9ll70/crispy_5-8.0_armhf.deb?dl=0)

* Download Chocolate-Doom: [(Dropbox) chocolate_3-0_armhf.deb](https://www.dropbox.com/s/qxxrx6clyrc0e4n/chocolate_3-0_armhf.deb?dl=0)

###  [ Super Nintendo ]

![snes9x](/images/2020/06/snes9x.png)

* Download Snes9X (Ver. 1.60): [snes9x_1-60.tar.gz](/res/snes9x_1-60.tar.gz)

###  [ DOSBox-X ]

![dosbox](/images/2020/06/dosbox.png)

* Download DOSBox (Ver. 0.82.26): [(Dropbox) dosbox-X_0-82.26.tar.gz](https://www.dropbox.com/s/ltjs2vvbc8u1k05/dosbox-X_0-82.26.tar.gz?dl=0)

###  [ L'Abbaye des Morts ]

![labbaye_cover](/images/2013/05/labbaye_cover.jpg)

L'Abbaye des Morts is a retro puzzle platformer by Locomalito I love. More info [here](/post.php?id=162). You need to install some dependencies:

```bash
sudo apt install -y libsdl2-image-2.0-0 libsdl2-mixer-2.0-0
sudo dpkg -i /tmp/abbaye-des-morts_2-0_armhf.deb
```


* Download L'Abbaye des Morts SDL2 (Ver. 2.0.0): [(Dropbox) abbaye-des-morts_2-0_armhf.deb](https://www.dropbox.com/s/w8iz2q3us5eablk/abbaye-des-morts_2-0_armhf.deb?dl=0)

###  [ mGBA ]

![mgba](/images/2020/06/mgba-logo.png)

```bash
sudo apt install -y libzip4 libglu1-mesa
```

* Download mGBA (Ver. 0.90): [(Dropbox) mgba_0-90.tar.gz](https://www.dropbox.com/s/r7fuex5dtfpi1u4/mgba_0-90.tar.gz?dl=)

###  [ Mednafen ]

![mednafen](/images/2020/06/mednafen.png)

Support:

* Apple II/II+, Atari Lynx, Neo Geo Pocket (Color), WonderSwan.

* GameBoy (Color), GameBoy Advance, Nintendo Entertainment System, Super Nintendo Entertainment System/Super Famicom.

* Virtual Boy, PC Engine/TurboGrafx 16 (CD), SuperGrafx, PC-FX.

* Sega Game Gear, Sega Genesis/Megadrive, Sega Master System.

* Sony PlayStation.

Dependencies:

```bash
sudo apt install -y libsndfile1 libsdl2
```

* Download Mednafen (Ver. 1.24.3): [(Dropbox) mednafen_1-24.3_armhf.deb](https://www.dropbox.com/s/nrkvem2vxjhxt74/mednafen_1-24.3_armhf.deb?dl=0)

###  [ ScummVM ]

![scummvm](/images/2016/05/monkey_island.jpg)

* Download ScummVM (Ver. 2.1.12): [(Dropbox) scummvm_2-1.2_armhf.deb](https://www.dropbox.com/s/edlpjjwintcqb7p/scummvm_2-1.2_armhf.deb?dl=0)