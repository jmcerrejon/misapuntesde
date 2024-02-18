---
id: 843
title: New OpenMSX 0.14 for Raspbian Stretch (.deb)
author: Jose Cerrejon
icon: pen-to-square
date: 2017-10-22 16:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# New OpenMSX 0.14 for Raspbian Stretch (.deb)

![OpenMSX 0.14](/images/2017/10/openmsx_014.png "OpenMSX 0.14")

I have already mentioned it recently: a new version of the best *MSX* emulator had been released and I had to compile it. This morning *Patrick*, a member of the team, wake me up in the morning to compile it and here we have it for the delight of all of you. I present you the new version of **OpenMSX 0.14, code name Blasphemy**.

- - -
<iframe width="560" height="315" src="https://www.youtube.com/embed/z3vvoXpfbws" frameborder="0" allowfullscreen></iframe>

###  [ What's new ]

![Gamemaster](/images/msx_GameMaster.jpg)

I compiled it for *Raspbian Stretch*. You can find the latest news [here](https://raw.githubusercontent.com/openMSX/openMSX/RELEASE_0_14_0/doc/release-notes.txt). I summarize some of them for you:

* Added new extensions: Konami Ultimate Collection, ASCII Japanese MSX-Write, ASCII Japanese MSX-Write II and Tecall TM220 MSX-RAMFILE

* Performance improvements: reverse feature & hq resampler

* Added script that records to a new AVI file if the framerate changes

* Added OSD button to invoke OSD menu in the top left corner

* Migrated from SDL threads to C++11 threads

* Upgraded C-BIOS to release 0.28

* ...And of course the usual various bug fixes and performance improvements.

I have also updated this script in [PiKISS](https://github.com/jmcerrejon/PiKISS) project, where you can download the binary or compile it in your system by yourself. 

###  [ Installation ]

![aLand](/images/msx_AtleticLand.jpg)

The file *.deb* is available at the end of the article. To install it, run the following:

```bash
sudo dpkg -i openmsx_0.14.0-1_armhf.deb
```

The path of the emulator is */opt/openMSX/*. 

If you are running *Raspbian Lite*, you need to install some extra packages:

```bash
sudo apt install -y libsdl-ttf2.0-0 libtcl8.6 libglew2.0 libtheora0
```

###  [ ROMs ]

![Spec](/images/2014/03/svi-728.jpg)

Below I leave you the *ROMs* needed to emulate the different *MSX* that were on sale. If you're going to run cartridges, you won't need them. You must copy them in *~/.openMSX/share/systemroms*:

```bash
wget -O ~/.openMSX/share/systemroms.zip http://www.msxarchive.nl/pub/msx/emulator/openMSX/systemroms.zip
unzip ~/.openMSX/share/systemroms.zip
```

###  [ Optimize the emulator ]

As soon as you install it and run *OpenMSX*, you'll see that on the *Raspbian's desktop*, the emulator actually crawls and it's a little unplayable. You can download an optimized *.xml* file with the necessary settings to make it work a little better.

```bash
wget -O ~/.openMSX/share/settings.xml https://raw.githubusercontent.com/jmcerrejon/PiKISS/master/res/settings.xml
```

I also recommend some adjustments that you can make from *raspi-config*.

* Advanced Options > A6 GL Driver >  G2 GL (Fake KMS) OpenGL desktop driver with fake KMS

* Advanced Options > Memory Split > 128

This will work perfectly for you. It's actually the first time I've seen it work so well from desktop.

I remind you that with *ALT+ENTER* you can access the full screen. Passing the cursor over the upper left corner of the screen you will access the emulator menu or you can use the *ESC* key. If you have downloaded the *.xml* file above with optimized settings, the key to exit will be *F8* and the menu show us with *F1*.

###  [ Extra ]

![ianna](/images/2017/10/ianna.png)

A few weeks ago, the scene world gave us a new game for *ZXSpectrum 128K* and  *MSX2* called *The Sword of Ianna*. You can find out more info about it at [this](http://theswordofianna.retroworks.es/en/575-2/) link. To run it once downloaded, type *openmsx ianna.rom* and play.

As always, thanks to *Patrick (VampierMSX)* for his invaluable help.

Download: [misapuntesde.com > openmsx_0.14.0-1_armhf.deb](/res/openmsx_0.14.0-1_armhf.deb)

Download ROMs: [msxarchive.nl > systemroms.zip](http://www.msxarchive.nl/pub/msx/emulator/openMSX/systemroms.zip)

Download: [theswordofianna.retroworks.es > ianna-msx2-1_1.zip](http://www.retroworks.es/php/download.php?file=ianna-msx2-1_1.zip)
