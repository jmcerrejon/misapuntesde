---
id: 676
title: Minimal Debian Jessie image for the ODROID by Meveric
description: Minimal Debian Jessie image for the ODROID by Meveric
author: Jose Cerrejon
icon: pen-to-square
date: 2016-03-09 13:00:00
prev: /
next: false
category:
    - ODROID
tag:
    - ODROID
image: /images/2016/03/jessie_meveric.png
---

# Minimal Debian Jessie image for the ODROID by Meveric

![jessie_meveric](/images/2016/03/jessie_meveric.png)

The best part about _Linux_ is its high level of customization. If you have some knowledge, build your own distribution is a difficult but rewarding task. At the end of the day, the operating system is where we spent most of the time and is like a new home: You decide whether empty or furnished purchases. Today I bring you an operating system for your _ODROID X/XU4/XU3_ by the great _meveric_.

---

-   Resize on first boot and it configure SSH.

-   Kernel & headers installed.

-   _ntp, htop, mc, vim and bash-completion_.

-   Login: **root** | Password: **odroid**

-   Tested for install and run _XBMC, Chromium, games with 3D support,..._.

If you want to install a Desktop (_LXDE_ is my best recommendation):

```bash
apt-get upodate
taskel
apt-get install xf86-video-armsoc-odroid
apt-get install mali400-odroid
cd /etc/X11
wget https://oph.mdrjr.net/meveric/other/xorg.conf
```

Link: [forum.odroid.com > Debian Jessie X (81 MB)](https://forum.odroid.com/viewtopic.php?f=23&t=19281)

Link: [forum.odroid.com > Debian Jessie XU4/XU3 (99 MB)](https://forum.odroid.com/viewtopic.php?f=96&t=17542)
