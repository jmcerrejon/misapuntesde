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
---

# How to build your own OS with Raspbian Net Install


![rpi](/images/minibian.jpg)

Something that I think is a "must have" on operating systems are modularity. I mean anyone can create one without much knowledge and that you can customize it as you like. On this post we are going to use an unattended installation of *Raspbian* with *armhf* and build a new one according to our needs.

- - -
###  Introduction (skip if you wish) 

Long ago, what I liked most at the time of *Windows 95* was compress the *Windows* folder with *arj*, delete useless files and see if I got more noticeable speed on my *486 DX2/100 Mhz*. When failed or *BSOD* appeared, I extracted the folder and start again.

With *nLite* and other tools, everything was easier with *XP*, but I spent much time and years of my life in this practice.

When I discovered *Linux* thanks to a friend (*Gentoo*), I was fascinated with everything that he could do with *Linux* and I tested many distributions (*Mandrake, Red Hat, Debian, Ubuntu*). It was unbelievable all you could customize, but I wasted long time compiling *software, drivers and kernels*...

Now that I have some years and my time is money, I bought an *iMac* where everything works, to install an application you just have to drag it to a folder and all hardware works perfectly.

And here I am again with the *Raspberry Pi*. Returning to my origins and testing ways to have a distro that suits my needs because I think that there are too many packages installed on *Raspbian*. But it's normal. It is made so that you do not have to fight with anyone or anything.

However, if you're a fighter like me, let's see how to customize a distro *Raspbian* minimal. Perhaps other methods that would be ideal (like [PiLFS](http://www.intestinate.com/pilfs/), maybe I'll try it someday), but the easiest way I've found is with *Raspbian unnatended net installer*, so here we go!...

###  Creating SD image and unattended installation 

The version that we start to use will create a base system, in this case with preset for use as a server, but is valid for any other use, installing the latest packages from *Raspbian* downloaded at the time of filesystem generation.

* Download the next file: [raspbian-ua-netinst-latest.zip](http://hifi.iki.fi/raspbian-ua-netinst/raspbian-ua-netinst-latest.zip)

* Extract the *.zip* content on *SD card* previously formatted with *FAT32*.

* Connect it to your *Raspberry Pi* and the installation begin to partition and install packages.

*NOTE:* You need to configure your static *IP* if you don't have *DHCP* on the router configured. Watch the official documentation at the end of article for details.

The user is **root** and the password **raspbian**

###  Raspbian unnatended net installer

I'd like to highlights some characteristic:

* Completely unattended, you only need working Internet connection through the Ethernet port

* DHCP and static ip configuration (DHCP is the default)

* Always installs the latest version of Raspbian

* Installation takes well under 15 minutes with fast Internet from power on to sshd running

* Fits in 512MB SD card

* Default install includes fake-hwclock and OpenNTPd to save time on shutdown

* /tmp is mounted as tmpfs to improve speed

* No clutter included, you only get the bare essential packages

* Option to install root to USB drive

###  Tuning

After the computer restarts, can do a number of customizations:

* Set new root password: *passwd*

* Configure your default locale: *dpkg-reconfigure locales*

* Configure your timezone: *dpkg-reconfigure tzdata*

Install latest kernel and firmware package:

```bash
apt-get update && apt-get install linux-image-rpi-rpfv raspberrypi-bootloader-nokernel
&& cp /vmlinuz /boot/kernel.img && reboot
```

For improved memory management performance: **apt-get install raspi-copies-and-fills**

Optional: Create a *SWAP* file with

```bash
dd if=/dev/zero of=/swap bs=1M count=512 && mkswap /swap
echo "/swap none swap sw 0 0" > /etc/fstab
```

These steps will increase the consumption of *11 MB RAM* and are not necessary, but recommended.

Remember you can access through *SSH*.

###  Add user

* Now you are *God*, so the best method is become mortal: **adduser pi**, or any name you prefer.

* To view the groups we belong to, run: **cut -d: -f1 /etc/group**. 

* If you want to add your new user to a group: **usermod -aG {group_name} user_name**. Example: *usermod -aG audio,sudo,ssh,video pi*

* To view the groups you belong to: **id user_name** 

###  Install packages

Everyone is free to install the packages you need or think you will need. In my case I usually install the following as pi:

```bash
apt-get update && apt-get install mc unzip nano sudo git build-essential alsa-base
```

To enable the sound module, run after the installation of *alsa-base*, the next: **alsactl init**

###  Back to restore everything 

If for some reason you want to redo ALL the steps, run the following:

```bash
mv /boot/config-reinstall.txt /boot/config.txt && reboot
```

When restarts, it will run unattended installer again. 

###  Final Thoughts

We have seen on another posts the use of *Raspbian minimal* distros and known another alternatives. I definitely think distros like these and better to manage the *Pi* resources and memory. We have also learned or remembered basic tasks such as managing users and groups. Do not hesitate to try it and if you find problems, you can ask in web project hosted on *Github * or here in the comments.

Now you have a script on [PiKISS project](https://github.com/jmcerrejon/PiKISS) to config all the steps without much effort.

Link: [github.com > raspbian-ua-netinst](https://github.com/hifi/raspbian-ua-netinst)
