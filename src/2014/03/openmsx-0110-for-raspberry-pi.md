---
id: 382
title: OpenMSX 0.11.0 for Raspberry Pi!
author: Jose Cerrejon
icon: pen-to-square
date: 2014-03-31 00:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# OpenMSX 0.11.0 for Raspberry Pi!

![svi-728](/images/2014/03/svi-728.jpg)

**Updated 05/Oct/16: New 0.13.0 binary [here](/post.php?id=748)!!**

In this post you can get the latest version of the  *OpenMSX* emulator I've compiled for you and if you are a *PRO*, how to compile it by yourself...

- - -
<iframe width="560" height="315" src="//www.youtube.com/embed/A4CcJX2AqvA" frameborder="0" allowfullscreen></iframe>

### [ Compiling... ]

![openmsx](/images/2014/03/compiling_openmsx.jpg)

Now you have a *PiKISS* script to do it automatically: Check [here](https://raw.githubusercontent.com/jmcerrejon/PiKISS/master/scripts/emus/msx.sh)

First download the source code. It can be obtained from Sourceforge website [here](http://downloads.sourceforge.net/openmsx/openmsx-0.10.0.tar.gz). The date of this version is *Nov 8, 2014*. If you want to know the changes, visit [this link](http://sourceforge.net/projects/openmsx/files/openmsx/0.11.0/).

Once uncompressed in a directory, you must resolve dependences. With *Raspbian* for example use the next command:

```bash
sudo apt-get install libsdl1.2-dev libsdl-ttf2.0-dev libglew-dev libao-dev libogg-dev libtheora-dev libxml2-dev libvorbis-dev tcl-dev
```

Arch Linux:
```bash
pacman -Sy libpng libxml2 sdl sdl_image sdl_ttf tcl zlib gcc make python-2
```

We need to install gcc 4.7:

```bash
sudo apt-get install gcc-4.7 g++-4.7
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-4.7 40 --slave /usr/bin/g++ g++ /usr/bin/g++-4.7
```

Then you only need to run the following to compile and install:

```bash
export CXX=g++-4.7
./configure
make
sudo make install
```

### [ Binaries ]

I created a *.deb* package  that you can install and download from the next url:

Direct Download: [openmsx_0-11.0_armhf.deb](/res/openmsx_0-11.0_armhf.deb)

```bash
dpkg -i openmsx_0-11.0_armhf.deb
```

Remember you have to install dependencies: **sudo apt-get install libglew1.7 libtheora0 libao4**

Run a rom file with: **openmsx file.rom**

To uninstall: *sudo dpkg -r openmsx*

It use as bios the *C-Bios* which is royalty-free, but you can use a bios dumped from an original *MSX* as I teach you in this [post](/post.php?id=64).

**Notice:** if you want to emulate real *MSX* systems and not only the free *C-BIOS* machines, put the system *ROMs* in one of the following directories: */opt/openMSX/share/systemroms or ~/.openMSX/share/systemroms*

If you want openMSX to find *MSX* software referred to from replays or savestates you get from your friends, copy that MSX software to */opt/openMSX/share/software or ~/.openMSX/share/software*

### [ Function Keys & OSD Console ]

You can define the Function keys in the *settings.xml* file. The most relevant are:

* [Menu key](http://en.wikipedia.org/wiki/Menu_key): Menu.

* F9: Rewind to load the tape faster.

* F11: OSD Console.

In the *OSD* panel, we can type *help* to list all the available commands, for example *toggle_fps*.

### [ Optimize ]

Best machine to emulate and with the best compatibility are: *Philips NMS 8250 (MSX2, 50 fps), Panasonic FS-A1WSX (MSX2+, 60 fps) o Panasonic FS-A1GT (MSXturboR, 60 fps)*.

The emulator is not scaled, so If you want play with full screen, change the next lines on the */boot/config.txt* file:

```bash
framebuffer_width = 800
framebuffer_height = 600
```

**NOTE:** The next optimizations **are already included** in the 0.11.0 version.

To speed up a little, edit the next file: **nano ~/.openMSX/share/settings.xml**. Add to *settings_ section the next lines hosted on [pastebin.com](http://pastebin.com/uk0T0Gk8)

EXTRA:

![antartic](/images/2014/03/antartic.jpg)

Download: [Antartic Adventures (.rom)](/res/antartic.zip)

Download: [MSX cas files](http://msxcas.webcindario.com)

Links: [issuu.com > openmsx - Setup guide](http://issuu.com/paulovolkova/docs/openmsx_-_setup_guide) | [issuu.com > openmsx - User's_manual](http://issuu.com/paulovolkova/docs/openmsx_-_user_s_manual)

Nostalgic Link: [msxblog.es > Aquellas pantallas de carga](http://www.msxblog.es/aquellas-pantallas-de-carga/)