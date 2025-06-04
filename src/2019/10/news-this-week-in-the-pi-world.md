---
id: 915
title: News this week in the Pi World!
description: News this week in the Pi World!
author: Jose Cerrejon
icon: pen-to-square
date: 2019-10-06 12:40:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# News this week in the Pi World!

![over](/images/2019/10/over.png)

I would like to take a serene and calm Sunday walk, or sit down to search news about *Raspberry Pi* without being disturbed by anyone... You're lucky, I opt for the second so you can do the first for me.

- - -
<iframe width="560" height="315" src="https://www.youtube.com/embed/L3KIhZxvQ5A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![Api](/images/2019/10/raspberry-pi-web-api.png)

* **An API for your Raspberry Pi:** An interesting project where you can have an *API* with which to access the *GPIO* of your Raspi | [github.com > rpiapi](https://github.com/victorqribeiro/rpiapi)

* **Changes on Raspbian's theme:** This week I upgraded the system and I was struck by a message that I quote: *To apply the updates, please reboot your Pi, and then select one of the options on the Defaults page in Appearance Settings.* Apart from a face washing of the icons by what I see, have included this menu to adapt the size of the icons and fonts to the screen according to our preferences. Very useful especially for small screens that we connect through the *GPIO* or less than 10", for example.

![wine](/images/2019/09/wine.png)

* **Wine 4.0-2 in Raspbian Buster repositories are useless:** Well, I was going to follow [this](https://gist.github.com/MIvanchev/14de59fa2552d315ac74c30cf1c0b01e#installing-wine) tutorial to have the latest version of *Wine* in *Raspbian*, but when I check the version we have in the current repositories with *apt-cache policy wine*, I see that it is not as outdated as I thought. The good thing is that we also have the *kernel with 3G/1G VM* memory needed to run this compatibility layer that will allow us to run many *Microsoft* operating system apps on our Pi. But my joy in a well, because this version of *Wine* only runs a specific type of files, and **are not the Windows x32** that we all need. Luckily in the official forum [are talking](https://www.raspberrypi.org/forums/viewtopic.php?f=28&t=244476) about the fantastic tutorial of *Nova Spirit* that we can follow from [this link](https://www.novaspirit.com/2019/04/15/run-x86-arm/), although throw it an afternoon because its goal is to run a **full Debian x86 operating system on the Pi**.

![PiRoot](/images/2019/10/piroot.png)

* **piRoot Beta 1, a Debian x86 executable:** and coming back to the issue of *x86 compatibility layers in ARM*, I came across this other project still in beta so that we can run a *chroot* of *Debian x86 applications in Raspbian*. | [skywalkersw5.github.io](https://skywalkersw5.github.io/piRoot/)

![Hot](/images/04_RaspberryPi.png)

* **Raspberry Pi 4 Can Now Overclock to 2.147 GHz:** What memories when [I overclocked my Pi through 1400 Mhz](/post.php?id=219)! The processor of the Pi4 works at 1.5 GHz, but you can get it to 2 GHz with a change in the *config.txt*, but of course, it is recommended to have it cool. | [tomshardware.com](https://www.tomshardware.com/news/raspberry-pi-higher-overclock,40559.html)

![DietPi](/images/2018/02/dietpi.png)

* **DietPi-Survey report page:** And finally, something I hadn't noticed. I leave you with a curious report of the use that has this distro among all users. We can see several benchmarks in the best known boards and some curious data. What is DietPi used for? As far as I can see, especially to set up a development environment PHP+Lighttpd+MariaDB. | [dietpi.com/survey/#benchmark](https://dietpi.com/survey/#benchmark)

Happy weekend!