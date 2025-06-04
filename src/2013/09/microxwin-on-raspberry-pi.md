---
id: 256
title: MicroXwin on Raspberry Pi
description: MicroXwin on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-09-03 08:15:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
---

# MicroXwin on Raspberry Pi

<iframe width="480" height="360" src="//www.youtube.com/embed/zttcdPtJN8A" frameborder="0" allowfullscreen></iframe>

X Windows is a network oriented and client-server design with the X server responsible for all graphics operations.

**MicroXwin** is binary compatible to the _Xlib API_. However it is neither client server nor network oriented. Graphics operations are implemented in the _linux kernel_ via a _kernel_ module and makes this solution smaller and faster than traditional _X Windows._

---

Why should you consider using _MicroXwin_.

-   Snappy GUI - _MicroXwin_ has 2X times faster graphics, faster event handling, low latency and low round-trip delays.

-   Lower Memory Usage - _MicroXwin's kernel_ based X server uses < 1/2MB versus 29MB used by _Xorg's_ frame buffer X server.

-   Compatibility - _MicroXwin_ is binary compatible with standard _X11_ at the _Xlib_ layer. So you can run all the standard applications and window managers.

Now is available on Raspberry Pi. If you want to test a demo, download from the link below.

Download: [microxwin.com > rasbianwheezy.tar.gz](https://www.microxwin.com/rasbianwheezy.tar.gz)

More info: [Compatibilidad](https://www.microxwin.com/compatability.html)
