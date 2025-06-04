---
id: 844
title: News this week in the Pi World
description: News this week in the Pi World
author: Jose Cerrejon
icon: pen-to-square
date: 2017-10-27 12:35:00
prev: /
next: false
category:
  - Raspberry PI
  - ODROID
tag:
  - Raspberry PI
  - ODROID
image: /images/2017/10/magpi.png
---

# News this week in the Pi World

![MagPi](/images/2017/10/magpi.png)

The weekend starts. We're too hot around here. People go to the beach, go for a walk in pulling shirt and flip-flops. We have crowded bars... And here I am reading the latest issue of *MagPi* and playing the *SNES Classic Mini emulator* on my *Raspberry Pi*. Do you want to know how?.... We begin the **Pi World**!

- - -
<iframe width="560" height="315" src="https://www.youtube.com/embed/fPd2G_qc_jk" frameborder="0" allowfullscreen></iframe>

* **OpenMSX and the Raspberry Pi (Youtube):** The binary of *OpenMSX* for Pi has been quite successful in this blog. Visitors and retweets have grown and I want to thank you. It gives me food for thought and I draw conclusions: You love emulators and surely you are in your thirties and long ones, he he. If so, I suggest you visit the following links of an expert in *MSX* computers who dares to add to the emulator a bridge with *GPIO*. Thanks again, *Patrick*.  [OpenMSX and the Raspberry Pi - Part 1... an introduction](https://www.youtube.com/watch?v=mGNj1WR_uHU) | [OpenMSX and the Raspberry Pi - Part 2](https://www.youtube.com/watch?v=ZLNx0cyD4Dw)


![snes mini](/images/2017/10/snes_classic.png)

* **canoe-shvc to emulate the SNES Mini Classic on your Raspberry Pi:** Thanks to a blog reader named *Fran Sena*, I was able to download from a lost repository the emulator for this game console of the last century. You will have to uncomment in */boot/config.txt* the *framebuffer_width and framebuffer_height* resolution. Let's remember that this is *canoe-shvc*. You need *SDL2*. I detail some of the steps: 

```bash
sudo apt-get update
sudo apt install -y libsdl2-dev
sudo ln -s /opt/vc/lib/libbrcmGLESv2.so /usr/lib/libMali.so
sudo ln -s /opt/vc/lib/libbrcmGLESv2.so /usr/lib/libGLESv1_CM.so
fbset -vyres 1440
./canoe-shvc rom_name.sfrom
```

It seems to be very faithful to the original *SNES*, but the sound is not as good as it should be. In this emulator, *ROMs* have the *.sfrom* extension. Download it on [misapuntesde.com > canoe-shvc](/res/canoe-shvc) | [clusterrr.com > SNES-mini-roms.zip](http://clusterrr.com/temp/SNES-mini-roms.zip)

![titelbild](/images/2017/10/titelbild.png)

* **handeheld flip-screen console with retropie:** Nice, isn't it? Well, in this forum thread they teach you how to assemble it. What are you waiting for? | [raspberrypi.org](https://www.raspberrypi.org/forums/viewtopic.php?f=78&t=177889)

![SuperTuxCar](/images/2017/10/supertuxkart-portable-23.png)

* **Supertuxkart on Raspberry Pi:** Now we can play this *Mario Kart* clone in our *RasPis*. You dare? | [raspberrypi.org](https://www.raspberrypi.org/forums/viewtopic.php?f=78&t=195612)

* **The MagPi Nov:** *Pi-Top, Pi-powered turtle rover*, and another DIY for build a Machine arcade from scratch. | [raspberrypi.org](https://www.raspberrypi.org/magpi/build-arcade-machine-magpi-63/)

Tweet of the week thanks to [@pb48k](https://twitter.com/pb48k):





Happy weekend!

