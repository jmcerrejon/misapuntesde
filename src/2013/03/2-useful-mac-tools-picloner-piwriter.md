---
id: 99
title: 2 useful Mac tools. PiCLoner & PiWriter
description: 2 useful Mac tools. PiCLoner & PiWriter
author: Jose Cerrejon
icon: pen-to-square
date: 2013-03-12 08:30:00
prev: /
next: false
category:
  - Raspberry PI
  - Apple
tag:
  - Raspberry PI
  - Apple
image: /images/piclonerwriter.jpg
---

# 2 useful Mac tools: PiCLoner & PiWriter

![pipi](/images/piclonerwriter.jpg)

I have two applications on *Mac* to create a backup of your SD card *(PiCloner)* and another that is a graphical interface to copy the operating system from the *.img* file to *SD (PiWriter).*

Remember the right way to do the same as *PiWriter* in the Mac Terminal:

```bash

N is the drive of your SD card
$ diskutil list
$ sudo diskutil unmountDisk /dev/diskN
$ date +'Start: %H:%M:%S' && sudo dd if=myImage.img bs=1m of=/dev/rdiskN
$ diskutil eject /dev/diskN

```

Link: [PiCloner](http://sourceforge.net/projects/picloner/)

Link: [PiWriter](http://sourceforge.net/projects/piwriter/)