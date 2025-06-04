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
image: /images/2013/11/iTunes.jpg
---

# iTunes Server on Raspberry Pi

![iTunes](/images/2013/11/iTunes.jpg)

Many of us use _iTunes_ as an audio player. The trouble is that not always have ALL the songs we have available, and the best would be an external hard drive with songs repository to access remotely from our iDevices to them.

_Raspberry Pi_ will help us on this mission...

---

_forked-daapd is an iTunes music server, which can be controlled by Apple Remote on iPod/iPhone or by an app like TunesRemote+ on Android. You can also control it via iTunes itself. It can output audio locally or to Airport Express compatible devices._

### [Install]

With **apt-get**:

Add the next line to _/etc/apt/sources.list_:

```bash
https://www.gyfgafguf.dk/raspbian/wheezy-backports/armhf/

Now: sudo apt-get update && sudo apt-get install forked-daapd
```

Edit _/etc/forked-daapd.conf_ restart the server with **sudo /etc/init.d/forked-daapd restart**

### [Pair with Remote]

Make the file **pass.remote** on your _Library_ with two lines: one with the name of your device and another with the _PIN_ that Remote give to you when trying to pair with your _Library_. That's all!

<iframe width="560" height="315" src="//www.youtube.com/embed/D7BhMCV3UtQ" frameborder="0" allowfullscreen></iframe>

For more information you have the forum and the project readme below.

Forum: [raspberrypi.org > Improved forked-daapd (iTunes server)](https://www.raspberrypi.org/phpBB3/viewtopic.php?f=66&t=49928)

Link: [forked-daapd.README](https://gyfgafguf.dk/raspbian/forked-daapd.README)
