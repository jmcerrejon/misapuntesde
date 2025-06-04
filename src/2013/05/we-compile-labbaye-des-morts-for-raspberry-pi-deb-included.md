---
id: 162
title: We compile L'Abbaye des Morts for Raspberry Pi (.deb included)
description: We compile L'Abbaye des Morts for Raspberry Pi (.deb included)
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-18 20:00:00
prev: /
next: false
category:
    - Raspberry PI
    - Developer
tag:
    - Raspberry PI
    - Developer
image: /images/2013/05/labbaye_cover.jpg
---

# We compile L'Abbaye des Morts for Raspberry Pi (.deb included)

![L'Abbaye des Morts](/images/2013/05/labbaye_cover.jpg)

**POST UPDATED:** 18/06/2020

This week is challenging.

I've tried to compile a program for the first time in the Raspi and see the steps to do it. For this mission I wanted to port a game and make tribute to its creator [Locomalito](https://www.locomalito.com), which has become a little more famous than he's already because the great game [Maldita Castilla](https://www.locomalito.com/maldita_castilla.php) for _Windows_.

I include the _.deb_ package if you don't wanna compiled by yourself at the end of the post.

Here we go!

---

### Start from the beginning

[Locomalito](https://www.locomalito.com/about.php) is a user who develop video games just for fun or to get some goal: program, draw, and with his friend [Gryzor87](https://www.gr87.com), which composes the soundtracks for their games, are able to create a nostalgic magic that surrounds us and traps in time, all with an _retro-indie_ style.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ryPeKEhhtlM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_In the 13th century, the Cathars, who preach about good Christian beliefs, were being expelled by the Catholic Church out of the Languedoc region in France. One of them, called Jean Raymond, found an old church in which to hide, not knowing that beneath its ruins lay buried an ancient evil._

### Libraries

The first thing we found when compiling a program is knowing what libraries have been used. Generally we have a **_README_** file who indicate the libraries who has being used. Let's go to download the source code.

We visit their [website](https://www.locomalito.com/abbaye_des_morts.php) where we can find information about the game and several extras like posters, manuals, soundtrack among others. Click on it. In the [download's](https://code.google.com/p/abbaye-for-linux/downloads/list) area we see the source code file called **_abbaye-for-linux-src-1.11.tar.gz_** at the time of the article.

Well, we have downloaded in our Raspi. Now uncompress it:

```bash
tar -xzvf abbaye-for-linux-src-1.11.tar.gz
```

We go into the directory and take a look to the _readme.txt_ or _README_ in this case.

The program requires the _GCC_ compiler and _SDL_ libraries.

In this case, we found the necessary packages. Just install with:

```bash
sudo apt-get install gcc libsdl1.2-dev libsdl-mixer1.2-dev libsdl-image1.2-dev libsdl-ttf2.0-dev libsdl-gfx1.2-dev
```

Now from the uncompress directory, execute the following:

```bash
make abbaye
```

The program will read the configuration file and will start the **_makefile's_** compilation.

It was made it easy. What if we unknown what dependencies need to install? The best friend you have to search dependencies is **_apt-file_**, which indicate to us, passing as parameter the name of a file, their package. Just install it with:

```bash
sudo apt-get install apt-file
sudo apt-file update
```

their use is simple: **_sudo apt-file search package_name_**

### Installing the binaries

Ecstasy comes when you see the program compiled without errors.

Install it by running **_sudo make install_**. Now you can play it from the console by typing **_abbaye_** or from _X_ searching in the _game's menu section_.

![Main menu](/images/2013/05/labbaye_main.jpg "Main menu")

In case you want to uninstall, **_sudo make uninstall_**

### Patching the code

The game may consume many _CPU_ cycles, is playable in the _X_, but there is a small flaw when running on the console due to screen flicker which makes it visually unplayable. This defect will serve to teach you what means modify the source code.

If we go to the place where we extract the source code, we note that is structured into several files grouped in directories. We are interested in the _/src/main.c_ file.

As we know that the bug corresponds to the graphic section, we seek something about _SDL_ initialization. A few lines from starting the program, see the following code:

```bash
#ifdef _RENDER_320_240
  pantalla = SDL_SetVideoMode(320,240,8,SDL_HWSURFACE|SDL_DOUBLEBUF);
#else
  pantalla = SDL_SetVideoMode(640,480,8,SDL_HWSURFACE|SDL_DOUBLEBUF);
#endif
```

If we go to the SDL [documentation](https://www.libsdl.org/release/SDL-1.2.15/docs/html/sdlsetvideomode.html), we see that there are several graphics modes and that one of them will fix our mistake.

Searching in _Google_ find that the failure is due to **_double buffering_**, so we changed those lines of code to work only with the _CPU_:

```bash
#ifdef _RENDER_320_240
  pantalla = SDL_SetVideoMode(320,240,8,SDL_SWSURFACE);
#else
  pantalla = SDL_SetVideoMode(640,480,8,SDL_SWSURFACE);
```

Notice that there are several possibilities to fix the flicker, but the case was to show you how to modify the source code.

Done. So we just have to repeat the above steps to compile and install binaries files with **_make_**.

Nothing more. The truth is that it was not difficult at all. We've hit a big game without dependency problems, the challenge to modify the code and I leave for another post the creation of _.deb_ packages. Enjoy it!

![Screenshot from retro version](/images/2013/05/labbaye_screen1.jpg "Screenshot from retro version")

![Game screen with full colors by pressing C button](/images/2013/05/labbaye_screen_full.jpg "Game screen with full colors by pressing C button")

What?, missing something?. Aaaw, yes. Take the ._deb_ package. Install it with **_dpkg-i abbaye-des-morts_2-0_armhf.deb_**

**_NOTE:_** [David Lara](https://twitter.com/nevat), one of the admins where is located the binaries for the various platforms, has upload the _.deb_ to _code.google.com_.

Download: [(Dropbox) abbaye-des-morts_2-0_armhf.deb](https://www.dropbox.com/s/w8iz2q3us5eablk/abbaye-des-morts_2-0_armhf.deb?dl=0)

**_PS:_** If you want to contribute to the cause, [here](https://www.locomalito.com/donate.php) is the link to the donation page by their creators. You can get exclusive content and materials!

Here you have a gameplay from a user who ended this game in 11 minutes:

<iframe width="560" height="315" src="//www.youtube.com/embed/_lTqSXxJsYQ" frameborder="0" allowfullscreen></iframe>
