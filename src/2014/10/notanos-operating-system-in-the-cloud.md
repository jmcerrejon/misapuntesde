---
id: 465
title: NotanOS. Operating System in the cloud
description: NotanOS. Operating System in the cloud
author: Jose Cerrejon
icon: pen-to-square
date: 2014-10-08 09:20:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2014/10/notanos.png
---

# NotanOS: Operating System in the cloud

![NotanOS](/images/2014/10/notanos.png)

NotanOS is an *operating system* on *Alpha* state that has caught my attention and reminded me to [EyeOS](http://www.eyeos.com).

Imagine install an app based on *Node.JS* and make available in any web browser a front-end with a entire graphic desktop...

- - -
<iframe width="560" height="315" src="//www.youtube.com/embed/7namj7iy16Y" frameborder="0" allowfullscreen></iframe>

As mentioned, the requirements are minimal: any operating system (not *Raspbian* necessarily), *node.JS* and [userserv](https://github.com/Lerc/userserv). Then run the following and access from a web browser to *https://ip-raspberrypi*:

```bash
wget http://fingswotidun.com/cruft/notanos.tar.gz
tar -xzf notanos.tar.gz
ln -sr notanos ~/Notanos
```

It don't have a demo where you can "play", but the idea is very close to *EyeOS* with a demo ready for you in this [link](https://www.softaculous.com/demos/eyeOS).

Link: [github.com > notanos](https://github.com/Lerc/notanos)