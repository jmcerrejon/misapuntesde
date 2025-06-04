---
id: 363
title: Raspbian minimal. What's your choice? (Part II)
description: Raspbian minimal. What's your choice? (Part II)

author: Jose Cerrejon
icon: pen-to-square
date: 2014-02-10 12:05:09
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Raspbian minimal: What's your choice? (Part II)


![raspberrypi](/images/2014/02/startrek.jpg)

We continue exploring new distros, new flavors, to boldly go where no operating system has gone before...

- - -
Remember I start to write about some minimal Raspbian based distribution on [this article](/post.php?id=349). Now it's the turn of two new OS very interestings: *pipaOS* and *PiBang Linux*.

###  pipaOS. A Debian Raspian based distribution for the Raspberry Pi board computer.

**Download pipaOS:** [512MB](http://pipaos.mitako.eu/download/pipaos-2.6-tiny500mb.img.gz) | [1GB](http://pipaos.mitako.eu/download/pipaos-2.6-small1gb.img.gz)

**Last file updated on May, 2014.**

**Login:** *sysop* | **Password:** *posys*

<a title="Some useful command to take a look" rel="lightbox" href="/images/2014/02/pipaOS.jpg">
<img width="324" src="/images/2014/02/pipaOS_min.jpg">
</a>

**Info:**

* Fully functional Linux system based on latest Raspbian ArmHF distro

* Runs the official Raspberry PI kernel version 3.12.18

* Compact size dual versions fit in 512MB/1GB cards

* Built-in support for most popular wireless usb dongles

* Fast: login screen in 10 seconds, online wireless association in 20 seconds

* Network time synchronization built-in using public NTP servers.

* System customization support: Just plug the SD-card and edit a text 
configuration file.

* System administrators can chroot into the card from a Linux Intel system, QEMU static emulator included

* Power failure tolerant: Uses ext4 non-journal file system

* Automatic open wireless association builtin: just plug in a usb dongle and get connected

* Secure shell server ready, sysop user with root privileves available to login with password or RSA key

* USB tethering ready: Connect the Android/iPhone phone and get pipaOS networked

* Support for FM radio transmission built-in

* Python 2.7.3 ready

* Python GPIO libraries

* HostAP ready, turn your RaspberryPI into a Wireless Access Point

* Comes with dnsmask so you can turn it into a lightweight DHCP server

**Notes:** I wrote an article about pipaOS that you can read [here](/post.php?id=289). No desktop environment installed. *raspistill* and *raspivid* ready to use. *raspi-config* is missing. Very fast distro. SSH enabled by default. **RECOMMENDED**.

###  PiBang Linux. Openbox Linux distro for the Raspberry Pi

**Direct Download:** [sourceforge.net](http://sourceforge.net/projects/pibang/files/?source=navbar)

**Last file uploaded:** *pibang-server-systemd-20131119.img.zip (557.9 MB)*

**Login:** You must create a user with **raspi-setup**

<a title="PiBang Linux Desktop" rel="lightbox" href="/images/2014/02/pibang.jpg">
<img width="324" src="/images/2014/02/pibang_min.jpg">
</a>

**Info:**

* No specified on its website. Read the notes.

**Notes:** Inspired by *Crunchbang Linux*. The author cover three versions: server, openbox and [i3](http://i3wm.org). Long time that not being updated. Pibang use SystemD. They have their own repository and a [forum](http://pibanglinux.org/forums) to get involve.

###  Conclusion

This 4 presented distros are for me the best option to get a Raspbian minimal with a base system packages. Like I said, I recommend *pipaOS* because it's the lighter distro I've tested and fast. I hope you liked these articles.

Do you know any other minimal OS?...