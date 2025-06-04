---
id: 333
title: HOWTO. Bluetooth with OpenELEC
description: HOWTO. Bluetooth with OpenELEC
author: Jose Cerrejon
icon: pen-to-square
date: 2013-12-20 10:48:39
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2013/12/01_openelec.jpg
---

# HOWTO: Bluetooth with OpenELEC

![01_openelec](/images/2013/12/01_openelec.jpg)

The new _OpenELEC 3.x_ version has not only improvements about performance and speed. One of the features that best took into account has been setup any _Bluetooth easily_ (keyboards, mice, speakers, headphones or mobile), and all through its menu.

I want to show you how to set up one of these devices (in this case an _Apple Wireless Keyboard_) with **OpenELEC 3.2.4** on the Pi

Ready?...

---

Before the end of the year I'd planned to make a tutorial. I wanted to see if this new version is easier than [before](https://wiki.openelec.tv/index.php?title=Bluez-tools_how-to). The answer is yes.

The first thing to do is buy a _Bluetooth_ module if you have not one already. You can purchase the _Conceptronic USB Bluetooth_ which has been tested in the online shop [raspipc.es](https://raspipc.es) through [this](https://goo.gl/F6khBE) link in Spain. In my case I'll use one from _Trust_:

![bt-adapter-trust](/images/2013/12/bt-adapter-trust.jpg)

It has given me more than a headache on the desktop, either with _Windows_ or _Linux_... but with _OpenELEC_ on the Pi has worked for me from the first time.

![02_openelec_BT](/images/2013/12/02_openelec_BT.jpg)

As I have mentioned in the beginning, I will connect the keyboard from my _iMac_. I had trouble with that in the past too.

The first will be install _OpenELEC_ (the latest version at the time of this article is the **3.2.4**) on a SD card and plug your BT adapter (make sure you get enough power) before boot the _Media Center_.

Now we'll go to _System > OpenELEC_ menu as I show you in the screenshot below:

<a title="OpenELEC menu" rel="lightbox" href="/images/2013/12/03_openelec_BT.jpg">
<img width="324" height="242" src="/images/2013/12/03_openelec_BT_min.jpg">
</a>

The system will be loaded as modules in the kernel to use your _BT adapter_. From the menu on the left, we will access to the _Bluetooth_ section and there will appear different _BT_ devices. To setup the keyboard, you should turn it off by pressing the power button for 4 sec. and turn it on by pressing it again another 4 sec. A green light will flash and the keyboard magically appears...

<a title="MAC Address hidden to respect devices anonymity" rel="lightbox" href="/images/2013/12/04_openelec_BT.jpg">
<img width="324" height="242" src="/images/2013/12/04_openelec_BT_min.jpg">
</a>

Then we select the keyboard and press _ENTER_ or _click_ with the mouse. Then it ask what we want to do:

<a title="Rarely in life you can trust like in this case" rel="lightbox" href="/images/2013/12/05_openelec_BT.jpg">
<img width="324" height="242" src="/images/2013/12/05_openelec_BT_min.jpg">
</a>

Select **Trust and connect** to not ask us again in the future to match again.

Now depending the device you want to connect, will ask you for a **PIN code** which is usually _0000_ for mice and headphones, or _1234_.

<a title="PIN Code Request" rel="lightbox" href="/images/2013/12/06_openelec_BT.jpg">
<img width="324" height="242" src="/images/2013/12/06_openelec_BT_min.jpg">
</a>

Now the difficult part:

-   In _OpenELEC_ you must write _1234_ and click on the button _Done_.

-   On your keyboard you must press _1234_ and hit _ENTER_.

With this you will have already paired your device forever with OpenELEC as you can see in the capture.

<a title="Paired" rel="lightbox" href="/images/2013/12/07_openelec_BT.jpg">
<img width="324" height="242" src="/images/2013/12/07_openelec_BT_min.jpg">
</a>
 
![Fuck yeah](/images/yeah.jpg)

**NOTE:** No device was forced to marry with the _Raspberry Pi_ after this tutorial. For this couple, they have some dates but they were distancing until he returned to his former partner (iMac 27", just so you don't say that size does not matter).
