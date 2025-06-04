---
id: 249
title: Learn to emulate a Macintosh from Raspberry Pi with vMac
description: Learn to emulate a Macintosh from Raspberry Pi with vMac
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-28 08:45:00
prev: /
next: false
category:
  - Raspberry PI
  - Apple
tag:
  - Raspberry PI
  - Apple
---

# Learn to emulate a Macintosh from Raspberry Pi with vMac

![Mini Mac](/images/2013/08/mac.jpg)

Yesterday was the most read news on the Net: *John Leake* has built a *Macintosh* scale with patience and has incorporated a Raspi to run under *Raspbian* a *Macintosh* emulator called *vMac.*

Would you like to run the emulator and see how is it?. Follow me...

- - -
<iframe width="420" height="315" src="//www.youtube.com/embed/y-x-RseAns8" frameborder="0" allowfullscreen></iframe>

###  [Files needed]

First download the emulator and necessary *ROMs*. Calm down, you can find it in this post.

**Download updated January 24rd, 2014**: [Mini vMac 3.3.3 emulator](http://sourceforge.net/projects/minivmac/files/minivmac/3.3.3/minivmac-3.3.3-larm.bin.tgz/download)

Download: [Mediafire > vMac.zip (ROMs)](http://www.mediafire.com/download/mjnozywm5ym/vmac.zip)

###  [Installation]

Nothing easier that unzip both files **in the same directory** and rename it from **vmac.rom** to **vMac.ROM**.

```bash
tar -xzvf minivmac-3.3.3-larm.bin.tgz
unzip vmac.zip
mv vmac.rom vMac.ROM
```

Start the X if we are not already and open *LXTerminal*. Now type in the directory where we have all files, the following:

```bash
./Mini vMac
```

###  [Install the Operating System]

The first thing that appears is a screen indicating the disk image is missing.

![VMac](/images/2013/08/mac_01.jpg)

We will open the directory where the files is located with the File Explorer *(PCManFM)* and drag it to the emulator's window the file **hfs20M.DS**.

Now you'll be asking installation disks. Go dragging to the window the files, starting with **Install 1.image**.

Once the process is finished, you will have to restart and here we are.

![VMac running on Raspbian](/images/2013/08/vMac_on_the_Pi.jpg "VMac running on Raspbian")

Links: [retromaccast.ning.com](http://retromaccast.ning.com/profiles/blogs/honey-i-shrunk-the-computer?xg_source=activity) | [cultofmac.com](http://www.cultofmac.com/242234/smallest-working-macintosh/)

Link: [Getting started with Mini vMac 3.2.3](http://minivmac.sourceforge.net/doc/start.html)

Link: [Emulated Hardware Reference](http://minivmac.sourceforge.net/doc/hardware.html)

Link: [Youtube > how to use Mini vMac download+rom](http://www.youtube.com/watch?v=eHR-N1c4MBw)