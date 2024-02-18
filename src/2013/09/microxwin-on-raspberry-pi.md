---
id: 256
title: MicroXwin on Raspberry Pi
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

**MicroXwin** is binary compatible to the *Xlib API*. However it is neither client server nor network oriented. Graphics operations are implemented in the *linux kernel* via a *kernel* module and makes this solution smaller and faster than traditional *X Windows.*

- - -
Why should you consider using *MicroXwin*.

* Snappy GUI - *MicroXwin* has 2X times faster graphics, faster event handling, low latency and low round-trip delays.

* Lower Memory Usage - *MicroXwin's kernel* based X server uses < 1/2MB versus 29MB used by *Xorg's* frame buffer X server.

* Compatibility - *MicroXwin* is binary compatible with standard *X11* at the *Xlib* layer. So you can run all the standard applications and window managers.

Now is available on Raspberry Pi. If you want to test a demo, download from the link below.

Download: [microxwin.com > rasbianwheezy.tar.gz](http://www.microxwin.com/rasbianwheezy.tar.gz)

More info: [Compatibilidad](http://www.microxwin.com/compatability.html)