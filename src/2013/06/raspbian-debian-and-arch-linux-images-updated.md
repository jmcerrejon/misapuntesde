---
id: 175
title: Raspbian, Debian and Arch Linux images updated!
description: Raspbian, Debian and Arch Linux images updated!
author: Jose Cerrejon
icon: pen-to-square
date: 2013-06-01 17:34:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Raspbian, Debian and Arch Linux images updated!

![os upgrade](/images/osupdate.jpg)

A few hours ago the *Raspberry Pi Foundation* has published a new *Raspbian, Debian and Arch Linux* images. No list of changes, improvements or notes on these updates, unless included the latest firmwares and kernels, improvements and optimizations.

- - -
As read in the comments, could contain the new *Wayland* protocol that we [talked](/post.php?id=167) recently.

Raspbian updates:

* Updated Scratch image (significant performance improvements).

* Updated armv6-optimised Pixman library.

* Updated armv6-optimised memxxx() functions.

* Updated raspi-config with new layout, and new functionality (setting hostname and enabling camera support).

* Native mmap support in the bcm2835 ALSA driver, and numerous other firmware changes; see commits to [github](http://github.com/raspberrypi/firmware).

* The boot partition now has the label "boot".

* The Wayland/Weston preview from Collabora is installed and their apt repository is included as an apt source.

Downloads: [raspberrypi.org](http://www.raspberrypi.org/downloads)