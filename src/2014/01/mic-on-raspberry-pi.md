---
id: 359
title: Mic on Raspberry Pi
description: Mic on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-01-31 07:31:56
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/01/mic.jpg
---

# Mic on Raspberry Pi

![mic](/images/2014/01/mic.jpg)

Don't know if happen to you that sometimes you have many things to do but an idea arises, an email from someone, something you think you can do, and leave it all to get to it.

That's what happened to me today. I wanted to test a microphone on the _Pi_ and I'll do it. Will it work?

---

I have one that comes with the _Singstar PS2_ with an USB adapter. _Karaoke_ is one of my passions frustrated.

I remind you that the _Raspberry Pi_ has no microphone input and the only way to try one with _Jack_ connector is buying a external _USB Sound Card_.

The first thing we have to do when Raspbian boot up is to check if any microphone is detected. There are many ways to do it, but I remember now this:

```bash
lsusb
```

<a title="Mic detedted!" rel="lightbox" href="/images/2014/01/lusb.jpg">
<img width="324" src="/images/2014/01/lusb_min.jpg">
</a>

As you can see, has been detected in the device _006_ a **Microphone Sony SingStar USB**.

Now let's see where it has been placed in the list of sound cards (the system detects it as a sound card):

```bash
cat /proc/asound/cards
```

<a title="Card num. 1 is a USB-Audio - USBMIC" rel="lightbox" href="/images/2014/01/catproccards.jpg">
<img width="324" src="/images/2014/01/catproccards_min.jpg">
</a>

With that information we can now launch a recording program. I'll use **arecord** that comes installed with _ALSA utilities_:

```bash
arecord -f cd -D hw:1,0 -d 20 text.wav
```

With this parameters we recorded with **CD quality** for **20 seconds** a file called _test.wav_, using the hardware of the **card 1** (microphone).

To play the sound, with a simple **aplay test.wav** is enought. If you don't hear anything, in _advanced options_ with **sudo raspi-config** utility you can change the audio output _jack to HDMI_ and vice versa...

**ADDITIONAL NOTE**: If after the first record we detect that the recordings are incorrect, we have to disable the _USB 2.0_ driver to use the _USB 1.1_. To do this, add the file _/boot/cmdline.txt_ to the next line, to ensure that the recording is done perfectly:

```bash
dwc_otg.speed=1
```

Happy Friday!

Help: [wiki.audacityteam.org](https://wiki.audacityteam.org/index.php?title=USB_mic_on_Linux)

Link: [wiki.linuxaudio.org > Raspberry Pi and realtime, low-latency audio](https://wiki.linuxaudio.org/wiki/raspberrypi)

Forum: [raspberrypi.org > any recommendations for a USB microphone](https://www.raspberrypi.org/phpBB3/viewtopic.php?f=26&t=43731)

Link: [elinux.org > USB Sound Cards verified periplerals](https://elinux.org/RPi_VerifiedPeripherals#USB_Sound_Cards)
