---
id: 687
title: Chromium on Raspbian for RPi2/3
author: Jose Cerrejon
icon: pen-to-square
date: 2016-04-06 10:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Chromium on Raspbian for RPi2/3

![Chromipum-pi_02](/images/2016/04/Chromipum-pi_02.png)

While waiting for the promises of a decent browser for Pi (No, not worth *Epipphany*). I'll install in my *Pi2 the Chromium browser* to watch videos on *Youtube* and other channels...

- - -
You must to run the next commands:

```bash
wget -qO - http://bintray.com/user/downloadSubjectPublicKey?username=bintray | sudo apt-key add -
echo "deb http://dl.bintray.com/kusti8/chromium-rpi jessie main" | sudo tee -a /etc/apt/sources.list
sudo apt-get update
sudo apt-get install -y chromium-browser rpi-youtube
```

It will install about *237 MB* of packages in your distro. Now we need to access the *Chrome Web Store* from the new browser and install packages  *RPI-youtube and ublock origin* (optional, but essential at the same time).

When you find a video you want to play:

* Pause the video.

* Press the button extension on the top right and wait about 6 seconds for an independent player with video opens.

* To disable the bottom navigation bar, click *ALT+H*

![OMXPlayerGUI on Raspberry Pi 2](/images/2016/04/Chromipum-pi_01.png "OMXPlayerGUI on Raspberry Pi 2")

It played better than the default browser. It's not a great system, but you can watch the videos without problems. Does not accept embedded videos on other websites. You'll have to open the web source to use the extension. *Vimeo* works too, so I conclude that any platform with streaming videos can be used it. Yes, **you can visit pr0n** websites although you'll need to turn on it the desktop mode, due some of these sites open in its mobile version.

Thanks to the user [kusti8](https://www.raspberrypi.org/forums/memberlist.php?mode=viewprofile&u=94090&sid=2db922307a56b5390921c667e5e7d020) for keep maintaining this packages.

Forum: [raspberrypi.org](https://www.raspberrypi.org/forums/viewtopic.php?f=63&t=121195)

Link: [omxplayerGUI_manual.pdf](http://steinerdatenbank.de/software/omxplayerGUI_manual.pdf)
