---
id: 458
title: Lessbian. Jessie Raspbian server
author: Jose Cerrejon
icon: pen-to-square
date: 2014-09-22 07:45:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Lessbian: Jessie Raspbian server

![lessbian](/images/2014/09/lessbian.png)

We are all waiting to jump from *Wheezy* to *Jessie* on *Raspbian*  to obtain the latest packages of our applications for both server and personal use.

Today I found this ready server operating system wich you can use for any task...

- - -
*Lessbian is a stripped down Jessie Rasbian containing minimal number of useful packages to create a headless WiFi server.*

*This is a specialized distro intended for experienced developers and security experts who want a working base system to configure according to their needs.*

*Latest versions of hostapd, dnsmasq, kismet, aircrack-ng, tor, reaver, nmap etc. are bundled*

We have three versions to download:

* lessbian-2014.09.11 Jessie with systemd and root mounted ro (root password raspberry), has separate XFS partition for /var

* lessbian-2014.09.16 Jessie without systemd, and has /var/spool mounted in extended XFS partition (root password is lessbian). Wireless power management 
is off by default at kernel level.

* lessbian-tiny-2014.09.18: absolute minimal image with kernel 3.16 and wifi support

Link: [sourceforge.net > lessbian](http://sourceforge.net/projects/lessbian/)

Forum: [raspberrypi.org](http://www.raspberrypi.org/forums/viewtopic.php?f=66&t=86844)