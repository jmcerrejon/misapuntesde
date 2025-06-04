---
id: 670
title: GameMaker Games on Raspberry Pi
description: GameMaker Games on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2016-02-24 11:00:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2016/02/maldita_castilla.png
---

# GameMaker Games on Raspberry Pi

![maldita_castilla](/images/2016/02/maldita_castilla.png)

**The day has come!**

As I told you [here](/post.php?id=653), I took months following in _Twitter_ one of the developers of the engine _GameMaker_ called _Mike Dailly_ ([@mdf200](https://twitter.com/mdf200)) waiting to take out some method to play thousands of games that have been developed with this game engine into the _Raspberry Pi_. Today they post for download **three games to play them on Raspberry Pi**.

---

![Game Maker games](/images/2016/02/gamemaker_games.png)

Three jewels to enjoy in your RPIs. You need to download from the link at the end of the post, untar and put into your distro _Raspbian_ (others not tested yet, but you are free to try it).

The games require at least _256Mb GPU RAM_, and if you've enabled the new _OpenGL_ beta driver, you'll need to disable that as well.

To play the games download or copy these archives onto your Raspberry Pi, then open up a terminal and untar them using this command line:

```bash
tar xzvf castilla && tar xzvf tntbf && tar xzvf crate
```

You can run this little script I made for **PiKISS** [here](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/games/gmaker.sh).

I want to thank the effort and determination that had _Mike_ and especially for taking the _Raspberry Pi_ seriously as a platform where we could develop and play with _GameMaker_ in a near future.

<iframe src="https://vine.co/v/ib3P1E3p6ai/embed/simple" width="480" height="480" frameborder="0"></iframe>

Link and download: [yoyogames.com](https://yoyogames.com/pi)
