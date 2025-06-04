---
id: 831
title: Change the MAC address on Raspberry Pi
description: Change the MAC address on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-09-09 13:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Change the MAC address on Raspberry Pi

![rpi-spoof-mac-address](/images/2017/09/rpi-spoof-mac-address.png)

As you know, the *MAC (Media Access Control) address* is the unique identifier of a network interface. 

On any personal computer running *Linux*, it can be temporarily altered with the following commands:

```bash
# ifconfig eth0 down
# ifconfig eth0 hw ether 02:01:02:03:04:08
# ifconfig eth0 up
```
### ###  Change MAC address with the ifconfig command

I've read at O'Brien's blog a way to change it semi-permanently on your *Raspberry Pi*. Simply add the following line to the */boot/cmdline.txt* file at the end:

```bash
smsc95xx.macaddr=xx:xx:xx:xx:xx:xx
```

Where we 'll replace *xx: xx: xx: xx: xx: xx: xx* with the new address *MAC* that we want.

Link: [obrienlabs.net > Raspberry Pi – How to spoof MAC address](https://obrienlabs.net/raspberry-pi-spoof-mac-address/)