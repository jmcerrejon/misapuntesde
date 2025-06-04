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

I've been all this time dealing with _Debian Jessie_ on my _Mac_ and I am delighted. _Jessie_ now supports _ARM_ processors, so it is very easy also upgrade our _Raspbian_ distribution with little effort.

After the jump I'll teach you how...

---

By the way, if you want a _script_ to help you when installing _Jessie_ on your _PC/Mac_, I'm developing one [here](https://github.com/jmcerrejon/scripts/blob/master/debian_8_post_install.sh). You will find everything you need to install **Chrome, Steam, Docker,...** and adjust your computer so that you feel comfortable (bye bye _OSX_, at least for a while).

In the case of _Raspbian_, run the following commands as _root_:

```bash
apt-get update && apt-get upgrade && apt-get dist-upgrade -y
sed -i 's/wheezy/jessie/g' /etc/apt/sources.list
apt-get update && apt-get upgrade && apt-get dist-upgrade -y
reboot
```

Now to make sure everything works, run **hostnamectl**

Thanks to [linuxconfig.org](https://linuxconfig.org/raspbian-gnu-linux-upgrade-from-wheezy-to-raspbian-jessie-8) for the post.
