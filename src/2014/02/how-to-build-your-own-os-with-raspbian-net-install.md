---
id: 364
title: How to build your own OS with Raspbian Net Install
description: How to build your own OS with Raspbian Net Install

author: Jose Cerrejon
icon: pen-to-square
date: 2014-02-12 10:02:50
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/minibian.jpg
---

# How to build your own OS with Raspbian Net Install

![rpi](/images/minibian.jpg)

Something that I think is a "must have" on operating systems are modularity. I mean anyone can create one without much knowledge and that you can customize it as you like. On this post we are going to use an unattended installation of _Raspbian_ with _armhf_ and build a new one according to our needs.

---

### Introduction (skip if you wish)

Long ago, what I liked most at the time of _Windows 95_ was compress the _Windows_ folder with _arj_, delete useless files and see if I got more noticeable speed on my _486 DX2/100 Mhz_. When failed or _BSOD_ appeared, I extracted the folder and start again.

With _nLite_ and other tools, everything was easier with _XP_, but I spent much time and years of my life in this practice.

When I discovered _Linux_ thanks to a friend (_Gentoo_), I was fascinated with everything that he could do with _Linux_ and I tested many distributions (_Mandrake, Red Hat, Debian, Ubuntu_). It was unbelievable all you could customize, but I wasted long time compiling _software, drivers and kernels_...

Now that I have some years and my time is money, I bought an _iMac_ where everything works, to install an application you just have to drag it to a folder and all hardware works perfectly.

And here I am again with the _Raspberry Pi_. Returning to my origins and testing ways to have a distro that suits my needs because I think that there are too many packages installed on _Raspbian_. But it's normal. It is made so that you do not have to fight with anyone or anything.

However, if you're a fighter like me, let's see how to customize a distro _Raspbian_ minimal. Perhaps other methods that would be ideal (like [PiLFS](https://www.intestinate.com/pilfs/), maybe I'll try it someday), but the easiest way I've found is with _Raspbian unnatended net installer_, so here we go!...

### Creating SD image and unattended installation

The version that we start to use will create a base system, in this case with preset for use as a server, but is valid for any other use, installing the latest packages from _Raspbian_ downloaded at the time of filesystem generation.

-   Download the next file: [raspbian-ua-netinst-latest.zip](https://hifi.iki.fi/raspbian-ua-netinst/raspbian-ua-netinst-latest.zip)

-   Extract the _.zip_ content on _SD card_ previously formatted with _FAT32_.

-   Connect it to your _Raspberry Pi_ and the installation begin to partition and install packages.

_NOTE:_ You need to configure your static _IP_ if you don't have _DHCP_ on the router configured. Watch the official documentation at the end of article for details.

The user is **root** and the password **raspbian**

### Raspbian unnatended net installer

I'd like to highlights some characteristic:

-   Completely unattended, you only need working Internet connection through the Ethernet port

-   DHCP and static ip configuration (DHCP is the default)

-   Always installs the latest version of Raspbian

-   Installation takes well under 15 minutes with fast Internet from power on to sshd running

-   Fits in 512MB SD card

-   Default install includes fake-hwclock and OpenNTPd to save time on shutdown

-   /tmp is mounted as tmpfs to improve speed

-   No clutter included, you only get the bare essential packages

-   Option to install root to USB drive

### Tuning

After the computer restarts, can do a number of customizations:

-   Set new root password: _passwd_

-   Configure your default locale: _dpkg-reconfigure locales_

-   Configure your timezone: _dpkg-reconfigure tzdata_

Install latest kernel and firmware package:

```bash
apt-get update && apt-get install linux-image-rpi-rpfv raspberrypi-bootloader-nokernel
&& cp /vmlinuz /boot/kernel.img && reboot
```

For improved memory management performance: **apt-get install raspi-copies-and-fills**

Optional: Create a _SWAP_ file with

```bash
dd if=/dev/zero of=/swap bs=1M count=512 && mkswap /swap
echo "/swap none swap sw 0 0" > /etc/fstab
```

These steps will increase the consumption of _11 MB RAM_ and are not necessary, but recommended.

Remember you can access through _SSH_.

### Add user

-   Now you are _God_, so the best method is become mortal: **adduser pi**, or any name you prefer.

-   To view the groups we belong to, run: **cut -d: -f1 /etc/group**.

-   If you want to add your new user to a group: **usermod -aG {group_name} user_name**. Example: _usermod -aG audio,sudo,ssh,video pi_

-   To view the groups you belong to: **id user_name**

### Install packages

Everyone is free to install the packages you need or think you will need. In my case I usually install the following as pi:

```bash
apt-get update && apt-get install mc unzip nano sudo git build-essential alsa-base
```

To enable the sound module, run after the installation of _alsa-base_, the next: **alsactl init**

### Back to restore everything

If for some reason you want to redo ALL the steps, run the following:

```bash
mv /boot/config-reinstall.txt /boot/config.txt && reboot
```

When restarts, it will run unattended installer again.

### Final Thoughts

We have seen on another posts the use of _Raspbian minimal_ distros and known another alternatives. I definitely think distros like these and better to manage the _Pi_ resources and memory. We have also learned or remembered basic tasks such as managing users and groups. Do not hesitate to try it and if you find problems, you can ask in web project hosted on _Github _ or here in the comments.

Now you have a script on [PiKISS project](https://github.com/jmcerrejon/PiKISS) to config all the steps without much effort.

Link: [github.com > raspbian-ua-netinst](https://github.com/hifi/raspbian-ua-netinst)
