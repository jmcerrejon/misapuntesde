---
id: 212
title: PiMAME. Little F.A.Q
description: PiMAME. Little F.A.Q
author: Jose Cerrejon
icon: pen-to-square
date: 2013-07-15 07:30:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/PiMAME.jpg
---

# PiMAME: Little F.A.Q

![Pimame](/images/PiMAME.jpg)

We started the week resolving some questions you can find with this _Raspbian_ loaded with emulators from _Shea Silverman_.

Here we go!

---

### [Do not hear sound through HDMI]

Execute the following:

```bash
sudo amixer cset numid=3 2
sudo amixer cset numid=3 100%
sudo amixer cset numid=3 unmute
```

Edit the file _config.txt_ as follows:

```bash
sudo nano /boot/config.txt
```

and remove the # character from the line **_hdmi_drive=2_**

### [I can't see the ROMs in the emulators]

Runs under the command line as follows:

```bash
sudo chmod 644 roms/*.*
sudo chmod 755 roms
```

Remember that you can use files in _.zip_ although beware with uppercase extensions.

### [How to configure my Xbox 360 Pad]

Edit the file _advmenu.rc_ as follows:

```bash
sudo nano .advance/advmenu.rc
```

and changes from none to auto in the line device_joystick

Now install the driver:

```bash
sudo apt-get install xboxdrv
```

Edit the file _rc.local_ as follows:

```bash
sudo nano /etc/rc.local
```

and added after the lines with # characters the follow:

```bash
xboxdrv --trigger-as-button --id 0 --led 2 --deadzone 4000 --silent &
sleep 1
xboxdrv --trigger-as-button --id 1 --led 3 --deadzone 4000 --silent &
```

changing _--id _ by _--wid _ if your pad is wireless.

**_NOTE:_** The pad will not work on menus, only in games.

### [and my USB Pad]

OK. Install the driver:

```bash
sudo apt-get install joystick
```

With the pad connected, execute the following:

```bash
jscal -c /dev/input/js0
```

Where js0 is the pad 0, js1 is 1,...

In this calibration app, do not touch any buttons until prompted. First set the horizontal axis pressing **_back + button (0), center+button (128), front+button (255)_**. For the vertical axis: **_up+button (0), center+button (128) and finally down+button (255)_**.

### [Why cant' load some ROMs in the MAME4ALL]

This version is a port of _MAME 0.37b5_:

-   [List of supported games](https://code.google.com/p/imame4all/wiki/GameList)

If it does not work the ROM you want, try the _AdvanceMAME_.

### [Where can I get the ROMs]

Search on the internet, or the links below as the law of your country allows it (I am not responsible blah, blah, blah ...):

-   [Romhustler.net](https://romhustler.net/roms/mame)

-   [Romnation.net](https://www.romnation.net/srv/roms/mame103.html)

### [End words]

The list of questions and answers will be updated with more questions. I recommend reading the [official forum](https://pimame.org/forum/) to answer your questions or below in the comments.

Thanks!

![pimame_case](/images/pimame_case.jpg)
