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
image: /images/2013/08/mac.jpg
---

# Learn to emulate a Macintosh from Raspberry Pi with vMac

![Mini Mac](/images/2013/08/mac.jpg)

Yesterday was the most read news on the Net: _John Leake_ has built a _Macintosh_ scale with patience and has incorporated a Raspi to run under _Raspbian_ a _Macintosh_ emulator called _vMac._

Would you like to run the emulator and see how is it?. Follow me...

---

<iframe width="420" height="315" src="//www.youtube.com/embed/y-x-RseAns8" frameborder="0" allowfullscreen></iframe>

### [Files needed]

First download the emulator and necessary _ROMs_. Calm down, you can find it in this post.

**Download updated January 24rd, 2014**: [Mini vMac 3.3.3 emulator](https://sourceforge.net/projects/minivmac/files/minivmac/3.3.3/minivmac-3.3.3-larm.bin.tgz/download)

Download: [Mediafire > vMac.zip (ROMs)](https://www.mediafire.com/download/mjnozywm5ym/vmac.zip)

### [Installation]

Nothing easier that unzip both files **in the same directory** and rename it from **vmac.rom** to **vMac.ROM**.

```bash
tar -xzvf minivmac-3.3.3-larm.bin.tgz
unzip vmac.zip
mv vmac.rom vMac.ROM
```

Start the X if we are not already and open _LXTerminal_. Now type in the directory where we have all files, the following:

```bash
./Mini vMac
```

### [Install the Operating System]

The first thing that appears is a screen indicating the disk image is missing.

![VMac](/images/2013/08/mac_01.jpg)

We will open the directory where the files is located with the File Explorer _(PCManFM)_ and drag it to the emulator's window the file **hfs20M.DS**.

Now you'll be asking installation disks. Go dragging to the window the files, starting with **Install 1.image**.

Once the process is finished, you will have to restart and here we are.

![VMac running on Raspbian](/images/2013/08/vMac_on_the_Pi.jpg "VMac running on Raspbian")

Links: [retromaccast.ning.com](https://retromaccast.ning.com/profiles/blogs/honey-i-shrunk-the-computer?xg_source=activity) | [cultofmac.com](https://www.cultofmac.com/242234/smallest-working-macintosh/)

Link: [Getting started with Mini vMac 3.2.3](https://minivmac.sourceforge.net/doc/start.html)

Link: [Emulated Hardware Reference](https://minivmac.sourceforge.net/doc/hardware.html)

Link: [Youtube > how to use Mini vMac download+rom](https://www.youtube.com/watch?v=eHR-N1c4MBw)
