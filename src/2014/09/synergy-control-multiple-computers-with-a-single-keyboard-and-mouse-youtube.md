---
id: 456
title: Synergy. Control multiple computers with a single keyboard and mouse (Youtube)
description: Synergy. Control multiple computers with a single keyboard and mouse (Youtube)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-09-17 08:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Synergy: Control multiple computers with a single keyboard and mouse (Youtube)

![synergy](/images/2014/09/Synergy_Logo.png)

A year ago I talked about a software that allowed you to share keyboard and mouse with multiple computers. I tried using it but it did not work. Today I have made a video tutorial to see how it works and how comfortable it is...

- - -
<iframe width="560" height="315" src="//www.youtube.com/embed/xYPwMmjf4mA" frameborder="0" allowfullscreen></iframe>

I have been tested with *Ubuntu*, but it works on *Mac or Windows.*

As you can see, the steps are simple:

* Install the program on server (computer with keyboard and mouse) and client.

* Configure the server with the GUI.

* Run on the Pi: **synergyc --daemon ip_server**

I've noticed it only works with the desktop environment, so you have to type in the console: **startx**

For the lazy, I created for [PiKISS](/post.php?id=409)  a script that install, enable you to choose the server and run it on startup.

**NOTE:** The author now charge for the program but is still free. The nighty builds are available for all platforms. I'll leave the link below, although  I installed it on *Ubuntu and Raspberry Pi* from the repository:

Download: [synergy-project.org](http://synergy-project.org/nightly/)

Link: [misapuntesde.com > Synergy: One keyboard and mouse to rule them all](/post.php?id=322)

Link: [GitHub > PiKISS > synergy.sh](https://raw.githubusercontent.com/jmcerrejon/PiKISS/master/scripts/others/synergy.sh)