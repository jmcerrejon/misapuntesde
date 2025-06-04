---
id: 777
title: Digital DVB-T on Raspbian and Debian flavours
description: Digital DVB-T on Raspbian and Debian flavours
author: Jose Cerrejon
icon: pen-to-square
date: 2017-03-13 12:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2017/03/dvbt_cap_01.png
---

# Digital DVB-T on Raspbian and Debian flavours

Honestly, I've always thought that setting up a *DVB-T* tuner was more of a headache than anything else. Nowadays everything works almost at first, but when you buy one of these is as *Forrest Gump* said: *"Life was like a box of chocolates. You never know if the tuner that you bought it will work on your distribution"*. Fortunately it has not been as painful as I thought at first and I show you the process that followed you and my future self, that you will not remember how to install it again next week.
- - -
###  [ Firmware Detection and Installation ]

I think the next are typical steps: We execute *lsusb* and *dmesg* to see what happens in our distribution. In my case, I'm using *Raspbian* but it could be any operating system and any board or PC.

![dmesg](/images/2017/03/dvbt_cap_01.png)

We see in the capture that it does not find the *dvb-usb-ec168.fw* file needed for it to work. A quick internet search will give us the file we are looking for. We should copy it in */lib/firmware* as shown below:

![wget](/images/2017/03/dvbt_cap_03.png)

Now restart the operating system and type again *dmesg*:

![dmesg](/images/2017/03/dvbt_cap_04.png)

###  [ Tuning channels and Me-TV ]

We proceed to install the following packages and execute *w-scan* in the following way:

```bash
sudo apt-get install -y me-tv w-scan
w_scan -ft -c ES -X >> channels.conf
```

The *ES* parameter indicates that you will search for channels from the frequencies of *Spain*, so it will vary depending on your country. This will generate the *channels.conf* file that will be imported to the *Me-TV* application found in *Menu > Sound & Video > Me TV*.

![Access to Me-TV on Raspbian](/images/2017/03/dvbt_cap_06.png "Access to Me-TV on Raspbian")

We will follow the steps that the program proposes you in their assistant and... Voila!

![Ejecutando Me-TV en Raspbian](/images/2017/03/dvbt_cap_07.png "Ejecutando Me-TV en Raspbian")

I have to say that sometimes the audio is delayed and loses *frames*. I don't know if it's because the application demands more *RAM* from the Pi. There may be other command line software that consumes fewer resources. If I find you, I'll let you know. If you know of a program and you can share it with us, below you have the comments.