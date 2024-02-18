---
id: 167
title: Wayland to speed up the desktop
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

<iframe width="560" height="315" src="http://www.youtube.com/embed/0UkUal_hHx8" frameborder="0" allowfullscreen></iframe>

First, thank to all of you... ***40,000 visitors!***. The blog is unstoppable. I received daily several emails thanking to me for the blog and I try to answer the questions from you. The [Google Docs](http://goo.gl/Iwhbq) has increasingly followers and next week we have our ***first contest!***, So pay attention.

As you know, the desktop can be a bit slower to move around than you're used to on your Pi. This is because all the processing is made by the the *CPU*...

- - -
The desktop system is not optimized to use the graphic core *BCM2835* on the *Raspberry Pi*. The *Raspberry Pi Foundation* and a company called [Collabora](http://www.collabora.com/services/case-studies/raspberrypi) will remedy this.

If you've seen the video that heads this article, you will see the preview they are riding based on [Wayland](http://wayland.freedesktop.org/), a new system that will handle composition specifications coexisting with the *X* for a new generation that will build the full potential of graphics chips and not just the Raspi. We will look at other platforms and distributions (except in *Ubuntu*, who have decided to create their own solution).

*Wayland* core running on the video as we mentioned, but in parallel to *OpenGL ES*, so we can continue using both *3D* renderings, freeing the *ARM CPU* to handle other tasks.

This will be implemented before the end of year, and we will be able to *"play"* with it in the next version of Raspbian before launch the final release.

Link: [raspberrypi.org](http://www.raspberrypi.org/archives/4053)