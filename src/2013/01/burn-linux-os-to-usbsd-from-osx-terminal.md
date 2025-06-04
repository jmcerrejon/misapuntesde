---
id: 57
title: Burn Linux OS to USB/SD from OSX (Terminal)
description: Burn Linux OS to USB/SD from OSX (Terminal)
author: Jose Cerrejon
icon: pen-to-square
date: 2013-01-24 12:43:00
prev: /
next: false
category:
  - Linux
  - Apple
tag:
  - Linux
  - Apple
image: /images/penguin.jpg
---

# Burn Linux OS to USB/SD from OSX (Terminal)

![penguin](/images/penguin.jpg)

Today we'll see a simple way to burn a *Linux* operating system image, any flavor or variety, in a flash drive or SD card with *OSX*. If you are interested ...

- - -
The steps are quite simple:


* Download the iso. We are going to call generically ubunarch.iso (lest you dispute)
* Once downloaded, open the terminal and type the following command:
```bash
hdiutil convert -format UDRW -o ubunarch.img ubunarch.iso
```
* Now let's see where our *USB/SD* drive are:
```bash
diskutil list
```
* Unmount the drive (if not unmounted, re-run the command). N is the drive where you want to install the operating system:
```bash
sudo diskutil unmountDisk /dev/diskN
```
* Now we'll copy the image to the device (replacing N by your drive and ubunarch with the name of your file):
```bash
date +'Start: %H:%M:%S' && sudo dd if=ubunarch.img bs=1m
 of=/dev/rdiskN
```
* Well done!. Now before removing the drive, unmount it with (keep an eye to N):
```bash
diskutil eject /dev/diskN
```