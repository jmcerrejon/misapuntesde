---
id: 695
title: Movian Media Center
description: Movian Media Center
author: Jose Cerrejon
icon: pen-to-square
date: 2016-04-26 10:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2016/04/Movian.png
---

# Movian Media Center

![Movian](/images/2016/04/Movian.png)


If I said *Media Center*, probably the first thing that comes to your mind is a solution based on *XBMC* ( *OpenELEC, Raspbmc, OSMC*) . The main role we give after all is not to see pictures about the last barbecue, but watching movies or TV Shows stored in our HDs from the network or via streaming Torrent.

Today we'll see an alternative to *XBMC* called **Movian** (also known as *Showtime* in the past).

- - -
<iframe width="400" height="225" src="https://www.youtube.com/embed/_pkqhe66Zqk?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

**Movian** is a media center primarily intended to be used directly on a TV.

It is currently available for *Linux, Mac OS X, Raspberry Pi, Playstation 3, Android and Google Chrome Apps*.

It has available a bunch of plugins to watch *Youtube* videos, TV channels, download subtitles,...

Their **version 5.0** available recently has RPi 3 support, best video decode support and new UI.

To build the latest version on *Ubuntu/Debian*: 

```bash
git clone https://github.com/andoma/movian.git
cd movian
sudo apt-get install -y git-core build-essential autoconf bison flex libelf-dev libtool pkg-config texinfo libncurses5-dev libz-dev python-dev libssl-dev libgmp3-dev ccache zip squashfs-tools
./Autobuild.sh -t rpi
```

You can get the *.sqfs* file [here](https://movian.tv/builds/movian) and overwrite it in the image below.

RPi Download: [sd-2.4.7.img (260 MB)](https://movian.tv/downloads/stos)

Link: [Movian](https://movian.tv/)

Forum: [movian.tv](https://movian.tv/projects/movian/boards)