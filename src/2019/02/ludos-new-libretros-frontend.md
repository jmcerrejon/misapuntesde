---
id: 899
title: LudOS. New Libretro's Frontend
description: LudOS. New Libretro's Frontend
author: Jose Cerrejon
icon: pen-to-square
date: 2019-02-24 19:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# LudOS: New Libretro's Frontend

![ludos](/images/2019/02/ludo.png)

Let's go by parts. First we have a new project called [Ludo](https://github.com/libretro/ludo) that belongs to the famous libraries *libretro* to emulate, as we already know, all kinds of consoles and computers of the last century. It is a multiplatform frontend that wants to compete with *RetroArch*. You can also run on our beloved *Raspberry Pi*, but they have thought it would be better to create an operating system that already had it built, and from there to born this first version *alpha* called **LudOS**.

- - -
![ludos](/images/2019/02/playlist_ludo.png)

It's basically as mentioned, a frontend based on *LibreELEC 9.0*. For now it's in a rather early stage of development. *WiFi* doesn't work, it's not very stable but the games are playable at a pretty decent speed.

Some of its features:

* Free of distractions and configuration is always optional.

* Scan your games and browse your collection organized by systems along with screenshots.

* Menu to access options to load and save at any time.

* Choose the best emulator for the job, configured to ensure the best gameplay.

The emulator cores are packaged along with the frontend so you don't need to download anything else. We'll see in time if it's going to be worth betting on this alternative. 

You can download the first release right now. This coming week I'll try it and comment on my impressions.

Link releases: [github.com > libretro > LudOS](https://github.com/libretro/LudOS/releases)