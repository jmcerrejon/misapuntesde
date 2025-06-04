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
image: /images/2014/10/PiTV.png
---

# PopcornTime on a RaspberryPi with PiTV!

![pitv](/images/2014/10/PiTV.png)

**PiTV** streams movies and TV shows from torrents like _PopcornTime_ do...

---

To install:

```bash
wget https://pitv.pw/scripts/setup.sh
sudo sh setup.sh
```

**Note** that running this script on your system "hijack" _Raspbian_ to make it yours. That is, many applications are installed and when you restart, boot to X with _Google Chrome_ in background. Undo the changes is complex. Also it is a very early alpha version, but I've tried it and \*it works\*\*.

When _PiTV_ is ready it will display a _Raspberry_ logo on an orange background.

![pitv](/images/2014/10/PiTV_cap.png)

You can then access the remote control via browsing to the local IP address of your Pi as you can see in the capture above.

_PiTV's_ remote will display all series and movies, which it can find on _The MovieDB_.

To play an episode or movie, select it and wait some seconds for PiTV to load the torrents.

Enjoy!

Link: [pitv.pw](https://pitv.pw)

Link: [reddit.com > PiTV](https://www.reddit.com/r/PiTV)

Alternative: [npmjs.org > torrentcast](https://www.npmjs.org/package/torrentcast)
