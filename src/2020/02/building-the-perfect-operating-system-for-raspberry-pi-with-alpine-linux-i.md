---
id: 922
title: Building the perfect operating system for Raspberry Pi with Alpine Linux (I)
description: Building the perfect operating system for Raspberry Pi with Alpine Linux (I)
author: Jose Cerrejon
icon: pen-to-square
date: 2020-02-17 10:59:55
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2020/02/alpine-linux-rpi.png
---

# Building the perfect operating system for Raspberry Pi with Alpine Linux (I)

![alpine-rpi](/images/2020/02/alpine-linux-rpi.png)

This weekend I tested an operating system that I almost always use in my _Docker's_ containers and honestly, I hadn't even thought about using it in _Raspberry Pi_, since I don't remember today if there is any fork or operating system that takes advantage of the benefits that _Alpine Linux_ offers us. My idea is to prepare an operating system with the minimum and necessary to be executed in memory and to put some scripts that get the system ready to be able to execute the tasks that I need: multimedia with _Kodi_, emulators with _Retroarch_ or development environment with a system prepared to have a web server in which to program. **You and me** will think new scripts.

This is the first of a group of posts where **I'll build an operating system using Alpine Linux for the Raspberry Pi**. If you like the idea, you know... Come in without calling!

---

### [ A little bit of my story ]

![640kb](/images/2020/02/640-kb.jpg)

More than once I have commented on the blog: I'm obsessed with optimization. Already in _MS-DOS_ I was one of those who wanted to reclaim the maximum amount of Kb from the famous _640Kb_ limit that my computer brought. In the _Windows_ era, I was trying for weeks to disable services that I didn't use and to test the stability of the system until I got the memory to run only the programs that I needed at that moment, because if you don't use a printer, _bluetooth_, reporting services or multimedia keyboards, Why do you want those processes running there in the background? I want those megas for **MY OWN BENEFIT**! That's one of the reasons why I like the _Raspberry_: It's so small, with such fair specifications, that you have to think very well how to take advantage of all its potential. At least until they released a version with 4 Gb of _RAM_, but that's another story.

### [ Alpine Linux ]

As it says on its website: _Small. Simple. Secure. Alpine Linux is a security-oriented, lightweight Linux distribution_. It usually takes up very little space since its goal is to run in _RAM_ and be very secure. It is built with the [musl libc](https://www.musl-libc.org/intro.html) LIBRARY and [BusyBox](https://es.wikipedia.org/wiki/Busybox). It doesN't usually take up more than _130Mb_ once installed. The _BusyBox_ is an executable with many utilities to 'talk' to the Linux _Kernel_ and replaces more than 300 common commands. _ALPINE_ comes with its own package manager and repositories maintained by themselves and the community. It has support for _Raspberry Pi 4_ since November and takes advantage of all potential that our beloved board offers on 64 bits.

The version I'm going to use is the _3.11.3_ released on January 16th of this year. I don't bore you too much with this, but if you are interested, I leave the [release info post](https://git.alpinelinux.org/cgit/aports/log/?h=v3.11.3) for you to see the changes.

### [ Meet ALPINOS ]

![AlpinOS](https://github.com/jmcerrejon/alpinOS/raw/master/logo.png)

As I said before, _Alpine_ will give me the freedom to have just what I need: a fully optimized system to run in memory the bunch of programs I need: nothing else.

The name of my dystro came instantly to my mind, remembering those famous color pencils of my childhood from the brand [Alpino](https://www.alpino.eu/alpino/en/).

The goal is the following: I burn my _alpinOS_ distro, put the SD in the Pi, run a script to prepare the system with emulators because I feel like playing my favorite _MS-DOS_ game _Eye of the Beholder_ or _MAME_ with _Captain Commando_. As everything runs from _RAM_, it disappears at every reboot, but we can choose to save everything if we want. Do you like the idea?. Me too.

### [ Alternatives running in RAM ]

This is not the first time we have encountered an operating system that runs on the _RAM_. I have commented more than once on the distribution [piCore](/post.php?id=362) or on desktop computers we have some very recognized as [CoreOS](https://coreos.com) or [Tiny Core Linux](https://tinycorelinux.net). You can visit [Wikipedia](https://en.wikipedia.org/wiki/List_of_Linux_distributions_that_run_from_RAM) to get some more references.

Next week we will start rolling up our sleeves to get down to business and start developing my (our) ideal operating system. For now I leave you with the repo of a first Alpha version that I have prepared.

See you soon!

Link: [Github.com > alpinOS](https://github.com/jmcerrejon/alpinOS)
