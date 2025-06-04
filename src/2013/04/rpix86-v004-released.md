---
id: 123
title: rpix86 v0.04 released!
description: rpix86 v0.04 released!
author: Jose Cerrejon
icon: pen-to-square
date: 2013-04-04 10:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# rpix86 v0.04 released!

![rpix86](/images/rpix86_01.jpg)

We have a new version of our favorite *MS-DOS* emulator.

I would like to say one thing to Patrick after the criticism he has had because some routines he have copied from Dosbox ...

- - -
This blog was the first who contact with Patrick and get the news that was developing *rpix86*. We always had excited the idea of a MS-DOS emulator as worthy as it has in other platforms, and each new version we have always proclaimed the good work of this guy.

Maybe we have not generated as many visits as others blogs because this modest blog is quite specific and sack the news that others will not take or do later.  But I'm going to continue posting news and contributing with ideas so we can all remember those old glories days.

The most important information about the changes in this new version:

* Added support for 80x50 text mode. This is used by some of my old MIDI software, and also by Little Big Adventure setup program.

* Added support for USB analog joysticks (and foot pedals). Like in the old DOS days, up to 4 buttons and 4 analog channels are supported.

* Added emulation of Roland MPU-401 MIDI ports in "dumb UART" mode. All the MIDI commands are sent to /dev/midi1 device, so if you have a General MIDI synth connected to your RPi using an USB MIDI dongle, you should now get proper MIDI music out of your DOS games.

* Stripped out the debug symbol information from the executable, as that decreased the size of rpix86 to less than half of what it was.

Thanks a lot from a rpix86 mega-fan!

![smiley](/css/sm/smiling.png)

Download: [PiStore](http://store.raspberrypi.com/projects/rpix86) | [rpix86 blog](http://rpix86.patrickaalto.com/rdown.html)

Link: [forum](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=78&t=32934)

Link: [dsx86 compatibility list](http://dsx86compatibility.pbworks.com/w/page/26738915/Compatibility%20List)

EXTRA!:

<a href="/res/jill-of-the-jungle-the-complete-trilogy.zip">![jill](/images/jill_trilogy.jpg "Download and play Jill Of The Jungle Trilogy!")</a>