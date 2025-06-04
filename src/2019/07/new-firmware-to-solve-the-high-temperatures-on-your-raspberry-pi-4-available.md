---
id: 906
title: New firmware to solve the high temperatures on your Raspberry Pi 4 available!
description: New firmware to solve the high temperatures on your Raspberry Pi 4 available!
author: Jose Cerrejon
icon: pen-to-square
date: 2019-07-03 13:40:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# New firmware to solve the high temperatures on your Raspberry Pi 4 available!

![rpi4_heatsink](/images/2019/07/rpi4_heatsink.jpg)

In summer everything is warmer, but if you don't want to put [in the fridge](https://www.electromaker.io/project/view/freezing-a-raspberry-pi-4) your *Raspberry Pi* next to the fish, **here you have available the new firmware** that have released the engineers at the Raspberry Pi Foundation to lower a few degrees our board.

- - -

You can read in some forums and blogs that the temperature of the Raspbery Pi is higher and made the board throttle because some thermal optimizations that are not installed by default. Then they released internally a firmware that had been sent to test to the well-known blog [cnx-software.com](https://www.cnx-software.com/2019/06/29/new-raspberry-pi-4-vli-firmware-lowers-temperature/) with which it was possible to lower the temperature of the board by a few degrees. Now it is available to everyone and the results have not been long in coming. I leave you a few links if you're interested and basically, what you should to do when you have it downloaded, is type the following commands:

```bash
$ unzip vl805_update_0137a8.zip
$ chmod a+x vl805
$ sudo ./vl805 -w vl805_fw_0137a8.bin
$ sudo reboot
```

By the way, if you want to check the temperature of your Pi, I left you how to do it in [this](/post.php?id=81) post back in 2013.

Download: [drive.google.com > vl805_update_0137a8.zip](https://drive.google.com/file/d/1PXwrnhAXKB1hb5J6_EfPy5zLQkqnbGba/view?usp=sharing)

Link: [raspberrypi.org > forums > Raspberry Pi 4 temperature](https://www.raspberrypi.org/forums/viewtopic.php?f=28&t=243500&p=1490467#p1490467)

Link: [raspberrypi.org > forums > Raspberry Pi 4 - new VLI firmware issues](https://www.raspberrypi.org/forums/viewtopic.php?f=28&t=244421)