---
id: 917
title: Initial Turbo on Raspberry Pi to speed up boot times
description: Initial Turbo on Raspberry Pi to speed up boot times
author: Jose Cerrejon
icon: pen-to-square
date: 2019-10-30 16:20:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Initial Turbo on Raspberry Pi to speed up boot times

![Rasppi-config](/images/2019/10/raspi-config.png)

I read it in an update of my favorite distro *DietPi* and didn't know this option.

If you add to */boot/config.txt* the next option:

```bash
initial_turbo=20
```

will force the *CPU* to a higher frequency at startup **for a few seconds** to improve the time it takes to boot. It can be set at *dietpi-config > Performance Options > ARM Initial Turbo* if you prefer.

I advise you to read the following link, especially if you use some kind of *overclock*.

+ info: [github.com > raspberrypi/firmware](https://github.com/raspberrypi/firmware/issues/1005)

