---
id: 453
title: Retro-remake. Conquestador for Raspberry Pi
description: Retro-remake. Conquestador for Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-09-10 09:00:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/09/3luces.png
---

# Retro-remake: Conquestador for Raspberry Pi

![3 luces](/images/2014/09/3luces.png)

Las Tres Luces de Glaurung (a.k.a. Conquestador) was a legendary _8-bit computer_ game created by _TOPO Soft_ in the called [Golden Era of spanish software](https://en.wikipedia.org/wiki/Golden_Era_of_Spanish_Software), when _Spain_ became the second largest 8 bit computer entertainment software producer in _Europe_, only behind the _United Kingdom_.

Today you will be able to play the remake made by [masoftware](https://www.masoftware.es/) guys and ported to the _Raspberry Pi_ by myself.

---

![glaurung](/images/2014/09/3luces.gif)

It was probably one of the first _MSX_ titles I had. It is one of those games that are desperate difficult at first until you become the character control. The good thing is that you can save games.

_The object of the game is to find the Three Lights and leave the castle. These three jewels, like the rest of usable objects are stored in chests scattered around the map. But these boxes can also contain harmful things, so that we will be very careful. Probably at least one or two gems will be in the lower regions, where the danger is greater, but this is not certain. In any case, once we must turn to the right side of the castle where the exit door, taking care to carry, also is the key that opens this door, in which case we will have completed the adventure._

To play, you need to unzip the file you'll find at the end of this post and install _Allegro_ libraries:

```bash
	sudo apt-get install -y liballegro4*
```

Now start the graphic server with **startx**, open a _Terminal_ and cd the _Glaurung_ directory. To play just run: **./glaurung**

Enjoy!

<iframe width="420" height="315" src="//www.youtube.com/embed/sCtv-UANSP4" frameborder="0" allowfullscreen></iframe>

Direct Download: [glaurung*by*@ulysess10.tar.gz (9MB)](/res/glaurung_by_@ulysess10.tar.gz)

Link: [Map](https://www.masoftware.es/juegos/glaurung/mapeado.jpg)

More Info: [computeremuzone.com](https://computeremuzone.com/ficha.php?id=274&l=en)
