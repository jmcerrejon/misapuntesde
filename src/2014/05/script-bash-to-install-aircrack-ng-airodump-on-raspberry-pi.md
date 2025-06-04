---
id: 404
title: Script bash to install Aircrack-NG + Airodump on Raspberry Pi
description: Script bash to install Aircrack-NG + Airodump on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-05-22 11:35:18
prev: /
next: false
category:
  - General
  - Raspberry PI
tag:
  - General
  - Raspberry PI
---

# Script bash to install Aircrack-NG + Airodump on Raspberry Pi

![psswd](/images/passwd_02.jpg)

Meanwhile I'm preparing my talk at the [BetaBeers](http://betabeers.com/event/vi-betabeers-huelva-1892/) from my city about [GODOT Engine](http://www.godotengine.org/), I update the [Google Docs](http://goo.gl/Iwhbq)  and prepare and article for tomorrow Friday too.

Today I found looking for scripts to make life easier for us, one to install *Aircrack-NG + Airodump*...

- - -
The *script* install on your system the latest version downloaded from the repository and It takes about 15 minutes to compile, so patience...

```bash
wget https://raw.github.com/txt3rob/Aircrack-NG_RaspberryPI/master/install.sh
sudo chmod 777 install.sh
sudo ./install.sh
```