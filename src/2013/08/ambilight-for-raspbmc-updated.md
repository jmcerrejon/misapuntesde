---
id: 227
title: Ambilight for Raspbmc updated
description: Ambilight for Raspbmc updated
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-08 10:30:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/ambilight.jpg
---

# Ambilight for Raspbmc updated

![ambilight](/images/ambilight.jpg)

One of the more popular [post](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=38&t=50436&p=398644&hilit=ambilight#p398644) in the forums is referred to the project *Ambilight*. This project helps us to build a lighting system around our TV that lets you enjoy a more visual experience.

- - -
We have already seen thanks to the detailed instructions that our friend *Hugo Ruiz* sent us.

Now talks about the changes needed to make it work in the new version of *Raspbmc*.

*For Raspbmc July update, again things change a little. Now use a different boblight bringing the conf files. Names must have 3 characters, ie. green will grn, blu, red. A new feature also captures and reproduces the light while nothing is played, from the main menu. Steps to work:*

*1. Install the new update.*

*2. create boblight.conf. You have to change ALL names to 3 characters of color. *

*3. For options, edit the following file:*

```bash
sudo nano /etc/init/boblight-dispmanx.conf
ctrl+x y fin
```

Greetings!

Link: [MisApuntesde... Ambilight Guide](/post.php?id=183)

Link: [raspbmc](http://www.raspbmc.com)