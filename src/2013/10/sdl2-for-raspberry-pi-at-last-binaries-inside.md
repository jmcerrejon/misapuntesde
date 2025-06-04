---
id: 283
title: SDL2 for Raspberry Pi at last (binaries inside!)
description: SDL2 for Raspberry Pi at last (binaries inside!)
author: Jose Cerrejon
icon: pen-to-square
date: 2013-10-02 10:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/sdl2.png
---

# SDL2 for Raspberry Pi at last (binaries inside!)

![SDL2](/images/sdl2.png)

For months I have wanted to make a review about engines/libraries/frameworks to develop video games. Nobody in their right mind today would develop a game from scratch.

SDL is the most famous library to develop video games, but also slower when running it on the Pi, until now...

- - -
This second version really takes time with us, it was not until a few days ago that it has received an update to work on the *Raspberry Pi* properly. The version that will be compatible with the numbering **2.0.1**, but there is a user that has compiled this library (I leave the binaries along with the headers at the end of this post) in the [official forums](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=91&t=56756&p=430647).

**POST UPDATED on 1/1/2014:** You can find a script to install it on *Raspbian or Raspbmc* [here](http://cutmywire.wordpress.com/2013/11/16/raspberry-pi-sdl2-installation-frustfrei/)

**POST UPDATED on 2/5/2014:** Another link to help and compile by yourself:  

* [Building DirectFB 1.8.0 and SDL2 for the Raspberry PI](http://mega-tokyo.com/blog/index.php/site/comments/building_directfb_1.8.0_and_sdl2_for_the_raspberry_pi)

* [mega-tokyo.com > Building DirectFB 1.8.0 and SDL2 for the Raspberry PI](http://mega-tokyo.com/blog/index.php/site/comments/building_directfb_1.8.0_and_sdl2_for_the_raspberry_pi)

These are improvements that brings:

* Work without the X.Org server

* **OpenGL ES 2.0**

* ALSA based Sound drivers

* evdev-based input devices 

Soon we will see games games compiled with this library. By the way, I have a couple of them that I will port by myself :)

![happy](/css/sm/happy.png)

Download: [dropbox.com> SDL2-raspberrypi.tar.gz (9 MB)](https://www.dropbox.com/s/9fndtw6zs16ptgg/SDL2-raspberrypi.tar.gz)

Forum [raspberrypi.org](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=91&t=56756&p=430647)