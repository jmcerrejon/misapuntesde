---
id: 833
title: Evento Apple Septiembre en la Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-09-12 18:40:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Evento Apple Septiembre en la Raspberry Pi

![Keynote](/images/2017/09/keynote_Sep2k17.jpg)

Casi todos los años igual, marginando a los que no tengan dispositivos Apple para ver el evento (aunque he leído que con Edge en Windows 10 puedes verlo). Suerte la tuya que tienes una Raspberry Pi y **tal vez** (solo tal vez) puedas ver el evento ejecutando este script:

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

¡Suerte!

<a href="/post.php?id=832"><img src="/images/2017/09/RPi_20SEPT_min.png" /></a>
