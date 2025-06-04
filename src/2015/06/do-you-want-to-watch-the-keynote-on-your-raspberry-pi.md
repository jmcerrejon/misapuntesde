---
id: 574
title: Do you want to watch the Keynote on your Raspberry Pi?
description: Do you want to watch the Keynote on your Raspberry Pi?
author: Jose Cerrejon
icon: pen-to-square
date: 2015-06-08 19:00:00
prev: /
next: false
category:
    - Apple
    - Raspberry PI
tag:
    - Apple
    - Raspberry PI
image: /images/2015/06/wwdc_2015_apple_0.jpg
---

# Do you want to watch the Keynote on your Raspberry Pi?

![keynote](/images/2015/06/wwdc_2015_apple_0.jpg)

Run the next script...

---

```bash
\#!/bin/bash
clear
echo -e "Keynote 2015 streaming...\nPress [ENTER] to continue"
read -p "NOTE: On video, press [ESC] to try another streaming video (and finger cross)..."
sudo sh -c "TERM=linux setterm -foreground black -clear >/dev/tty0"
omxplayer --audio_queue=10 --video_queue=40 https://p.events-delivery.apple.com.edgesuite.net/15pijbnaefvpoijbaefvpihb06/m3u8/atv_mvp.m3u8
omxplayer --audio_queue=10 --video_queue=40 https://devimages.apple.com/iphone/samples/bipbop/gear1/prog_index.m3u8
clear
echo "I hope you enjoyed the show :)"
```

![You Win](/images/yeah.jpg)
