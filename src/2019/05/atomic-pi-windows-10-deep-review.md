---
id: 901
title: Atomic Pi. Windows 10 deep review
author: Jose Cerrejon
icon: pen-to-square
date: 2019-05-19 19:25:00
prev: /
next: false
category:
  - Raspberry PI
  - Atomic Pi
tag:
  - Raspberry PI
  - Atomic Pi
---

# Atomic Pi: Windows 10 deep review

![Atomic Pi](/images/2019/05/AtomicPi_workbench.jpg)

Since I purchased my first Raspberry Pi, I haven't experienced as much excitement of "playing" with a SBC as I am doing now. Atomic Pi will become the favourite board of many of us, and everything seems to be the result of coincidence, because the company that has developed this board thanks to the backers at [Kickstarter] (https://www.kickstarter.com/projects/323002773/atomic-pi-a-high-power-alternative-to-rpi), could not even imagine the hype and expectation that has generated this SBC with a quality/price with not rival after its release in some stores such as Ameridroid or Amazon USA. Although it was sold out in a short time, they are back in stock.

In this article I going to show you the performance of Windows 10 on the Atomic Pi and YES, it's worth it, here we go!....

- - -
###  [ Backgrounds ]
<iframe width="560" height="315" src="https://www.youtube.com/embed/YMuiTuTrUhY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![¡Windows 10 on a SBC at last!](/images/2019/05/img_03_classic_start_menu.png "¡Windows 10 on a SBC at last!")

First of all, please note that all screenshots belong to Windows 10 in Spanish. I had vague illusions about *Windows* going well. For *Linux* any board for this price is working well, but that feel we have to run *Windows* ~~to see if you can play on it~~ on a board of these features and go well, are hopeless.

I'm not a regular user of *Windows 10*. I can use it once a month at most and to fix some other problem with an update on my wife's laptop. I work only and exclusively on *MacOS* but I have used it since *Windows 95*, going through *XP* (for me it was the best OS until now), *Millenium*, 2000, 7 and now 10.

From that time passed I remember especially the afternoons and nights playing what is now considered *Abandonware*, lost in the dungeons of *WaterDeep*, passing levels in *Jill of the Jungle* or left to my fate on a planet in the metal skin of a robot in *Metal Mutant*.

![Device properties](/images/2019/05/img_04_c_properties.png "Device properties")

I don't consider myself a *gamer*, I don't play in my $3000 *MacBook Pro*, nor in the *Nintendo Switch* my daughter has. From time to time I switch on the *Raspberry Pi* (it will be the second and only time that I mention it in this article) and play *MAME* among others. But of course, that nostalgia for the games of the 90's that I can no longer play because I don't have a PC at home to play and remember those mythical games, is what I lacked in life. The *Atomic Pi* has given me back that feelings. Don't worry, if you don't want to read my bored story and know if you're going to be able to play  *Nintendo 64* emulator perfectly, I'll say yes, of course. But,... Aren't you curious to know if you will be able to play *4K or H265* videos? What about *Wii or PSX* emulators? What games of the 90's/2K have you tried? Don't worry, everything will come. I intend to squeeze every penny that I have cost this board.

![HWiNFO64](/images/2019/05/img_07_HWiNFO64.png "HWiNFO64")

I must tell you I'll not show you the features of the *Atomic Pi*. That's what *Google* or the manufacturer's website [Digital Loggers, Inc.](https://dlidirect.com/collections/all-products) is for. The only problem you are going to find if you are not very handy is with the part of powering the board, since it's done through the *GPIO* port and you will need a power supply of at least 5V and between 3.3-5A. Any doubt that you have to connect it, use the comments below.

###  [ Why Windows 10?. First challenges. ]

![Task manager](/images/2019/05/img_05_task_manager.png "Task manager")

I wondered what I'd like to test if I had a *X86 processor. Debian? Ubuntu? Arch?*. They're working very well on others *ARM* boards I've been testing since 2013. So it's not worth it to waste time testing distributions if you spend your money in a *X86* SBC. So I know what I want: **I want Windows**. I want to see how far I can go with the operating system of uncle *Gates*.

The first challenge was where to install it. The *Atomic Pi* comes with an *eMMc* integrated in the 16 Gb board that in transfer rates as I have been able to see in some benchmark, behaves quite well. Then you have the *Micro-SD* card slot, but we already know the result... *¡meh!*. A *HD* through *USB* it was the best choice, so... but, one moment,... Where would the challenge be? Besides, I would have to depend on having the *HD* connected... I have to put *Windows* in the 16 Gb partition and this is where you all laugh. Well, in case you don't know it, there are *Windows* that you can "slim down" and keep on working as if nothing happened. I already did it with *XP* and the famous *nLite* in the past. So I tried to install a *LTSB (Long Term Servicing Branch)*, which are versions with fewer updates and stripped functions like *Cortana or Edge*, which you won't find here (What a pity xD!). The result: *Windows has occupied about 6'51 GB* in the newly installed partition... First challenge surpassed!

![Device manager](/images/2019/05/img_09_device_manager_03.png "Device manager")

The second one took me a morning to achive install the *drivers*. I won't bore you. After a lot of messing around, I've managed to install almost all of them. At least the graphics and sound work without problems, which was my goal. For it, we are going to have to press right button in each one of the unknown devices and choose *Install additional driver* and choose the folder with the drivers that I have found in this link at [Google Drive](https://drive.google.com/file/d/0Bxu7K5BxNw3Sd1I5dlI1OFhlaTA/view?usp=sharing). The only one that has detected the OS is *Bluetooth*. It's the only way because the drivers you can download from the official *Intel* website tells you that your system is not supported, Grr!

###  [ Optimize the system. Install software. ]

First printing: **Finally Windows on a board for $35!**. Let's optimize it a bit. In this field I am a handyman. I've been optimizing *Windows* since 1995, but I'm not going to get too complicated:

* Autologin with *netplwiz*.

* Disable services such as themes, print queue, automatic updates, superfetch or server.

* Disable indexing from the properties of the drive where *Windows* is installed.

* Disable backups, including the generation of the *pagination* file. Also *Windows* features that I won't use (bye bye *Windows Media Player*, Print Server,...).

Not bad. The system from the first boot screen **takes about 22-25 seconds**. In turn off between 5-8 seconds. Native system apps take half a second to boot: *Paint or WordPad* open instantly.

Come on, some commonly used software. As a browser I've installed [Brave](https://brave.com/), which already comes standard with a built-in super ad blocker and I'm using it a lot lately on all my devices, included in *iOS/Android*. It worth a try. As an extension to watch videos on *Youtube*, I recommend you [h264ify](https://chrome.google.com/webstore/detail/h264ify/aleakchihdccplidncghkekgioiakgal?hl=en-GB). Your *CPU* will suffer less when you play videos without cuts. Another essential software for me: *Winrar, Sumatrapdf and Total commander* is the minimum I need. 

As a multimedia player I have been using [mpv](https://mpv.io/) for years. On *Windows* it's still as good as on *MacOS or Linux*. I've tried all kinds of files and the player opens in 1 or 2 seconds, even **files with 4K-25 GB** where playback is very smooth. Perfect, let's go. Yes, I'm still freaking out.

Well, I'm a developer, let's install [chocolatey](https://chocolatey.org/) with some packages like *Node*, common libraries like *Visual C++* and my favorite *IDE*, *Visual Studio Code*. The latter takes about 4-7 seconds to start up, but can be perfectly useful even for daily work. I have not yet set up a Web server. For the next one. I'll leave you with some more screenshots...

![VSCode](/images/2019/05/img_17_VSCode.png "VSCode")

![DirectX.  System.](/images/2019/05/img_10_DirectX_system.png "DirectX.  System.")

![DirectX. Screen.](/images/2019/05/img_11_DirectX_screen.png "DirectX. Screen.")

###  [ Emulators ]
<iframe width="560" height="315" src="https://www.youtube.com/embed/PcV8zsnPN_M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I've tested *Nintendo64, PSX and Wii* emulators. They all go great with some slowing or *glitches* in the case of *Dolphin* but playable. I leave you some links to keep curious about this magnificent board that enters directly on the podium of **the best rival** for the Rasp..., well, that other board ;)

![Project64](/images/2019/05/img_12_project64.png "Project64")

![Dolphin Wii emu](/images/2019/05/img_14_super_paper_mario.png "Dolphin Wii emu")

![ePSXe](/images/2019/05/img_16_ePSXe.png "ePSXe")

I'll read you in the comments if you have any doubt.

Thanks for read.

Interesting links:

* [reddit.com/r/Atomic_Pi](https://www.reddit.com/r/Atomic_Pi/comments/bib9pc/windows_10_video_driver/)

* [youtube.com > ETA Prime](https://www.youtube.com/user/Mretaprime)
