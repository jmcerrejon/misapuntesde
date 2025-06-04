---
id: 602
title: NVIDIA Game Streaming with ODROID
description: NVIDIA Game Streaming with ODROID
author: Jose Cerrejon
icon: pen-to-square
date: 2015-08-10 10:00:00
prev: /
next: false
category:
  - ODROID
tag:
  - ODROID
image: /images/2015/08/nvidia.png
---

# NVIDIA Game Streaming with ODROID

![nvidia.png](/images/2015/08/nvidia.png)

To play comfortably on the 50" screen in your living room need to take the PC out there, or have a *ODROID XU3/4* and follow these simple steps to send by streaming the signal from your computer. Notice that you have a limitation *720p/30fps* now, but it's enough to play decently. All you need is a *nVIDIA GTX 600/700/900* series.

- - -
Pre-requisites:

```bash
sudo apt-get install libssl-dev libopus-dev libasound2-dev libudev-dev libavahi-client-dev libcurl4-openssl-dev libevdev-dev libavcodec-ffmpeg-dev libavutil-ffmpeg-dev libswscale-ffmpeg-dev
```

Compile with the next sentences:

```bash
git clone https://github.com/AreaScout/moonlight-embedded.git && cd moonlight-embedded

git submodule init && git submodule update
cmake . -DODROID=ON -DFFMPEG=ON
make -j5
```

We pair with *nVIDIA Game Streaming: ./moonlight pair PC-IP*. *PC-IP* is the *IP* where you have the card.

Once you have entered the *PIN* has given in your PC, you can add in *nVIDIA Experience* a short name to the game you want on *Settings > Shield* and type in your *ODROID* the following to start playing:

```bash
DISPLAY=:0.0 ./moonlight stream xxx.xxx.xxx.xxx -app "short name"
```

Link: [forum.odroid.com > NVIDIA Game Streaming with ODROID](http://forum.odroid.com/viewtopic.php?f=91&t=15456)
