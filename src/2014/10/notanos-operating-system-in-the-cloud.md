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

NotanOS is an _operating system_ on _Alpha_ state that has caught my attention and reminded me to [EyeOS](https://www.eyeos.com).

Imagine install an app based on _Node.JS_ and make available in any web browser a front-end with a entire graphic desktop...

---

<iframe width="560" height="315" src="//www.youtube.com/embed/7namj7iy16Y" frameborder="0" allowfullscreen></iframe>

As mentioned, the requirements are minimal: any operating system (not _Raspbian_ necessarily), _node.JS_ and [userserv](https://github.com/Lerc/userserv). Then run the following and access from a web browser to _https://ip-raspberrypi_:

```bash
wget https://fingswotidun.com/cruft/notanos.tar.gz
tar -xzf notanos.tar.gz
ln -sr notanos ~/Notanos
```

It don't have a demo where you can "play", but the idea is very close to _EyeOS_ with a demo ready for you in this [link](https://www.softaculous.com/demos/eyeOS).

Link: [github.com > notanos](https://github.com/Lerc/notanos)
