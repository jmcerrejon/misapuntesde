---
id: 361
title: PiCore 5.2 for Raspberry Pi
description: PiCore 5.2 for Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-02-05 14:28:36
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/02/picore_monitor.jpg
---

# PiCore 5.2 for Raspberry Pi

![picore](/images/2014/02/picore_monitor.jpg)

Today I wanted to write about **Picore**, a distribution created by _Robert Shingledecker_ running directly in _RAM_. Yesterday _5.2alpha1_ version was released. I have tested it for you.

---

Nobody complains that there are no operating systems for our _Raspberry Pi_. Almost all of us use _Raspbian_, but gems like this open our minds to explore alternatives that have always been there. Just need a little push and see what offer this version of _Tiny Core Linux_ to us.

![picore install](/images/2014/02/picore_downloads.jpg)

Installation is as simple as choosing the version that best suits our needs:

-   **piCore-5.x.zip** is the base system without graphical environment but with all the power at our disposal. It takes about **7 seconds** to boot. The changes you make will not be saved on every boot, although this behavior can be modified.

-   **piCore-5.x-SSH.zip** contains the same as above, but with **SSH Server** for remote connections and _midnight commander_. For connection via _SSH_ the user is **tc** and password **piCore**.

-   **piCore-5.x-X.zip** presents a graphical environment with Dock on the bottom bar. Boots in about **25 seconds** and it have several utilities to configure the network, mount partitions or install programs among others (I found browsing _SDL2_ who giving to me many headaches on _Raspbian_).

<a title="PiCore base system" rel="lightbox" href="/images/2014/02/picore_01.jpg">
<img width="324" src="/images/2014/02/picore_01_min.jpg">
</a>

It starts with a default user named _tc_ with no password and you can't run as root. Comes with a _SWAP_ partition zlib compressed in _RAM_, although it can be disabled through the [boot codes](https://tinycorelinux.net/faq.html#bootcodes) or directly on **/mnt/mmcblk0p1/cmdline.txt**.

<a title="PiCore with graphical environment" rel="lightbox" href="/images/2014/02/picore_02_desktop.jpg">
<img width="324" src="/images/2014/02/picore_02_desktop_min.jpg">
</a>

To find applications on the terminal, use the command **tce-ab app_name**. This command will allow us once you have found our program, several actions such as install or download it.

<a title="Terminal" rel="lightbox" href="/images/2014/02/picore_03_terminal.jpg">
<img width="324" src="/images/2014/02/picore_03_terminal_min.jpg">
</a>

In conclusion,I liked the first contact with this distro. I hope to test it more thoroughly and if you test it, I would like to know your opinion.

See you soon!

Download: [tinycorelinux.net](https://tinycorelinux.net/5.x/armv6/release_candidates/)

Link: [Foro](https://forum.tinycorelinux.net/index.php/board,57.0.html)

Link: [Apps list to install](https://tinycorelinux.net/5.x/armv6/tcz/)
