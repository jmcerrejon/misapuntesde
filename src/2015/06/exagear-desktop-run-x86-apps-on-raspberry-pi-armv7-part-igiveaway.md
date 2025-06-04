---
id: 573
title: Exagear Desktop. Run x86 apps on Raspberry Pi & ARMv7 (Part I+Giveaway)
description: Exagear Desktop. Run x86 apps on Raspberry Pi & ARMv7 (Part I+Giveaway)
author: Jose Cerrejon
icon: pen-to-square
date: 2015-06-08 08:00:00
prev: /
next: false
category:
    - Raspberry PI
    - ODROID
    - Banana Pi
tag:
    - Raspberry PI
    - ODROID
    - Banana Pi
image: /images/2015/06/ExaGear_Desktop_tr.png
---

# Exagear Desktop: Run x86 apps on Raspberry Pi & ARMv7 (Part I+Giveaway)

![Exagear Logo](/images/2015/06/ExaGear_Desktop_tr.png)

Would you like to install some x86 Linux apps on your favorite board?. Surely you've heard about _Exagear Desktop_, a payment software that allows you to launch applications based on _x86 (32-bit)_. Maybe you have doubts about if it really works.

The company [Eltechs](https://eltechs.com/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release) has contacted to me to make a review about their product. 5-10% is difference between ExaGear v1.0 and v1.1. I know only one similar solution - Qemu. Performance comparing to Qemu is 5x (500%)!

Are you interested or curious about how it works?. I've seen comparisons and graphics in several sites about their performance, but nowhere have made real test running software. I bring **the first analysis** about this product and we'll see in the following two articles if it really worth. In addition, **we are giving away 10 free licenses of Exagear Desktop**.

---

### [ What really about? ]

This solution implement a _virtual machine (VM)_. It's a container for _x86 applications_ inside a board with _ARM_ processor. That is, you have a host computer (_PI, ODROID_, etc.), an a guest (_x86 VM_).

I'm going to test the latest version, [Eltechs ExaGear Desktop 1.1.](https://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release)

### [ Requirements ]

This product takes nearly a year on the market, and it is compatible with the _Raspberry Pi 2_. Now it brings support also for _Raspberry Pi A/B/B+_, and have gained support to other boards like _ODROID, Banana Pi, CubieBoard_ or any with _ARMv7 processor_, as mentioned before.

The requirements what you need:

-   _Raspberry Pi 1, Raspberry Pi 2, ODROID, CubieBoard, CuBox, Utilite, Jetson TK1, Wandboard, Banana Pi_ or whatever with _ARMv7_ support.

-   For applications using _MMX/SSE_, you also need [NEON](https://www.arm.com/products/processors/technologies/neon.php) and _vfp_ support. This technology called **NEON** handles multimedia accelerate algorithms in general: Decode video or _2D/3D_ graphics among others. You can check whether your motherboard supports running the following command: **cat /proc/cpuinfo | grep 'neon\\|vfpv3'**.

-   _Ubuntu 12.04/14.04, Debian 7 or Raspbian_. Check your _Ubuntu_ version with: **cat /etc/lsb-release**

-   _binfmt_misc_ kernel module. You should also have it, but if you want to make sure, execute one of the following instructions and get a result, it means that is supported:

```bash
cat /proc/config.gz | gzip -d | grep CONFIG_BINFMT_MISC
cat /proc/sys/fs/binfmt_misc/status
```

### [ Installation ]

![Exagear_dir](/images/2015/06/exagear_dir.png)

In my case, I have several packages: _Raspberry Pi, Raspberry Pi 2_ and for _ARMv7_ processors. As you can see, it will install a virtual image adapted to the operating system that you have installed. That is, if your operating system is _Raspbian_, the installer **will use an _x86 Raspbian_ image as a _guest_.**

There are two installation methods:

-   Automatic Installation: Run _/install-exagear.sh_ as _root_ in the directory with packages and **copy your license key file on it** (important). The script will make a series of test and will begin installing the necessary packages:

```bash
# ./install-exagear.sh
System memory configuration is determined as 2g/2g
ARCH=armv7l
HOST OS: debian
HOST OS VERSION: "7"
EXAGEAR package: exagear-mem2g_*-1_armhf.deb
EXAGEAR guest image package: 'exagear-guest-debian-7-wine2g_*_all.deb'
Installing prerequisites...
```

### ### Installer on Raspbian with a Raspberry Pi 2

![Exagear Desktop installing on ODROID-C1](/images/2015/06/installing_exagear.jpg "Exagear Desktop installing on ODROID-C1")

-   Manual Installation: Following these steps.

```bash
sudo apt-get install -y bash coreutils findutils realpath curl binfmt-support cron
sudo dpkg -i exagear_<package_version>.deb
sudo dpkg -i exagear-guest-<package_version>.deb
sudo cp <your license key> /opt/exagear/lic
sudo /opt/exagear/bin/actool
```

Ready!. Application is installed together with the packages needed to run everything correctly. The image what really does is expand in the directory _/opt/exagear/images/\<name of your image\>_, the guest system. So, once we are inside the virtual machine, you will really work in that directory (similar to _chroot_ command).

### [ First steps ]

To ensure that the image that we installed is Ok, we can use **command-ls**. If you have a _ODROID_ board, it shows you:

```bash
Installed guest images:
ubuntu-1404lts
```

To access the guest system, you must type **exagear**:

```bash
$ exagear
Starting the shell in the guest image /opt/exagear/images/ubuntu-1404lts
$ uname -a
Linux odroid 3.10.79-87 #1 SMP PREEMPT Wed Jun 3 14:57:54 BRT 2015 i686 i686 i686 GNU/Linux
```

Eureka, you have your own _x86 VM_ running!. It was very easy to get here. To return to our guest operating system, type **exit**

One detail to note is that users share the guest machine to the host computer. That is, within the _VM_, have the same users and the same folder _/home_ that in your main operating system.

### [ Giveaway ]

You have arrived at the end of the first part of this review. If you like to try this software, [Eltechs](https://eltechs.com/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release) has been kind enough to give **10 free Exagear Desktop licenses** for readers of this blog. The rules are simple:

-   Share a message on _Twitter, LinkedIn, FaceBook or Google Plus_ with the next text: **"I want a free license of Exagear Desktop to My Raspberry Pi/Odroid/cubieboard (or whatever you want)"**. That is, if you want a license for your _Raspberry Pi 2_, would be: _I want a free license of Exagear Desktop to My Raspberry Pi 2_. You can see the supported boards on the official website of the product.

-   Send the link you have just shared to the _e-mail_: [raffle@eltechs.com](mailto:raffle@eltechs.com)

-   Only one email per person and social network is allowed, so **you can participate a maximum of 4 times**.

-   It is optional, but if you want, you can follow us on _Twitter_: [ulysess10](https://twitter.com/ulysess10) | [Eltechs](https://twitter.com/eltechs)

-   You have until next Sunday 14th to participate.

Good luck!
