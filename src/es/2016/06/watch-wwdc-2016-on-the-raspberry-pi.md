---
id: 713
title: ¿Quieres ver la WWDC 2016 en la raspberry Pi?
description: ¿Quieres ver la WWDC 2016 en la raspberry Pi?
author: Jose Cerrejon
icon: pen-to-square
date: 2016-06-13 10:00:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# ¿Quieres ver la WWDC 2016 en la raspberry Pi?

![keynote](/images/2016/06/wwdc1606.png)

Ejecuta el siguiente script...

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