---
id: 618
title: VoIP Server on a Raspberry Pi
description: VoIP Server on a Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2015-09-14 10:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# VoIP Server on a Raspberry Pi

![Asterisk](/images/2015/09/AsteriskPBX.png)

First I want to thank the **600,000 visits** we've reached on this blog. We can see that the development boards are here to stay and  is growing its demand. We have more models and more competition, which benefits to us.

I wanted to mention that today, It's not difficult to create a *VoIP system* in our homes or in an office. As you know, *Asterisk* is the free solution that best suits all kinds of needs, with a complete interface and although not enough, easy to use.

*RasPBX* is an operative system based on Debian Jessie, which already contains *Asterisk 11.15.0, FreePBX 12.0.38* and It's ready for use...

- - -
<iframe width="400" height="225" src="https://www.youtube.com/embed/qeYY6Q9Tw_o?rel=0" frameborder="0" allowfullscreen></iframe>

If you already have it installed (the last image is from April / 15) and you want to update, just type:

```bash
raspbx-upgrade
```

The first once installed, is to expand the partition with *raspi-config*, as we do with *Raspbian*. You can access to the control panel through the local IP or *http://raspbx/*. The user name and password is the same, *admin*. [Here](http://www.freepbx.org/support/documentation/installation/first-steps-after-installation) you can get a guide to configure it

I wonder if any of you have tried any VOIP solution and if you are interested in this topic to test a distro and publish my impressions.

Link: [raspberry-asterisk.org](http://www.raspberry-asterisk.org/)
