---
id: 663
title: New Raspbian OS with GPU support on Desktop
author: Jose Cerrejon
icon: pen-to-square
date: 2016-02-10 10:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# New Raspbian OS with GPU support on Desktop

![Raspbian](/images/raspbian.jpg)

New Raspbian OS available with a number of improvements that we will discuss below. Surely one of them are very interested...

- - -
<iframe width="400" height="225" src="https://www.youtube.com/embed/WMfgXOHWAnc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

* Fix issues.

* New versions: *Sonic Pi, Scratch, Mathematica, Node-RED, WiringPi, RPi.GPIO, Java 8 version 65.*

* Experimental *OpenGL* driver for the desktop which uses the *GPU* to provide hardware acceleration. This is turned off by default. You can find it in the command-line version of *raspi-config*, under *Advanced Options->GL Driver*. Due to memory requirements, this will not work on Pi 1 or Pi Zero boards - it is solely for Pi 2. (raspi-config will only allow it to be enabled on a Pi 2; be warned that if you enable it on a Pi 2 and then move that SD card into a Pi 1 or Pi Zero, the Pi will not boot.)

Let's check out the performance:

```bash
sudo apt-get install mesa-utils && glxgears
sudo apt-get install neverball && neverball
```

If you want to test more apps, just type: *apt-cache search opengl*

Run the next commands to update your distro:

```bash
sudo apt-get update
sudo apt-get dist-upgrade
sudo apt-get install raspi-gpio
sudo apt-get install xcompmgr libgl1-mesa-dri
```

Link: [raspberrypi.org > Downlaods](https://www.raspberrypi.org/downloads/)

Link: [raspberrypi.org > Another new Raspbian Release](https://www.raspberrypi.org/blog/another-new-raspbian-release/)
