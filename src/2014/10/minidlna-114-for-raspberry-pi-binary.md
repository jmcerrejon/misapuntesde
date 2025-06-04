---
id: 466
title: MiniDLNA 1.1.4 for Raspberry Pi (binary)
description: MiniDLNA 1.1.4 for Raspberry Pi (binary)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-10-09 10:00:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/dlna.jpg
---

# MiniDLNA 1.1.4 for Raspberry Pi (binary)

![DLNA](/images/dlna.jpg)

The past Aug, 26 was released a new version of _MiniDLNA_, the awesome media server software, with the aim of being fully compliant with _DLNA/UPnP-AV_ clients...

---

Changes:

-   Add magic container infrastructure.

-   Add magic containers for 50 recent items for each category.

-   Fix bad null termination in AAC parsing.

-   Fix requests for the last byte of a file, which affected MKV playback on
    Philips TV's.

I've updated the _PiKISS_ script and you can install it in an instant. Now the app is a service too, so you can use: _sudo service minidlna {start|stop|status|restart|force-reload|rotate}_

Remember that _Raspbian_ install _1.0.24_ (Feb-2012) and the list of changes worth a try (see the [README](https://sourceforge.net/projects/minidlna/files/minidlna/1.1.4/) file).

Direct Download: [minidlna_1-1.4_armhf.deb (126K)](/res/minidlna_1-1.4_armhf.deb)

PiKISS project: [github > PiKISS > mediaserver.sh](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/server/mediaserver.sh)
