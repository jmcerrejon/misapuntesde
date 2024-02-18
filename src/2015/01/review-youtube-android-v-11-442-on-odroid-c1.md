---
id: 511
title: Review + Youtube. Android v. 1.1 (4.4.2) on ODROID-C1
author: Jose Cerrejon
icon: pen-to-square
date: 2015-01-26 13:00:00
prev: /
next: false
category:
  - ODROID
tag:
  - ODROID
---

# Review + Youtube: Android v. 1.1 (4.4.2) on ODROID-C1

![Odroid-C1 with Android](/images/odroid_android.png)

I've never trust on use *Android* in this kind of boards due to my constant failures to make it works and do it efficiently. Today we can see in this article if it's worth having a *ODROID-C1 with Android* running multiple applications, games and emulators. I advise that if you have a *Raspberry Pi*, better stop reading...

- - -
![CPU-Z](/images/2015/01/Andro_ODROID_02.jpg "CPU-Z")

The first thing I should say is I'm testing the *Android version 1.1* belonging to *Kit Kat 4.4.2*. The installation I've done on a *8 GB UHS-I SD card* from *Sandisk* I bought at the same *hardkernel* store. The image takes up 219 MB only. Everything I had read about *Android* with an SD was that I neither tried, It's very slow due to constant input/output access that makes the operating system and it was preferable the *eMMC*... **Don’t you believe their dirty lies!**. The operating system will run **VERY smooth** and perfect as you would do on any tablet. I'm sure with the *eMMC* the experience is flawless, but with an SD is enough, I assure you.

Once inserted the SD card and when boot, the system will resize the partitions available including one *vFAT* to act as SD card and where we can copy all we need through our PC.

Another positive aspect is that with an 8 GB card we won't run out of space, because the operating system itself will take care of installing applications on another partition if the home is filled. I made the test with resolutions *1280x800 and 1920x1080*.

### [ Featured Apps ]

![I've installed some apps to test](/images/2015/01/Andro_ODROID_01.jpg "I've installed some apps to test")

I highlight the following installed apps:

* ODROID Utility: The most important of this tool will be set the screen resolution if it does not fit to your screen.

* DicePlayer: Player unpretentious but plays almost all kinds of multimedia files without problems (with 4K the system hang).

### [ Recommended settings ]

* Google Play: Not installed by default I guess because Copyright, but nothing easier than download it from [this](https://www.dropbox.com/s/f2ljl13kdpum2m0/GAppsInstaller.apk) link and run through the file browser. Installing applications is very fast.

* SuperSU: The OS comes rooted, but need to install this application (or similar) from *Google Play* to grant permissions to programs seeking access to certain files from the file system. One is *Kodi*. Without applications like *SuperSU, Kodi* can't access hardware decoding, nor the video player, so this step is strictly necessary.

### [ Testing,... ]

![anTuTu](/images/2015/01/anTuTu_ODROID-C1.jpg)

* Benchmark: Running *AnTuTu v 5.6, ODROID-C1* I get **14196** points. If you want to compare...

![anTuTu](/images/2015/01/scores.png)

![Kodi playing a 1080p video demo](/images/2015/01/Andro_ODROID_03.jpg "Kodi playing a 1080p video demo")

* Video Player: Perfect. Tested with the default player called *DicePlayer and Kodi*. In fact, it is the best way I've found in **ALL** boards and operating systems I've ever tried to play videos without dropping frames. I'd tested *4K* videos and doesn't work. *Banana & Raspberry Pi* are losing the war in this section.

* Games: The limitation I found is in 3D games but not for performance, but because they are developed for use with touch screens and mouse does not work, so we can't press a button to start playing for example. Maybe there is a way, but I’ve not found a solution yet.

![Mupen64+ with full speed](/images/2015/01/Andro_ODROID_04.jpg "Mupen64+ with full speed")

* Emulators: *RetroArch:* Does not work the *Nintendo 64 emulator*, others I've tried like *SNES, GENESIS or MAME* runs flawlessly | *PPSSPP:* Well, except games that demand high graphics in 3D like *God of War*, currently unplayable. *Kindom Hearts* is a 3D game also, however it moves and looks smooth. | *Spectaculator (ZX Spectrum):* Nothing remarkable obviously runs perfect. | *Mupen64 + (Nintendo 64): Mario 64* is nearly perfect, both in sound and *fps*. Maybe a few *glitch* in some shadows and textures, but hardly noticeable.

![PPSSPP and the game Kindom Hearts](/images/2015/01/Andro_ODROID_05.jpg "PPSSPP and the game Kindom Hearts")

* Control Pad: In my case I tried the *XBOX 360 wired* with the emulators and it works *out of the box*.

* Web Browser: I tried the default one and *Chrome*. The navigation is fluid, not bad scroll across the page, no slowdowns. Mobile Youtube via the browser loses quality, best from the application. No, it does not work *Flash* but at this point, Who needs it?.

* Youtube: I installed *Youtube* due it's a "must have" when my friends come to my house and of course it works as it should. In addition, very fast loading videos.

* Karaoke: I have not tried to connect a *USB* microphone, but installing any application from *Google Play* you can play any *.kar* files. It seems incredible that something so simple can not work fine with the *Raspberry Pi*.

* USB Devices: *ODROID-C1* does not come with built-in *Bluetooth*. I have inserted a *USB BT* adapter and it has not worked, but not expected. A flash drive in FAT32 has been recognized.

### [ Conclusion ]

I can say that *Android* behaves as it should and can work even operating system. It's a shame the problem with 3D games that only support touch screens, but is comprensible.

In short I conclude by saying that I'm very happy with the combo **ODROID C-1 + Android**. Not disappoint anyone and connected to the TV in your living room ensures you can use it as a center of entertainment.

If someone wants to try some additional application, just tell me in the comments.

Here you have the video. You can watch how run some applications mentioned in the post.

Enjoy!

<iframe width="420" height="315" src="//www.youtube.com/embed/O4yoqK-KdKQ?rel=0" frameborder="0" allowfullscreen></iframe>
