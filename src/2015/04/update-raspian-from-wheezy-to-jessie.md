---
id: 555
title: Update Raspian from Wheezy to Jessie
description: Update Raspian from Wheezy to Jessie
author: Jose Cerrejon
icon: pen-to-square
date: 2015-04-29 10:15:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/raspbian.png
---

# Update Raspian from Wheezy to Jessie

![Raspbian](/images/raspbian.png)

I've been all this time dealing with *Debian Jessie* on my *Mac* and I am delighted. *Jessie* now supports *ARM* processors, so it is very easy also upgrade our *Raspbian* distribution with little effort.

After the jump I'll teach you how...

- - -
By the way, if you want a *script* to help you when installing *Jessie* on your *PC/Mac*, I'm developing one [here](https://github.com/jmcerrejon/scripts/blob/master/debian_8_post_install.sh). You will find everything you need to install **Chrome, Steam, Docker,...** and adjust your computer so that you feel comfortable (bye bye *OSX*, at least for a while).

In the case of *Raspbian*, run the following commands as *root*:

```bash
apt-get update && apt-get upgrade && apt-get dist-upgrade -y
sed -i 's/wheezy/jessie/g' /etc/apt/sources.list
apt-get update && apt-get upgrade && apt-get dist-upgrade -y
reboot
```

Now to make sure everything works, run **hostnamectl**

Thanks to [linuxconfig.org](http://linuxconfig.org/raspbian-gnu-linux-upgrade-from-wheezy-to-raspbian-jessie-8) for the post.