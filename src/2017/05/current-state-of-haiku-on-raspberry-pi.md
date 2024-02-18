---
id: 797
title: Current state of Haiku on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-05-24 10:30:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Current state of Haiku on Raspberry Pi

![haiku_os](/images/2016/05/haiku_os.png)

I put you in context: Mid 90's. Time for *56k* modems, *CD-Rom* drives with 4x speed and *Microsoft* surprises to the world with *Windows 95*. Meanwhile, other graphical operating systems try to take presence promising better performance. The two most controversial were *[QNX](https://en.wikipedia.org/wiki/QNX) and [BeOS](https://en.wikipedia.org/wiki/BeOS)* for *PC*. So much history behind that I lived firsthand. That is why today I follow from time to time the development of *Haiku* (old *BeOS*) that goes step by step achieving objectives in its development. Did you know there is an image so it can be executed on a *Raspberry Pi*?

- - -
![Haiku Desktop](/images/2017/05/apps-prefs.png "Haiku Desktop")

*Haiku is an open-source operating system that specifically targets personal computing. Inspired by the BeOS, Haiku is fast, simple to use, easy to learn and yet very powerful.*

This aims in its website, and it's true.

I remember when I started *BeOS* on my PC in about 7 seconds and you were the master of the world. Internet with a decent speed, a software repository called *Bebits*, some games and the space screensaver where you could spend minutes looking at it without thinking of anything. It had its own web with hundreds of applications and "almost" all the hardware worked at first. Happy times and a pity that the market did not bet on him and was blinded by the marketing that meant *Windows*, for better or for worse.

![haiku_os](/images/2017/05/haiku_port_status.png)

The ARM port is **in an extremely early state**. The kernel may load but a lot of work still needs to be done before you can get a desktop.

Today I wanted to mention this operating system of the last century. Some of us would love to be able to boot *Haiku into the Raspberry Pi* and feel that speed again that took advantage of the hardware to the max.

I have been looking for how to burn the image that you can download from the web, but **I have not succeeded**. I assume that automated *daily builds* are not yet *usable* nor do they start the desktop on *ARM* processors, but you can test the builds for *X86* on a virtual machine and you get an idea.

If anyone wants to give their opinion, knows how to burn the image in an SD or has had contact with *BeOS/Haiku* in the past, I answer you in the comments.

Link: [Compiling Haiku on Arm](https://www.haiku-os.org/guides/building/compiling-arm)

Download: [download.haiku-os.org](https://download.haiku-os.org/)