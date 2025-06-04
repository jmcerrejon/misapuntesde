---
id: 562
title: Making videogames for Amstrad CPC with Raspberry Pi/ODROID
description: Making videogames for Amstrad CPC with Raspberry Pi/ODROID
author: Jose Cerrejon
icon: pen-to-square
date: 2015-05-13 07:35:00
prev: /
next: false
category:
    - Raspberry PI
    - ODROID
tag:
    - Raspberry PI
    - ODROID
image: /images/2015/05/AmstradPi.jpg
---

# Making videogames for Amstrad CPC with Raspberry Pi/ODROID

![AmstradPi](/images/2015/05/AmstradPi.jpg)

I think you must feel retro, programming on a _Raspberry Pi_, a game for the _Amstrad CPC_ listening _David Hasselhoff_.

For those who do not know, the [Amstrad CPC](https://en.wikipedia.org/wiki/Amstrad_CPC) was an 8 bit computer that marked trend between 1984 and 1990.

Today we will see how to install [CPCtelera](https://github.com/lronaldo/cpctelera), an engine which has just released its first stable version and greatly facilitates the creation of games for this computer with _C or assembly code_.

---

![Logo](/images/2015/05/cpctelera_logo.png)

### [ Introducing CPCtelera ]

CPCtelera is an integrated development framework for creating Amstrad CPC games and content which includes:

-   A low-level library with support for: graphics, audio, keyboard, firmware, strings, video hardware manipulation and memory management.

-   An API for developing games and software in C and Assembler.

-   Tools for content authoring (audio, graphics and level editing)

-   Multiplatform: It works on Windows XP, 7 and 8, and in Ubuntu / Debian, Arch, Manjaro, Elementary OS and Raspbian Linux distributions

His developer is a Spanish guy named _Francisco Gallego_ ([Twitter](https://twitter.com/frangallegobr)), among [other contributors](https://lronaldo.github.io/cpctelera/files/authors-txt.html).

For more features of this _framework_, visit this [link](https://lronaldo.github.io/cpctelera/files/readme-txt.html#Welcome_to_CPCtelera!).

### [Installing CPCtelera]

![Running ./setup.sh after resolving dependencies](/images/2015/05/cpctelera_s0.png "Running ./setup.sh after resolving dependencies")

First we need to download the source code to compile it on your board. To do this, download and access to the stable version, or if you are a brave man, you can use the latest version from _GitHub_ (I'm using the stable version):

```bash
wget https://github.com/lronaldo/cpctelera/archive/v1.0.0.zip && unzip -nq $(basename $_) && rm $(basename $_) && cd cpctelera-1.0.0/
# or use the last commit:
git clone https://github.com/lronaldo/cpctelera && cd $(basename $_)
```

Now we install some dependencies: **sudo apt-get install -y build-essential libboost-dev flex bison**. On _ODROID (Ubuntu)_ are already installed. Now you can invoke the installation _script_ running the file **./setup.sh**. It warns you with the necessary packages and prepare your system to run the _engine_. On both _Raspberry Pi 2 - 950 MHz and ODROID-C1_, it has taken about **20 minutes** to compile.

### [ Starting the Engine ]

![Engine](/images/2015/05/cpct_creatingMaskedSprites.png)

We have everything installed. If we browse through the directories, we can see some interesting folders as _docs/_, which contains the reference manual, or _tools/_ to make sprites, compose soundtracks (_Trackers_), format converters, etc. Some of these tools are for _Windows_.

To create a new project from _Bash_, type:

```bash
cpct_mkproject [folder_project]
```

Now cd to the dir and you can see two directories:

-   **src/** with the source code (the first time we just have a _main.c_). You can create files and directories of your game here.

-   **cfg/** contain settings to compile the game through the _build_config.mk_ file.

You have _examples/folder_ with examples you can study. Just cd to the dir, run **make**, and automatically create _.CDT_ and _.DSK_ files. So cool, isn't it?!

### [ Conclusion ]

Now it's your turn. I recommend you to start studying the examples in _examples/easy/src_, modify and compile it.

Remember that to get an emulator, you can install _Caprice_ thanks to [PiKISS](https://github.com/jmcerrejon/PiKISS) for the Pi and test your creations (Do you know any emulator for ODROID?). At the end of this post you have a link to the reference manual with all the info you need to know about functions and methods available. If you know something about _SDL_, everything will be a little easier.

By the way, the developers accept donations via Paypal [here](https://www.paypal.com/uk/cgi-bin/webscr?cmd=_flow&SESSION=oCTrbk98rrTlG8Le1oxpuu4PNw1mX79vza1hHmhB0rNN3AA-Jqe9yrm6EIu&dispatch=5885d80a13c0db1f8e263663d3faee8d99e4111b56ef0eae45e68b8988f5b2dd).

Link: [CPCtelera Reference Manual](https://lronaldo.github.io/cpctelera/files/readme-txt.html)
