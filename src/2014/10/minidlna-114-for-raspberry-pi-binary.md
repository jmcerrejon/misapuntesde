---
id: 466
title: MiniDLNA 1.1.4 for Raspberry Pi (binary)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-10-09 10:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# MiniDLNA 1.1.4 for Raspberry Pi (binary)

![DLNA](/images/dlna.jpg)

The past Aug, 26 was released a new version of *MiniDLNA*, the awesome  media server software, with the aim of being fully compliant with *DLNA/UPnP-AV* clients...

- - -
Changes:

* Add magic container infrastructure.

* Add magic containers for 50 recent items for each category.

* Fix bad null termination in AAC parsing.

* Fix requests for the last byte of a file, which affected MKV playback on 
Philips TV's.

I've updated the *PiKISS* script and you can install it in an instant. Now the app is a service too, so you can use: *sudo service minidlna {start|stop|status|restart|force-reload|rotate}*

Remember that *Raspbian* install *1.0.24* (Feb-2012) and the list of changes worth a try (see the [README](http://sourceforge.net/projects/minidlna/files/minidlna/1.1.4/) file).

Direct Download: [minidlna_1-1.4_armhf.deb (126K)](/res/minidlna_1-1.4_armhf.deb)

PiKISS project: [github > PiKISS > mediaserver.sh](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/server/mediaserver.sh)