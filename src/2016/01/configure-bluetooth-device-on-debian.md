---
id: 656
title: Configure bluetooth device on Debian
description: Configure bluetooth device on Debian
author: Jose Cerrejon
icon: pen-to-square
date: 2016-01-18 14:00:00
prev: /
next: false
category:
  - Linux
tag:
  - Linux
image: /images/bluetooth.jpg
---

# Configure bluetooth device on Debian

![BT](/images/bluetooth.jpg)

Last week I've been sick, but today I woke up more recovered. [C.H.I.P.](/post.php?id=559) units are arriving, and last week received mine with which I hope to make it as good as reviewed by [jvlob](http://twitter.com/jvlob) [here](http://simplelab.org/web/c-h-i-p-el-primer-ordenador-del-mundo-que-cuesta-solo-9/) (spanish post).

Some people mail me about config *bluetooth* devices on *Linux*. I leave here a few simple steps to those who do not give the way to do it.

- - -
Obviously, you'll need to do all of the following with a wired USB keyboard.

Before pairing your keyboard, you'll need to install some software to get everything working. Open up a terminal, and type the following:

```bash
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install bluetooth bluez-utils blueman
```

It's probably sensible to reboot now and then plug in your Bluetooth dongle.

Now, you'll need to find the MAC address of your keyboard. Make sure that it's switched on and then put it into pairing mode by pressing the pairing button on the bottom of the keyboard. In the terminal, type the following:

```bash
hcitool scan

You should see something like:

11:22:33:44:55:66       Bluetooth keyboard
```


Copy that MAC address (the 11:22:33:44:55:66 bit), as you'll need it for the next part. Now type (remembering to change the MAC address):

```bash
bluez-simple-agent hci0 11:22:33:44:55:66
```

It'll then ask you for a PIN code. Just enter something like 0000, first in the terminal and then on the keyboard itself. You'll need to add the keyboard as a trusted device by typing the following (again, with your own MAC address):

```bash
bluez-test-device trusted 11:22:33:44:55:66 yes

Finally, connect the keyboard by typing:

bluez-test-input connect 11:22:33:44:55:66
```

Remember you have [PiKISS](https://github.com/jmcerrejon/PiKISS) with an automated script to achieve it with no effort