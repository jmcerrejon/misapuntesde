---
id: 545
title: DietPi for Raspberry Pi & ODROID-C1
description: DietPi for Raspberry Pi & ODROID-C1
author: Jose Cerrejon
icon: pen-to-square
date: 2015-04-06 08:00:00
prev: /
next: false
category:
    - Raspberry PI
    - ODROID
tag:
    - Raspberry PI
    - ODROID
image: /images/2015/04/dietpi.png
---

# DietPi for Raspberry Pi & ODROID-C1

![DietPi](/images/2015/04/dietpi.png)

I talked about [DietPi](/post.php?id=445) before, A minimal distribution that now support _ODROID-C1_ boards. It have some apps to custom their own OS.

It's an idea I always had in my mind: Build a minimal OS. The user can choose what kind of software want to make the function of Media Center, Web/FTP server or emulators with RetroPie...

---

It has grown in performance since the last time I met, and now the concept is different. Initially we have a _Debian minimal distribution_ (the size of the image is only 780 MB) with a series of pre-installed packages, which are:

-   Dietpi-config: Configure your board, you can overclock, configure networking, etc).

-   Dietpi-software: Install software (Look at the screenshot that heads this article).

-   Dietpi-update: Update the distribution.

-   Htop.

-   Ramlog (All logs in memory and uses less than 0.5MB of RAM).

-   Dropbear (SSH Server light).

-   Scripts preinstalled: treesize, cpu, update, logclear.

-   Automatically configures your network WIFI modifying a file in /boot/dietpi.txt.

_For ODROID-C1_, the list of software to install _"ready to run"_ is similar to what we have on the Pi: _Bittorrent Server, OwnCloud, MiniDLNA, phpbb3 (forum) or Web/FTP Server_ among others.

### [ First contact ]

First the distro makes two reboots to increase partition size according to the capacity of your SD card. We see that loads the _ntfs-3g_ driver and ask for the **root user and its password raspberry**.

Now give us a number of options:

-   Select software optimized for DietPi. Alerts you if you want to use a _USB_ hard drive. **This decision can not be changed in the future**. It is recommended if you are using it to use _BitTorrent, OwnCloud, Kodi, hindfoot, MiniDLNA._ Among the software that can be installed, highlight the above, plus _Modipy, Proftp, No-Ip_, among others.

-   Additional Software: Vim, OpenSSH Client or Samba Client.

-   Configure the distro.

-   Go Start Install. Follow along in the process.

If you do not select any software, it will give you the option to boot a _Debian_ Minimal, which is what I chose. The system reboots. Let's see how our system has run:

![htop without installing any package](/images/2015/04/dietpi_res.jpg "htop without installing any package")

I found curious that when trying to log through _SSH_, tells me to complete the installation if I'm using _DietPi-Software_. It's a detail.

![Dietpi SSH](/images/2015/04/diet_pi_ssh.png)

**The system takes just 21 MB of RAM**. I going to run _Dietpi-software_ to install _LXDE + Kodi_. I get a message if you want to start from boot any software selected. I say no and returns to the main menu. _Go Start_ to install and then the _Start Install_ button.

-   Begins to install LXDE (500 MB on the SD card) and takes about 41 seconds to install 415 packages. Phew, is the last time I do it.

-   Kodi 14.1 must take 145 MB and spend **30 minutes to install the software**. From _LXDE_, it just take 11% of _RAM_.

![LXDE on Diet-Pi](/images/2015/04/dietpi_lxde.jpg "LXDE on Diet-Pi")

Before ending this article I want to congratulate its author, _Dan Knight_, which accepts donations via [Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QHPXNR8DDQKGJ).

Link: [github.com > DietPi](https://github.com/Fourdee/DietPi)

Link: [fuzon.co.uk > Instrucciones](https://fuzon.co.uk/phpbb/viewtopic.php?f=8&t=9)
