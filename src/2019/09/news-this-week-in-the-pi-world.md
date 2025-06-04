---
id: 913
title: News this week in the Pi World!
description: News this week in the Pi World!
author: Jose Cerrejon
icon: pen-to-square
date: 2019-09-27 12:15:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2019/09/revolt.jpg
---

# News this week in the Pi World!

![Revolt](/images/2019/09/revolt.jpg)

Here we are another *Friday* to enjoy fresh news, relevant information and some other advice that never hurts. Today we'll see *64 bit* operating systems, *Docker*, *Raspbian* updates and a racing game, so let's get into this fast-paced **Pi World**!

- - -
<iframe width="560" height="315" src="https://www.youtube.com/embed/4su3nr68iX8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![Chromium](/images/2016/05/chromium_OS.png)

* **Chromium OS for Raspberry Pi 3B/B+ y 4 (FydeOS):** Well, the *Chromium* operating system for our beloved board. It doesn't have hardware acceleration yet and on Pi 4 it's hard to find the *HDMI* adapter, but I see it quite stable. | [github.com/FydeOS](https://github.com/FydeOS/chromium_os_for_raspberry_pi/releases)

![wine](/images/2019/09/wine.png)

* **Running Windows software on the Raspberry Pi (and other ARM devices) with Wine:** I don't want to lose sight of this article. With everything you need to emulate with *Wine* your favorite *Windows* apps. | [gist.github.com](https://gist.github.com/MIvanchev/14de59fa2552d315ac74c30cf1c0b01e)

* **Balena OS 64 bit:** There are already *64 bit* operating systems coming out for the *Raspberry Pi*, and this is one of them. Note, it is not an OS for everyone, only if you know what the word *Docker* means you will be interested. | [balena.io](https://www.balena.io/os/#download)

* **Bootable 64-bit Gentoo image for the Raspberry Pi4B, 3B & 3B+:** I'm not an active user of *Gentoo* flavor, but I think the *Raspbian* guys are a little behind migrating the operating system to *64 bit*. It comes with *Linux 4.19, OpenRC, Xfce4, VC4/V3D, camera and h/w codec support*. | [github.com/sakaki-/gentoo-on-rpi-64bit](https://github.com/sakaki-/gentoo-on-rpi-64bit)

![Azure](/images/2019/09/python-loves-vscode-raspberrypi-docker.png)

* **Raspberry Pi, Azure IoT Central, and Docker Container Debugging:** Let's see, what's missing? We have the best board, tasty *Docker* containers and *Azure IoT* with some *Python*... I think it lacks salt, but try it yourself. [PyLab 1: Raspberry Pi, Debugging a Python Internet of Things Application](https://gloveboxes.github.io/PyLab-1-Debugging-a-Python-Internet-of-Things-Application/) | [PyLab 2: Raspberry Pi, Azure IoT Central, and Docker Container Debugging](https://dev.to/azure/raspberry-pi-azure-iot-central-and-docker-container-debugging-56hn)

* **VLI firmware v2.0 - powersaving features enabled:** Do you have issues with your Pi4 and poor performance on *USB* ports? It's a very brief summary, but the following firmware "seems" to solve some of these problems such as transfer speed, but adds others. When will this nightmare end? | [raspberrypi.org/forums](https://www.raspberrypi.org/forums/viewtopic.php?f=28&t=250990)

* **Compatibility with ext-fat on Raspbian:** Curiously enough, it doesn't have compatibility with this file system by default, but there is no problem if we run the following on the terminal:

```bash
sudo apt install -y exfat-fuse exfat-utils
```

![EEPROM](/images/2019/09/eeprom.png)

* **A New bootloader EEPROM is available:** Our *Raspberry Pi* has a memory called *EEPROM* that contains code to start the system and replaces the *bootcode.bin* found in the */boot* partition of the SD card. This file **is ignored in case of a Raspberry Pi 4**. On the new thing that they have incorporated for the new board of the foundation, we have at last support for boot through the network, but I refer you to the changelog [here](https://github.com/raspberrypi/rpi-eeprom/blob/master/firmware/release-notes.md). More info about the *EEPROM* memory on [this link](https://www.raspberrypi.org/documentation/hardware/raspberrypi/booteeprom.md). **You can update it with the following commands if you have the Pi 4**:

```bash
sudo apt update; sudo apt upgrade; sudo apt install rpi-eeprom
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/9NkV9N0aZqU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* **Revolt for Raspberry Pi:** *Revolt* is a fairly addictive and visually very good radio control car racing game. I remember play this game with my brother in the 90's. Now we'll be able to enjoy it in our Raspi with this simple script that I have prepared for you. If you want to have in your *Raspberry Pi* a particular game that can be carried, put it in the comments, I accept suggestions. Thanks to the *YouTube* channel of [PI LAB](https://www.youtube.com/channel/UCgfQjdc5RceRlTGfuthBs7g) for the effort he's making to bring us all these games. | [github.com > PiKISS > revolt.sh](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/games/revolt.sh)


Happy weekend!