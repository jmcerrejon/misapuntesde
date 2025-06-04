---
id: 167
title: Wayland to speed up the desktop
description: Wayland to speed up the desktop
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-24 09:00:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
---

# Wayland to speed up the desktop

<iframe width="560" height="315" src="https://www.youtube.com/embed/0UkUal_hHx8" frameborder="0" allowfullscreen></iframe>

First, thank to all of you... **_40,000 visitors!_**. The blog is unstoppable. I received daily several emails thanking to me for the blog and I try to answer the questions from you. The [Google Docs](https://goo.gl/Iwhbq) has increasingly followers and next week we have our **_first contest!_**, So pay attention.

As you know, the desktop can be a bit slower to move around than you're used to on your Pi. This is because all the processing is made by the the _CPU_...

---

The desktop system is not optimized to use the graphic core _BCM2835_ on the _Raspberry Pi_. The _Raspberry Pi Foundation_ and a company called [Collabora](https://www.collabora.com/services/case-studies/raspberrypi) will remedy this.

If you've seen the video that heads this article, you will see the preview they are riding based on [Wayland](https://wayland.freedesktop.org/), a new system that will handle composition specifications coexisting with the _X_ for a new generation that will build the full potential of graphics chips and not just the Raspi. We will look at other platforms and distributions (except in _Ubuntu_, who have decided to create their own solution).

_Wayland_ core running on the video as we mentioned, but in parallel to _OpenGL ES_, so we can continue using both _3D_ renderings, freeing the _ARM CPU_ to handle other tasks.

This will be implemented before the end of year, and we will be able to _"play"_ with it in the next version of Raspbian before launch the final release.

Link: [raspberrypi.org](https://www.raspberrypi.org/archives/4053)
