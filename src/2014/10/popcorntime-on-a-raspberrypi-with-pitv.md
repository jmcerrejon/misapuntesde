---
id: 474
title: PopcornTime on a RaspberryPi with PiTV!
description: PopcornTime on a RaspberryPi with PiTV!
author: Jose Cerrejon
icon: pen-to-square
date: 2014-10-30 06:40:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# PopcornTime on a RaspberryPi with PiTV!

![pitv](/images/2014/10/PiTV.png)

**PiTV** streams movies and TV shows from torrents like *PopcornTime* do...

- - -
To install:

```bash
wget http://pitv.pw/scripts/setup.sh
sudo sh setup.sh
```

**Note** that running this script on your system "hijack" *Raspbian* to make it yours. That is, many applications are installed and when you restart, boot to X with  *Google Chrome* in background. Undo the changes is complex. Also it is a very early alpha version, but I've tried it and *it works**.

When *PiTV* is ready it will display a *Raspberry* logo on an orange background.

![pitv](/images/2014/10/PiTV_cap.png)

You can then access the remote control via browsing to the local IP address of your Pi as you can see in the capture above.

*PiTV's* remote will display all series and movies, which it can find on *The MovieDB*.

To play an episode or movie, select it and wait some seconds for PiTV to load the torrents.

Enjoy!

Link: [pitv.pw](http://pitv.pw)

Link: [reddit.com > PiTV](http://www.reddit.com/r/PiTV)

Alternative: [npmjs.org > torrentcast](https://www.npmjs.org/package/torrentcast)