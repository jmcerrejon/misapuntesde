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

Would you like to see online games played by experts via streaming?. Channels dedicated to _Dota 2, Minecraft, Final Fantasy XIV, Skyrim_ among others from home on your _Raspberry Pi_. Let's see!

---

### [Background]

[twitch.tv](https://twitch.tv/) is a video platform leader with over **38 million visitors per month**. From there you can see and chat with users who are serving via streaming their games. No specific programming. In the main page only are users who have more viewers. You can create an account and follow channels. On _Windows_ you can serve your games via streaming with _OBS (free) or xsplit (licensed)_, but our goal is to watch the games at the highest resolution (even 1080p).

[LiveStreamer](https://livestreamer.tanuki.se) is a command line interface _(CLI)_ systems connecting various streaming like _Dailymotion, Youtube Live_ among others, with your multimedia player.

[Twitchscript](https://raw.github.com/schmodd/twitchscript) is a Python script for _Linux/Windows_ which lets you see _Twitch.tv streams_ using _LiveStreamer_ under the command line. It comes by default for use _VLC_, but in our case we will use to _omxplayer_.

<iframe width="560" height="315" src="//www.youtube.com/embed/izPpzS_S3GY" frameborder="0" allowfullscreen></iframe>

### [Installation]

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

**_NOTE:_** Thanks to David Rodr&iacute;guez, [@NeoDaVe](https://twitter.com/neodave) for his collaboration.

Links: [Youtube - How to Live Stream to Twitch Tv](https://www.youtube.com/watch?v=S5LxyEJTpho)
