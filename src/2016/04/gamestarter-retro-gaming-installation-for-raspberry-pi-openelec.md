---
id: 691
title: GameStarter. Retro Gaming installation for Raspberry Pi (OpenELEC)
description: GameStarter. Retro Gaming installation for Raspberry Pi (OpenELEC)
author: Jose Cerrejon
icon: pen-to-square
date: 2016-04-18 10:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: https://raw.githubusercontent.com/bite-your-idols/gamestarter-openelec/master/assets/gamestarter-logo.jpg
---

# GameStarter: Retro Gaming installation for Raspberry Pi (OpenELEC)

![GameStarter](https://raw.githubusercontent.com/bite-your-idols/gamestarter-openelec/master/assets/gamestarter-logo.jpg)

**UPDATE:** New install method through addon.

*Bite Your Idols!* has contacted me to present the next project that particularly think all of us will enthuse. It's about **install through SSH or addon a bunch of emulators and games in OpenELEC**. We already knew several solutions to achieve that, but I think this is the best of all alternatives.

- - -
![screenshot-kodi-b](/images/2016/04/screenshot-kodi-b.png)

You have three options:

* With an addon that you can download [here](https://github.com/bite-your-idols/gamestarter/releases/download/2.0.0/script.gamestarter-v2.0.0.zip).

* You can use an image with everything you need available at [MEGA](https://mega.nz/#F!aMcBHaBS!zAi2_Iz_zPzxWeLxJzEA4g).

* Run the script with the following command, always *SSH*:

```bash
wget --no-check-certificate -O /storage/installer-menu.sh https://raw.githubusercontent.com/bite-your-idols/gamestarter-openelec/master/installer-menu.sh && sh /storage/installer-menu.sh
```

Link: [github.com > Gamestarter](https://github.com/bite-your-idols/Gamestarter-Pi)
