---
id: 928
title: Today in mysteries to solve. DOSBox and the MacOS key mapping bug
author: Jose Cerrejon
icon: pen-to-square
date: 2020-04-20 18:55:51
prev: /
next: false
category:
  - Apple
  - Raspberry PI
tag:
  - Apple
  - Raspberry PI
---

# Today in mysteries to solve: DOSBox and the MacOS key mapping bug

![dosbox_macos_01](/images/2020/04/dosbox_macos_01.png)

Lately I've been doing mini posts about problems that I stuck on a daily basis. I have some of them pretty dense that I don't finish, I hope to get the time and publish them to get rid of my backlog.

Today I come to solve the famous *DOSBox* problem with the key mapping in *macOS*.

- - -
The cover photo comes to mind, because *Dungeon Crawlers* players like *Eye Of The Beholder* (Did I tell you that is my favorite game?), we played with the number pad and the keys 7 and 9 made the character/group spin. Few are the keyboards that come with the numeric keypad, so you have to remap and the best thing is to assign new keys, for example *WSAD* to move and *QE* to rotate. In *Windows/Linux* you press inside *DOSBox CTRL+F1* so that a layout with the keys appears on the screen where you can exchange them as you like.

![dosbox_macos_02](/images/2020/04/dosbox_macos_02.png)

It's supposed to be the same in *macOS*, but **there is a bug that prevents using this key combination**. The solution has been to use a fork called [DOSBox-X](https://github.com/joncampbell123/dosbox-x) that can run on any operating system (even *Raspberry Pi*!). You will have at your disposal the options to remapping.

![dosbox_macos_03](/images/2020/04/dosbox_macos_03.png)

By the way, in order to change the settings to this application, you will have to create/rename/move in your user's root directory, the *dosbox.conf* file that you can find if you have *DOSBox* installed, in *~/Library/Preferences/DOSBox 0.74 Preferences* (or the version you have installed). 

Anyway, I leave you my mapping file for *WSAD and QE* if you are going to play some old school *RPG* and my **dosbox.conf optimized** (with spanish keyboard, you can change it anyway).

Link: [misapuntesde.com > mapper-0.74-3-1.map](/res/mapper-0.74-3-1.map)

Link: [misapuntesde.com > dosbox.conf](/res/dosbox.conf)