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
image: /images/2014/02/picore_desktop_02_min.jpg
---

# Discovering Picore (Part II)

![picore](/images/2014/02/picore_desktop_02_min.jpg)

We continue with interesting aspects of this distribution called _Picore_ that we review in the [previous post](/post.php?id=361).

I warn you that it's a distribution that aims to maintain a "fresh" state on every reboot. Basically, the application you are going to use is downloaded and run in _RAM memory_ and dissapear at the next reboot. That's the philosophy, but we can install applications maintain it always available. Let's see a bit how the system works and if it's really worth.

---

I opted for **piCore-5.2-X** that has a simple desktop environment but ready for any task. I want to thank **bmarkus** which is the main package builder and he offer to us support for _Raspberry Pi_ in the [forum](https://forum.tinycorelinux.net/index.php/board,57.0.html). Let's start!...

### [ Resizing the SD card ]

First thing we'll do is reclaim the entire space of our _SD_. To do it, follow some simple steps in the _Terminal_:

```bash
sudo fdisk /dev/mmcblk0
Press: p, d, n, p, 2, first cylinder of the Linux partition (in my case, 673), w
Reboot
```

You can see the _Terminal_ running these commands in the following screenshot

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

### [ What if I plug a flash drive? ]

If you're in X, automatically is mounted the _/mnt/sdaX_ directory if you have the application _PCManFM_ loaded. If not you have the _MountTool_ that you can find in the Dock and mount/unmount any drive.

### [ Now I want to try some apps ]

Before you must know the meaning of several concepts that, although at first seem confusing, it is not when you try.

![Apps](/images/2014/02/picore_Apps.jpg)

When installing an application, we can get from various sources. The principal will be the _Cloud > Browse_ option and if you have previously downloaded any app, appear on the option _Load App Locally_. Packages has the extension _.tcz_.

Now let's look at the **four methods** that _Picore_ Apps. manager presents to us:

-   OnBoot (_tce-load -wi app_name_): The application is loaded into _RAM_ memory and will be ready at the next reboot (this is important). Must be included in the **/mnt/mmcblk0p2/tce/onboot.lst** file. If it's not included, add it by yourself. Boot times may be long, since that loads everything found in the file _onboot.lst_ into the _RAM_.

-   OnDemmand (_tce-load -wo app_name_): Similar to above, but not load any app into _RAM memory_ at startup, although is created shortcut menu if the application has the option to do it.

-   Download + Load (_tce-load -wil app_name_): Download the app and load it into _RAM_ at the same sesion. **This is the recommended option**. You have available these apps in the _/tce_ directory always.

-   Download Only (_tce-load -w app_name_): Just download the application in the _/tce_ dir. If you want to load, run: **tce-load -i nombre_app**.

Once you have found the application, choose one of the four methods in the bottom left and pressing the "GO" button if you are in X.

<a title="Apps, mc, top & dillo3" rel="lightbox" href="/images/2014/02/picore_desktop_01.jpg">
<img width="324" src="/images/2014/02/picore_desktop_01_min.jpg">
</a>

To load previously downloaded apps, just go to the _Apps > Load App Locally_ option, choose the program and press the _Load_ button. From the _Terminal_: **tce-load-i app_name**.

Reviewing the package list, these are some packages that have caught my attention: _aircrack-ng, bluefish, compile-essentials, curl, dillo3 (web browser), dropbear (light SSH server), ffmpeg, filezilla, firmware-atheros, firmware-ralinkwifi, firmware-rtlwifi, gnumeric, node.js, ruby 1.9 to 2.1 and go (programming languages), gparted, gpicview, grep, gstreamer, gtk 1-2-3, htop, ImageMagic, viewnitor (image viewer), kismet, lame, lftp (ftp/sftp/fxp/http/bittorrent client), LXDE, moc y cmus(music player), mp4v2, mpg123, nano, ncurses, netsurft, nfs-utils, nmap, ntfs-3g, openbox, pcmanfm, python,_ **git, python-RPi.GPIO, rpi-videocore (raspivid, raspistill,…), wiringpi, mongoose (simple & functional web server, more info [here](https://code.google.com/p/mongoose/))**, _samba, SDL_, **SDL2**, _transmission, wget, wireshark, vnc._

### [ Conclusion ]

<a title="piCore running Apps, viewnitor & midnight commander" rel="lightbox" href="/images/2014/02/picore_desktop_02.jpg">
<img width="324" src="/images/2014/02/picore_desktop_02_min.jpg">
</a>

Although these are the first steps to understand this operating system, it has many possibilities. You can read the pdf manual [here](https://tinycorelinux.net/~curaga/corebook.pdf). There are many missing packages in the repository and you don't have the possibility to watch videos yet. Hopefully that will come soon.

To fight daily I prefer _Raspbian_ sincerely, but for a specific project like home automation control, a small web server, security camera control or connection through the _GPIO_ port certainly it has much potential.

Now it's your turn.

Link: [forum.tinycorelinux.net > Static IP over WIFI on RaspberryPI](https://forum.tinycorelinux.net/index.php/topic,16158.msg95805.html#msg95805)

Link: [yalis.fr > Lightweight Windows Network Neighbourhood for TinyCore Linux](https://yalis.fr/cms/index.php/post/2013/05/31/Lightweight-Windows-Network-Neighbourhood-for-TinyCore-Linux)
