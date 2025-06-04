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

we have a new batch of updated packages, most notably support for new camera from the creators of the _Raspberry Pi_ and available soon and new option in the _raspi-config_ script.

### Kernel 3.8.12 +

There's also a kernel updated. The easiest way we have is running the _Hexxeh's script_. Instructions for installing and upgrading the kernel as follows:

```bash
sudo apt-get install git-core
sudo wget https://goo.gl/1BOfJ -O /usr/bin/rpi-update && sudo chmod +x /usr/bin/rpi-update
sudo rpi-update
```
