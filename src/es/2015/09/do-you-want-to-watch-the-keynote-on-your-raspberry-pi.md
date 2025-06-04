---
id: 616
title: ¿Quieres ver la Keynote 2015 en tu Raspberry Pi?
description: ¿Quieres ver la Keynote 2015 en tu Raspberry Pi?
author: Jose Cerrejon
icon: pen-to-square
date: 2015-09-09 10:00:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# ¿Quieres ver la Keynote 2015 en tu Raspberry Pi?

![keynote](/images/2015/09/keynote_92k15.png)

Ejecuta el siguiente script...

- - -
```bash
\#!/bin/bash
clear
echo -e "Keynote 2015 streaming...\nPress [ENTER] to continue"
read -p "NOTE: On video, press [ESC] to try another streaming video (and finger cross)..."
sudo sh -c "TERM=linux setterm -foreground black -clear >/dev/tty0"
omxplayer --audio_queue=10 --video_queue=40 http://p.events-delivery.apple.com.edgesuite.net/15pijbnaefvpoijbaefvpihb06/m3u8/atv_mvp.m3u8
omxplayer --audio_queue=10 --video_queue=40 http://devimages.apple.com/iphone/samples/bipbop/gear1/prog_index.m3u8
clear
echo "I hope you enjoyed the show :)"
```

