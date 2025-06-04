---
id: 349
title: Raspbian minimal. What's your choice? (Part I)
description: Raspbian minimal. What's your choice? (Part I)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-01-14 09:19:52
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Raspbian minimal: What's your choice? (Part I)

![raspberrypi](/images/sd%20pile.png)

Sometime as developer or admin with expertise, we need a distro with a few installed packages and a bunch of free *RAM*. In this case, we can use a *Raspbian* minimal. I cover on this article two of them.

- - -
![minibian](/images/minibian.jpg)

###  MINImal raspBIAN image for Raspberry Pi (Minibian)

**Download:** [sourceforge.net](http://sourceforge.net/projects/minibian/)

**Last file uploaded:** *2013-10-13-wheezy-minibian.tar.gz (188.5 MB)*

**Login:** *root* | **Password:** *raspberry*

<a title="Minibian" rel="lightbox" href="/images/2014/01/minibian.jpg">
<img width="324" height="242" src="/images/2014/01/minibian_min.jpg">
</a>

**Info:**

* Kernel 3.10.25+ #622 ARM HF (Hard Float)

* 22 secs boot

* 583 Mb disk space used

* Fit on 1GB SD Card

* Optimized ext4 file system with swap disabled

* Targeted for embedded or server applications (NAS, Web server, electronic applications)

* 100% full compatible with official release

* DHCP client enabled

* SSHD enabled

* 45 Mb RAM used after boot

**Notes:** No desktop environment installed, as usual on this kind of distro. **build-essential** is not installed (*60.5 MB* of additional disk space). *config.txt* only with the option to set *GPU*, but you can fill with others as you can see on [elinux.org](http://elinux.org/RPiconfig). **raspi-config** is missing. **camera-utils** is installed by default.

###  Raspbian Wheezy armhf Raspberry Pi minimal image

**Direct Download:** [linuxsystems.it](http://files2.linuxsystems.it/raspbian_wheezy_20130923.img.7z)

**Last file uploaded:** *raspbian_wheezy_20130923.img.7z (123.4 MB)*

**Login:** *root* | **Password:** *raspberry*

<a title="Raspbian Wheezy armhf Raspberry Pi minimal image" rel="lightbox" href="/images/2014/01/RaspMinimal.jpg">
<img width="324" height="242" src="/images/2014/01/RaspMinimal_min.jpg">
</a>

**Info:**

* 3.6.11+ hardfp kernel with latest raspberry pi patches

* Disabled incremental updates, means apt-get update is much faster

* Workaround for a kernel bug which hangs the Raspberry Pi under heavy network/disk loads

* Latest version of the firmwares

* Fits 1GB SD cards

* A very tiny 118MB image: even with a 2GB SD there is a lot of free space

* The clock is automatically updated using ntp

* IPv6 support

* ssh starts by default

* Just 14MB of ram usage after the boot

**Notes:** The author cover two versions: soft or hard float support. *config.txt* have several default options. Boot process is faster than the first *Minibian* commented before. We have a *swap RAM partition*, but you can disable it to reclaim *RAM*.You need to use *gparted* or another similar app to resize the partition, because there is a *swap* partition at the end who doesn't allow to resize the first. You can delete it with the next commands anyway:

```bash
parted /dev/mmcblk0
print <- show partitions
rm 3 <- delete partition number 3
quit <- exit from parted
```
 
On both distribution **raspi-config** is missing, but you can install it with the next commands:
```bash
echo "deb http://archive.raspberrypi.org/debian/ wheezy main" >> /etc/apt/sources.list
wget http://archive.raspberrypi.org/debian/raspberrypi.gpg.key
apt-key add raspberrypi.gpg.key
apt-get update && apt-get install raspi-config -y
raspi-config
```


Jump to the second part [here](/post.php?id=363).