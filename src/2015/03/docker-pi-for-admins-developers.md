---
id: 528
title: Docker-Pi for admins & developers
author: Jose Cerrejon
icon: pen-to-square
date: 2015-03-11 09:10:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Docker-Pi for admins & developers

![Docker Logo](/images/2015/03/docker-logo.png)

As a developer, I have no choice to be the latest in terms of technologies, methodologies and new systems that make my day easier to carry the day. I use *Vagrant* and want to migrate to [Docker](https://www.docker.com/whatisdocker/), which is one of those technologies that I love him more attention. Is it worth it?

- - -
For those who do not know, **Vagrant** lets you create a separate virtual environment to your main operating system. The goal is for all developers working on a project basis and then there are no problems when launching the releases in the production center, for example.

**Vagrant** use *VirtualBox*. With a few commands, you have a **virtualized OS ready to develop with your favorite language**.

**Docker** is the same, but no need to create a complete virtual machine. It uses a small **engine with a client and a server**, and shares the kernel of your main OS, being more efficient.

*Govinda Fichtner* has created an operating system based on **Raspbian for Raspberry Pi with Docker 1.5.0 and kernel 3.18.8**. You will not have to install anything else. It supports *OverlayFS*, which in theory sweeps alternatives such as *lvm* or *btrfs*. Images to prepare a machine with *Node.js, Java or Python* should be compatible with *ARM*, but that they had already designed and created multiple repositories adapted to the *ARM* processors can be found in [this link](https://registry.hub.docker.com/search?q=hypriot&searchfield=). 
 
Link: [blog.hypriot.com](http://blog.hypriot.com/heavily-armed-after-major-upgrade-raspberry-pi-with-docker-1-dot-5-0)

DD image (~347MB): [Docker-Pi](http://assets.hypriot.com/hypriot-rpi-20150301-140537.img.zip)