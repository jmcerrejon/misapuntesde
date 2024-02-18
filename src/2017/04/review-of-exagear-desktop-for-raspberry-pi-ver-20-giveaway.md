---
id: 782
title: Review of Exagear Desktop for Raspberry Pi ver. 2.0 + Giveaway!
author: Jose Cerrejon
icon: pen-to-square
date: 2017-04-03 10:35:00
prev: /
next: false
category:
  - Raspberry PI
  - ODROID
tag:
  - Raspberry PI
  - ODROID
---

# Review of Exagear Desktop for Raspberry Pi ver. 2.0 + Giveaway!

![Exagear_Unreal](/images/2017/03/exagear_cap_09_min.jpg)

With [Eltechs ExaGear Desktop](https://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=Review_Exagear_RPi_ver2) you can run *Intel x86* application on your *ARM-based Mini PC* simultaneously with common native applications. It's a virtual machine that implements virtual *x86 Linux container on ARM* and allows you to run *Intel x86* applications directly on *ARM*.

[Eltechs](https://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=Review_Exagear_RPi_ver2) sent me their most recent version to test (no pressure). I wrote a review in the past and you can visit their [part I](/post.php?id=573) & [II](/post.php?id=575). It's time to tell you my impressions about this new release 2.0 with **improvements in the 3D acceleration** and participate in a **raffle to win one of the 5 licenses**. Here we go!.

- - -
Remember you can run *Exagear* on some other *ARM-based* boards like [ODROID, Cubieboard, Banana Pi](https://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=Review_Exagear_RPi_ver2) and so on. Today I'm going to test the *Raspberry Pi version*, but if you have an *ODROID XU4*, this software must be run very fast.

### [ Installation & settings ]

Easy peasy. To install *ExaGear Desktop* open a terminal and follow the next steps.

Download the archive with *ExaGear Desktop* packages (*413 MB for the Raspberry Pi version*), unpack and install the downloaded files:

```bash
su -
cd /home/pi/Downloads/
tar -xvzpf exagear-desktop-rpi3.tar.gz
./install-exagear.sh
```
### ###  Installation takes 10 minutes aprox.

![Exagear01](/images/2017/03/exagear_cap_01.png)

**NOTE:** You must to put a valid license key in the same installation directory. The key is provided by *Eltech* when you buy a license.

*ExaGear Desktop* **now support hardware graphics acceleration**. This feature significantly increases the performance of graphics intensive *x86* applications. To enable, type in the terminal *sudo raspi-config*, go to *Advanced options > A6 GL Driver* and choose *G1 GL (Full KMS) OpenGL desktop driver with full KMS*. When the configuration are finished, you will see the following message: *Full KMS GL driver is enabled*.
Select *Ok* and then *Finish* and the raspi config tool will ask you if you would like to reboot.
Select *Yes* to reboot the system and apply configuration changes.

![Exagear02](/images/2017/03/exagear_cap_02.png)

You can try to increase with *raspi-config* the amount of *RAM* to the *GPU*. I set it to *256 MB*.

To enter the *guest x86* system click on the icon in the desktop or type the following command in a terminal: *exagear*

Now you are inside the **x86 world**!. Type *exit* to end the exagear command prompt or close the window.

### [ Exagear Desktop ]

![Exagear in the guest image](/images/2017/03/exagear_cap_03.jpg "Exagear in the guest image")

I remember that you couldn't use any *hardware-accelerated* application because some of the app requires *OpenGL* and It didn't works. **Now it does**.

One feature I like is that the guest OS share the same directory with the host, so you can access software, videos, pictures with no hassle.

I'm going to install [Wine](https://www.winehq.org/) from the repo and test some interesting games: If you typed exagear before or click on the icon in the desktop, now just input: *sudo apt update && sudo apt install -y wine cabextract*. The installation takes 15 minutes aprox. When it finished, type *winecfg* and click on *graphics > emulate virtual desktop*. If the game or app you want to test is playable, remove this option and play again to test in full screen.

I want to use [winetricks](https://wiki.winehq.org/Winetricks) to install some other software. I'm thinking that it could be great if *Exagear Desktop* came with this kind of software already preinstalled.

```bash
wget  https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
chmod +x winetricks
sh winetricks vcrun2008 d3dx9
```

![Installing some dependencies](/images/2017/03/exagear_cap_04.jpg "Installing some dependencies")

**TIP:** Maybe you have a very limited SD card to install apps. **I can help you**. You can try to remove some unused apps with [this script](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/tweaks/removepkg.sh) from [PiKISS](/post.php?id=409) or follow the next post about [mount remote directories via SSH protocol](/post.php?id=438).

If you have some problems with sound, try to disable it with the command: *sh winetricks sound=disable*.

### [ Torchlight (GOG ver.) ]

![It's the closest you'll be to playing the game](/images/2017/03/exagear_cap_05.png "It's the closest you'll be to playing the game")

I like to play this game once or twice in a year. It was released for *Windows on October 27, 2009*. Unfortunatelly the linux port never come and we need to use *Wine*. I've tried following the steps in [this post](https://appdb.winehq.org/objectManager.php?sClass=application&iId=10540), but It doesn't works. Maybe I need to test any game before 2005.

I run *wine uninstaller* and remove the game to save some extra space on disk.

###  [ Giants: Citizen Kabuto (GOG ver.) ]

![EGiants: Citizen Kabuto](/images/2017/03/exagear_cap_08.jpg "EGiants: Citizen Kabuto")

Another great game I used to play in the year 2000. I think this game was free for a limited time on GOG platform, so I'm going to install it, because you can read in [winehq](https://appdb.winehq.org/objectManager.php?sClass=version&iId=29132) it's playable.

The installation takes so much time, so be patience. I get some *runtime errors* at the end of the installation. Ok to all and Launch... **Holly sh"·t... It works!** I'm excited!. Maybe 16 fps on a non overclocked RPi, but you can change video settings in the game. I'll try to play later. Now I want to test one application.

###  [ Franz ]

![Cool!. Instant messaging with Franz.](/images/2017/03/exagear_cap_06.jpg "Cool!. Instant messaging with Franz.")

[Franz](http://meetfranz.com/) is a free messaging app. It currently supports *Slack, WhatsApp, WeChat, HipChat, Facebook Messenger, Telegram, Google Hangouts, GroupMe, Skype* and many more. It's based on [Electron](http://electron.atom.io/), so maybe is not so difficult build the *ARM* version from the source code.

```bash
mkdir Franz && cd Franz
wget https://github.com/meetfranz/franz-app/releases/download/4.0.4/Franz-linux-ia32-4.0.4.tgz -O franz.tgz && tar xzvf franz.tgz
sudo apt install -y libxss-dev
```

I think any app builded with *Electron* are compatible with *Exagear*, so this is great!, including some code editors like *Atom and Visual Studio Code*. I've tried to compile an app with *Electron* with *ARM* but I didn't make it work in the past.

###  [ Unreal  (GOG ver.) ]

![OMG! I can play Unreal on the Pi!](/images/2017/03/exagear_cap_10.jpg "OMG! I can play Unreal on the Pi!")

I'm looking fordward to test one of my favourite games in the 2K. Maybe you know *Unreal Tournament* but this was the first game with the *Unreal engine* by *Epic MegaGames*.

In [Unreal](https://en.wikipedia.org/wiki/Unreal_(video_game_series)), the player takes on the part of *Prisoner 849*, aboard the prison spacecraft *Vortex Rikers*. During transport to a moon-based prison, the ship is pulled to an uncharted planet before reaching its destination. The ship crash-lands on the lip of a canyon on the planet *Na Pali*.

All I need to do to install the game was download the [GOG version](https://www.gog.com/game/unreal_gold) and follow the setup process. In the game, I've reduced the quality in the video settings to gain some extra fps. The game is almost playable, some scenes with explosions reduce the fps but I've tested the first and second stage and I could play without problems.

###  [ Closing words ]

At the end, we must to think that **Raspberry Pi is not a platform for 3D games**. Maybe if you try videogames from a year <2002, you can play it. You do not have problems with apps compiled for *i686 platforms*.

The guys from Eltechs are reaching a high level quality with this software. Congratulation. I want to thanks the team for send me a copy to evaluate the software. If you want me to test any other old game, let me know in the comments.

Maybe I record a video playing *Unreal*, but in the meantime you can visit the next Youtube's channels with some games tested with *Exagear Desktop on ODROID XU3* from [
JayRay K](https://www.youtube.com/channel/UCJ_DYbHRXm2zwrWhE1VgvvA) or directly on [Eltechs Youtube's channel](https://www.youtube.com/channel/UCOIbQNjtZt0FTf9eHR96wng).

I've seen some other articles about this recent version 2.0. I let you with some of them:

Link: [Shea Silverman's Blog > Friday Post: Fix It Felix Jr. running on the Raspberry Pi!](http://blog.sheasilverman.com/2017/03/friday-post-fix-it-felix-jr-running-on-the-raspberry-pi/)

Link: [sirlagz.net > ExaGear Deskop 2.0 Review](http://sirlagz.net/2017/04/03/exagear-deskop-2-0-review/) 

###  [ Giveaway: 5 Exagear Desktop 2.0 licenses! ]

If you would like to try this software, *Eltechs* has been kind enough to **give 5 *Exagear Desktop* licenses for the readers of this blog**. The rules from the company are:

1) Share a message on Twitter, LinkedIn, FaceBook or Google Plus with the next text: 

* **Twitter**: *I want a free license of a NEW Exagear Desktop (https://goo.gl/TkWPYg) to My Raspberry Pi/Odroid or other thanks to @ulysess & @Eltechs*

* **Facebook**: *I want a free license of Exagear Desktop 2.0 to My Raspberry Pi/Odroid or other the software https://goo.gl/kwAUnG and thanks to @ulysess & @Eltechs*

* **Google+**: *I want a free license of a NEW updated Exagear Desktop 2.0 to My Raspberry Pi/Odroid or other thanks to  @Eltechs Read about update here >>> https://goo.gl/e1pi3T*

* **LinkedIn**: *I want a free license of Exagear Desktop 2.0 to My Raspberry Pi/Odroid or other https://goo.gl/YZEspw Special thanks to @jmcerrejon & @Eltechs*

2) **Send the link you have just shared to the e-mail**: <raffle@eltechs.com>

Only one email per person and social network is allowed, so you can participate a maximum of 4 times.

It is optional, but you can <a href="https://twitter.com/eltechs"> follow us on Twitter </a> |  <a href="https://www.facebook.com/eltechs/">like us on Facebook</a>  |  <a href="https://www.youtube.com/user/Eltechs/">subscribe us on Youtube</a>

You have until **next Wednesday 19th to participate** and we will show the winners throughout the week.

Good luck!.