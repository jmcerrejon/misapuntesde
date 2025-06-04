---
id: 833
title: Apple Event September on Raspberry Pi
description: Apple Event September on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-09-12 18:40:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2017/09/keynote_Sep2k17.jpg
---

# Apple Event September on Raspberry Pi

![Keynote](/images/2017/09/keynote_Sep2k17.jpg)

Almost every year, excluding those without Apple devices to see the event (although I've read that with Edge on Windows 10 you can see it). Lucky if you have a Raspberry Pi and **maybe** you can watch the event by running the next script:

- - -
```bash
\#!/bin/bash
clear
echo -e "Apple Special Event September 2017 streaming...\nPress [ENTER] to continue"
sudo sh -c "TERM=linux setterm -foreground black -clear >/dev/tty0"
omxplayer --audioqueue=10 --videoqueue=40 https://p-events-delivery.akamaized.net/17oiubaewrvouhboiubasdfv09/m3u8/atv_mvp.m3u8
clear
echo "I hope you enjoyed the show :)"
```

Good luck!

<a href="/post.php?id=832"><img src="/images/2017/09/RPi_20SEPT_min.png" /></a>
