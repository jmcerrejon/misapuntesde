---
id: 567
title: Playing with OpenBOR
description: Playing with OpenBOR
author: Jose Cerrejon
icon: pen-to-square
date: 2015-05-25 09:00:00
prev: /
next: false
category:
    - Linux
    - Raspberry PI
    - ODROID
tag:
    - Linux
    - Raspberry PI
    - ODROID
image: /images/2015/05/superheroes.jpg
---

# Playing with OpenBOR

![OpenBOR_SuperH](/images/2015/05/superheroes.jpg)

Who has not played _Final Fight_?. I have spent my teen small fortune on two things: Playing arcade games and buying computer magazines (_MSX-Club, MicroHobby, MicroMan&iacute;a, PC-Mania and Arroba_ if I remember correctly).

[OpenBOR](https://sourceforge.net/projects/openbor/) it is an engine that allows you to play games in the genre _Beat'em Up_. Most games are made by users, but some have a really good quality.

Do you want to install it?... Jump then!

---

<iframe width="400" height="225" src="https://www.youtube.com/embed/blVl0_osHHc?rel=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>

Actually there is not much mystery. I've spare my precious time trying to figure out how to run once compiled, but as always, I give you all done so you don't have to suffer as I have done.

First, the installation: Either by [PiKISS](https://github.com/jmcerrejon/PiKISS), or typing in the terminal of your _Debian(PC)/ Raspbian(Rpi)/ Ubuntu(ODROID)_:

```bash
sudo apt-get install -y libsdl-gfx1.2-4
mkdir games && cd $_
wget /res/openbor_by_ulysess.tar.gz
tar xzvf openbor_by_ulysess.tar.gz && rm openbor_by_ulysess.tar.gz
cd openbor
```

![estructura](/images/2015/05/openbor_structure.png)

Inside you will find the executable for your favorite system. Now we need to seek on the [internet](https://mega.co.nz/#F!4xMgTDTA!bnfrA4RapYRvS31jSak3IQ) the _.pak files_ and copy them inside the **Paks/** folder.

Once copied, run the script from the root directory called **./unpak.sh**

![OpenBOR_SuperH](/images/2015/05/seyia.jpg)

You can find games (also called _MODs_) without the _.pak_ extension. Never mind. The structure must be the same for all games. Here's an example:

![paks](/images/2015/05/pak_structure.png)

Inside **data/** we have the files that compose each game, but it is important to maintain this structure: **Paks/name of the game/data**.

Now we run the file corresponding to our system. For the _Raspberry Pi_ is **./openbor_rpi** to access the menu. You will probably see a very small box in the middle of the screen. Search video settings menu and play around with the resolutions.

There are users who prefer lower the resolution of their monitors and run it with the following instructions:

```bash
fbset -xres 512 -yres 384 -depth 16
SDL_FB_BROKEN_MODES=1 ./openbor_rpi
```

The game controls are: arrow keys, [A], [S], [D], [Z], [X], [C] and [ENTER] to access the menu.

Now you can hit to everyone who put in front of you. If any reader know _OpenBOR_ and wants to show us some _MOD_ for this _engine_, we wait you in the comments.

![OpenBOR_SuperH](/images/2015/05/heman.jpg)

Link: [raspberrypi.org > Street Of Rage Remake](https://www.raspberrypi.org/forums/viewtopic.php?f=78&t=26859&sid=d78d6f6af03fcd57177ac469c5a8ec96)

MODs: [mega.co.nz > OpenBOR games](https://mega.co.nz/#F!4xMgTDTA!bnfrA4RapYRvS31jSak3IQ)
