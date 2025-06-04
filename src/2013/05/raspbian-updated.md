---
id: 156
title: Raspbian updated!
description: Raspbian updated!
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-13 09:35:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Raspbian updated!

Just read the news that upgrading the distribution

```bash
sudo apt-get update && sudo apt-get upgrade
```

we have a new batch of updated packages, most notably support for new camera from the creators of the *Raspberry Pi* and available soon and new option in the *raspi-config* script.

###  Kernel 3.8.12 +

There's also a kernel updated. The easiest way we have is running the *Hexxeh's script*. Instructions for installing and upgrading the kernel as follows:

```bash
sudo apt-get install git-core
sudo wget http://goo.gl/1BOfJ -O /usr/bin/rpi-update && sudo chmod +x /usr/bin/rpi-update
sudo rpi-update
```