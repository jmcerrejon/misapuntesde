---
id: 713
title: Watch WWDC 2016 on the Raspberry Pi
description: Watch WWDC 2016 on the Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2016-06-13 10:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2016/06/wwdc1606.png
---

# Watch WWDC 2016 on the Raspberry Pi

![keynote](/images/2016/06/wwdc1606.png)

Run the next script...

- - -
```bash
\#!/bin/bash
clear
echo -e "WWDC 2016 streaming...\nPress [ENTER] to continue"
sudo sh -c "TERM=linux setterm -foreground black -clear >/dev/tty0"
omxplayer --audio_queue=10 --video_queue=40 http://p.events-delivery.apple.com.edgesuite.net/15pijbnaefvpoijbaefvpihb06/m3u8/atv_mvp.m3u8
clear
echo "I hope you enjoyed the show :)"
```

![You Win](/images/yeah.jpg)