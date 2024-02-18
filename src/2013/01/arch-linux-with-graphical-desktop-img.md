---
id: 47
title: Arch Linux with graphical desktop (.img)
author: Jose Cerrejon
icon: pen-to-square
date: 2013-01-21 10:10:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Arch Linux with graphical desktop (.img)

![archlinux](/images/archpi_5002.jpg)

A user from the forum [raspberrypi.org](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=63&t=30272) has upload an image prepared with *Arch Linux* and graphical environment including packages with very good results.

If you've always been afraid of *Arch Linux* or does not work like a pro, this is your chance ;)

- - -

Log in with user *root* and password *root*. The environment used is *Oppenbox* with *Rox*. It's overclocked to 930 Mhz and comes with a set of pre-installed packages:

* MIT Scheme
* Leafpad
* mtPaint
* MuPDF
* Wireless_tools and wpa_supplicant
* tigervnc
* Python 3.1.4 compiled from source.
* No web browser, but if you wish to install: *pacman-S midori*

The image fits on a 2 Gb SD and has a swap partition. To run the VNC server, simply type *vnc.sh* (password is *button*). Once you have installed your *WiFi* card, there is a script to configure called *wifi.sh*

Link: [Readme](https://www.dropbox.com/s/eaxtwnm5uta6asn/README.txt)

Image: [.img 783,91 MB](https://www.dropbox.com/s/z564itspr21ukg4/arch_RPi2.zip)

More info: [Arch Wiki](https://wiki.archlinux.org/)