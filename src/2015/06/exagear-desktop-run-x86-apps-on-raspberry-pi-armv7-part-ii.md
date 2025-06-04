---
id: 575
title: Exagear Desktop. run x86 apps on Raspberry Pi & ARMv7 (Part II)
description: Exagear Desktop. run x86 apps on Raspberry Pi & ARMv7 (Part II)
author: Jose Cerrejon
icon: pen-to-square
date: 2015-06-09 10:00:00
prev: /
next: false
category:
  - Raspberry PI
  - ODROID
  - Banana Pi
tag:
  - Raspberry PI
  - ODROID
  - Banana Pi
image: /images/2015/06/ExaGear_Desktop_tr.png
---

# Exagear Desktop: run x86 apps on Raspberry Pi & ARMv7 (Part II)

![Exagear Logo](/images/2015/06/ExaGear_Desktop_tr.png)

We have learned a little about running this software, its installation and how to run it. Today we are going to execute a virtual machine and some programs.

Remember that [eltechs.com](http://eltechs.com/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release) we are giving away **10 free licenses of [Exagear-desktop v.1.1.](http://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release)** (more information in the [first part of the article](/post.php?id=573)).

- - -
### [ Installing applications ]

What is the best way to install an application in *Debian*?... Exactly!, through *apt-get*:

```bash
sudo apt-get update
```

![sudo apt-get update on ODROID-C1](/images/2015/06/updating_exagear.jpg "sudo apt-get update on ODROID-C1")

In the screenshot above we can clearly see how the system is **updating from 386 repositories**. Not all commands are supported, for example, you can not use *apt-get dist-upgrade*.

As I said, both host and guest, shared user folder, and you can copy files from one machine to another.

In *Raspbian*, the best is modifying the file */etc/apt/sources.list* that comes on the guest system, so you will have a broader catalog and updated software for testing :

```bash
deb http://ftp.fr.debian.org/debian/ wheezy non-free contrib main   
deb http://ftp.fr.debian.org/debian/ wheezy-updates main contrib non-free 
deb http://ftp.fr.debian.org/debian/ wheezy-backports main contrib non-free 
deb http://security.debian.org/ wheezy/updates main contrib non-free 
deb http://www.deb-multimedia.org/ wheezy main non-free 
deb http://www.deb-multimedia.org/ wheezy-backports main 
```
### ### Example of /etc/apt/sources.list for Raspbian or Debian based

On *ODROID* boards, I'm going to install an application using *PPA* that I use in my daily life: The file manager *Double Commander*:

```bash
sudo add-apt-repository ppa:alexx2000/doublecmd -y && sudo apt-get update && sudo apt-get install -y doublecmd-gtk
```

![Double commander it works perfectly on a ODROID-C1](/images/2015/06/doublecmd.jpg "Double commander it works perfectly on a ODROID-C1")

Fantastic!. The program behaves as it should, and now I can manage all my file operations with this Total Commander's clone. It have been easy, haven't it?, How about trying a game?. In this case, I opted for one that you can find in the official repository: *Armagetron Advanced*.

```bash
sudo apt-get install -y armagetronad
```

![Exagear can't run 3D games decently](/images/2015/06/armagetron.jpg "Exagear can't run 3D games decently")

The game has not recognized me the *GPU* in *ODROID*, perhaps due to a conflict and only reach  6 fps. On *Raspberry Pi 2*, I get a black screen and does not start, as you can see in the capture.

I'll try *VideoLan*:

```bash
sudo apt-get install -y vlc
```

After a while installing dependencies, and execute on both boards where I've tested (*ODROID-C1 and Raspberry Pi 2*), the display is shown in black when I play a *.mp4* file. I have tried several video codec, but none of the supported work. Anyway, I had to try.

Since I'm a person with habits, my development tool is *Sublime Text*. Let's try to install & run:

```bash
wget http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.2.tar.bz2
tar xvf Sublime\ Text\ 2.0.2.tar.bz2
./sublime_text
```

![Sublime text 2 on a ODROID-C1](/images/2015/06/sublime.jpg "Sublime text 2 on a ODROID-C1")

It works flawlessly, which is appreciated if you are a developer.

### [ Wine ]

Let's do the real test and that surely will be willing to try: I'm going to test Wine. As you all know, *Wine* (*Wine Is Not an Emulator*) allows the execution of programs to almost all versions of *Microsoft Windows* under Linux.

```bash
On ODROID:
sudo add-apt-repository ppa:ubuntu-wine/ppa -y && sudo apt-get update && sudo apt-get install wine1.7 winetricks -y

On Raspberry Pi (Older version):
sudo apt-get install wine winetricks -y
```

After installing a few dependencies. The first thing that occurred to me to install is a *SNES* emulator called *zsnes*, which has always been and will be my favorite.

![zsnes](/images/2015/06/zsnes.jpg "zsnes")

The result, it works almost perfectly. It is playable, but I can not put the emulator in full screen.

I don’t test much apps, only a few works. I guess my failures with wine are mainly due to each application requires a series of internal settings (native dll, optional parameters, ..), and there are some applications under Wine that does not work, such as *Media Player HC, Internet Explorer 8/9, iTunes 10*... My advice is that if you need to run a particular software, make sure it works on your *PC* with *Linux* before.

I’ll try more apps and expand this section in a future.

### [ Conclusion ]

[Exagear Desktop](http://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release) does what it promises: Run *x86 Linux* applications on *ARMv7* processors. When you see that an application works with another architecture on your board, it looks like magic. It's common to run emulators of other machines and older consoles in this kind of systems. The same is done here. A curious fact is that I thought the processor would be 100% loaded whenever running a virtualized application, and barely reached 60% load. After spending several days trying it, I can draw the following conclusions:

PROS:

* If you have an application that you use on your PC and you don't want/know to compile it, or It is not available, **this is the ideal solution**.

* Faster than other solutions on the market.

* Very easy to install and use.

CONS:

* Almost all software I find, can be compiled natively on your board.

* I hope you have a good *Micro SD* card and that contains at least *16 GB*.

* Don't you expect miracles or run PC games requiring 3D.

* Obviously, in the *Raspberry Pi 1*, does not go as smooth as the *Pi 2*. I notice that, with a ODROID-C1, all the job is done smoother and faster, it perhaps due a more powerful *CPU*. Perhaps with the *ODROID U3*, we can't notice the difference between a native application or another virtualized.

That's all, folks. I'd like to make a video so you can see the load times or other aspects that may interest you more than me, but I could not because of time, but it's pending.

If you want to express your impressions or you want that I try some software in particular, use the comments below.

I hope it helps you.

Link: [eltechs.com > exagear-desktop](http://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release)

Link: [eltechs.com](http://eltechs.com/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release)

Link: [forum.eltechs.com > ExaGear Desktop](http://forum.eltechs.com/viewforum.php?f=4&sid=4cf5f1b3dc6734f54787c7dee2e5c842)
