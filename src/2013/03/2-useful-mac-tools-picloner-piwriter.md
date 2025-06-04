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

I have two applications on _Mac_ to create a backup of your SD card _(PiCloner)_ and another that is a graphical interface to copy the operating system from the _.img_ file to _SD (PiWriter)._

Remember the right way to do the same as _PiWriter_ in the Mac Terminal:

```bash

N is the drive of your SD card
$ diskutil list
$ sudo diskutil unmountDisk /dev/diskN
$ date +'Start: %H:%M:%S' && sudo dd if=myImage.img bs=1m of=/dev/rdiskN
$ diskutil eject /dev/diskN

```

Link: [PiCloner](https://sourceforge.net/projects/picloner/)

Link: [PiWriter](https://sourceforge.net/projects/piwriter/)
