---
id: 897
title: Play Descent 1 & 2 with DXX-Rebirth on the Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2019-01-25 19:35:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Play Descent 1 & 2 with DXX-Rebirth on the Raspberry Pi

![Descent](/images/2015/03/descent.png)

I've added *Descent* to [PiKISS](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/games/descent.sh) long time ago (commented [here](/post.php?id=534)), but I didn't have the oportunity to write about it. Now I've recompiled the latest version 0.60 Beta 2 available for your *Raspberry Pi*.

*Descent is a 3D first person shooter that takes place in the distant future...*

- - -
<iframe width="560" height="315" src="https://www.youtube.com/embed/MAKS7hUkIMk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### [ The game ]

![Descent](/images/2019/01/d1xr-scrn25.jpg)

*The Post Terran Mining Corporation owns a lot of mines, spread all over planets in our solar system. Somehow all the mining robots become infected with a computer virus and took the human workers hostage. Your job is to infiltrate the mines, clean out the robots, rescue any hostages you find, and lastly destroy the infected mines by destroying its reactor.*

Descent was developed back in 1995 by *Parallax Software and published by Interplay*. *Interplay* released one of my favourite RPG in the same year, a game called *Stone Keep* (watch some videos at [Youtube](https://www.youtube.com/channel/UCw8v-vad-PKjIh41vzLvHCA)).

### [ Installation ]

I've compiled it on the latest version of *Raspbian*. The source code compiled was *dxx-rebirth_v0.60-weekly-04-14-18-src.tar.gz*, but when you launch the game, it appears *0.59.100* (ignore it). You need some extra packages you can install with the next command:

```bash
sudo apt install -y libphysfs1
wget https://www.dropbox.com/s/dvtcby2comu5p8u/dxx-rebirth.tar.gz?dl=0
tar -xzvf dxx-rebirth.tar.gz
```

Now download the *shareware* version, get the full game or **you can use my PiKISS script** at the link below with some interesting [addons](https://www.dxx-rebirth.com).

Remember to copy the data files from the share or full version on path */.d1x-rebirth/Data & /.d2x-rebirth/Data*

### [ Performance on the Pi ]

You need to modify */boot/config.txt*:

```bash
gpu_mem=128
#dtoverlay=vc4-kms-v3d
```

The game with some specific tweaks runs flawlessly, even with high resolutions. We have *Descent 1 & 2* thanks to the project called [DXX-Rebirth](https://www.dxx-rebirth.com) that introduced new features like effects like *Transparency, Colored lighting, Texture Filtering, FSAA*, etc... This version fixed old glitches and cleaned up a lot of the old code, too.

Remember you can donate some bucks to the developers ;)

Enjoy!

Download: [dxx-rebirth.tar.gz](https://www.dropbox.com/s/dvtcby2comu5p8u/dxx-rebirth.tar.gz?dl=0)

Link: [PiKISS > descent.sh](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/games/descent.sh)
