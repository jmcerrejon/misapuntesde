---
id: 252
title: rPlay mirroring with Apple devices and Raspberry Pi
description: rPlay mirroring with Apple devices and Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-30 08:00:00
prev: /
next: false
category:
    - Raspberry PI
    - Apple
tag:
    - Raspberry PI
    - Apple
image: /images/airplay.jpg
---

# rPlay mirroring with Apple devices and Raspberry Pi

![airplay](/images/airplay.jpg)

I can not be more excited!.

Think I mentioned, but since I sold the _AppleTV_ , the most feature I miss is the _mirroring_ function, useful if you want to duplicate on another screen what you are doing on the _iPad, iPhone or iMac_.

Luckily _VMLite_ guys are carrying this functionality to the _Raspberry Pi_, with a fairly promising.

I have a beta private copy and teach you how to install it and their functionalities. Do you want to see it? Let's go!...

---

### [rPlay]

_rPlay supports AirPlay and AirPlay Mirroring. For iphone 4 and iPad 1, you can't do AirPlay mirroring, but you should be still
do AirPlay for Photos/Music/Videos. For iPhone 4S and iPhone 5, iPad 2 and above, you can also do AirPlay mirroring._

It's a _daemon_ running on boot once you've installed. You need to download the application, change the system memory to give the maximum to the _GPU_ and enter your _license key_.

### [ How can I get a license key? ]

Easy. Now It's free. Just register a user in the forum and ask for it. In a short time you will get in your mailbox account with instructions needed to make it work on your Pi.

Link: [Forum](https://www.vmlite.com/index.php?option=com_kunena&Itemid=158&func=view&catid=23&id=11658)

### [ Prerequisites ]

Update the firmware of your _Raspbian_ with

```bash
sudo apt-get install rpi-update && sudo rpi-update
```

Now give more memory to the _GPU_ with **sudo raspi -config**. The **model B** needs _256 MB_ and **model A 64 or 128**.

Now install the dependencies and the software with:

```bash
sudo apt-get install libao-dev avahi-utils libavahi-compat-libdnssd-dev libva-dev youtube-dl
sudo youtube-dl --update
wget -O rplay-1.0.1-armhf.deb https://www.vmlite.com/rplay/rplay-1.0.1-armhf.deb
sudo dpkg -i rplay-1.0.1-armhf.deb
```

We go from any computer on the same network to the browser and type: **https://IP_PaspberryPi:7100/admin** or you can start X from your Raspbian with Midori and go to the next url: **http://localhost:7100/admin** (user **admin** user , password **admin**).

There you can find a _front end_ to configure some parameters. We need to add our _license key_ at the end of the page. You can also do it directly modifying the file **/etc/rplay.conf**

Now **restart** to get rplay run automatically the _daemon_.

If we want to stop/play the _daemon_:

```bash
sudo /etc/init.d/rplay start
sudo /etc/init.d/rplay stop
```

### [I want to uninstall rPlay]

```bash
sudo /etc/init.d/rplay stop && sudo dpkg -r rplay
```

A picture speaks a thousand words: I present my first _Youtube_ video related with the Pi. I show you several features about _rPlay_ to give you an idea of its actual performance so press play and enjoy!

<iframe width="480" height="360" src="//www.youtube.com/embed/iwtbKHGZa_M" frameborder="0" allowfullscreen></iframe>

Link: [vmlite.com](https://www.vmlite.com)

Related Links: [Problems with audio](https://cagewebdev.com/index.php/raspberry-pi-getting-audio-working/)
