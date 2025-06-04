---
id: 87
title: Increased Performance With Aaxbmc Script for Raspbmc
description: Increased Performance With Aaxbmc Script for Raspbmc
author: Jose Cerrejon
icon: pen-to-square
date: 2013-03-01 17:30:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/raspxbmc.jpg
---

# Increased Performance With Aaxbmc Script for Raspbmc

![raspxbmc](/images/raspxbmc.jpg)

The tip is to keep your profile in *RAM*. This uses the *tmpfs* filesystem.

- - -
The benefits, would be to reduce disk writes, keeps your SD Card safe, increased speed and responsiveness (They said up to 50%), especially in the use of plugins.

To do this, run these three commands in the terminal or console:

```bash

sudo wget http://aaxbmc.link.ba/raspbmc/install
sudo chmod +x install
sudo ./install

```

For donations and more information, visit the following website.

Link: [aaxbmc](http://aaxbmc.link.ba)