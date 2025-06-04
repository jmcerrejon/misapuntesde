---
id: 763
title: Review Orange Pi One
description: Review Orange Pi One
author: Jose Cerrejon
icon: pen-to-square
date: 2017-01-31 09:30:00
prev: /
next: false
category:
  - Orange Pi
tag:
  - Orange Pi
image: /images/2017/01/piZeroPiOne.jpg
---

# Review Orange Pi One

![piZeroPiOne](/images/2017/01/piZeroPiOne.jpg)

Hello everyone. I have not been preparing good articles for a long time. Looking for something to write, I have been reading your mails and I found  interesting to write about the plaque that is overshadowing the RPi due its price: the **Orange Pi**. I did not want to prepare an article with *benchmarks* to compare it with another boards (you already have very good articles on the internet). In this article **we'll see just the Pi One** on the battlefield. So I'm going to test some operating systems and I'll write here my impressions and how it works... 

- - -
### [ Orange Pi One ]

I remark the next features:

* CPU H3 Quad-core Cortex-A7 H.265/HEVC 4K.

* GPU Mali400MP2 GPU @600MHz. Supports OpenGL ES 2.0.

* Memory (SDRAM) 512MB DDR3 (shared with GPU).

* Storage: TF card (Max. 64GB) / MMC card slot.

* Network: 10/100M Ethernet RJ45.

* CSI input connector Camera.

* Only One USB 2.0 HOST, one USB 2.0 OTG.

* Power Button(SW4).

* 40 Pins Header,compatible with Raspberry Pi B+.

The first drawback I have seen is the **need for a 5V2A** round port power adapter that is not supplied with the board. I checked the ones I got from the *ODROID* and they are not fit in it. I have read that it's the same connector as the *PSP*. Because you only have one *USB* port, you will need a *HUB* in case you have a wired keyboard, mouse or control pad.

The two most updated distributions are *Ubuntu LXDE Desktop (2016-12-12) and Debian XFCE Desktop (2016-12-12)*. I'm going to download them and... Links are down (What a shame). I download a *Raspbian* image and burn it with [Etcher](https://etcher.io/) (it supports *.img.xz* files and you do not have to unzip it previously). For other images, I think best you can do is to look for them in the [forum](http://www.orangepi.org/orangepibbsen/forum.php).

### [ Raspbian 0.8.0 ]

![Raspbian Desktop environment for the Orange Pi One](/images/2017/01/raspbian_big.png "Raspbian Desktop environment for the Orange Pi One")

* Image: [Raspbian_For_OrangePi_PC_v0_8_0.img.xz](http://www.orangepi.org/downloadresources/orangepipc/oragepipc_e930546e866b23585721e5d2a6.html)

* Size: 857M compressed

* Username: root

* Password: orangepi

* Default SSH enabled: yes

* First boot time: 21 secs.

* Score: 2/5

I liked the boot time, although the partition was not resized the first time. As you can see in the screenshot, the applications that come are typical of a *Raspbian* Destop (with *LXDE*, no *Pixel*). I have tried to open a *png* image and it does so instantaneously (with the browser instead of *Image Viewer* already installed). I have opened the last issue of the magazine *MagPi (26 MB) in pdf* and it takes about 8 seconds to open. The delay in turning the page varies between 3-8 seconds. The only preinstalled media player is the *omxplayer*, but the *ALSA* sound libraries are not configured by default and I could not make it work using *alsamixer*. The *Midori* browser does not reach my expectations as a web browser. Also, if you try to move a window, the decoration disappears and it takes time to refresh the content. Forget about *Youtube*. There is no shutdown button on the desktop or LXDE menu.

Personal opinion: It comes with the minimum essential and it's up to you to set up some libraries (like sound) to be able to listen something at least. Maybe with patience and looking for forums could make it work the most basic functions, but in these days with operating systems well optimized for use as soon as started on this type of plates, I think is a waste of time.

### [ DietPi v142 ]

![DietPi installing some software previously selected](/images/2017/01/dietpi_big.jpg "DietPi installing some software previously selected")

* Image: [DietPi_v142_OrangePiOne-armv7-(Jessie).img](http://dietpi.com/downloads/images/DietPi_OrangePiOne-armv7-(Jessie).7z)

* Size: 71.1MB compressed, 447MB uncompressed

* User: root

* Password: dietpi

* Default SSH enabled: yes

* First boot time: 60 secs.

* Score: 4/5

As many of you know, [DietPi](http://dietpi.com/phpbb/viewtopic.php?f=8&t=5#p5) is ideal for build a server and also lets you install a desktop. It resize the partition so you can use the entire size of your SD card. The problem is that in this case the *GPU* is disabled according to a note when downloading the image, so we can not make use of *KODI* or a desktop environment. I will try to install *MiniDLNA, Plex Media Server, Modipy (Web interface music & radio player), MPD (music player daemon) and a LAMP environment.*

Installing packages is fast in some cases. It has taken between 15-20 minutes.

Personal opinion: If it were not for distros like these, the plates would hardly have a real utility with which to take advantage of them to the maximum. *DietPi* does what it promises, adapting to the hardware as best it can. The limitation in this case is in the *Ethernet at 100 mb/s*, but for a tiny server in your house, we can have the complete security that will be worth without any problem.

### [ RetrOrangePi 3.0.1 ]

![r_orange_pi_01.jpg](/images/2017/01/r_orange_pi_01.jpg)

* Image: [RetrOrangePi-3.0.1.Orangepione.tar.gz](http://www.retrorangepi.org/)

* Size: 1.7 GB compressed, 5.24 GB uncompressed

* User: root

* Password: orangepi

* Default SSH enabled: yes

* Boot time: 40 secs. after first boot.

* Score: 4/5

We are facing a distro based on *Armbian* (*Debian 8*) very complete. It has everything a user like me demands when buying a board: *OpenELEC with Kodi 16.1, Debian Kodi 17.0, RetroPie 4.1* and much more.

**Awesome** is the word I have for the creators of this distro. Just start and configure the input method with *EmulationStation* (keyboard, control pad). Now we can move through the menu and run the emulator or supported ports, which are not few. I randomly tested on *ports* an *Outrun* engine  called *Cannonball*, *Quake and Wolfenstein 3D*. Also from *EmulationStation* we can access to *Kodi 17.0*, which does not mount external hard drives so we have to do it manually. All time we are accompanied by music from the great classics of video games like *Super Mario Bros, Tetris, Zelda*...

<iframe width="400" height="225" src="https://www.youtube.com/embed/whNcQTWwvhg?rel=0" frameborder="0" allowfullscreen></iframe>

### [ OpenELEC r23113 ]

![open_elec.jpg](/images/2017/01/open_elec.jpg)

* Image: [OpenELEC-H3.arm-7.0-devel-20161026221335-r23113-g64b34b3-opione.img.gz](http://down.nu/images/2016-10-26/)

* Size: 128.2MB compressed

* Score: 4/5

We are facing a version not very updated, but that will serve us as an ideal companion when it comes to reproducing the multimedia content of your hard disks or through the network. On the first boot it seems the system is frozen and it takes about 2 minutes to reboot by itself, I suppose to resize the partition. The second time takes about 18 seconds.

Playback with *mkv* files are fast. It plays seamlessly *720p, 1080p 60 fps*, **2K and H265 encoded videos.** It can not play *4K*, but I do not particularly care.

The only drawback is the version of *Kodi* installed *(Jarvis 16.1)*, but for what it costs this board, you have one of the best and cheaper multimedia player in the market.

### [ Final thoughts ]

![testing.jpg](/images/2017/01/testing.jpg)

At the beginning, testing the official distros, my impression was disastrous. I was going to keep it in a drawer when I came up with other unofficial alternatives, and this is where the board earn more points. I think the company should have already worried about having an operating system in conditions, or at least assist in the support of some existing ones. But hey, it does not matter that much if you know where to look.

In short, **I like the Orange Pi One**. For a desktop use, I would still choose the *Raspberry Pi or the ODROID*, but for the price you have, for *Media Center*, small *NAS* or some other emulator, we are ideal. I think I will give it to a friend instead of betting on scarves or vests that will end up changing.

If you want I try a different operating system that is not listed, please tell me in the comments or by [mail](mailto:ulysess@gmail.com).