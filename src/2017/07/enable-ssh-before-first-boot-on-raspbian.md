---
id: 810
title: Enable SSH before first boot on Raspbian
author: Jose Cerrejon
icon: pen-to-square
date: 2017-07-10 09:31:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Enable SSH before first boot on Raspbian

![ssh](/images/2017/07/ssh.png)

I leave you a quick tip about *Raspbian* I read in the official forum:

It is possible to activate the *SSH* daemon creating an empty file in */boot* called **ssh** after burning the operating system. Now when you start your distro for the first time, *SSH* will be activated and the file will be deleted automatically.