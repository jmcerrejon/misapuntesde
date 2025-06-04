---
id: 47
title: Arch Linux with graphical desktop (.img)
description: Arch Linux with graphical desktop (.img)
author: Jose Cerrejon
icon: pen-to-square
date: 2013-01-21 10:10:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/archpi_5002.jpg
---

# Arch Linux with graphical desktop (.img)

![archlinux](/images/archpi_5002.jpg)

A user from the forum [raspberrypi.org](https://www.raspberrypi.org/phpBB3/viewtopic.php?f=63&t=30272) has upload an image prepared with _Arch Linux_ and graphical environment including packages with very good results.

If you've always been afraid of _Arch Linux_ or does not work like a pro, this is your chance ;)

---

Log in with user _root_ and password _root_. The environment used is _Oppenbox_ with _Rox_. It's overclocked to 930 Mhz and comes with a set of pre-installed packages:

-   MIT Scheme
-   Leafpad
-   mtPaint
-   MuPDF
-   Wireless_tools and wpa_supplicant
-   tigervnc
-   Python 3.1.4 compiled from source.
-   No web browser, but if you wish to install: _pacman-S midori_

The image fits on a 2 Gb SD and has a swap partition. To run the VNC server, simply type _vnc.sh_ (password is _button_). Once you have installed your _WiFi_ card, there is a script to configure called _wifi.sh_

Link: [Readme](https://www.dropbox.com/s/eaxtwnm5uta6asn/README.txt)

Image: [.img 783,91 MB](https://www.dropbox.com/s/z564itspr21ukg4/arch_RPi2.zip)

More info: [Arch Wiki](https://wiki.archlinux.org/)
