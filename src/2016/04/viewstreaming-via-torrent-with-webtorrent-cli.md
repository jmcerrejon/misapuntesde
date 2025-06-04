---
id: 689
title: View/streaming via Torrent with Webtorrent-cli
description: View/streaming via Torrent with Webtorrent-cli
author: Jose Cerrejon
icon: pen-to-square
date: 2016-04-11 10:00:00
prev: /
next: false
category:
  - Raspberry PI
  - ODROID
tag:
  - Raspberry PI
  - ODROID
---

# View/streaming via Torrent with Webtorrent-cli

![Webtorrent-cli](/images/2016/04/Webtorrent-cli.png)

The streaming content via *Torrent* has become the workhorse of many developers struggling to impose this way of broadcast content between users without industries such as *MPAA* can hardly do anything. I'm not running for or against. I'm paying for online-content and sometimes also download some TV shows I can't get in my country.

In any case, a new tool has appeared on the scene in recent days that surely you already have read something: [Webtorrent Desktop](https://webtorrent.io/desktop). Perhaps what maybe don't you know is that **it has a version for the command line that run perfectly** on boards as *Raspberry Pi* or similar. This weekend I've tried and I'm going to teach you how to install and use it.

- - -
![webtorrent-cli transmitting and reproducing in the same Raspberry Pi](/images/2016/04/wtorrent_example.png "webtorrent-cli transmitting and reproducing in the same Raspberry Pi")

**NOTE:** The use of torrent may be prohibited in your country. Make sure you can use it before following the steps below.

First update *Node.js* to the latest version. If you have not installed and prefer the easy way, remember that you have an install script available with [PiKISS](https://github.com/jmcerrejon/PiKISS).

```bash
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

Now it's the turn of *webtorrent-cli*:

```bash
sudo npm install webtorrent-cli -g
```

You have all the help available with *webtorrent --help*, but the most common use is with the following parameters:

* Download *torrents*: *webtorrent-cli torrent_link*. It can be a file, a *magnet* link, *http* address,...

* Streaming *torrent* files to a *device/player*: *webtorrent-cli --device*, which can be:

```bash
--airplay               Apple TV
--chromecast            Chromecast
--mplayer               MPlayer
--mpv                   MPV
--omx [jack]            omx [default: hdmi]
--vlc                   VLC
--xbmc                  XBMC
--stdout                standard out [implies --quiet]
```

![webtorrent-cli running](/images/2016/04/wtorrent_streaming.png "webtorrent-cli running")

That's right, **it supports *omxplayer* flawlessly**. My testing have been in a *Raspberry Pi 2* and was able to play a *1080p* video with a little problem (1/2 second with no sound maybe due my limited bandwidth).

Link: [github.com > webtorrent-cli](https://github.com/feross/webtorrent-cli)