---
id: 921
title: Box86 on Raspberry Pi & ODROID
description: Box86 on Raspberry Pi & ODROID
author: Jose Cerrejon
icon: pen-to-square
date: 2020-02-14 17:23:29
prev: /
next: false
category:
  - Raspberry PI
  - ODROID
tag:
  - Raspberry PI
  - ODROID
image: /images/2020/02/bard_tales_rpi_box86.png
---

# Box86 on Raspberry Pi & ODROID

![bard_tales_rpi_box86](/images/2020/02/bard_tales_rpi_box86.png)

I'm surprised by the channel of our well-known *youtuber* [PI LAB](https://www.youtube.com/channel/UCgfQjdc5RceRlTGfuthBs7g). He has been showing up to us videos about *Box86* for several months, an environment based on *x86* to run mostly video games with the minimum possible emulation. In the words of its creator, *qemu for example needs a full x86 chroot to run, and everything is emulated (so you get a high generic compatibility, but you have to emulate everything, and accessing the hardware can be complicated). With Box86, the minimum is emulated. Compatibility may be lower, but many things run natively, leading to some speed increase. And you don't need a full chroot, just a handful of x86 libraries to run things.*

- - -
This *Usermode X86 Emulator* was developed mainly for the *Pandora* console, but as it is based on *ARM*, its support has been extended to other boards like *Orange Pi, ODROID or Raspberry Pi*. The secret to make it go so fast is that most of the games use the same libraries that in this case are not emulated, like *OpenGL* or *SDL*. Let's say it's like the *Exaggerate* software I've talked about several times but much more advanced, and *Open Source*. I refer you to the post where you will get more details below.

Forum: [pyra-handheld.com](https://pyra-handheld.com/boards/threads/box86-linux-userspace-x86-emulator.83577/)

GitHub: [github.com > ptitSeb > box86](https://github.com/ptitSeb/box86)