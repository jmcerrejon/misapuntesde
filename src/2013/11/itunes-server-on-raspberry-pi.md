---
id: 314
title: iTunes Server on Raspberry Pi
description: iTunes Server on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-11-19 11:30:00
prev: /
next: false
category:
  - Raspberry PI
  - Apple
tag:
  - Raspberry PI
  - Apple
---

# iTunes Server on Raspberry Pi

![iTunes](/images/2013/11/iTunes.jpg)

Many of us use *iTunes* as an audio player. The trouble is that not always have ALL the songs we have available, and the best would be an external hard drive with songs repository to access remotely from our iDevices to them.

*Raspberry Pi* will help us on this mission...

- - -
*forked-daapd is an iTunes music server, which can be controlled by Apple Remote on iPod/iPhone or by an app like TunesRemote+ on Android. You can also control it via iTunes itself. It can output audio locally or to Airport Express compatible devices.*

###  [Install]

With **apt-get**:

Add the next line to */etc/apt/sources.list*:
```bash
http://www.gyfgafguf.dk/raspbian/wheezy-backports/armhf/

Now: sudo apt-get update && sudo apt-get install forked-daapd
```

Edit */etc/forked-daapd.conf* restart the server with **sudo /etc/init.d/forked-daapd restart**

###  [Pair with Remote]

Make the file **pass.remote** on your *Library* with two lines: one with the name of your device and another with the *PIN* that Remote give to you when trying to pair with your *Library*. That's all!

<iframe width="560" height="315" src="//www.youtube.com/embed/D7BhMCV3UtQ" frameborder="0" allowfullscreen></iframe>

For more information you have the forum and the project readme below.

Forum: [raspberrypi.org > Improved forked-daapd (iTunes server)](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=66&t=49928)

Link: [forked-daapd.README](http://gyfgafguf.dk/raspbian/forked-daapd.README)