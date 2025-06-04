---
id: 331
title: Overclocking on the Pi
description: Overclocking on the Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-12-16 10:12:48
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2013/08/overclock.jpg
---

# Overclocking on the Pi

![rpi overclock](/images/2013/08/overclock.jpg)

We have already talked about [this](/post.php?id=219) [twice](/post.php?id=225) on this blog. The [Wikipedia](http://en.wikipedia.org/wiki/Overclock) explain as *the process of making a computer or component operate faster than the clock frequency specified by the manufacturer by modifying system parameters.*

- - -
It is a fascinating world that not all people make a practice. The *Raspberry Pi Foundation* allows us to implement a default oc setting from the application *raspi-config*.

In my case I always have the Raspi overclocked to **950 Mhz**, but I have two sinks and allows me some peace of mind.

Today I read in the *pg32spain.com* forums that the user *JoJo_ReloadeD* has come to put the **CPU to 1133 Mhz** with this same system.

![oc](/images/overclock%20pi%20hot%20points.jpg)

Curious detailed heat released in the power connector.

The values in the *config.txt* file are:

```bash
arm_freq=1133
core_freq=400
sdram_freq=600
over_voltage=12 # Although in theory the maximum value is 8, 12 also works ;)
over_voltage_sdram=8
```

I put the link to read the thread if you are interested. Have you ever tried to overclock your Pi *in extremis*?

Translated Forum: [gp32spain.com > Raspberry Pi](http://translate.google.com/translate?sl=es&tl=en&js=n&prev=_t&hl=es&ie=UTF-8&u=http%3A%2F%2Fwww.gp32spain.com%2Fforos%2Fshowthread.php%3F122760-Overclocking%26p%3D1600592%23post1600592)