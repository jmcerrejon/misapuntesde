---
id: 670
title: GameMaker Games on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2016-02-24 11:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# GameMaker Games on Raspberry Pi

![maldita_castilla](/images/2016/02/maldita_castilla.png)

**The day has come!**

As I told you [here](/post.php?id=653), I took months following in *Twitter* one of the developers of the engine *GameMaker* called *Mike Dailly* ([@mdf200](https://twitter.com/mdf200)) waiting to take out some method to play thousands of games that have been developed with this game engine into the *Raspberry Pi*. Today they post for download **three games to play them on Raspberry Pi**.

- - -
![Game Maker games](/images/2016/02/gamemaker_games.png)

Three jewels to enjoy in your RPIs. You need to download from the link at the end of the post, untar and put into your distro *Raspbian* (others not tested yet, but you are free to try it).

The games require at least *256Mb GPU RAM*, and if you've enabled the new *OpenGL* beta driver, you'll need to disable that as well.

To play the games download or copy these archives onto your Raspberry Pi, then open up a terminal and untar them using this command line:

```bash
tar xzvf castilla && tar xzvf tntbf && tar xzvf crate
```

You can run this little script I made for **PiKISS** [here](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/games/gmaker.sh).

I want to thank the effort and determination that had *Mike* and especially for taking the *Raspberry Pi* seriously as a platform where we could develop and play with *GameMaker* in a near future.

<iframe src="https://vine.co/v/ib3P1E3p6ai/embed/simple" width="480" height="480" frameborder="0"></iframe>

Link and download: [yoyogames.com](http://yoyogames.com/pi)