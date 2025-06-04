---
id: 232
title: Watch playing online games thanks to twitch.tv on Raspberry Pi
description: Watch playing online games thanks to twitch.tv on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-12 07:19:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2013/08/tarababcock.jpg
---

# Watch playing online games thanks to twitch.tv on Raspberry Pi

![Tara Babcock](/images/2013/08/tarababcock.jpg)

Would you like to see online games played by experts via streaming?. Channels dedicated to *Dota 2, Minecraft, Final Fantasy XIV, Skyrim* among others from home on your *Raspberry Pi*. Let's see!

- - -
###  [Background]

[twitch.tv](http://twitch.tv/) is a video platform leader with over **38 million visitors per month**. From there you can see and chat with users who are serving via streaming their games. No specific programming. In the main page only are users who have more viewers. You can create an account and follow channels. On *Windows* you can serve your games via streaming with *OBS (free) or xsplit (licensed)*, but our goal is to watch the games at the highest resolution (even 1080p).

[LiveStreamer](http://livestreamer.tanuki.se) is a command line interface *(CLI)* systems connecting various streaming like *Dailymotion, Youtube Live* among others, with your multimedia player.

[Twitchscript](https://raw.github.com/schmodd/twitchscript) is a Python script for *Linux/Windows* which lets you see *Twitch.tv streams* using *LiveStreamer* under the command line. It comes by default for use *VLC*, but in our case we will use to *omxplayer*.

<iframe width="560" height="315" src="//www.youtube.com/embed/izPpzS_S3GY" frameborder="0" allowfullscreen></iframe>

###  [Installation]

Follow the next steps:

```bash
sudo apt-get install rtmpdump python-pip && sudo pip install livestreamer
wget https://raw.github.com/schmodd/twitchscript/master/twitchscript.py
```

Modify the lines 46-47:

```bash

#playerCommand = 'vlc'
playerCommand = 'omxplayer -o hdmi'

```

Set execute permission with **chmod +x twitchscript.py**

and run: **./twitchscript.py**

Enjoy!

***NOTE:*** Thanks to David Rodr&iacute;guez, [@NeoDaVe](http://twitter.com/neodave) for his collaboration.

Links: [Youtube - How to Live Stream to Twitch Tv](http://www.youtube.com/watch?v=S5LxyEJTpho)