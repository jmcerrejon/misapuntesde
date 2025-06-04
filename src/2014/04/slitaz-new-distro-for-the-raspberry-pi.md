---
id: 383
title: SliTaz. New distro for the Raspberry Pi
description: SliTaz. New distro for the Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-04-01 07:26:49
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# SliTaz: New distro for the Raspberry Pi

![SliTaz](/images/2014/04/slitaz.jpg)

SliTaz is distributed for Raspberry Pi as a series of files with a size **less than 100 MB uncompressed**, providing a fast, robust and elegant system who work entirely in memory.

- - -
Another distribution to *ARM* devices.

SliTaz run in RAM when booted with an compressed root file system called an initramfs/initrd. The amazing is that the whole system will be loaded in just **20MB of available RAM**.

The list with [supported packages](http://arm.slitaz.org/tools.cgi?pkgs) is still low, but their functionality to perform server potential is so great. It can even be generated with a proprietary tool and get a fresh raspberry flavor :P

You will need to uncompress the base package and create in your *SD* three partitions: *boot, swap and root* . Then run the installer and that's all.

I have not made ​​it to work by a permissions problem, but I hope do it soon and offer to you a deeper analysis.

Website: [SliTaz](http://arm.slitaz.org/rpi/)

Link: [List with some apps](http://arm.slitaz.org/codex/apps.html)