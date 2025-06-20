---
id: 706
title: Play ScummVM on Raspberry Pi
description: Play ScummVM on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2016-05-25 09:00:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2016/05/monkey_island.jpg
---

# Play ScummVM on Raspberry Pi

![Monkey Island](/images/2016/05/monkey_island.jpg)

In a utopian world, _Raspbian_ comes with a installer like _Steam_ for games and programs that just run any program _out-of-the-box_. Unfortunately it is not the case. Due my daughter is turning six years, I want to show her the exciting world of adventure games, so I present in this article how to install _ScummVM_ in your _Raspberry Pi_ using _SDL2_.

---

### [ Installations and first steps ]

It was presented in March [officially](https://www.raspberrypi.org/blog/scummvm-sails-onto-the-raspberry-pi/) its port for _Raspberry Pi_ using _SDL2_. Remember that _ScummVM_ is a collection of _game-engines_ to play adventure games. The main problem comes with the lack of _SDL2_ support in official _Raspbian_ repos (for a change).

I must to say that in the steps that I follow here, I've used the latest version of _Raspbian_ until date. Let's download and install some required packages:

```bash
sudo apt-get install -y libvorbis0a libjpeg62-turbo libpng12-0 libasound2-dev libudev-dev
wget https://www.libsdl.org/release/SDL2-2.0.4.zip
wget https://www.scummvm.org/frs/scummvm/1.8.0/scummvm-1.8.0-raspberrypi.tar.gz
tar -xzvf scummvm-1.8.0-raspberrypi.tar.gz
unzip SDL2-2.0.4.zip && cd SDL2-2.0.4
```

### [ SDL2 version 2.0.4 ]

Method 1: Through a _Retropie_ script (you don't need to install it):

```bash
git clone https://github.com/RetroPie/RetroPie-Setup.git
cd RetroPie-Setup/
sudo ./retropie_packages.sh sdl2 install_bin
```

Method 2:
Compiling with:

```bash
./configure --host=armv7l-raspberry-linux-gnueabihf --prefix=/usr --disable-pulseaudio --disable-esd --disable-video-mir --disable-video-wayland --disable-video-x11 --disable-video-opengl
make -j4
sudo make install
```

### ### Total Time compilation and installation on Raspberry Pi 2 without overclock: 5 minutes

Now we will access to the folder where you have installed the engine and run it with _./scummvm_

Some keyboard shortcuts to consider:

-   Space: Pause

-   F5: Options

-   F8: Restart

If you want free games you can grab it [here](https://www.scummvm.org/games/).

![game](/images/2016/05/game.jpg)

Link: [gist.github.com > A Bash script to install SDL2 on the Raspberry Pi (Raspbian)](https://gist.github.com/blacktm/8268a468f933eba46f80)
