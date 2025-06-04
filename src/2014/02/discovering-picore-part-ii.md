---
id: 362
title: Discovering Picore (Part II)
description: Discovering Picore (Part II)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-02-07 07:56:20
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Discovering Picore (Part II)

![picore](/images/2014/02/picore_desktop_02_min.jpg)

We continue with interesting aspects of this distribution called *Picore* that we review in the [previous post](/post.php?id=361).

I warn you that it's a distribution that aims to maintain a "fresh" state on every reboot. Basically, the application you are going to use is downloaded and run in *RAM memory* and dissapear at the next reboot. That's the philosophy, but we can install applications maintain it always available. Let's see a bit how the system works and if it's really worth.

- - -
I opted for **piCore-5.2-X** that has a simple desktop environment but ready for any task. I want to thank **bmarkus** which is the main package builder and he offer to us support for *Raspberry Pi* in the [forum](http://forum.tinycorelinux.net/index.php/board,57.0.html). Let's start!...

###  [ Resizing the SD card ]

First thing we'll do is reclaim the entire space of our *SD*. To do it, follow some simple steps in the *Terminal*:

```bash
sudo fdisk /dev/mmcblk0
Press: p, d, n, p, 2, first cylinder of the Linux partition (in my case, 673), w
Reboot
```

You can see the *Terminal* running these commands in the following screenshot

<a title="Resizing the SD card with fdisk" rel="lightbox" href="/images/2014/02/picore_fdisk.jpg">
<img width="324" src="/images/2014/02/picore_fdisk_min.jpg">
</a>

Once we reboot the system, format the partition with:

```bash
sudo resize2fs /dev/mmcblk0p2
```

On this partition we'll have available the **/tce** directory where you can store documents, videos and other files, and applications that you download through the application manager. Two directories that are not volatile on each reboot are **/opt and /home** too.

<a title="/dev/mmcblk0p2 now has 1.7 GB free" rel="lightbox" href="/images/2014/02/picore_diskavailable.jpg">
<img width="324" src="/images/2014/02/picore_diskavailable_min.jpg">
</a>

###  [ What if I plug a flash drive? ]

If you're in X, automatically is mounted the */mnt/sdaX* directory if you have the application *PCManFM* loaded. If not you have the *MountTool* that you can find in the Dock and mount/unmount any drive.

###  [ Now I want to try some apps ]

Before you must know the meaning of several concepts that, although at first seem confusing, it is not when you try.

![Apps](/images/2014/02/picore_Apps.jpg)

When installing an application, we can get from various sources. The principal will be the *Cloud > Browse* option and if you have previously downloaded any app, appear on the option *Load App Locally*. Packages has the extension *.tcz*.

Now let's look at the **four methods** that *Picore* Apps. manager presents to us:

* OnBoot (*tce-load -wi app_name*): The application is loaded into *RAM* memory and will be ready at the next reboot (this is important). Must be included in the **/mnt/mmcblk0p2/tce/onboot.lst** file. If it's not included, add it by yourself. Boot times may be long, since that loads everything found in the file *onboot.lst* into the *RAM*.

* OnDemmand (*tce-load -wo app_name*): Similar to above, but not load any app into *RAM memory* at startup, although is created shortcut menu if the application has the option to do it.
 
* Download + Load (*tce-load -wil app_name*): Download the app and load it into *RAM* at the same sesion. **This is the recommended option**. You have available these apps in the  */tce* directory always.

* Download Only (*tce-load -w app_name*): Just download the application in the */tce* dir. If you want to load, run: **tce-load -i nombre_app**.

Once you have found the application, choose one of the four methods in the bottom left and pressing the "GO" button if you are in X.

<a title="Apps, mc, top & dillo3" rel="lightbox" href="/images/2014/02/picore_desktop_01.jpg">
<img width="324" src="/images/2014/02/picore_desktop_01_min.jpg">
</a>

To load previously downloaded apps, just go to the *Apps > Load App Locally* option, choose the program and press the *Load* button. From the *Terminal*: **tce-load-i app_name**. 

Reviewing the package list, these are some packages that have caught my attention: *aircrack-ng, bluefish, compile-essentials, curl, dillo3 (web browser), dropbear (light SSH server), ffmpeg, filezilla, firmware-atheros, firmware-ralinkwifi, firmware-rtlwifi, gnumeric, node.js,  ruby 1.9 to 2.1 and go (programming languages), gparted, gpicview, grep, gstreamer, gtk 1-2-3, htop, ImageMagic, viewnitor (image viewer), kismet, lame, lftp (ftp/sftp/fxp/http/bittorrent client), LXDE, moc y cmus(music player), mp4v2, mpg123, nano, ncurses, netsurft, nfs-utils, nmap, ntfs-3g, openbox, pcmanfm, python,* **git, python-RPi.GPIO, rpi-videocore (raspivid, raspistill,…), wiringpi, mongoose (simple & functional  web server, more info [here](https://code.google.com/p/mongoose/))**, *samba, SDL*, **SDL2**, *transmission, wget, wireshark, vnc.*

###  [ Conclusion ]

<a title="piCore running Apps, viewnitor & midnight commander" rel="lightbox" href="/images/2014/02/picore_desktop_02.jpg">
<img width="324" src="/images/2014/02/picore_desktop_02_min.jpg">
</a>

Although these are the first steps to understand this operating system, it has many possibilities. You can read the pdf manual [here](http://tinycorelinux.net/~curaga/corebook.pdf). There are many missing packages in the repository and you don't have the possibility to watch videos yet. Hopefully that will come soon.

To fight daily I prefer *Raspbian* sincerely, but for a specific project like home automation control, a small web server, security camera control or connection through the *GPIO* port certainly it has much potential.

Now it's your turn.

Link: [forum.tinycorelinux.net > Static IP over WIFI on RaspberryPI](http://forum.tinycorelinux.net/index.php/topic,16158.msg95805.html#msg95805)

Link: [yalis.fr > Lightweight Windows Network Neighbourhood for TinyCore Linux](http://yalis.fr/cms/index.php/post/2013/05/31/Lightweight-Windows-Network-Neighbourhood-for-TinyCore-Linux)