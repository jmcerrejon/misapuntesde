---
id: 382
title: OpenMSX 0.11.0 for Raspberry Pi!
description: OpenMSX 0.11.0 for Raspberry Pi!
author: Jose Cerrejon
icon: pen-to-square
date: 2014-03-31 00:00:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/03/svi-728.jpg
---

# OpenMSX 0.11.0 for Raspberry Pi!

![svi-728](/images/2014/03/svi-728.jpg)

**Updated 05/Oct/16: New 0.13.0 binary [here](/post.php?id=748)!!**

In this post you can get the latest version of the _OpenMSX_ emulator I've compiled for you and if you are a _PRO_, how to compile it by yourself...

---

<iframe width="560" height="315" src="//www.youtube.com/embed/A4CcJX2AqvA" frameborder="0" allowfullscreen></iframe>

### [ Compiling... ]

![openmsx](/images/2014/03/compiling_openmsx.jpg)

Now you have a _PiKISS_ script to do it automatically: Check [here](https://raw.githubusercontent.com/jmcerrejon/PiKISS/master/scripts/emus/msx.sh)

First download the source code. It can be obtained from Sourceforge website [here](https://downloads.sourceforge.net/openmsx/openmsx-0.10.0.tar.gz). The date of this version is _Nov 8, 2014_. If you want to know the changes, visit [this link](https://sourceforge.net/projects/openmsx/files/openmsx/0.11.0/).

Once uncompressed in a directory, you must resolve dependences. With _Raspbian_ for example use the next command:

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

I created a _.deb_ package that you can install and download from the next url:

Direct Download: [openmsx_0-11.0_armhf.deb](/res/openmsx_0-11.0_armhf.deb)

```bash
dpkg -i openmsx_0-11.0_armhf.deb
```

Remember you have to install dependencies: **sudo apt-get install libglew1.7 libtheora0 libao4**

Run a rom file with: **openmsx file.rom**

To uninstall: _sudo dpkg -r openmsx_

It use as bios the _C-Bios_ which is royalty-free, but you can use a bios dumped from an original _MSX_ as I teach you in this [post](/post.php?id=64).

**Notice:** if you want to emulate real _MSX_ systems and not only the free _C-BIOS_ machines, put the system _ROMs_ in one of the following directories: _/opt/openMSX/share/systemroms or ~/.openMSX/share/systemroms_

If you want openMSX to find _MSX_ software referred to from replays or savestates you get from your friends, copy that MSX software to _/opt/openMSX/share/software or ~/.openMSX/share/software_

### [ Function Keys & OSD Console ]

You can define the Function keys in the _settings.xml_ file. The most relevant are:

-   [Menu key](https://en.wikipedia.org/wiki/Menu_key): Menu.

-   F9: Rewind to load the tape faster.

-   F11: OSD Console.

In the _OSD_ panel, we can type _help_ to list all the available commands, for example _toggle_fps_.

### [ Optimize ]

Best machine to emulate and with the best compatibility are: _Philips NMS 8250 (MSX2, 50 fps), Panasonic FS-A1WSX (MSX2+, 60 fps) o Panasonic FS-A1GT (MSXturboR, 60 fps)_.

The emulator is not scaled, so If you want play with full screen, change the next lines on the _/boot/config.txt_ file:

```bash
framebuffer_width = 800
framebuffer_height = 600
```

**NOTE:** The next optimizations **are already included** in the 0.11.0 version.

To speed up a little, edit the next file: **nano ~/.openMSX/share/settings.xml**. Add to \*settings\_ section the next lines hosted on [pastebin.com](https://pastebin.com/uk0T0Gk8)

EXTRA:

![antartic](/images/2014/03/antartic.jpg)

Download: [Antartic Adventures (.rom)](/res/antartic.zip)

Download: [MSX cas files](https://msxcas.webcindario.com)

Links: [issuu.com > openmsx - Setup guide](https://issuu.com/paulovolkova/docs/openmsx_-_setup_guide) | [issuu.com > openmsx - User's_manual](https://issuu.com/paulovolkova/docs/openmsx_-_user_s_manual)

Nostalgic Link: [msxblog.es > Aquellas pantallas de carga](https://www.msxblog.es/aquellas-pantallas-de-carga/)
