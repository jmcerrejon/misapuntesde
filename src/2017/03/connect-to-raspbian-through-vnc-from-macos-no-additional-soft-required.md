---
id: 772
title: Connect to Raspbian through VNC from macOS (no additional soft required)
description: Connect to Raspbian through VNC from macOS (no additional soft required)
author: Jose Cerrejon
icon: pen-to-square
date: 2017-03-02 12:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2017/03/pixel-raspbian-vnc.jpg
---

# Connect to Raspbian through VNC from macOS (no additional soft required)

![Pixel-VNC](/images/2017/03/pixel-raspbian-vnc.jpg)

Yes, I am not discovering anything new, but I confess one thing: I hate to install new applications if my operating system already comes with the software installed, and in this case both *Raspbian* and *macOS* comes with the necessary tools, but maybe we just don't know that...

- - -
### [ Raspbian ]

The first will be to enable access by *VNC*. We go to *Menu > Preferences > Raspberry Pi Configuration* and we need to enable the access as in the following capture:

![raspi-config](/images/2017/03/raspi-config.png)

A new icon will appear in the *Taskbar* to access the options of the *VNC server*. Press *right button > options* and change the authentication system to *VNC password*. Now ask us to add a password that will need to input when we remotely need access to our *Raspbian* desktop.

![VNC Server options](/images/2017/03/vnc_01.jpg "VNC Server options")

### [ macOS ]

You have two options: opening *Terminal* and...

```bash
open vnc://RaspberryPi_ip
```

where *RaspberryPi_ip* is the *IP* of your *Pi*, or from *Finder* with *Cmd+K* and adding the vnc connection.

![macOS with Raspbian remote desktop](/images/2017/03/vnc_02.jpg "macOS with Raspbian remote desktop")